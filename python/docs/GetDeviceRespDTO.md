# GetDeviceRespDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** |  | [optional] 
**device_name** | **str** |  | [optional] 
**device_type** | **str** |  | [optional] 
**device_status** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.get_device_resp_dto import GetDeviceRespDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceRespDTO from a JSON string
get_device_resp_dto_instance = GetDeviceRespDTO.from_json(json)
# print the JSON string representation of the object
print(GetDeviceRespDTO.to_json())

# convert the object into a dict
get_device_resp_dto_dict = get_device_resp_dto_instance.to_dict()
# create an instance of GetDeviceRespDTO from a dict
get_device_resp_dto_from_dict = GetDeviceRespDTO.from_dict(get_device_resp_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


