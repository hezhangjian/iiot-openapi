# PropertyRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_id** | **str** |  | [optional] 
**property_path** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.property_ref import PropertyRef

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyRef from a JSON string
property_ref_instance = PropertyRef.from_json(json)
# print the JSON string representation of the object
print(PropertyRef.to_json())

# convert the object into a dict
property_ref_dict = property_ref_instance.to_dict()
# create an instance of PropertyRef from a dict
property_ref_from_dict = PropertyRef.from_dict(property_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


