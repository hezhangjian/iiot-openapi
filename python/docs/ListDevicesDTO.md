# ListDevicesDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[DeviceDTO]**](DeviceDTO.md) |  | [optional] 
**count** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.list_devices_dto import ListDevicesDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ListDevicesDTO from a JSON string
list_devices_dto_instance = ListDevicesDTO.from_json(json)
# print the JSON string representation of the object
print(ListDevicesDTO.to_json())

# convert the object into a dict
list_devices_dto_dict = list_devices_dto_instance.to_dict()
# create an instance of ListDevicesDTO from a dict
list_devices_dto_from_dict = ListDevicesDTO.from_dict(list_devices_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


