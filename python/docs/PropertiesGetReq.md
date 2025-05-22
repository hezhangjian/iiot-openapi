# PropertiesGetReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **List[str]** |  | [optional] 
**components** | [**Dict[str, PropertiesGetReq]**](PropertiesGetReq.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.properties_get_req import PropertiesGetReq

# TODO update the JSON string below
json = "{}"
# create an instance of PropertiesGetReq from a JSON string
properties_get_req_instance = PropertiesGetReq.from_json(json)
# print the JSON string representation of the object
print(PropertiesGetReq.to_json())

# convert the object into a dict
properties_get_req_dict = properties_get_req_instance.to_dict()
# create an instance of PropertiesGetReq from a dict
properties_get_req_from_dict = PropertiesGetReq.from_dict(properties_get_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


