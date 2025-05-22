# ListSnapshotResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Dict[str, PropertyValueTime]**](PropertyValueTime.md) |  | [optional] 
**components** | [**Dict[str, ListSnapshotResp]**](ListSnapshotResp.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.list_snapshot_resp import ListSnapshotResp

# TODO update the JSON string below
json = "{}"
# create an instance of ListSnapshotResp from a JSON string
list_snapshot_resp_instance = ListSnapshotResp.from_json(json)
# print the JSON string representation of the object
print(ListSnapshotResp.to_json())

# convert the object into a dict
list_snapshot_resp_dict = list_snapshot_resp_instance.to_dict()
# create an instance of ListSnapshotResp from a dict
list_snapshot_resp_from_dict = ListSnapshotResp.from_dict(list_snapshot_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


