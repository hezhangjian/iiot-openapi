# TableInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_id** | **str** |  | 
**table_name** | **str** |  | 
**type** | **str** |  | 
**catalog_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**table_schema** | [**TableSchema**](TableSchema.md) |  | 
**aging_settings** | [**AgingSettings**](AgingSettings.md) |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 
**original_reports** | [**OriginalReports**](OriginalReports.md) |  | [optional] 
**integrated_reports** | [**IntegratedReports**](IntegratedReports.md) |  | [optional] 
**itstat_reports** | [**ITStatReports**](ITStatReports.md) |  | [optional] 
**otstat_reports** | [**OtstatReports**](OtstatReports.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.table_info import TableInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TableInfo from a JSON string
table_info_instance = TableInfo.from_json(json)
# print the JSON string representation of the object
print(TableInfo.to_json())

# convert the object into a dict
table_info_dict = table_info_instance.to_dict()
# create an instance of TableInfo from a dict
table_info_from_dict = TableInfo.from_dict(table_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


