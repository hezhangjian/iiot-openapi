# ListThingsResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**things** | [**List[BriefThing]**](BriefThing.md) |  | [optional] 
**count** | **int** |  | [optional] 

## Example

```python
from iiot_openapi.models.list_things_resp import ListThingsResp

# TODO update the JSON string below
json = "{}"
# create an instance of ListThingsResp from a JSON string
list_things_resp_instance = ListThingsResp.from_json(json)
# print the JSON string representation of the object
print(ListThingsResp.to_json())

# convert the object into a dict
list_things_resp_dict = list_things_resp_instance.to_dict()
# create an instance of ListThingsResp from a dict
list_things_resp_from_dict = ListThingsResp.from_dict(list_things_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


