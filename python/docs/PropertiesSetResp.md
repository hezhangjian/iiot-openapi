# PropertiesSetResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result_code** | **int** |  | [optional] 
**result_desc** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.properties_set_resp import PropertiesSetResp

# TODO update the JSON string below
json = "{}"
# create an instance of PropertiesSetResp from a JSON string
properties_set_resp_instance = PropertiesSetResp.from_json(json)
# print the JSON string representation of the object
print(PropertiesSetResp.to_json())

# convert the object into a dict
properties_set_resp_dict = properties_set_resp_instance.to_dict()
# create an instance of PropertiesSetResp from a dict
properties_set_resp_from_dict = PropertiesSetResp.from_dict(properties_set_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


