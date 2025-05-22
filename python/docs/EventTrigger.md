# EventTrigger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** |  | 
**duratioin** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.event_trigger import EventTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of EventTrigger from a JSON string
event_trigger_instance = EventTrigger.from_json(json)
# print the JSON string representation of the object
print(EventTrigger.to_json())

# convert the object into a dict
event_trigger_dict = event_trigger_instance.to_dict()
# create an instance of EventTrigger from a dict
event_trigger_from_dict = EventTrigger.from_dict(event_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


