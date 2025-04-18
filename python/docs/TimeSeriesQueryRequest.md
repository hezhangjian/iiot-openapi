# TimeSeriesQueryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_paths** | **List[str]** |  | 
**time_span** | [**TimeSpan**](TimeSpan.md) |  | 
**limit** | **int** |  | [optional] 
**marker** | **str** |  | [optional] 

## Example

```python
from iiot-openapi.models.time_series_query_request import TimeSeriesQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesQueryRequest from a JSON string
time_series_query_request_instance = TimeSeriesQueryRequest.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesQueryRequest.to_json())

# convert the object into a dict
time_series_query_request_dict = time_series_query_request_instance.to_dict()
# create an instance of TimeSeriesQueryRequest from a dict
time_series_query_request_from_dict = TimeSeriesQueryRequest.from_dict(time_series_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


