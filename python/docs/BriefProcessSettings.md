# BriefProcessSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | 
**schedule_type** | **str** |  | 
**period** | **str** |  | 

## Example

```python
from iiot_openapi.models.brief_process_settings import BriefProcessSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BriefProcessSettings from a JSON string
brief_process_settings_instance = BriefProcessSettings.from_json(json)
# print the JSON string representation of the object
print(BriefProcessSettings.to_json())

# convert the object into a dict
brief_process_settings_dict = brief_process_settings_instance.to_dict()
# create an instance of BriefProcessSettings from a dict
brief_process_settings_from_dict = BriefProcessSettings.from_dict(brief_process_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


