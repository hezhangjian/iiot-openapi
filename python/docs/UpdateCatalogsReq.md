# UpdateCatalogsReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogs** | [**List[CatalogOrder]**](CatalogOrder.md) |  | 

## Example

```python
from iiot_openapi.models.update_catalogs_req import UpdateCatalogsReq

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCatalogsReq from a JSON string
update_catalogs_req_instance = UpdateCatalogsReq.from_json(json)
# print the JSON string representation of the object
print(UpdateCatalogsReq.to_json())

# convert the object into a dict
update_catalogs_req_dict = update_catalogs_req_instance.to_dict()
# create an instance of UpdateCatalogsReq from a dict
update_catalogs_req_from_dict = UpdateCatalogsReq.from_dict(update_catalogs_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


