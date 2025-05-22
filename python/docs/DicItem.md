# DicItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.dic_item import DicItem

# TODO update the JSON string below
json = "{}"
# create an instance of DicItem from a JSON string
dic_item_instance = DicItem.from_json(json)
# print the JSON string representation of the object
print(DicItem.to_json())

# convert the object into a dict
dic_item_dict = dic_item_instance.to_dict()
# create an instance of DicItem from a dict
dic_item_from_dict = DicItem.from_dict(dic_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


