# BriefView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_id** | **str** |  | [optional] 
**view_name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.brief_view import BriefView

# TODO update the JSON string below
json = "{}"
# create an instance of BriefView from a JSON string
brief_view_instance = BriefView.from_json(json)
# print the JSON string representation of the object
print(BriefView.to_json())

# convert the object into a dict
brief_view_dict = brief_view_instance.to_dict()
# create an instance of BriefView from a dict
brief_view_from_dict = BriefView.from_dict(brief_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


