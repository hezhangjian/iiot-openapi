# CreateModelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_id** | **str** |  | 
**model_name** | **str** |  | 
**type** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**properties** | [**List[PropertyDto]**](PropertyDto.md) |  | [optional] 
**components** | [**List[ComponentDto]**](ComponentDto.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.create_model_request import CreateModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateModelRequest from a JSON string
create_model_request_instance = CreateModelRequest.from_json(json)
# print the JSON string representation of the object
print(CreateModelRequest.to_json())

# convert the object into a dict
create_model_request_dict = create_model_request_instance.to_dict()
# create an instance of CreateModelRequest from a dict
create_model_request_from_dict = CreateModelRequest.from_dict(create_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


