# iiot_openapi.DefaultApi

All URIs are relative to *http://https:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_model**](DefaultApi.md#delete_model) | **DELETE** /v5/{project_id}/models/{model_id} | 删除模型
[**get_model**](DefaultApi.md#get_model) | **GET** /v5/{project_id}/models/{model_id} | 查询单个模型内容


# **delete_model**
> delete_model(project_id, model_id, x_auth_token)

删除模型

### Example


```python
import iiot_openapi
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
    api_instance = iiot_openapi.DefaultApi(api_client)
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

# **get_model**
> Model get_model(x_auth_token, project_id, model_id)

查询单个模型内容

### Example


```python
import iiot_openapi
from iiot_openapi.models.model import Model
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
    api_instance = iiot_openapi.DefaultApi(api_client)
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

