# ComplexAnalysisSettingsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complex_settings** | [**ComplexSetting**](ComplexSetting.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.complex_analysis_settings_dto import ComplexAnalysisSettingsDto

# TODO update the JSON string below
json = "{}"
# create an instance of ComplexAnalysisSettingsDto from a JSON string
complex_analysis_settings_dto_instance = ComplexAnalysisSettingsDto.from_json(json)
# print the JSON string representation of the object
print(ComplexAnalysisSettingsDto.to_json())

# convert the object into a dict
complex_analysis_settings_dto_dict = complex_analysis_settings_dto_instance.to_dict()
# create an instance of ComplexAnalysisSettingsDto from a dict
complex_analysis_settings_dto_from_dict = ComplexAnalysisSettingsDto.from_dict(complex_analysis_settings_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


