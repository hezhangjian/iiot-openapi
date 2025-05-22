# QueryViewNodesRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level_id** | **str** |  | [optional] 
**node_id** | **str** |  | [optional] 
**node_name** | **str** |  | [optional] 
**display_order** | **int** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 
**catalog_nodes** | [**List[EnrichedCatalogNode]**](EnrichedCatalogNode.md) |  | [optional] 
**thing_nodes** | [**List[EnrichedThingNode]**](EnrichedThingNode.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.query_view_nodes_rsp import QueryViewNodesRsp

# TODO update the JSON string below
json = "{}"
# create an instance of QueryViewNodesRsp from a JSON string
query_view_nodes_rsp_instance = QueryViewNodesRsp.from_json(json)
# print the JSON string representation of the object
print(QueryViewNodesRsp.to_json())

# convert the object into a dict
query_view_nodes_rsp_dict = query_view_nodes_rsp_instance.to_dict()
# create an instance of QueryViewNodesRsp from a dict
query_view_nodes_rsp_from_dict = QueryViewNodesRsp.from_dict(query_view_nodes_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


