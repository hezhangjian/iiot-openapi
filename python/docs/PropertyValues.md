# PropertyValues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_path** | **str** |  | [optional] 
**values** | **List[str]** |  | [optional] 

## Example

```python
from iiot_openapi.models.property_values import PropertyValues

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyValues from a JSON string
property_values_instance = PropertyValues.from_json(json)
# print the JSON string representation of the object
print(PropertyValues.to_json())

# convert the object into a dict
property_values_dict = property_values_instance.to_dict()
# create an instance of PropertyValues from a dict
property_values_from_dict = PropertyValues.from_dict(property_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


