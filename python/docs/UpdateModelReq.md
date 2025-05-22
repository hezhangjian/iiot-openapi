# UpdateModelReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**properties** | [**List[PropertyDto]**](PropertyDto.md) |  | [optional] 
**components** | [**List[ComponentDto]**](ComponentDto.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.update_model_req import UpdateModelReq

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateModelReq from a JSON string
update_model_req_instance = UpdateModelReq.from_json(json)
# print the JSON string representation of the object
print(UpdateModelReq.to_json())

# convert the object into a dict
update_model_req_dict = update_model_req_instance.to_dict()
# create an instance of UpdateModelReq from a dict
update_model_req_from_dict = UpdateModelReq.from_dict(update_model_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


