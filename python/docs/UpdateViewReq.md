# UpdateViewReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**levels** | [**List[ViewLevel]**](ViewLevel.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.update_view_req import UpdateViewReq

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateViewReq from a JSON string
update_view_req_instance = UpdateViewReq.from_json(json)
# print the JSON string representation of the object
print(UpdateViewReq.to_json())

# convert the object into a dict
update_view_req_dict = update_view_req_instance.to_dict()
# create an instance of UpdateViewReq from a dict
update_view_req_from_dict = UpdateViewReq.from_dict(update_view_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


