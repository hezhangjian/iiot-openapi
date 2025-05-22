# ListAnalysisTaskPageRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**List[BriefAnalysisTask]**](BriefAnalysisTask.md) |  | [optional] 
**count** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.list_analysis_task_page_rsp import ListAnalysisTaskPageRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ListAnalysisTaskPageRsp from a JSON string
list_analysis_task_page_rsp_instance = ListAnalysisTaskPageRsp.from_json(json)
# print the JSON string representation of the object
print(ListAnalysisTaskPageRsp.to_json())

# convert the object into a dict
list_analysis_task_page_rsp_dict = list_analysis_task_page_rsp_instance.to_dict()
# create an instance of ListAnalysisTaskPageRsp from a dict
list_analysis_task_page_rsp_from_dict = ListAnalysisTaskPageRsp.from_dict(list_analysis_task_page_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


