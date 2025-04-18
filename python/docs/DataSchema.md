# DataSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**integer_schema** | [**IntegerSchema**](IntegerSchema.md) |  | [optional] 
**double_schema** | [**DoubleSchema**](DoubleSchema.md) |  | [optional] 
**string_schema** | [**StringSchema**](StringSchema.md) |  | [optional] 
**object_schema** | [**ObjectSchema**](ObjectSchema.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.data_schema import DataSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DataSchema from a JSON string
data_schema_instance = DataSchema.from_json(json)
# print the JSON string representation of the object
print(DataSchema.to_json())

# convert the object into a dict
data_schema_dict = data_schema_instance.to_dict()
# create an instance of DataSchema from a dict
data_schema_from_dict = DataSchema.from_dict(data_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


