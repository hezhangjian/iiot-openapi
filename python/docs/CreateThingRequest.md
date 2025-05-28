# CreateThingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_id** | **str** |  | 
**thing_name** | **str** |  | 
**model_id** | **str** |  | 
**tags** | **Dict[str, str]** |  | [optional] 
**description** | **str** |  | [optional] 
**properties** | [**Dict[str, ReferenceConfDto]**](ReferenceConfDto.md) |  | [optional] 
**components** | [**Dict[str, ComponentReferenceConfDto]**](ComponentReferenceConfDto.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.create_thing_request import CreateThingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateThingRequest from a JSON string
create_thing_request_instance = CreateThingRequest.from_json(json)
# print the JSON string representation of the object
print(CreateThingRequest.to_json())

# convert the object into a dict
create_thing_request_dict = create_thing_request_instance.to_dict()
# create an instance of CreateThingRequest from a dict
create_thing_request_from_dict = CreateThingRequest.from_dict(create_thing_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


