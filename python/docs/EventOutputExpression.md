# EventOutputExpression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **str** |  | 
**column_id** | **str** |  | 

## Example

```python
from iiot_openapi.models.event_output_expression import EventOutputExpression

# TODO update the JSON string below
json = "{}"
# create an instance of EventOutputExpression from a JSON string
event_output_expression_instance = EventOutputExpression.from_json(json)
# print the JSON string representation of the object
print(EventOutputExpression.to_json())

# convert the object into a dict
event_output_expression_dict = event_output_expression_instance.to_dict()
# create an instance of EventOutputExpression from a dict
event_output_expression_from_dict = EventOutputExpression.from_dict(event_output_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


