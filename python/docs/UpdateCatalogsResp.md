# UpdateCatalogsResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogs** | [**List[CatalogOrder]**](CatalogOrder.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.update_catalogs_resp import UpdateCatalogsResp

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCatalogsResp from a JSON string
update_catalogs_resp_instance = UpdateCatalogsResp.from_json(json)
# print the JSON string representation of the object
print(UpdateCatalogsResp.to_json())

# convert the object into a dict
update_catalogs_resp_dict = update_catalogs_resp_instance.to_dict()
# create an instance of UpdateCatalogsResp from a dict
update_catalogs_resp_from_dict = UpdateCatalogsResp.from_dict(update_catalogs_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


