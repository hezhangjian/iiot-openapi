# DoubleSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min** | **float** |  | [optional] 
**max** | **float** |  | [optional] 

## Example

```python
from iiot-openapi.models.double_schema import DoubleSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleSchema from a JSON string
double_schema_instance = DoubleSchema.from_json(json)
# print the JSON string representation of the object
print(DoubleSchema.to_json())

# convert the object into a dict
double_schema_dict = double_schema_instance.to_dict()
# create an instance of DoubleSchema from a dict
double_schema_from_dict = DoubleSchema.from_dict(double_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


