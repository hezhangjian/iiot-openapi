# EnrichedThingNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_id** | **str** |  | [optional] 
**thing_name** | **str** |  | [optional] 
**model_id** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from iiot_openapi.models.enriched_thing_node import EnrichedThingNode

# TODO update the JSON string below
json = "{}"
# create an instance of EnrichedThingNode from a JSON string
enriched_thing_node_instance = EnrichedThingNode.from_json(json)
# print the JSON string representation of the object
print(EnrichedThingNode.to_json())

# convert the object into a dict
enriched_thing_node_dict = enriched_thing_node_instance.to_dict()
# create an instance of EnrichedThingNode from a dict
enriched_thing_node_from_dict = EnrichedThingNode.from_dict(enriched_thing_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


