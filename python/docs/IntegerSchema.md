# IntegerSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min** | **int** |  | [optional] 
**max** | **int** |  | [optional] 

## Example

```python
from iiot-openapi.models.integer_schema import IntegerSchema

# TODO update the JSON string below
json = "{}"
# create an instance of IntegerSchema from a JSON string
integer_schema_instance = IntegerSchema.from_json(json)
# print the JSON string representation of the object
print(IntegerSchema.to_json())

# convert the object into a dict
integer_schema_dict = integer_schema_instance.to_dict()
# create an instance of IntegerSchema from a dict
integer_schema_from_dict = IntegerSchema.from_dict(integer_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


