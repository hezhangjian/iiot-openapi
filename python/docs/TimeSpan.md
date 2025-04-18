# TimeSpan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **int** |  | 
**to** | **int** |  | 

## Example

```python
from iiot_openapi.models.time_span import TimeSpan

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSpan from a JSON string
time_span_instance = TimeSpan.from_json(json)
# print the JSON string representation of the object
print(TimeSpan.to_json())

# convert the object into a dict
time_span_dict = time_span_instance.to_dict()
# create an instance of TimeSpan from a dict
time_span_from_dict = TimeSpan.from_dict(time_span_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


