# ModifyViewNodesReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_nodes** | [**List[ModifyCatalogNode]**](ModifyCatalogNode.md) |  | 

## Example

```python
from iiot_openapi.models.modify_view_nodes_req import ModifyViewNodesReq

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyViewNodesReq from a JSON string
modify_view_nodes_req_instance = ModifyViewNodesReq.from_json(json)
# print the JSON string representation of the object
print(ModifyViewNodesReq.to_json())

# convert the object into a dict
modify_view_nodes_req_dict = modify_view_nodes_req_instance.to_dict()
# create an instance of ModifyViewNodesReq from a dict
modify_view_nodes_req_from_dict = ModifyViewNodesReq.from_dict(modify_view_nodes_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


