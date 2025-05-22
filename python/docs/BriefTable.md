# BriefTable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_id** | **str** |  | [optional] 
**table_name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**catalog_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 
**original_reports** | [**OriginalReports**](OriginalReports.md) |  | [optional] 
**integrated_reports** | [**IntegratedReports**](IntegratedReports.md) |  | [optional] 
**itstat_reports** | [**ITStatReports**](ITStatReports.md) |  | [optional] 
**otstat_reports** | [**OtstatReports**](OtstatReports.md) |  | [optional] 
**process_settings** | [**BriefProcessSettings**](BriefProcessSettings.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.brief_table import BriefTable

# TODO update the JSON string below
json = "{}"
# create an instance of BriefTable from a JSON string
brief_table_instance = BriefTable.from_json(json)
# print the JSON string representation of the object
print(BriefTable.to_json())

# convert the object into a dict
brief_table_dict = brief_table_instance.to_dict()
# create an instance of BriefTable from a dict
brief_table_from_dict = BriefTable.from_dict(brief_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


