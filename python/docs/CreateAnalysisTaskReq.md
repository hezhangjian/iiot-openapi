# CreateAnalysisTaskReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clean_settings** | [**CleanSettings**](CleanSettings.md) |  | [optional] 
**event_class** | **str** |  | [optional] 
**event_gen_settings** | [**EventGenSetting**](EventGenSetting.md) |  | [optional] 
**complex_settings** | [**ComplexSetting**](ComplexSetting.md) |  | [optional] 
**expression_settings** | [**ExpressionSettings**](ExpressionSettings.md) |  | [optional] 
**task_name** | **str** |  | 
**enabled** | **bool** |  | 
**calc_type** | **str** |  | 
**schedule_type** | **str** |  | 
**period** | **str** |  | [optional] 
**tag_matchers** | [**List[TagMatcher]**](TagMatcher.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.create_analysis_task_req import CreateAnalysisTaskReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAnalysisTaskReq from a JSON string
create_analysis_task_req_instance = CreateAnalysisTaskReq.from_json(json)
# print the JSON string representation of the object
print(CreateAnalysisTaskReq.to_json())

# convert the object into a dict
create_analysis_task_req_dict = create_analysis_task_req_instance.to_dict()
# create an instance of CreateAnalysisTaskReq from a dict
create_analysis_task_req_from_dict = CreateAnalysisTaskReq.from_dict(create_analysis_task_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


