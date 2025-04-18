# ServiceData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_id** | **str** |  | 
**event_time** | **datetime** |  | 
**properties** | **Dict[str, object]** |  | 

## Example

```python
from iiot-openapi.models.service_data import ServiceData

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceData from a JSON string
service_data_instance = ServiceData.from_json(json)
# print the JSON string representation of the object
print(ServiceData.to_json())

# convert the object into a dict
service_data_dict = service_data_instance.to_dict()
# create an instance of ServiceData from a dict
service_data_from_dict = ServiceData.from_dict(service_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


