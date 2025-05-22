# BatchListThingSnapshotsRespThingsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_id** | **str** |  | [optional] 
**properties** | [**Dict[str, PropertyValueTime]**](PropertyValueTime.md) |  | [optional] 
**components** | [**Dict[str, ListSnapshotResp]**](ListSnapshotResp.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.batch_list_thing_snapshots_resp_things_inner import BatchListThingSnapshotsRespThingsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BatchListThingSnapshotsRespThingsInner from a JSON string
batch_list_thing_snapshots_resp_things_inner_instance = BatchListThingSnapshotsRespThingsInner.from_json(json)
# print the JSON string representation of the object
print(BatchListThingSnapshotsRespThingsInner.to_json())

# convert the object into a dict
batch_list_thing_snapshots_resp_things_inner_dict = batch_list_thing_snapshots_resp_things_inner_instance.to_dict()
# create an instance of BatchListThingSnapshotsRespThingsInner from a dict
batch_list_thing_snapshots_resp_things_inner_from_dict = BatchListThingSnapshotsRespThingsInner.from_dict(batch_list_thing_snapshots_resp_things_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


