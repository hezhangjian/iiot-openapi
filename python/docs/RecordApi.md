# iiot_openapi.RecordApi

All URIs are relative to *http://https:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_records**](RecordApi.md#list_records) | **POST** /v5/{project_id}/tables/{table_id}/records/query | 查询表记录
[**save_records**](RecordApi.md#save_records) | **POST** /v5/{project_id}/tables/{table_id}/records/save | 保存表记录


# **list_records**
> TableRecords list_records(x_auth_token, project_id, table_id, offset=offset, limit=limit, list_records_request=list_records_request)

查询表记录

### Example


```python
import iiot_openapi
from iiot_openapi.models.list_records_request import ListRecordsRequest
from iiot_openapi.models.table_records import TableRecords
from iiot_openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://https:/
# See configuration.py for a list of all supported configuration parameters.
configuration = iiot_openapi.Configuration(
    host = "http://https:/"
)


# Enter a context with an instance of the API client
with iiot_openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = iiot_openapi.RecordApi(api_client)
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    table_id = 'table_id_example' # str | 
    offset = 56 # int |  (optional)
    limit = 56 # int |  (optional)
    list_records_request = iiot_openapi.ListRecordsRequest() # ListRecordsRequest |  (optional)

    try:
        # 查询表记录
        api_response = api_instance.list_records(x_auth_token, project_id, table_id, offset=offset, limit=limit, list_records_request=list_records_request)
        print("The response of RecordApi->list_records:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordApi->list_records: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **table_id** | **str**|  | 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **list_records_request** | [**ListRecordsRequest**](ListRecordsRequest.md)|  | [optional] 

### Return type

[**TableRecords**](TableRecords.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_records**
> save_records(x_auth_token, project_id, table_id, save_records_request)

保存表记录

### Example


```python
import iiot_openapi
from iiot_openapi.models.save_records_request import SaveRecordsRequest
from iiot_openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://https:/
# See configuration.py for a list of all supported configuration parameters.
configuration = iiot_openapi.Configuration(
    host = "http://https:/"
)


# Enter a context with an instance of the API client
with iiot_openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = iiot_openapi.RecordApi(api_client)
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    table_id = 'table_id_example' # str | 
    save_records_request = iiot_openapi.SaveRecordsRequest() # SaveRecordsRequest | 

    try:
        # 保存表记录
        api_instance.save_records(x_auth_token, project_id, table_id, save_records_request)
    except Exception as e:
        print("Exception when calling RecordApi->save_records: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **table_id** | **str**|  | 
 **save_records_request** | [**SaveRecordsRequest**](SaveRecordsRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

