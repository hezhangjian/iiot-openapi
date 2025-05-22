# ExpressionSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** |  | [optional] 
**expressions** | [**List[Expression]**](Expression.md) |  | 

## Example

```python
from iiot_openapi.models.expression_settings import ExpressionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressionSettings from a JSON string
expression_settings_instance = ExpressionSettings.from_json(json)
# print the JSON string representation of the object
print(ExpressionSettings.to_json())

# convert the object into a dict
expression_settings_dict = expression_settings_instance.to_dict()
# create an instance of ExpressionSettings from a dict
expression_settings_from_dict = ExpressionSettings.from_dict(expression_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


