# CleanSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** |  | [optional] 
**expressions** | [**List[Expression]**](Expression.md) |  | 

## Example

```python
from iiot_openapi.models.clean_settings import CleanSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CleanSettings from a JSON string
clean_settings_instance = CleanSettings.from_json(json)
# print the JSON string representation of the object
print(CleanSettings.to_json())

# convert the object into a dict
clean_settings_dict = clean_settings_instance.to_dict()
# create an instance of CleanSettings from a dict
clean_settings_from_dict = CleanSettings.from_dict(clean_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


