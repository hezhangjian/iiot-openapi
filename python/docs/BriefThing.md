# BriefThing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_id** | **str** |  | [optional] 
**thing_name** | **str** |  | [optional] 
**model_id** | **str** |  | [optional] 
**model_name** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.brief_thing import BriefThing

# TODO update the JSON string below
json = "{}"
# create an instance of BriefThing from a JSON string
brief_thing_instance = BriefThing.from_json(json)
# print the JSON string representation of the object
print(BriefThing.to_json())

# convert the object into a dict
brief_thing_dict = brief_thing_instance.to_dict()
# create an instance of BriefThing from a dict
brief_thing_from_dict = BriefThing.from_dict(brief_thing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


