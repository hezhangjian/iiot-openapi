# ThingDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_id** | **str** |  | [optional] 
**thing_name** | **str** |  | [optional] 
**model_id** | **str** |  | [optional] 
**model_name** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.thing_dto import ThingDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ThingDTO from a JSON string
thing_dto_instance = ThingDTO.from_json(json)
# print the JSON string representation of the object
print(ThingDTO.to_json())

# convert the object into a dict
thing_dto_dict = thing_dto_instance.to_dict()
# create an instance of ThingDTO from a dict
thing_dto_from_dict = ThingDTO.from_dict(thing_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


