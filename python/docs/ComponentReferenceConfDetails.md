# ComponentReferenceConfDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Dict[str, ReferenceConfDetails]**](ReferenceConfDetails.md) |  | [optional] 
**components** | [**ComponentReferenceConfDetails**](.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.component_reference_conf_details import ComponentReferenceConfDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentReferenceConfDetails from a JSON string
component_reference_conf_details_instance = ComponentReferenceConfDetails.from_json(json)
# print the JSON string representation of the object
print(ComponentReferenceConfDetails.to_json())

# convert the object into a dict
component_reference_conf_details_dict = component_reference_conf_details_instance.to_dict()
# create an instance of ComponentReferenceConfDetails from a dict
component_reference_conf_details_from_dict = ComponentReferenceConfDetails.from_dict(component_reference_conf_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


