# AuthInfoDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.auth_info_dto import AuthInfoDTO

# TODO update the JSON string below
json = "{}"
# create an instance of AuthInfoDTO from a JSON string
auth_info_dto_instance = AuthInfoDTO.from_json(json)
# print the JSON string representation of the object
print(AuthInfoDTO.to_json())

# convert the object into a dict
auth_info_dto_dict = auth_info_dto_instance.to_dict()
# create an instance of AuthInfoDTO from a dict
auth_info_dto_from_dict = AuthInfoDTO.from_dict(auth_info_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


