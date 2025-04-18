# ObjectSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_length** | **int** |  | [optional] 
**max_length** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.object_schema import ObjectSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectSchema from a JSON string
object_schema_instance = ObjectSchema.from_json(json)
# print the JSON string representation of the object
print(ObjectSchema.to_json())

# convert the object into a dict
object_schema_dict = object_schema_instance.to_dict()
# create an instance of ObjectSchema from a dict
object_schema_from_dict = ObjectSchema.from_dict(object_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


