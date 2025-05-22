# EventGenSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_trigger** | [**EventTrigger**](EventTrigger.md) |  | [optional] 
**end_trigger** | [**EventTrigger**](EventTrigger.md) |  | [optional] 
**expressions** | [**List[EventGenExpression]**](EventGenExpression.md) |  | 
**outputs** | [**EventGenOutput**](EventGenOutput.md) |  | [optional] 
**subevents** | [**List[SubEventGenSetting]**](SubEventGenSetting.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.event_gen_setting import EventGenSetting

# TODO update the JSON string below
json = "{}"
# create an instance of EventGenSetting from a JSON string
event_gen_setting_instance = EventGenSetting.from_json(json)
# print the JSON string representation of the object
print(EventGenSetting.to_json())

# convert the object into a dict
event_gen_setting_dict = event_gen_setting_instance.to_dict()
# create an instance of EventGenSetting from a dict
event_gen_setting_from_dict = EventGenSetting.from_dict(event_gen_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


