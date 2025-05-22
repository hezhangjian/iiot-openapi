# Dictionary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dic_id** | **str** |  | 
**dic_name** | **str** |  | 
**data_type** | **str** |  | 
**catalog_id** | **str** |  | 
**values** | [**List[DicItem]**](DicItem.md) |  | 
**create_time** | **str** |  | 
**update_time** | **str** |  | 

## Example

```python
from iiot_openapi.models.dictionary import Dictionary

# TODO update the JSON string below
json = "{}"
# create an instance of Dictionary from a JSON string
dictionary_instance = Dictionary.from_json(json)
# print the JSON string representation of the object
print(Dictionary.to_json())

# convert the object into a dict
dictionary_dict = dictionary_instance.to_dict()
# create an instance of Dictionary from a dict
dictionary_from_dict = Dictionary.from_dict(dictionary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


