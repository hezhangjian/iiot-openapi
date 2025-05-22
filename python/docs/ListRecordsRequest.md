# ListRecordsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index_columns** | [**List[RecordFilter]**](RecordFilter.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.list_records_request import ListRecordsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListRecordsRequest from a JSON string
list_records_request_instance = ListRecordsRequest.from_json(json)
# print the JSON string representation of the object
print(ListRecordsRequest.to_json())

# convert the object into a dict
list_records_request_dict = list_records_request_instance.to_dict()
# create an instance of ListRecordsRequest from a dict
list_records_request_from_dict = ListRecordsRequest.from_dict(list_records_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


