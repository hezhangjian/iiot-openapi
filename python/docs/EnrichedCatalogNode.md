# EnrichedCatalogNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level_id** | **str** |  | [optional] 
**node_id** | **str** |  | [optional] 
**node_name** | **str** |  | [optional] 
**display_order** | **int** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.enriched_catalog_node import EnrichedCatalogNode

# TODO update the JSON string below
json = "{}"
# create an instance of EnrichedCatalogNode from a JSON string
enriched_catalog_node_instance = EnrichedCatalogNode.from_json(json)
# print the JSON string representation of the object
print(EnrichedCatalogNode.to_json())

# convert the object into a dict
enriched_catalog_node_dict = enriched_catalog_node_instance.to_dict()
# create an instance of EnrichedCatalogNode from a dict
enriched_catalog_node_from_dict = EnrichedCatalogNode.from_dict(enriched_catalog_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


