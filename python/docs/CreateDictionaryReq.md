# CreateDictionaryReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dic_id** | **str** |  | 
**dic_name** | **str** |  | 
**data_type** | **str** |  | 
**catalog_id** | **str** |  | 
**values** | [**List[DicItem]**](DicItem.md) |  | 

## Example

```python
from iiot_openapi.models.create_dictionary_req import CreateDictionaryReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDictionaryReq from a JSON string
create_dictionary_req_instance = CreateDictionaryReq.from_json(json)
# print the JSON string representation of the object
print(CreateDictionaryReq.to_json())

# convert the object into a dict
create_dictionary_req_dict = create_dictionary_req_instance.to_dict()
# create an instance of CreateDictionaryReq from a dict
create_dictionary_req_from_dict = CreateDictionaryReq.from_dict(create_dictionary_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


