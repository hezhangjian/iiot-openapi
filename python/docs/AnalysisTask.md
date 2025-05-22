# AnalysisTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clean_settings** | [**CleanSettings**](CleanSettings.md) |  | [optional] 
**event_class** | **str** |  | [optional] 
**event_gen_settings** | [**EventGenSetting**](EventGenSetting.md) |  | [optional] 
**complex_settings** | [**ComplexSetting**](ComplexSetting.md) |  | [optional] 
**expression_settings** | [**ExpressionSettings**](ExpressionSettings.md) |  | [optional] 
**task_id** | **str** |  | [optional] 
**task_name** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**calc_type** | **str** |  | [optional] 
**schedule_type** | **str** |  | [optional] 
**period** | **str** |  | [optional] 
**tag_matchers** | [**List[TagMatcher]**](TagMatcher.md) |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.analysis_task import AnalysisTask

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisTask from a JSON string
analysis_task_instance = AnalysisTask.from_json(json)
# print the JSON string representation of the object
print(AnalysisTask.to_json())

# convert the object into a dict
analysis_task_dict = analysis_task_instance.to_dict()
# create an instance of AnalysisTask from a dict
analysis_task_from_dict = AnalysisTask.from_dict(analysis_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


