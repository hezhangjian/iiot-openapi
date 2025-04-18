# StringSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_length** | **int** |  | [optional] 
**max_length** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.string_schema import StringSchema

# TODO update the JSON string below
json = "{}"
# create an instance of StringSchema from a JSON string
string_schema_instance = StringSchema.from_json(json)
# print the JSON string representation of the object
print(StringSchema.to_json())

# convert the object into a dict
string_schema_dict = string_schema_instance.to_dict()
# create an instance of StringSchema from a dict
string_schema_from_dict = StringSchema.from_dict(string_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


