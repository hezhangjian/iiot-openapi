# UpdateTableSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[UpdateColumnSchema]**](UpdateColumnSchema.md) |  | 

## Example

```python
from iiot_openapi.models.update_table_schema import UpdateTableSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTableSchema from a JSON string
update_table_schema_instance = UpdateTableSchema.from_json(json)
# print the JSON string representation of the object
print(UpdateTableSchema.to_json())

# convert the object into a dict
update_table_schema_dict = update_table_schema_instance.to_dict()
# create an instance of UpdateTableSchema from a dict
update_table_schema_from_dict = UpdateTableSchema.from_dict(update_table_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


