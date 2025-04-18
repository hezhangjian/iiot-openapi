# TimeSeriesQueryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thing_id** | **str** |  | [optional] 
**data** | [**Dict[str, DataList]**](DataList.md) |  | [optional] 
**page_info** | **Dict[str, object]** |  | [optional] 

## Example

```python
from iiot-openapi.models.time_series_query_response import TimeSeriesQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesQueryResponse from a JSON string
time_series_query_response_instance = TimeSeriesQueryResponse.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesQueryResponse.to_json())

# convert the object into a dict
time_series_query_response_dict = time_series_query_response_instance.to_dict()
# create an instance of TimeSeriesQueryResponse from a dict
time_series_query_response_from_dict = TimeSeriesQueryResponse.from_dict(time_series_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


