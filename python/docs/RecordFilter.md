# RecordFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_id** | **str** |  | [optional] 
**operator** | **str** |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from iiot_openapi.models.record_filter import RecordFilter

# TODO update the JSON string below
json = "{}"
# create an instance of RecordFilter from a JSON string
record_filter_instance = RecordFilter.from_json(json)
# print the JSON string representation of the object
print(RecordFilter.to_json())

# convert the object into a dict
record_filter_dict = record_filter_instance.to_dict()
# create an instance of RecordFilter from a dict
record_filter_from_dict = RecordFilter.from_dict(record_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


