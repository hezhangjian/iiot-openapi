# ListTablesResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**tables** | [**List[BriefTable]**](BriefTable.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.list_tables_resp import ListTablesResp

# TODO update the JSON string below
json = "{}"
# create an instance of ListTablesResp from a JSON string
list_tables_resp_instance = ListTablesResp.from_json(json)
# print the JSON string representation of the object
print(ListTablesResp.to_json())

# convert the object into a dict
list_tables_resp_dict = list_tables_resp_instance.to_dict()
# create an instance of ListTablesResp from a dict
list_tables_resp_from_dict = ListTablesResp.from_dict(list_tables_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


