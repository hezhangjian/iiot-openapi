# BatchListThingSnapshotsResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**things** | [**List[BatchListThingSnapshotsRespThingsInner]**](BatchListThingSnapshotsRespThingsInner.md) |  | [optional] 

## Example

```python
from iiot_openapi.models.batch_list_thing_snapshots_resp import BatchListThingSnapshotsResp

# TODO update the JSON string below
json = "{}"
# create an instance of BatchListThingSnapshotsResp from a JSON string
batch_list_thing_snapshots_resp_instance = BatchListThingSnapshotsResp.from_json(json)
# print the JSON string representation of the object
print(BatchListThingSnapshotsResp.to_json())

# convert the object into a dict
batch_list_thing_snapshots_resp_dict = batch_list_thing_snapshots_resp_instance.to_dict()
# create an instance of BatchListThingSnapshotsResp from a dict
batch_list_thing_snapshots_resp_from_dict = BatchListThingSnapshotsResp.from_dict(batch_list_thing_snapshots_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


