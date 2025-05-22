# DeleteViewNodesReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_id** | **str** |  | [optional] 
**thing_id** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.delete_view_nodes_req import DeleteViewNodesReq

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteViewNodesReq from a JSON string
delete_view_nodes_req_instance = DeleteViewNodesReq.from_json(json)
# print the JSON string representation of the object
print(DeleteViewNodesReq.to_json())

# convert the object into a dict
delete_view_nodes_req_dict = delete_view_nodes_req_instance.to_dict()
# create an instance of DeleteViewNodesReq from a dict
delete_view_nodes_req_from_dict = DeleteViewNodesReq.from_dict(delete_view_nodes_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


