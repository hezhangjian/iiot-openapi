# DeviceDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** |  | [optional] 
**device_name** | **str** |  | [optional] 
**device_type** | **str** |  | [optional] 
**device_status** | **str** |  | [optional] 
**thing_name** | **str** |  | [optional] 
**model_id** | **str** |  | [optional] 
**model_name** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.device_dto import DeviceDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceDTO from a JSON string
device_dto_instance = DeviceDTO.from_json(json)
# print the JSON string representation of the object
print(DeviceDTO.to_json())

# convert the object into a dict
device_dto_dict = device_dto_instance.to_dict()
# create an instance of DeviceDTO from a dict
device_dto_from_dict = DeviceDTO.from_dict(device_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


