# UpdateDictionaryReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dic_name** | **str** |  | [optional] 
**catalog_id** | **str** |  | [optional] 
**values** | [**List[DicItem]**](DicItem.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.update_dictionary_req import UpdateDictionaryReq

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDictionaryReq from a JSON string
update_dictionary_req_instance = UpdateDictionaryReq.from_json(json)
# print the JSON string representation of the object
print(UpdateDictionaryReq.to_json())

# convert the object into a dict
update_dictionary_req_dict = update_dictionary_req_instance.to_dict()
# create an instance of UpdateDictionaryReq from a dict
update_dictionary_req_from_dict = UpdateDictionaryReq.from_dict(update_dictionary_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


