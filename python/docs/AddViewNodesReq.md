# AddViewNodesReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_id** | **str** |  | [optional] 
**catalog_node** | [**CatalogNode**](CatalogNode.md) |  | [optional] 
**thing_nodes** | [**List[ThingNode]**](ThingNode.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.add_view_nodes_req import AddViewNodesReq

# TODO update the JSON string below
json = "{}"
# create an instance of AddViewNodesReq from a JSON string
add_view_nodes_req_instance = AddViewNodesReq.from_json(json)
# print the JSON string representation of the object
print(AddViewNodesReq.to_json())

# convert the object into a dict
add_view_nodes_req_dict = add_view_nodes_req_instance.to_dict()
# create an instance of AddViewNodesReq from a dict
add_view_nodes_req_from_dict = AddViewNodesReq.from_dict(add_view_nodes_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


