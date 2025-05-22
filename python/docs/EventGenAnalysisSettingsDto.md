# EventGenAnalysisSettingsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_class** | **str** |  | [optional] 
**event_gen_settings** | [**EventGenSetting**](EventGenSetting.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.event_gen_analysis_settings_dto import EventGenAnalysisSettingsDto

# TODO update the JSON string below
json = "{}"
# create an instance of EventGenAnalysisSettingsDto from a JSON string
event_gen_analysis_settings_dto_instance = EventGenAnalysisSettingsDto.from_json(json)
# print the JSON string representation of the object
print(EventGenAnalysisSettingsDto.to_json())

# convert the object into a dict
event_gen_analysis_settings_dto_dict = event_gen_analysis_settings_dto_instance.to_dict()
# create an instance of EventGenAnalysisSettingsDto from a dict
event_gen_analysis_settings_dto_from_dict = EventGenAnalysisSettingsDto.from_dict(event_gen_analysis_settings_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


