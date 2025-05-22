# ComplexSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_trigger** | [**EventTrigger**](EventTrigger.md) |  | [optional] 
**end_trigger** | [**EventTrigger**](EventTrigger.md) |  | [optional] 
**expressions** | [**List[EventGenExpression]**](EventGenExpression.md) |  | 
**outputs** | [**PropGenOutput**](PropGenOutput.md) |  | 
**subevents** | [**List[SubEventPropSetting]**](SubEventPropSetting.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.complex_setting import ComplexSetting

# TODO update the JSON string below
json = "{}"
# create an instance of ComplexSetting from a JSON string
complex_setting_instance = ComplexSetting.from_json(json)
# print the JSON string representation of the object
print(ComplexSetting.to_json())

# convert the object into a dict
complex_setting_dict = complex_setting_instance.to_dict()
# create an instance of ComplexSetting from a dict
complex_setting_from_dict = ComplexSetting.from_dict(complex_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


