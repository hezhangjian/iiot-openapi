# ListViewsResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**views** | [**List[BriefView]**](BriefView.md) |  | [optional] 
**count** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.list_views_resp import ListViewsResp

# TODO update the JSON string below
json = "{}"
# create an instance of ListViewsResp from a JSON string
list_views_resp_instance = ListViewsResp.from_json(json)
# print the JSON string representation of the object
print(ListViewsResp.to_json())

# convert the object into a dict
list_views_resp_dict = list_views_resp_instance.to_dict()
# create an instance of ListViewsResp from a dict
list_views_resp_from_dict = ListViewsResp.from_dict(list_views_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


