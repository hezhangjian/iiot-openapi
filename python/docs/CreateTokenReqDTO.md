# CreateTokenReqDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | 
**secret_id** | **str** |  | 
**project** | [**Project**](Project.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.create_token_req_dto import CreateTokenReqDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTokenReqDTO from a JSON string
create_token_req_dto_instance = CreateTokenReqDTO.from_json(json)
# print the JSON string representation of the object
print(CreateTokenReqDTO.to_json())

# convert the object into a dict
create_token_req_dto_dict = create_token_req_dto_instance.to_dict()
# create an instance of CreateTokenReqDTO from a dict
create_token_req_dto_from_dict = CreateTokenReqDTO.from_dict(create_token_req_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


