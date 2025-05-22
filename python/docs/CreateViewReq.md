# CreateViewReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_id** | **str** |  | 
**view_name** | **str** |  | 
**description** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.create_view_req import CreateViewReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateViewReq from a JSON string
create_view_req_instance = CreateViewReq.from_json(json)
# print the JSON string representation of the object
print(CreateViewReq.to_json())

# convert the object into a dict
create_view_req_dict = create_view_req_instance.to_dict()
# create an instance of CreateViewReq from a dict
create_view_req_from_dict = CreateViewReq.from_dict(create_view_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


