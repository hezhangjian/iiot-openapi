# CatalogNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level_id** | **str** |  | 
**node_id** | **str** |  | 
**node_name** | **str** |  | 
**display_order** | **int** |  | 

## Example

```python
from iiot_openapi.models.catalog_node import CatalogNode

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogNode from a JSON string
catalog_node_instance = CatalogNode.from_json(json)
# print the JSON string representation of the object
print(CatalogNode.to_json())

# convert the object into a dict
catalog_node_dict = catalog_node_instance.to_dict()
# create an instance of CatalogNode from a dict
catalog_node_from_dict = CatalogNode.from_dict(catalog_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


