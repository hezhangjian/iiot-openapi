# CreateDeviceReqDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** |  | 
**device_name** | **str** |  | 
**device_type** | **str** |  | 

## Example

```python
from iiot_openapi.models.create_device_req_dto import CreateDeviceReqDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceReqDTO from a JSON string
create_device_req_dto_instance = CreateDeviceReqDTO.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceReqDTO.to_json())

# convert the object into a dict
create_device_req_dto_dict = create_device_req_dto_instance.to_dict()
# create an instance of CreateDeviceReqDTO from a dict
create_device_req_dto_from_dict = CreateDeviceReqDTO.from_dict(create_device_req_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


