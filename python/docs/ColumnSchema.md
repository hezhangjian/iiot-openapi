# ColumnSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | 
**dic_id** | **str** |  | [optional] 
**data_schema** | [**List[DataSchema]**](DataSchema.md) |  | 

## Example

```python
from iiot_openapi.models.column_schema import ColumnSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnSchema from a JSON string
column_schema_instance = ColumnSchema.from_json(json)
# print the JSON string representation of the object
print(ColumnSchema.to_json())

# convert the object into a dict
column_schema_dict = column_schema_instance.to_dict()
# create an instance of ColumnSchema from a dict
column_schema_from_dict = ColumnSchema.from_dict(column_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


