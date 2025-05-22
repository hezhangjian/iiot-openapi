# CreateCatalogReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_id** | **str** |  | 
**catalog_name** | **str** |  | 
**type** | **str** |  | 
**display_order** | **int** |  | 
**parent_id** | **str** |  | 

## Example

```python
from iiot_openapi.models.create_catalog_req import CreateCatalogReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCatalogReq from a JSON string
create_catalog_req_instance = CreateCatalogReq.from_json(json)
# print the JSON string representation of the object
print(CreateCatalogReq.to_json())

# convert the object into a dict
create_catalog_req_dict = create_catalog_req_instance.to_dict()
# create an instance of CreateCatalogReq from a dict
create_catalog_req_from_dict = CreateCatalogReq.from_dict(create_catalog_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


