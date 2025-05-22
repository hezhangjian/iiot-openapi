# UpdateTableRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_name** | **str** |  | [optional] 
**catalog_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**table_schema** | [**UpdateTableSchema**](UpdateTableSchema.md) |  | [optional] 
**aging_settings** | [**AgingSettings**](AgingSettings.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.update_table_request import UpdateTableRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTableRequest from a JSON string
update_table_request_instance = UpdateTableRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTableRequest.to_json())

# convert the object into a dict
update_table_request_dict = update_table_request_instance.to_dict()
# create an instance of UpdateTableRequest from a dict
update_table_request_from_dict = UpdateTableRequest.from_dict(update_table_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


