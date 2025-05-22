# PropertiesGetResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Dict[str, PropertyValueObject]**](PropertyValueObject.md) |  | [optional] 
**components** | [**Dict[str, ComponentProperty]**](ComponentProperty.md) |  | [optional] 
**result_code** | **int** |  | [optional] 
**result_desc** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.properties_get_resp import PropertiesGetResp

# TODO update the JSON string below
json = "{}"
# create an instance of PropertiesGetResp from a JSON string
properties_get_resp_instance = PropertiesGetResp.from_json(json)
# print the JSON string representation of the object
print(PropertiesGetResp.to_json())

# convert the object into a dict
properties_get_resp_dict = properties_get_resp_instance.to_dict()
# create an instance of PropertiesGetResp from a dict
properties_get_resp_from_dict = PropertiesGetResp.from_dict(properties_get_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


