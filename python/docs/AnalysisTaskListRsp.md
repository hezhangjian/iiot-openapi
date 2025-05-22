# AnalysisTaskListRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**List[BriefAnalysisTask]**](BriefAnalysisTask.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.analysis_task_list_rsp import AnalysisTaskListRsp

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisTaskListRsp from a JSON string
analysis_task_list_rsp_instance = AnalysisTaskListRsp.from_json(json)
# print the JSON string representation of the object
print(AnalysisTaskListRsp.to_json())

# convert the object into a dict
analysis_task_list_rsp_dict = analysis_task_list_rsp_instance.to_dict()
# create an instance of AnalysisTaskListRsp from a dict
analysis_task_list_rsp_from_dict = AnalysisTaskListRsp.from_dict(analysis_task_list_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


