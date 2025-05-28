# ReferenceConfDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_ref** | [**PropertyRef**](PropertyRef.md) |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from iiot_openapi.models.reference_conf_dto import ReferenceConfDto

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceConfDto from a JSON string
reference_conf_dto_instance = ReferenceConfDto.from_json(json)
# print the JSON string representation of the object
print(ReferenceConfDto.to_json())

# convert the object into a dict
reference_conf_dto_dict = reference_conf_dto_instance.to_dict()
# create an instance of ReferenceConfDto from a dict
reference_conf_dto_from_dict = ReferenceConfDto.from_dict(reference_conf_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


