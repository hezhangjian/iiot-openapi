# IntegratedReports


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrated_time** | **str** |  | [optional] 
**aging_time** | **str** |  | [optional] 
**integrated_status** | **str** |  | [optional] 
**integrated_result** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.integrated_reports import IntegratedReports

# TODO update the JSON string below
json = "{}"
# create an instance of IntegratedReports from a JSON string
integrated_reports_instance = IntegratedReports.from_json(json)
# print the JSON string representation of the object
print(IntegratedReports.to_json())

# convert the object into a dict
integrated_reports_dict = integrated_reports_instance.to_dict()
# create an instance of IntegratedReports from a dict
integrated_reports_from_dict = IntegratedReports.from_dict(integrated_reports_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


