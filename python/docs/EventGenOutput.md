# EventGenOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[EventOutputExpression]**](EventOutputExpression.md) |  | 

## Example

```python
from iiot_openapi.models.event_gen_output import EventGenOutput

# TODO update the JSON string below
json = "{}"
# create an instance of EventGenOutput from a JSON string
event_gen_output_instance = EventGenOutput.from_json(json)
# print the JSON string representation of the object
print(EventGenOutput.to_json())

# convert the object into a dict
event_gen_output_dict = event_gen_output_instance.to_dict()
# create an instance of EventGenOutput from a dict
event_gen_output_from_dict = EventGenOutput.from_dict(event_gen_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


