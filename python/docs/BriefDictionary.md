# BriefDictionary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dic_id** | **str** |  | [optional] 
**dic_name** | **str** |  | [optional] 
**data_type** | **str** |  | [optional] 
**catalog_id** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.brief_dictionary import BriefDictionary

# TODO update the JSON string below
json = "{}"
# create an instance of BriefDictionary from a JSON string
brief_dictionary_instance = BriefDictionary.from_json(json)
# print the JSON string representation of the object
print(BriefDictionary.to_json())

# convert the object into a dict
brief_dictionary_dict = brief_dictionary_instance.to_dict()
# create an instance of BriefDictionary from a dict
brief_dictionary_from_dict = BriefDictionary.from_dict(brief_dictionary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


