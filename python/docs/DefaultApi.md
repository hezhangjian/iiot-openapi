# iiot-openapi.DefaultApi

All URIs are relative to *http://https:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_thing**](DefaultApi.md#create_thing) | **POST** /v5/{project_id}/things | 
[**delete_model**](DefaultApi.md#delete_model) | **DELETE** /v5/{project_id}/models/{model_id} | 删除模型
[**delete_thing**](DefaultApi.md#delete_thing) | **DELETE** /v5/{project_id}/things/{thing_id} | 
[**generate_token**](DefaultApi.md#generate_token) | **POST** /v1/iotstage/auth/tokens | 获取认证 Token
[**get_model**](DefaultApi.md#get_model) | **GET** /v5/{project_id}/models/{model_id} | 查询单个模型内容
[**get_thing**](DefaultApi.md#get_thing) | **GET** /v5/{project_id}/things/{thing_id} | 
[**query_time_series**](DefaultApi.md#query_time_series) | **POST** /v5/{project_id}/things/{thing_id}/time-series/query | 查询 Thing 的属性历史值
[**report_to_api_datasource**](DefaultApi.md#report_to_api_datasource) | **POST** /v5/{project_id}/datasources/{datasource_id}/data | 


# **create_thing**
> Thing create_thing(x_auth_token, project_id, create_thing_request)

### Example


```python
import iiot-openapi
from iiot-openapi.models.create_thing_request import CreateThingRequest
from iiot-openapi.models.thing import Thing
from iiot-openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://https:/
# See configuration.py for a list of all supported configuration parameters.
configuration = iiot-openapi.Configuration(
    host = "http://https:/"
)


# Enter a context with an instance of the API client
with iiot-openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = iiot-openapi.DefaultApi(api_client)
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    create_thing_request = iiot-openapi.CreateThingRequest() # CreateThingRequest | 

    try:
        api_response = api_instance.create_thing(x_auth_token, project_id, create_thing_request)
        print("The response of DefaultApi->create_thing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_thing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **create_thing_request** | [**CreateThingRequest**](CreateThingRequest.md)|  | 

### Return type

[**Thing**](Thing.md)

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

# **delete_model**
> delete_model(project_id, model_id, x_auth_token)

删除模型

### Example


```python
import iiot-openapi
from iiot-openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://https:/
# See configuration.py for a list of all supported configuration parameters.
configuration = iiot-openapi.Configuration(
    host = "http://https:/"
)


# Enter a context with an instance of the API client
with iiot-openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = iiot-openapi.DefaultApi(api_client)
    project_id = 'project_id_example' # str | 
    model_id = 'model_id_example' # str | 
    x_auth_token = 'x_auth_token_example' # str | 

    try:
        # 删除模型
        api_instance.delete_model(project_id, model_id, x_auth_token)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **model_id** | **str**|  | 
 **x_auth_token** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_thing**
> delete_thing(x_auth_token, project_id, thing_id)

### Example


```python
import iiot-openapi
from iiot-openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://https:/
# See configuration.py for a list of all supported configuration parameters.
configuration = iiot-openapi.Configuration(
    host = "http://https:/"
)


# Enter a context with an instance of the API client
with iiot-openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = iiot-openapi.DefaultApi(api_client)
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    thing_id = 'thing_id_example' # str | 

    try:
        api_instance.delete_thing(x_auth_token, project_id, thing_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_thing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **thing_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_token**
> TokenRsp generate_token(create_token_req_dto)

获取认证 Token

### Example


```python
import iiot-openapi
from iiot-openapi.models.create_token_req_dto import CreateTokenReqDTO
from iiot-openapi.models.token_rsp import TokenRsp
from iiot-openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://https:/
# See configuration.py for a list of all supported configuration parameters.
configuration = iiot-openapi.Configuration(
    host = "http://https:/"
)


# Enter a context with an instance of the API client
with iiot-openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = iiot-openapi.DefaultApi(api_client)
    create_token_req_dto = [iiot-openapi.CreateTokenReqDTO()] # List[CreateTokenReqDTO] | 

    try:
        # 获取认证 Token
        api_response = api_instance.generate_token(create_token_req_dto)
        print("The response of DefaultApi->generate_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->generate_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_token_req_dto** | [**List[CreateTokenReqDTO]**](CreateTokenReqDTO.md)|  | 

### Return type

[**TokenRsp**](TokenRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 成功返回 Token |  * X-Subject-Token - 返回的用户 token，用于后续调用 API 时放入 X-Auth-Token <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_model**
> Model get_model(x_auth_token, project_id, model_id)

查询单个模型内容

### Example


```python
import iiot-openapi
from iiot-openapi.models.model import Model
from iiot-openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://https:/
# See configuration.py for a list of all supported configuration parameters.
configuration = iiot-openapi.Configuration(
    host = "http://https:/"
)


# Enter a context with an instance of the API client
with iiot-openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = iiot-openapi.DefaultApi(api_client)
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    model_id = 'model_id_example' # str | 

    try:
        # 查询单个模型内容
        api_response = api_instance.get_model(x_auth_token, project_id, model_id)
        print("The response of DefaultApi->get_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **model_id** | **str**|  | 

### Return type

[**Model**](Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_thing**
> Thing get_thing(x_auth_token, project_id, thing_id)

### Example


```python
import iiot-openapi
from iiot-openapi.models.thing import Thing
from iiot-openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://https:/
# See configuration.py for a list of all supported configuration parameters.
configuration = iiot-openapi.Configuration(
    host = "http://https:/"
)


# Enter a context with an instance of the API client
with iiot-openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = iiot-openapi.DefaultApi(api_client)
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    thing_id = 'thing_id_example' # str | 

    try:
        api_response = api_instance.get_thing(x_auth_token, project_id, thing_id)
        print("The response of DefaultApi->get_thing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_thing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **thing_id** | **str**|  | 

### Return type

[**Thing**](Thing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_time_series**
> TimeSeriesQueryResponse query_time_series(project_id, thing_id, x_auth_token, time_series_query_request)

查询 Thing 的属性历史值

### Example


```python
import iiot-openapi
from iiot-openapi.models.time_series_query_request import TimeSeriesQueryRequest
from iiot-openapi.models.time_series_query_response import TimeSeriesQueryResponse
from iiot-openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://https:/
# See configuration.py for a list of all supported configuration parameters.
configuration = iiot-openapi.Configuration(
    host = "http://https:/"
)


# Enter a context with an instance of the API client
with iiot-openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = iiot-openapi.DefaultApi(api_client)
    project_id = 'project_id_example' # str | 
    thing_id = 'thing_id_example' # str | 
    x_auth_token = 'x_auth_token_example' # str | 
    time_series_query_request = iiot-openapi.TimeSeriesQueryRequest() # TimeSeriesQueryRequest | 

    try:
        # 查询 Thing 的属性历史值
        api_response = api_instance.query_time_series(project_id, thing_id, x_auth_token, time_series_query_request)
        print("The response of DefaultApi->query_time_series:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_time_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **thing_id** | **str**|  | 
 **x_auth_token** | **str**|  | 
 **time_series_query_request** | [**TimeSeriesQueryRequest**](TimeSeriesQueryRequest.md)|  | 

### Return type

[**TimeSeriesQueryResponse**](TimeSeriesQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 成功返回 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_to_api_datasource**
> DatasourceReportResponse report_to_api_datasource(x_auth_token, project_id, datasource_id, datasource_report_request)

### Example


```python
import iiot-openapi
from iiot-openapi.models.datasource_report_request import DatasourceReportRequest
from iiot-openapi.models.datasource_report_response import DatasourceReportResponse
from iiot-openapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://https:/
# See configuration.py for a list of all supported configuration parameters.
configuration = iiot-openapi.Configuration(
    host = "http://https:/"
)


# Enter a context with an instance of the API client
with iiot-openapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = iiot-openapi.DefaultApi(api_client)
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    datasource_id = 'datasource_id_example' # str | 
    datasource_report_request = iiot-openapi.DatasourceReportRequest() # DatasourceReportRequest | 

    try:
        api_response = api_instance.report_to_api_datasource(x_auth_token, project_id, datasource_id, datasource_report_request)
        print("The response of DefaultApi->report_to_api_datasource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->report_to_api_datasource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **datasource_id** | **str**|  | 
 **datasource_report_request** | [**DatasourceReportRequest**](DatasourceReportRequest.md)|  | 

### Return type

[**DatasourceReportResponse**](DatasourceReportResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 上报成功 |  -  |
**400** | 参数错误 |  -  |
**401** | 未授权 |  -  |
**500** | 服务内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

