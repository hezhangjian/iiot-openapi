# ReferenceConfDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_ref** | [**Dict[str, PropertyRef]**](PropertyRef.md) |  | [optional] 
**value** | **object** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.reference_conf_details import ReferenceConfDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceConfDetails from a JSON string
reference_conf_details_instance = ReferenceConfDetails.from_json(json)
# print the JSON string representation of the object
print(ReferenceConfDetails.to_json())

# convert the object into a dict
reference_conf_details_dict = reference_conf_details_instance.to_dict()
# create an instance of ReferenceConfDetails from a dict
reference_conf_details_from_dict = ReferenceConfDetails.from_dict(reference_conf_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


