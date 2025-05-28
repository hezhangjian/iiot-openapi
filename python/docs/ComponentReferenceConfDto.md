# ComponentReferenceConfDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Dict[str, ReferenceConfDto]**](ReferenceConfDto.md) |  | [optional] 
**components** | [**Dict[str, ComponentReferenceConfDto]**](ComponentReferenceConfDto.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.component_reference_conf_dto import ComponentReferenceConfDto

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentReferenceConfDto from a JSON string
component_reference_conf_dto_instance = ComponentReferenceConfDto.from_json(json)
# print the JSON string representation of the object
print(ComponentReferenceConfDto.to_json())

# convert the object into a dict
component_reference_conf_dto_dict = component_reference_conf_dto_instance.to_dict()
# create an instance of ComponentReferenceConfDto from a dict
component_reference_conf_dto_from_dict = ComponentReferenceConfDto.from_dict(component_reference_conf_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


