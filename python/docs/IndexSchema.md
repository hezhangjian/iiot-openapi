# IndexSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**column_ids** | **List[str]** |  | 

## Example

```python
from iiot_openapi.models.index_schema import IndexSchema

# TODO update the JSON string below
json = "{}"
# create an instance of IndexSchema from a JSON string
index_schema_instance = IndexSchema.from_json(json)
# print the JSON string representation of the object
print(IndexSchema.to_json())

# convert the object into a dict
index_schema_dict = index_schema_instance.to_dict()
# create an instance of IndexSchema from a dict
index_schema_from_dict = IndexSchema.from_dict(index_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


