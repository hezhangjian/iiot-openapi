# iiot-openapi.ModelApi

All URIs are relative to *http://https:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_model**](ModelApi.md#create_model) | **POST** /v5/{project_id}/models | 


# **create_model**
> Model create_model(x_auth_token, project_id, create_model_request)

### Example


```python
import iiot-openapi
from iiot-openapi.models.create_model_request import CreateModelRequest
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
    api_instance = iiot-openapi.ModelApi(api_client)
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    create_model_request = iiot-openapi.CreateModelRequest() # CreateModelRequest | 

    try:
        api_response = api_instance.create_model(x_auth_token, project_id, create_model_request)
        print("The response of ModelApi->create_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->create_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **create_model_request** | [**CreateModelRequest**](CreateModelRequest.md)|  | 

### Return type

[**Model**](Model.md)

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

