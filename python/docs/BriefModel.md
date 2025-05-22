# BriefModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_id** | **str** |  | [optional] 
**model_name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**sync_count** | **int** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.brief_model import BriefModel

# TODO update the JSON string below
json = "{}"
# create an instance of BriefModel from a JSON string
brief_model_instance = BriefModel.from_json(json)
# print the JSON string representation of the object
print(BriefModel.to_json())

# convert the object into a dict
brief_model_dict = brief_model_instance.to_dict()
# create an instance of BriefModel from a dict
brief_model_from_dict = BriefModel.from_dict(brief_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


