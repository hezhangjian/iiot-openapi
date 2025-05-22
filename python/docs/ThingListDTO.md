# ThingListDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**things** | [**List[ThingDTO]**](ThingDTO.md) |  | [optional] 
**count** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.thing_list_dto import ThingListDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ThingListDTO from a JSON string
thing_list_dto_instance = ThingListDTO.from_json(json)
# print the JSON string representation of the object
print(ThingListDTO.to_json())

# convert the object into a dict
thing_list_dto_dict = thing_list_dto_instance.to_dict()
# create an instance of ThingListDTO from a dict
thing_list_dto_from_dict = ThingListDTO.from_dict(thing_list_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


