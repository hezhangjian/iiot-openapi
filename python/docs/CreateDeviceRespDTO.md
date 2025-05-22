# CreateDeviceRespDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** |  | [optional] 
**device_name** | **str** |  | [optional] 
**device_type** | **str** |  | [optional] 
**auth_info** | [**AuthInfoDTO**](AuthInfoDTO.md) |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.create_device_resp_dto import CreateDeviceRespDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceRespDTO from a JSON string
create_device_resp_dto_instance = CreateDeviceRespDTO.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceRespDTO.to_json())

# convert the object into a dict
create_device_resp_dto_dict = create_device_resp_dto_instance.to_dict()
# create an instance of CreateDeviceRespDTO from a dict
create_device_resp_dto_from_dict = CreateDeviceRespDTO.from_dict(create_device_resp_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


