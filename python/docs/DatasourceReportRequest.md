# DatasourceReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[ReportDevice]**](ReportDevice.md) |  | 

## Example

```python
from iiot_openapi.models.datasource_report_request import DatasourceReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DatasourceReportRequest from a JSON string
datasource_report_request_instance = DatasourceReportRequest.from_json(json)
# print the JSON string representation of the object
print(DatasourceReportRequest.to_json())

# convert the object into a dict
datasource_report_request_dict = datasource_report_request_instance.to_dict()
# create an instance of DatasourceReportRequest from a dict
datasource_report_request_from_dict = DatasourceReportRequest.from_dict(datasource_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


