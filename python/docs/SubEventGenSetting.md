# SubEventGenSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**start_trigger** | [**EventTrigger**](EventTrigger.md) |  | 
**end_trigger** | [**EventTrigger**](EventTrigger.md) |  | [optional] 
**expressions** | [**List[EventGenExpression]**](EventGenExpression.md) |  | [optional] 
**outputs** | [**EventGenOutput**](EventGenOutput.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.sub_event_gen_setting import SubEventGenSetting

# TODO update the JSON string below
json = "{}"
# create an instance of SubEventGenSetting from a JSON string
sub_event_gen_setting_instance = SubEventGenSetting.from_json(json)
# print the JSON string representation of the object
print(SubEventGenSetting.to_json())

# convert the object into a dict
sub_event_gen_setting_dict = sub_event_gen_setting_instance.to_dict()
# create an instance of SubEventGenSetting from a dict
sub_event_gen_setting_from_dict = SubEventGenSetting.from_dict(sub_event_gen_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


