# PropGenOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**List[PropOutputExpression]**](PropOutputExpression.md) |  | 

## Example

```python
from iiot_openapi.models.prop_gen_output import PropGenOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PropGenOutput from a JSON string
prop_gen_output_instance = PropGenOutput.from_json(json)
# print the JSON string representation of the object
print(PropGenOutput.to_json())

# convert the object into a dict
prop_gen_output_dict = prop_gen_output_instance.to_dict()
# create an instance of PropGenOutput from a dict
prop_gen_output_from_dict = PropGenOutput.from_dict(prop_gen_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


