# CleanAnalysisSettingsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clean_settings** | [**CleanSettings**](CleanSettings.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.clean_analysis_settings_dto import CleanAnalysisSettingsDto

# TODO update the JSON string below
json = "{}"
# create an instance of CleanAnalysisSettingsDto from a JSON string
clean_analysis_settings_dto_instance = CleanAnalysisSettingsDto.from_json(json)
# print the JSON string representation of the object
print(CleanAnalysisSettingsDto.to_json())

# convert the object into a dict
clean_analysis_settings_dto_dict = clean_analysis_settings_dto_instance.to_dict()
# create an instance of CleanAnalysisSettingsDto from a dict
clean_analysis_settings_dto_from_dict = CleanAnalysisSettingsDto.from_dict(clean_analysis_settings_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


