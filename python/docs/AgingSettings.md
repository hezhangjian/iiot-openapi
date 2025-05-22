# AgingSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_period** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.aging_settings import AgingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AgingSettings from a JSON string
aging_settings_instance = AgingSettings.from_json(json)
# print the JSON string representation of the object
print(AgingSettings.to_json())

# convert the object into a dict
aging_settings_dict = aging_settings_instance.to_dict()
# create an instance of AgingSettings from a dict
aging_settings_from_dict = AgingSettings.from_dict(aging_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


