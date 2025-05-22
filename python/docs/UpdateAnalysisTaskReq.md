# UpdateAnalysisTaskReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clean_settings** | [**CleanSettings**](CleanSettings.md) |  | [optional] 
**event_class** | **str** |  | [optional] 
**event_gen_settings** | [**EventGenSetting**](EventGenSetting.md) |  | [optional] 
**complex_settings** | [**ComplexSetting**](ComplexSetting.md) |  | [optional] 
**expression_settings** | [**ExpressionSettings**](ExpressionSettings.md) |  | [optional] 
**task_name** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**period** | **str** |  | [optional] 
**tag_matchers** | [**List[TagMatcher]**](TagMatcher.md) |  | [optional] 
**condition** | **str** |  | [optional] 
**expressions** | [**List[Expression]**](Expression.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.update_analysis_task_req import UpdateAnalysisTaskReq

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAnalysisTaskReq from a JSON string
update_analysis_task_req_instance = UpdateAnalysisTaskReq.from_json(json)
# print the JSON string representation of the object
print(UpdateAnalysisTaskReq.to_json())

# convert the object into a dict
update_analysis_task_req_dict = update_analysis_task_req_instance.to_dict()
# create an instance of UpdateAnalysisTaskReq from a dict
update_analysis_task_req_from_dict = UpdateAnalysisTaskReq.from_dict(update_analysis_task_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


