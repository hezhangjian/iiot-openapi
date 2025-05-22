# ViewData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**columns** | **List[str]** |  | [optional] 
**values** | **List[List[str]]** |  | [optional] 

## Example

```python
from iiot_openapi.models.view_data import ViewData

# TODO update the JSON string below
json = "{}"
# create an instance of ViewData from a JSON string
view_data_instance = ViewData.from_json(json)
# print the JSON string representation of the object
print(ViewData.to_json())

# convert the object into a dict
view_data_dict = view_data_instance.to_dict()
# create an instance of ViewData from a dict
view_data_from_dict = ViewData.from_dict(view_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


