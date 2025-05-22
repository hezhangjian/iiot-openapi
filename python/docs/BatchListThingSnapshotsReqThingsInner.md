# BatchListThingSnapshotsReqThingsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_id** | **str** |  | 
**components** | [**Dict[str, PropertiesGetReq]**](PropertiesGetReq.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.batch_list_thing_snapshots_req_things_inner import BatchListThingSnapshotsReqThingsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BatchListThingSnapshotsReqThingsInner from a JSON string
batch_list_thing_snapshots_req_things_inner_instance = BatchListThingSnapshotsReqThingsInner.from_json(json)
# print the JSON string representation of the object
print(BatchListThingSnapshotsReqThingsInner.to_json())

# convert the object into a dict
batch_list_thing_snapshots_req_things_inner_dict = batch_list_thing_snapshots_req_things_inner_instance.to_dict()
# create an instance of BatchListThingSnapshotsReqThingsInner from a dict
batch_list_thing_snapshots_req_things_inner_from_dict = BatchListThingSnapshotsReqThingsInner.from_dict(batch_list_thing_snapshots_req_things_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


