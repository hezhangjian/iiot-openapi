# ReportDevice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** |  | 
**services** | [**List[ServiceData]**](ServiceData.md) |  | 

## Example

```python
from iiot_openapi.models.report_device import ReportDevice

# TODO update the JSON string below
json = "{}"
# create an instance of ReportDevice from a JSON string
report_device_instance = ReportDevice.from_json(json)
# print the JSON string representation of the object
print(ReportDevice.to_json())

# convert the object into a dict
report_device_dict = report_device_instance.to_dict()
# create an instance of ReportDevice from a dict
report_device_from_dict = ReportDevice.from_dict(report_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


