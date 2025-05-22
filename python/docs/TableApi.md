# iiot_openapi.TableApi

All URIs are relative to *http://https:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_table**](TableApi.md#create_table) | **POST** /v5/{project_id}/tables | 创建表


# **create_table**
> TableInfo create_table(x_auth_token, project_id, create_table_request)

创建表

### Example


```python
import iiot_openapi
from iiot_openapi.models.create_table_request import CreateTableRequest
from iiot_openapi.models.table_info import TableInfo
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
    api_instance = iiot_openapi.TableApi(api_client)
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    create_table_request = iiot_openapi.CreateTableRequest() # CreateTableRequest | 

    try:
        # 创建表
        api_response = api_instance.create_table(x_auth_token, project_id, create_table_request)
        print("The response of TableApi->create_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TableApi->create_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **create_table_request** | [**CreateTableRequest**](CreateTableRequest.md)|  | 

### Return type

[**TableInfo**](TableInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

