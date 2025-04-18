# ComponentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_id** | **str** |  | 
**component_name** | **str** |  | 
**description** | **str** |  | [optional] 
**properties** | [**List[PropertyDto]**](PropertyDto.md) |  | [optional] 
**components** | [**List[ComponentDto]**](ComponentDto.md) |  | [optional] 

## Example

```python
from iiot-openapi.models.component_dto import ComponentDto

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentDto from a JSON string
component_dto_instance = ComponentDto.from_json(json)
# print the JSON string representation of the object
print(ComponentDto.to_json())

# convert the object into a dict
component_dto_dict = component_dto_instance.to_dict()
# create an instance of ComponentDto from a dict
component_dto_from_dict = ComponentDto.from_dict(component_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


