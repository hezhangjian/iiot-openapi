# SaveRecordsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** |  | [optional] 
**values** | **List[List[object]]** |  | [optional] 
**column_values** | **List[object]** |  | [optional] 

## Example

```python
from iiot_openapi.models.save_records_request import SaveRecordsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SaveRecordsRequest from a JSON string
save_records_request_instance = SaveRecordsRequest.from_json(json)
# print the JSON string representation of the object
print(SaveRecordsRequest.to_json())

# convert the object into a dict
save_records_request_dict = save_records_request_instance.to_dict()
# create an instance of SaveRecordsRequest from a dict
save_records_request_from_dict = SaveRecordsRequest.from_dict(save_records_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


