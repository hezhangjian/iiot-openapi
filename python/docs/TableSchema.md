# TableSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[ColumnSchema]**](ColumnSchema.md) |  | 
**primary_key** | **List[str]** |  | 
**indexes** | [**List[IndexSchema]**](IndexSchema.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.table_schema import TableSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TableSchema from a JSON string
table_schema_instance = TableSchema.from_json(json)
# print the JSON string representation of the object
print(TableSchema.to_json())

# convert the object into a dict
table_schema_dict = table_schema_instance.to_dict()
# create an instance of TableSchema from a dict
table_schema_from_dict = TableSchema.from_dict(table_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


