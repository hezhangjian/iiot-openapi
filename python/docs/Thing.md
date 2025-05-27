# Thing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_id** | **str** |  | 
**thing_name** | **str** |  | 
**model_id** | **str** |  | 
**description** | **str** |  | [optional] 
**properties** | [**Dict[str, PropertyValue]**](PropertyValue.md) |  | [optional] 
**created_time** | **str** |  | [optional] 
**updated_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.thing import Thing

# TODO update the JSON string below
json = "{}"
# create an instance of Thing from a JSON string
thing_instance = Thing.from_json(json)
# print the JSON string representation of the object
print(Thing.to_json())

# convert the object into a dict
thing_dict = thing_instance.to_dict()
# create an instance of Thing from a dict
thing_from_dict = Thing.from_dict(thing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


