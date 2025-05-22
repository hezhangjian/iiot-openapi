# TableRecords


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**columns** | **List[str]** |  | [optional] 
**values** | **List[List[object]]** |  | [optional] 

## Example

```python
from iiot_openapi.models.table_records import TableRecords

# TODO update the JSON string below
json = "{}"
# create an instance of TableRecords from a JSON string
table_records_instance = TableRecords.from_json(json)
# print the JSON string representation of the object
print(TableRecords.to_json())

# convert the object into a dict
table_records_dict = table_records_instance.to_dict()
# create an instance of TableRecords from a dict
table_records_from_dict = TableRecords.from_dict(table_records_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


