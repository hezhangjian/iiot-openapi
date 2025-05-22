# EventGenExpression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**var_class** | **str** |  | [optional] 
**condition** | **str** |  | [optional] 
**expression** | **str** |  | 
**triggers** | **List[str]** |  | [optional] 

## Example

```python
from iiot_openapi.models.event_gen_expression import EventGenExpression

# TODO update the JSON string below
json = "{}"
# create an instance of EventGenExpression from a JSON string
event_gen_expression_instance = EventGenExpression.from_json(json)
# print the JSON string representation of the object
print(EventGenExpression.to_json())

# convert the object into a dict
event_gen_expression_dict = event_gen_expression_instance.to_dict()
# create an instance of EventGenExpression from a dict
event_gen_expression_from_dict = EventGenExpression.from_dict(event_gen_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


