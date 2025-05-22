# ITStatReports


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stat_time** | **str** |  | [optional] 
**aging_time** | **str** |  | [optional] 
**stat_status** | **str** |  | [optional] 
**stat_result** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.it_stat_reports import ITStatReports

# TODO update the JSON string below
json = "{}"
# create an instance of ITStatReports from a JSON string
it_stat_reports_instance = ITStatReports.from_json(json)
# print the JSON string representation of the object
print(ITStatReports.to_json())

# convert the object into a dict
it_stat_reports_dict = it_stat_reports_instance.to_dict()
# create an instance of ITStatReports from a dict
it_stat_reports_from_dict = ITStatReports.from_dict(it_stat_reports_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


