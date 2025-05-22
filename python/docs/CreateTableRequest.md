# CreateTableRequest


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

## Example

```python
from iiot_openapi.models.create_table_request import CreateTableRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTableRequest from a JSON string
create_table_request_instance = CreateTableRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTableRequest.to_json())

# convert the object into a dict
create_table_request_dict = create_table_request_instance.to_dict()
# create an instance of CreateTableRequest from a dict
create_table_request_from_dict = CreateTableRequest.from_dict(create_table_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


