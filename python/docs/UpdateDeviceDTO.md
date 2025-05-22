# UpdateDeviceDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_name** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.update_device_dto import UpdateDeviceDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceDTO from a JSON string
update_device_dto_instance = UpdateDeviceDTO.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceDTO.to_json())

# convert the object into a dict
update_device_dto_dict = update_device_dto_instance.to_dict()
# create an instance of UpdateDeviceDTO from a dict
update_device_dto_from_dict = UpdateDeviceDTO.from_dict(update_device_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


