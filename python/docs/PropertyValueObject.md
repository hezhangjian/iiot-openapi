# PropertyValueObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** |  | 
**object** | **object** |  | 

## Example

```python
from iiot_openapi.models.property_value_object import PropertyValueObject

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyValueObject from a JSON string
property_value_object_instance = PropertyValueObject.from_json(json)
# print the JSON string representation of the object
print(PropertyValueObject.to_json())

# convert the object into a dict
property_value_object_dict = property_value_object_instance.to_dict()
# create an instance of PropertyValueObject from a dict
property_value_object_from_dict = PropertyValueObject.from_dict(property_value_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


