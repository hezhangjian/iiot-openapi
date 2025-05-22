# ModifyCatalogNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_id** | **str** |  | 
**node_name** | **str** |  | [optional] 
**display_order** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.modify_catalog_node import ModifyCatalogNode

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyCatalogNode from a JSON string
modify_catalog_node_instance = ModifyCatalogNode.from_json(json)
# print the JSON string representation of the object
print(ModifyCatalogNode.to_json())

# convert the object into a dict
modify_catalog_node_dict = modify_catalog_node_instance.to_dict()
# create an instance of ModifyCatalogNode from a dict
modify_catalog_node_from_dict = ModifyCatalogNode.from_dict(modify_catalog_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


