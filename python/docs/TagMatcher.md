# TagMatcher


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match** | **str** |  | 
**name** | **str** |  | 
**values** | **List[str]** |  | 

## Example

```python
from iiot_openapi.models.tag_matcher import TagMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of TagMatcher from a JSON string
tag_matcher_instance = TagMatcher.from_json(json)
# print the JSON string representation of the object
print(TagMatcher.to_json())

# convert the object into a dict
tag_matcher_dict = tag_matcher_instance.to_dict()
# create an instance of TagMatcher from a dict
tag_matcher_from_dict = TagMatcher.from_dict(tag_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


