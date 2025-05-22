# MarkerTableRecords


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_info** | [**PageInfo**](PageInfo.md) |  | [optional] 
**columns** | **List[str]** |  | [optional] 
**values** | **List[List[object]]** |  | [optional] 

## Example

```python
from iiot_openapi.models.marker_table_records import MarkerTableRecords

# TODO update the JSON string below
json = "{}"
# create an instance of MarkerTableRecords from a JSON string
marker_table_records_instance = MarkerTableRecords.from_json(json)
# print the JSON string representation of the object
print(MarkerTableRecords.to_json())

# convert the object into a dict
marker_table_records_dict = marker_table_records_instance.to_dict()
# create an instance of MarkerTableRecords from a dict
marker_table_records_from_dict = MarkerTableRecords.from_dict(marker_table_records_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


