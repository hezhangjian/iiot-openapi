# BriefAnalysisTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | **str** |  | [optional] 
**task_name** | **str** |  | [optional] 
**calc_type** | **str** |  | [optional] 
**schedule_type** | **str** |  | [optional] 
**period** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**event_class_id** | **str** |  | [optional] 
**event_class_name** | **str** |  | [optional] 
**model_id** | **str** |  | [optional] 
**model_name** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.brief_analysis_task import BriefAnalysisTask

# TODO update the JSON string below
json = "{}"
# create an instance of BriefAnalysisTask from a JSON string
brief_analysis_task_instance = BriefAnalysisTask.from_json(json)
# print the JSON string representation of the object
print(BriefAnalysisTask.to_json())

# convert the object into a dict
brief_analysis_task_dict = brief_analysis_task_instance.to_dict()
# create an instance of BriefAnalysisTask from a dict
brief_analysis_task_from_dict = BriefAnalysisTask.from_dict(brief_analysis_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


