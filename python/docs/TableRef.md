# TableRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_id** | **str** |  | [optional] 
**column_id** | **str** |  | [optional] 
**where** | **Dict[str, object]** |  | [optional] 

## Example

```python
from iiot-openapi.models.table_ref import TableRef

# TODO update the JSON string below
json = "{}"
# create an instance of TableRef from a JSON string
table_ref_instance = TableRef.from_json(json)
# print the JSON string representation of the object
print(TableRef.to_json())

# convert the object into a dict
table_ref_dict = table_ref_instance.to_dict()
# create an instance of TableRef from a dict
table_ref_from_dict = TableRef.from_dict(table_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


