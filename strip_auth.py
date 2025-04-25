import yaml

INPUT_FILE = 'iiot-openapi.yaml'
OUTPUT_FILE = 'iiot-openapi-without-auth.yaml'

SCHEMAS_TO_REMOVE = {"CreateTokenReqDTO", "Project", "Token"}


def remove_auth_token_refs_from_path_item(item):
    if not isinstance(item, dict):
        return item
    for method in list(item.keys()):
        if method.lower() not in ["get", "post", "put", "delete", "patch"]:
            continue
        operation = item[method]
        if "parameters" in operation:
            operation["parameters"] = [
                p for p in operation["parameters"]
                if not (isinstance(p, dict) and p.get("$ref", "").endswith("/AuthToken"))
            ]
    return item


with open(INPUT_FILE, 'r', encoding='utf-8') as f:
    spec = yaml.safe_load(f)

# Remove the auth token endpoint
spec["paths"].pop("/v1/iotstage/auth/tokens", None)

# Remove token references from all operations
for path, item in spec["paths"].items():
    spec["paths"][path] = remove_auth_token_refs_from_path_item(item)

# Remove the AuthToken parameter from components
components = spec.get("components", {})
parameters = components.get("parameters", {})
if "AuthToken" in parameters:
    del parameters["AuthToken"]

# Remove token-related schemas from components.schemas
schemas = components.get("schemas") or {}
for name in SCHEMAS_TO_REMOVE:
    schemas.pop(name, None)

# Save the updated spec
with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    yaml.safe_dump(spec, f, sort_keys=False, allow_unicode=True)
