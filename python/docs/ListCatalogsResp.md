# ListCatalogsResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogs** | [**List[Catalog]**](Catalog.md) |  | [optional] 
**count** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.list_catalogs_resp import ListCatalogsResp

# TODO update the JSON string below
json = "{}"
# create an instance of ListCatalogsResp from a JSON string
list_catalogs_resp_instance = ListCatalogsResp.from_json(json)
# print the JSON string representation of the object
print(ListCatalogsResp.to_json())

# convert the object into a dict
list_catalogs_resp_dict = list_catalogs_resp_instance.to_dict()
# create an instance of ListCatalogsResp from a dict
list_catalogs_resp_from_dict = ListCatalogsResp.from_dict(list_catalogs_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


