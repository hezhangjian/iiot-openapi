# CatalogOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_id** | **str** |  | 
**display_order** | **int** |  | 

## Example

```python
from iiot_openapi.models.catalog_order import CatalogOrder

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogOrder from a JSON string
catalog_order_instance = CatalogOrder.from_json(json)
# print the JSON string representation of the object
print(CatalogOrder.to_json())

# convert the object into a dict
catalog_order_dict = catalog_order_instance.to_dict()
# create an instance of CatalogOrder from a dict
catalog_order_from_dict = CatalogOrder.from_dict(catalog_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


