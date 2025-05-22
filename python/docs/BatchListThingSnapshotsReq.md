# BatchListThingSnapshotsReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**things** | [**List[BatchListThingSnapshotsReqThingsInner]**](BatchListThingSnapshotsReqThingsInner.md) |  | 

## Example

```python
from iiot_openapi.models.batch_list_thing_snapshots_req import BatchListThingSnapshotsReq

# TODO update the JSON string below
json = "{}"
# create an instance of BatchListThingSnapshotsReq from a JSON string
batch_list_thing_snapshots_req_instance = BatchListThingSnapshotsReq.from_json(json)
# print the JSON string representation of the object
print(BatchListThingSnapshotsReq.to_json())

# convert the object into a dict
batch_list_thing_snapshots_req_dict = batch_list_thing_snapshots_req_instance.to_dict()
# create an instance of BatchListThingSnapshotsReq from a dict
batch_list_thing_snapshots_req_from_dict = BatchListThingSnapshotsReq.from_dict(batch_list_thing_snapshots_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


