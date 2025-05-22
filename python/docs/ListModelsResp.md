# ListModelsResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[BriefModel]**](BriefModel.md) |  | [optional] 
**count** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.list_models_resp import ListModelsResp

# TODO update the JSON string below
json = "{}"
# create an instance of ListModelsResp from a JSON string
list_models_resp_instance = ListModelsResp.from_json(json)
# print the JSON string representation of the object
print(ListModelsResp.to_json())

# convert the object into a dict
list_models_resp_dict = list_models_resp_instance.to_dict()
# create an instance of ListModelsResp from a dict
list_models_resp_from_dict = ListModelsResp.from_dict(list_models_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


