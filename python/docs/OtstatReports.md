# OtstatReports


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stat_time** | **str** |  | [optional] 
**aging_time** | **str** |  | [optional] 
**stat_status** | **str** |  | [optional] 
**stat_result** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.otstat_reports import OtstatReports

# TODO update the JSON string below
json = "{}"
# create an instance of OtstatReports from a JSON string
otstat_reports_instance = OtstatReports.from_json(json)
# print the JSON string representation of the object
print(OtstatReports.to_json())

# convert the object into a dict
otstat_reports_dict = otstat_reports_instance.to_dict()
# create an instance of OtstatReports from a dict
otstat_reports_from_dict = OtstatReports.from_dict(otstat_reports_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


