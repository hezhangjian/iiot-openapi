# AttachThingReqDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_id** | **str** |  | 

## Example

```python
from iiot_openapi.models.attach_thing_req_dto import AttachThingReqDTO

# TODO update the JSON string below
json = "{}"
# create an instance of AttachThingReqDTO from a JSON string
attach_thing_req_dto_instance = AttachThingReqDTO.from_json(json)
# print the JSON string representation of the object
print(AttachThingReqDTO.to_json())

# convert the object into a dict
attach_thing_req_dto_dict = attach_thing_req_dto_instance.to_dict()
# create an instance of AttachThingReqDTO from a dict
attach_thing_req_dto_from_dict = AttachThingReqDTO.from_dict(attach_thing_req_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


