# TokenRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | [optional] 
**expires_in** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.token_rsp import TokenRsp

# TODO update the JSON string below
json = "{}"
# create an instance of TokenRsp from a JSON string
token_rsp_instance = TokenRsp.from_json(json)
# print the JSON string representation of the object
print(TokenRsp.to_json())

# convert the object into a dict
token_rsp_dict = token_rsp_instance.to_dict()
# create an instance of TokenRsp from a dict
token_rsp_from_dict = TokenRsp.from_dict(token_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


