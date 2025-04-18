# PropertyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_id** | **str** |  | 
**property_name** | **str** |  | 
**data_schema** | [**DataSchema**](DataSchema.md) |  | 
**writable** | **bool** |  | [optional] 
**categories** | **List[str]** |  | [optional] 
**description** | **str** |  | [optional] 
**unit** | **str** |  | [optional] 
**ref_type** | **str** |  | [optional] 
**table_ref** | [**TableRef**](TableRef.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.property_dto import PropertyDto

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyDto from a JSON string
property_dto_instance = PropertyDto.from_json(json)
# print the JSON string representation of the object
print(PropertyDto.to_json())

# convert the object into a dict
property_dto_dict = property_dto_instance.to_dict()
# create an instance of PropertyDto from a dict
property_dto_from_dict = PropertyDto.from_dict(property_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


