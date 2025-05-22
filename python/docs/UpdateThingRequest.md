# UpdateThingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_name** | **str** |  | [optional] 
**tags** | [**Dict[str, PropertyValue]**](PropertyValue.md) |  | [optional] 
**properties** | [**ReferenceConfDetails**](.md) |  | [optional] 
**components** | [**ComponentReferenceConfDetails**](.md) |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.update_thing_request import UpdateThingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateThingRequest from a JSON string
update_thing_request_instance = UpdateThingRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateThingRequest.to_json())

# convert the object into a dict
update_thing_request_dict = update_thing_request_instance.to_dict()
# create an instance of UpdateThingRequest from a dict
update_thing_request_from_dict = UpdateThingRequest.from_dict(update_thing_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


