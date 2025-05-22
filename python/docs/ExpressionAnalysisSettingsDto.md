# ExpressionAnalysisSettingsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression_settings** | [**ExpressionSettings**](ExpressionSettings.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.expression_analysis_settings_dto import ExpressionAnalysisSettingsDto

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressionAnalysisSettingsDto from a JSON string
expression_analysis_settings_dto_instance = ExpressionAnalysisSettingsDto.from_json(json)
# print the JSON string representation of the object
print(ExpressionAnalysisSettingsDto.to_json())

# convert the object into a dict
expression_analysis_settings_dto_dict = expression_analysis_settings_dto_instance.to_dict()
# create an instance of ExpressionAnalysisSettingsDto from a dict
expression_analysis_settings_dto_from_dict = ExpressionAnalysisSettingsDto.from_dict(expression_analysis_settings_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


