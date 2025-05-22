# DeleteRecordsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **List[str]** |  | 
**values** | **List[List[object]]** |  | 

## Example

```python
from iiot_openapi.models.delete_records_request import DeleteRecordsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteRecordsRequest from a JSON string
delete_records_request_instance = DeleteRecordsRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteRecordsRequest.to_json())

# convert the object into a dict
delete_records_request_dict = delete_records_request_instance.to_dict()
# create an instance of DeleteRecordsRequest from a dict
delete_records_request_from_dict = DeleteRecordsRequest.from_dict(delete_records_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


