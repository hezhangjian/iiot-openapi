# iiot_openapi.DefaultApi

All URIs are relative to *http://https:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_view_nodes**](DefaultApi.md#add_view_nodes) | **POST** /v5/{project_id}/views/{view_id}/nodes/add | 添加视图节点
[**attach_thing_to_device**](DefaultApi.md#attach_thing_to_device) | **POST** /v5/{project_id}/devices/{device_id}/things | 绑定设备与实例
[**batch_list_snapshots**](DefaultApi.md#batch_list_snapshots) | **POST** /v5/{project_id}/snapshots/get | 批量查询物实例快照
[**create_analysis_task**](DefaultApi.md#create_analysis_task) | **POST** /v5/{project_id}/models/{model_id}/analysis-tasks | 创建单个分析任务
[**create_catalog**](DefaultApi.md#create_catalog) | **POST** /v5/{project_id}/catalogs | 创建目录
[**create_device**](DefaultApi.md#create_device) | **POST** /v5/{project_id}/devices | 创建设备
[**create_dictionary**](DefaultApi.md#create_dictionary) | **POST** /v5/{project_id}/dictionaries | 创建字典
[**create_thing**](DefaultApi.md#create_thing) | **POST** /v5/{project_id}/things | 
[**create_view**](DefaultApi.md#create_view) | **POST** /v5/{project_id}/views | 创建视图
[**delete_analysis_task**](DefaultApi.md#delete_analysis_task) | **DELETE** /v5/{project_id}/models/{model_id}/analysis-tasks/{task_id} | 删除单个分析任务
[**delete_catalog**](DefaultApi.md#delete_catalog) | **DELETE** /v5/{project_id}/catalogs/{catalog_id} | 删除目录
[**delete_device**](DefaultApi.md#delete_device) | **DELETE** /v5/{project_id}/devices/{device_id} | 删除指定设备
[**delete_dictionary**](DefaultApi.md#delete_dictionary) | **DELETE** /v5/{project_id}/dictionaries/{dic_id} | 删除字典
[**delete_model**](DefaultApi.md#delete_model) | **DELETE** /v5/{project_id}/models/{model_id} | 删除模型
[**delete_records**](DefaultApi.md#delete_records) | **POST** /v5/{project_id}/tables/{table_id}/records/delete | 删除表记录
[**delete_table**](DefaultApi.md#delete_table) | **DELETE** /v5/{project_id}/tables/{table_id} | 删除表
[**delete_thing**](DefaultApi.md#delete_thing) | **DELETE** /v5/{project_id}/things/{thing_id} | 
[**delete_view**](DefaultApi.md#delete_view) | **DELETE** /v5/{project_id}/views/{view_id} | 删除视图
[**delete_view_nodes**](DefaultApi.md#delete_view_nodes) | **POST** /v5/{project_id}/views/{view_id}/nodes/delete | 删除视图节点
[**detach_device_and_thing**](DefaultApi.md#detach_device_and_thing) | **DELETE** /v5/{project_id}/devices/{device_id}/things/{thing_id} | 删除设备与实例绑定关系
[**generate_token**](DefaultApi.md#generate_token) | **POST** /v1/iotstage/auth/tokens | 获取认证 Token
[**get_model**](DefaultApi.md#get_model) | **GET** /v5/{project_id}/models/{model_id} | 查询单个模型内容
[**get_thing**](DefaultApi.md#get_thing) | **GET** /v5/{project_id}/things/{thing_id} | 
[**get_thing_properties**](DefaultApi.md#get_thing_properties) | **POST** /v5/{project_id}/things/{thing_id}/properties/get | 获取单个实例关联的设备属性值
[**get_view_data**](DefaultApi.md#get_view_data) | **GET** /v5/{project_id}/views/{view_id}/data | 查询视图数据
[**list_analysis_task_page**](DefaultApi.md#list_analysis_task_page) | **GET** /v5/{project_id}/analysis-tasks | 根据条件查询分析任务列表
[**list_analysis_tasks**](DefaultApi.md#list_analysis_tasks) | **GET** /v5/{project_id}/models/{model_id}/analysis-tasks | 查询模型下分析任务列表
[**list_catalogs**](DefaultApi.md#list_catalogs) | **GET** /v5/{project_id}/catalogs | 查询目录列表
[**list_devices**](DefaultApi.md#list_devices) | **GET** /v5/{project_id}/devices | 查询设备列表
[**list_dictionaries**](DefaultApi.md#list_dictionaries) | **GET** /v5/{project_id}/dictionaries | 查询字典列表
[**list_models**](DefaultApi.md#list_models) | **GET** /v5/{project_id}/models | 分页查询模型列表
[**list_tables**](DefaultApi.md#list_tables) | **GET** /v5/{project_id}/tables | 查询表列表
[**list_thing_snapshot**](DefaultApi.md#list_thing_snapshot) | **GET** /v5/{project_id}/things/{thing_id}/snapshot | 查询物实例快照
[**list_things**](DefaultApi.md#list_things) | **GET** /v5/{project_id}/things | 
[**list_things_in_device**](DefaultApi.md#list_things_in_device) | **GET** /v5/{project_id}/devices/{device_id}/things | 获取指定设备下实例列表
[**list_views**](DefaultApi.md#list_views) | **GET** /v5/{project_id}/views | 查询视图列表
[**modify_view_nodes**](DefaultApi.md#modify_view_nodes) | **POST** /v5/{project_id}/views/{view_id}/nodes/modify | 修改视图节点
[**query_time_series**](DefaultApi.md#query_time_series) | **POST** /v5/{project_id}/things/{thing_id}/time-series/query | 查询 Thing 的属性历史值
[**report_to_api_datasource**](DefaultApi.md#report_to_api_datasource) | **POST** /v5/{project_id}/datasources/{datasource_id}/data | 
[**set_thing_properties**](DefaultApi.md#set_thing_properties) | **POST** /v5/{project_id}/things/{thing_id}/properties/set | 设置物实例关联的设备属性
[**show_analysis_task**](DefaultApi.md#show_analysis_task) | **GET** /v5/{project_id}/models/{model_id}/analysis-tasks/{task_id} | 查询单个分析任务信息
[**show_catalog**](DefaultApi.md#show_catalog) | **GET** /v5/{project_id}/catalogs/{catalog_id} | 查询目录详情
[**show_device**](DefaultApi.md#show_device) | **GET** /v5/{project_id}/devices/{device_id} | 获取指定设备
[**show_dictionary**](DefaultApi.md#show_dictionary) | **GET** /v5/{project_id}/dictionaries/{dic_id} | 查询字典详情
[**show_table**](DefaultApi.md#show_table) | **GET** /v5/{project_id}/tables/{table_id} | 查询表详情
[**show_view**](DefaultApi.md#show_view) | **GET** /v5/{project_id}/views/{view_id} | 查询视图详情
[**show_view_nodes**](DefaultApi.md#show_view_nodes) | **POST** /v5/{project_id}/views/{view_id}/nodes/query | 查询视图节点
[**sync_records**](DefaultApi.md#sync_records) | **GET** /v5/{project_id}/tables/{table_id}/records/sync | 同步表记录
[**update_analysis_task**](DefaultApi.md#update_analysis_task) | **PUT** /v5/{project_id}/models/{model_id}/analysis-tasks/{task_id} | 更新单个分析任务信息
[**update_catalog**](DefaultApi.md#update_catalog) | **PUT** /v5/{project_id}/catalogs/{catalog_id} | 修改目录
[**update_catalogs**](DefaultApi.md#update_catalogs) | **PUT** /v5/{project_id}/catalogs | 批量修改目录
[**update_device**](DefaultApi.md#update_device) | **PUT** /v5/{project_id}/devices/{device_id} | 修改指定设备
[**update_dictionary**](DefaultApi.md#update_dictionary) | **PUT** /v5/{project_id}/dictionaries/{dic_id} | 修改字典
[**update_model**](DefaultApi.md#update_model) | **PUT** /v5/{project_id}/models/{model_id} | 修改模型
[**update_table**](DefaultApi.md#update_table) | **PUT** /v5/{project_id}/tables/{table_id} | 修改表
[**update_thing**](DefaultApi.md#update_thing) | **PUT** /v5/{project_id}/things/{thing_id} | 
[**update_view**](DefaultApi.md#update_view) | **PUT** /v5/{project_id}/views/{view_id} | 修改视图


# **add_view_nodes**
> View add_view_nodes(x_auth_token, project_id, view_id, add_view_nodes_req=add_view_nodes_req)

添加视图节点

### Example


```python
import iiot_openapi
from iiot_openapi.models.add_view_nodes_req import AddViewNodesReq
from iiot_openapi.models.view import View
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
    view_id = 'view_id_example' # str | 
    add_view_nodes_req = iiot_openapi.AddViewNodesReq() # AddViewNodesReq |  (optional)

    try:
        # 添加视图节点
        api_response = api_instance.add_view_nodes(x_auth_token, project_id, view_id, add_view_nodes_req=add_view_nodes_req)
        print("The response of DefaultApi->add_view_nodes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->add_view_nodes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **view_id** | **str**|  | 
 **add_view_nodes_req** | [**AddViewNodesReq**](AddViewNodesReq.md)|  | [optional] 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attach_thing_to_device**
> attach_thing_to_device(x_auth_token, project_id, device_id, attach_thing_req_dto=attach_thing_req_dto)

绑定设备与实例

### Example


```python
import iiot_openapi
from iiot_openapi.models.attach_thing_req_dto import AttachThingReqDTO
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
    device_id = 'device_id_example' # str | 
    attach_thing_req_dto = iiot_openapi.AttachThingReqDTO() # AttachThingReqDTO |  (optional)

    try:
        # 绑定设备与实例
        api_instance.attach_thing_to_device(x_auth_token, project_id, device_id, attach_thing_req_dto=attach_thing_req_dto)
    except Exception as e:
        print("Exception when calling DefaultApi->attach_thing_to_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **device_id** | **str**|  | 
 **attach_thing_req_dto** | [**AttachThingReqDTO**](AttachThingReqDTO.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_list_snapshots**
> BatchListThingSnapshotsResp batch_list_snapshots(x_auth_token, project_id, batch_list_thing_snapshots_req)

批量查询物实例快照

### Example


```python
import iiot_openapi
from iiot_openapi.models.batch_list_thing_snapshots_req import BatchListThingSnapshotsReq
from iiot_openapi.models.batch_list_thing_snapshots_resp import BatchListThingSnapshotsResp
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
    batch_list_thing_snapshots_req = iiot_openapi.BatchListThingSnapshotsReq() # BatchListThingSnapshotsReq | 

    try:
        # 批量查询物实例快照
        api_response = api_instance.batch_list_snapshots(x_auth_token, project_id, batch_list_thing_snapshots_req)
        print("The response of DefaultApi->batch_list_snapshots:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->batch_list_snapshots: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **batch_list_thing_snapshots_req** | [**BatchListThingSnapshotsReq**](BatchListThingSnapshotsReq.md)|  | 

### Return type

[**BatchListThingSnapshotsResp**](BatchListThingSnapshotsResp.md)

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

# **create_analysis_task**
> AnalysisTask create_analysis_task(x_auth_token, project_id, model_id, create_analysis_task_req=create_analysis_task_req)

创建单个分析任务

### Example


```python
import iiot_openapi
from iiot_openapi.models.analysis_task import AnalysisTask
from iiot_openapi.models.create_analysis_task_req import CreateAnalysisTaskReq
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
    create_analysis_task_req = iiot_openapi.CreateAnalysisTaskReq() # CreateAnalysisTaskReq |  (optional)

    try:
        # 创建单个分析任务
        api_response = api_instance.create_analysis_task(x_auth_token, project_id, model_id, create_analysis_task_req=create_analysis_task_req)
        print("The response of DefaultApi->create_analysis_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_analysis_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **model_id** | **str**|  | 
 **create_analysis_task_req** | [**CreateAnalysisTaskReq**](CreateAnalysisTaskReq.md)|  | [optional] 

### Return type

[**AnalysisTask**](AnalysisTask.md)

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

# **create_catalog**
> Catalog create_catalog(x_auth_token, project_id, create_catalog_req=create_catalog_req)

创建目录

### Example


```python
import iiot_openapi
from iiot_openapi.models.catalog import Catalog
from iiot_openapi.models.create_catalog_req import CreateCatalogReq
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
    create_catalog_req = iiot_openapi.CreateCatalogReq() # CreateCatalogReq |  (optional)

    try:
        # 创建目录
        api_response = api_instance.create_catalog(x_auth_token, project_id, create_catalog_req=create_catalog_req)
        print("The response of DefaultApi->create_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **create_catalog_req** | [**CreateCatalogReq**](CreateCatalogReq.md)|  | [optional] 

### Return type

[**Catalog**](Catalog.md)

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

# **create_device**
> CreateDeviceRespDTO create_device(x_auth_token, project_id, create_device_req_dto=create_device_req_dto)

创建设备

### Example


```python
import iiot_openapi
from iiot_openapi.models.create_device_req_dto import CreateDeviceReqDTO
from iiot_openapi.models.create_device_resp_dto import CreateDeviceRespDTO
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
    create_device_req_dto = iiot_openapi.CreateDeviceReqDTO() # CreateDeviceReqDTO |  (optional)

    try:
        # 创建设备
        api_response = api_instance.create_device(x_auth_token, project_id, create_device_req_dto=create_device_req_dto)
        print("The response of DefaultApi->create_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **create_device_req_dto** | [**CreateDeviceReqDTO**](CreateDeviceReqDTO.md)|  | [optional] 

### Return type

[**CreateDeviceRespDTO**](CreateDeviceRespDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_dictionary**
> Dictionary create_dictionary(x_auth_token, project_id, create_dictionary_req=create_dictionary_req)

创建字典

### Example


```python
import iiot_openapi
from iiot_openapi.models.create_dictionary_req import CreateDictionaryReq
from iiot_openapi.models.dictionary import Dictionary
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
    create_dictionary_req = iiot_openapi.CreateDictionaryReq() # CreateDictionaryReq |  (optional)

    try:
        # 创建字典
        api_response = api_instance.create_dictionary(x_auth_token, project_id, create_dictionary_req=create_dictionary_req)
        print("The response of DefaultApi->create_dictionary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_dictionary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **create_dictionary_req** | [**CreateDictionaryReq**](CreateDictionaryReq.md)|  | [optional] 

### Return type

[**Dictionary**](Dictionary.md)

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

# **create_thing**
> Thing create_thing(x_auth_token, project_id, create_thing_request)

### Example


```python
import iiot_openapi
from iiot_openapi.models.create_thing_request import CreateThingRequest
from iiot_openapi.models.thing import Thing
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
    create_thing_request = iiot_openapi.CreateThingRequest() # CreateThingRequest | 

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

# **create_view**
> View create_view(x_auth_token, project_id, create_view_req=create_view_req)

创建视图

### Example


```python
import iiot_openapi
from iiot_openapi.models.create_view_req import CreateViewReq
from iiot_openapi.models.view import View
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
    create_view_req = iiot_openapi.CreateViewReq() # CreateViewReq |  (optional)

    try:
        # 创建视图
        api_response = api_instance.create_view(x_auth_token, project_id, create_view_req=create_view_req)
        print("The response of DefaultApi->create_view:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_view: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **create_view_req** | [**CreateViewReq**](CreateViewReq.md)|  | [optional] 

### Return type

[**View**](View.md)

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

# **delete_analysis_task**
> delete_analysis_task(x_auth_token, project_id, model_id, task_id)

删除单个分析任务

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
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    model_id = 'model_id_example' # str | 
    task_id = 'task_id_example' # str | 

    try:
        # 删除单个分析任务
        api_instance.delete_analysis_task(x_auth_token, project_id, model_id, task_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_analysis_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **model_id** | **str**|  | 
 **task_id** | **str**|  | 

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

# **delete_catalog**
> delete_catalog(x_auth_token, project_id, dic_id)

删除目录

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
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    dic_id = 'dic_id_example' # str | 

    try:
        # 删除目录
        api_instance.delete_catalog(x_auth_token, project_id, dic_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **dic_id** | **str**|  | 

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

# **delete_device**
> delete_device(x_auth_token, project_id, device_id)

删除指定设备

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
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # 删除指定设备
        api_instance.delete_device(x_auth_token, project_id, device_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **device_id** | **str**|  | 

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

# **delete_dictionary**
> delete_dictionary(x_auth_token, project_id, dic_id)

删除字典

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
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    dic_id = 'dic_id_example' # str | 

    try:
        # 删除字典
        api_instance.delete_dictionary(x_auth_token, project_id, dic_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_dictionary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **dic_id** | **str**|  | 

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

# **delete_model**
> delete_model(x_auth_token, project_id, model_id)

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
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    model_id = 'model_id_example' # str | 

    try:
        # 删除模型
        api_instance.delete_model(x_auth_token, project_id, model_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **model_id** | **str**|  | 

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

# **delete_records**
> delete_records(x_auth_token, project_id, table_id, delete_records_request=delete_records_request)

删除表记录

### Example


```python
import iiot_openapi
from iiot_openapi.models.delete_records_request import DeleteRecordsRequest
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
    table_id = 'table_id_example' # str | 
    delete_records_request = iiot_openapi.DeleteRecordsRequest() # DeleteRecordsRequest |  (optional)

    try:
        # 删除表记录
        api_instance.delete_records(x_auth_token, project_id, table_id, delete_records_request=delete_records_request)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_records: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **table_id** | **str**|  | 
 **delete_records_request** | [**DeleteRecordsRequest**](DeleteRecordsRequest.md)|  | [optional] 

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
**204** | Deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_table**
> delete_table(x_auth_token, project_id, table_id)

删除表

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
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    table_id = 'table_id_example' # str | 

    try:
        # 删除表
        api_instance.delete_table(x_auth_token, project_id, table_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **table_id** | **str**|  | 

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

# **delete_view**
> delete_view(x_auth_token, project_id, view_id)

删除视图

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
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    view_id = 'view_id_example' # str | 

    try:
        # 删除视图
        api_instance.delete_view(x_auth_token, project_id, view_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_view: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **view_id** | **str**|  | 

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

# **delete_view_nodes**
> delete_view_nodes(x_auth_token, project_id, view_id, delete_view_nodes_req=delete_view_nodes_req)

删除视图节点

### Example


```python
import iiot_openapi
from iiot_openapi.models.delete_view_nodes_req import DeleteViewNodesReq
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
    view_id = 'view_id_example' # str | 
    delete_view_nodes_req = iiot_openapi.DeleteViewNodesReq() # DeleteViewNodesReq |  (optional)

    try:
        # 删除视图节点
        api_instance.delete_view_nodes(x_auth_token, project_id, view_id, delete_view_nodes_req=delete_view_nodes_req)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_view_nodes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **view_id** | **str**|  | 
 **delete_view_nodes_req** | [**DeleteViewNodesReq**](DeleteViewNodesReq.md)|  | [optional] 

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
**204** | Deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **detach_device_and_thing**
> detach_device_and_thing(x_auth_token, project_id, device_id, thing_id)

删除设备与实例绑定关系

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
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    device_id = 'device_id_example' # str | 
    thing_id = 'thing_id_example' # str | 

    try:
        # 删除设备与实例绑定关系
        api_instance.detach_device_and_thing(x_auth_token, project_id, device_id, thing_id)
    except Exception as e:
        print("Exception when calling DefaultApi->detach_device_and_thing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **device_id** | **str**|  | 
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
> Token generate_token(create_token_req_dto)

获取认证 Token

### Example


```python
import iiot_openapi
from iiot_openapi.models.create_token_req_dto import CreateTokenReqDTO
from iiot_openapi.models.token import Token
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
    create_token_req_dto = iiot_openapi.CreateTokenReqDTO() # CreateTokenReqDTO | 

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
 **create_token_req_dto** | [**CreateTokenReqDTO**](CreateTokenReqDTO.md)|  | 

### Return type

[**Token**](Token.md)

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

# **get_thing**
> Thing get_thing(x_auth_token, project_id, thing_id)

### Example


```python
import iiot_openapi
from iiot_openapi.models.thing import Thing
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

# **get_thing_properties**
> PropertiesGetResp get_thing_properties(x_auth_token, project_id, thing_id, properties_get_req=properties_get_req)

获取单个实例关联的设备属性值

### Example


```python
import iiot_openapi
from iiot_openapi.models.properties_get_req import PropertiesGetReq
from iiot_openapi.models.properties_get_resp import PropertiesGetResp
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
    thing_id = 'thing_id_example' # str | 
    properties_get_req = iiot_openapi.PropertiesGetReq() # PropertiesGetReq |  (optional)

    try:
        # 获取单个实例关联的设备属性值
        api_response = api_instance.get_thing_properties(x_auth_token, project_id, thing_id, properties_get_req=properties_get_req)
        print("The response of DefaultApi->get_thing_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_thing_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **thing_id** | **str**|  | 
 **properties_get_req** | [**PropertiesGetReq**](PropertiesGetReq.md)|  | [optional] 

### Return type

[**PropertiesGetResp**](PropertiesGetResp.md)

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

# **get_view_data**
> ViewData get_view_data(x_auth_token, project_id, view_id)

查询视图数据

### Example


```python
import iiot_openapi
from iiot_openapi.models.view_data import ViewData
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
    view_id = 'view_id_example' # str | 

    try:
        # 查询视图数据
        api_response = api_instance.get_view_data(x_auth_token, project_id, view_id)
        print("The response of DefaultApi->get_view_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_view_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **view_id** | **str**|  | 

### Return type

[**ViewData**](ViewData.md)

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

# **list_analysis_task_page**
> ListAnalysisTaskPageRsp list_analysis_task_page(x_auth_token, project_id, event_class, offset=offset, limit=limit, task_name=task_name, model_name=model_name, enabled=enabled)

根据条件查询分析任务列表

### Example


```python
import iiot_openapi
from iiot_openapi.models.list_analysis_task_page_rsp import ListAnalysisTaskPageRsp
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
    event_class = 'event_class_example' # str | 
    offset = 56 # int |  (optional)
    limit = 56 # int |  (optional)
    task_name = 'task_name_example' # str |  (optional)
    model_name = 'model_name_example' # str |  (optional)
    enabled = True # bool |  (optional)

    try:
        # 根据条件查询分析任务列表
        api_response = api_instance.list_analysis_task_page(x_auth_token, project_id, event_class, offset=offset, limit=limit, task_name=task_name, model_name=model_name, enabled=enabled)
        print("The response of DefaultApi->list_analysis_task_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_analysis_task_page: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **event_class** | **str**|  | 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **task_name** | **str**|  | [optional] 
 **model_name** | **str**|  | [optional] 
 **enabled** | **bool**|  | [optional] 

### Return type

[**ListAnalysisTaskPageRsp**](ListAnalysisTaskPageRsp.md)

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

# **list_analysis_tasks**
> AnalysisTaskListRsp list_analysis_tasks(x_auth_token, project_id, model_id)

查询模型下分析任务列表

### Example


```python
import iiot_openapi
from iiot_openapi.models.analysis_task_list_rsp import AnalysisTaskListRsp
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
        # 查询模型下分析任务列表
        api_response = api_instance.list_analysis_tasks(x_auth_token, project_id, model_id)
        print("The response of DefaultApi->list_analysis_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_analysis_tasks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **model_id** | **str**|  | 

### Return type

[**AnalysisTaskListRsp**](AnalysisTaskListRsp.md)

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

# **list_catalogs**
> ListCatalogsResp list_catalogs(x_auth_token, project_id, offset=offset, limit=limit, parent_id=parent_id, catalog_name=catalog_name, type=type)

查询目录列表

### Example


```python
import iiot_openapi
from iiot_openapi.models.list_catalogs_resp import ListCatalogsResp
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
    offset = 56 # int |  (optional)
    limit = 56 # int |  (optional)
    parent_id = 'parent_id_example' # str |  (optional)
    catalog_name = 'catalog_name_example' # str |  (optional)
    type = 'type_example' # str |  (optional)

    try:
        # 查询目录列表
        api_response = api_instance.list_catalogs(x_auth_token, project_id, offset=offset, limit=limit, parent_id=parent_id, catalog_name=catalog_name, type=type)
        print("The response of DefaultApi->list_catalogs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_catalogs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **parent_id** | **str**|  | [optional] 
 **catalog_name** | **str**|  | [optional] 
 **type** | **str**|  | [optional] 

### Return type

[**ListCatalogsResp**](ListCatalogsResp.md)

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

# **list_devices**
> ListDevicesDTO list_devices(x_auth_token, project_id, device_type, offset=offset, limit=limit, order=order, model_id=model_id, device_name=device_name)

查询设备列表

### Example


```python
import iiot_openapi
from iiot_openapi.models.list_devices_dto import ListDevicesDTO
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
    device_type = 'device_type_example' # str | 
    offset = 56 # int |  (optional)
    limit = 56 # int |  (optional)
    order = 'order_example' # str |  (optional)
    model_id = 'model_id_example' # str |  (optional)
    device_name = 'device_name_example' # str |  (optional)

    try:
        # 查询设备列表
        api_response = api_instance.list_devices(x_auth_token, project_id, device_type, offset=offset, limit=limit, order=order, model_id=model_id, device_name=device_name)
        print("The response of DefaultApi->list_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **device_type** | **str**|  | 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **order** | **str**|  | [optional] 
 **model_id** | **str**|  | [optional] 
 **device_name** | **str**|  | [optional] 

### Return type

[**ListDevicesDTO**](ListDevicesDTO.md)

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

# **list_dictionaries**
> ListDictionariesResp list_dictionaries(x_auth_token, project_id, offset=offset, limit=limit, catalog_id=catalog_id, dic_name=dic_name)

查询字典列表

### Example


```python
import iiot_openapi
from iiot_openapi.models.list_dictionaries_resp import ListDictionariesResp
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
    offset = 56 # int |  (optional)
    limit = 56 # int |  (optional)
    catalog_id = 'catalog_id_example' # str |  (optional)
    dic_name = 'dic_name_example' # str |  (optional)

    try:
        # 查询字典列表
        api_response = api_instance.list_dictionaries(x_auth_token, project_id, offset=offset, limit=limit, catalog_id=catalog_id, dic_name=dic_name)
        print("The response of DefaultApi->list_dictionaries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_dictionaries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **catalog_id** | **str**|  | [optional] 
 **dic_name** | **str**|  | [optional] 

### Return type

[**ListDictionariesResp**](ListDictionariesResp.md)

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

# **list_models**
> ListModelsResp list_models(x_auth_token, project_id, offset=offset, limit=limit, order=order, model_name=model_name, type=type)

分页查询模型列表

### Example


```python
import iiot_openapi
from iiot_openapi.models.list_models_resp import ListModelsResp
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
    offset = 56 # int |  (optional)
    limit = 56 # int |  (optional)
    order = 'order_example' # str |  (optional)
    model_name = 'model_name_example' # str |  (optional)
    type = 'type_example' # str |  (optional)

    try:
        # 分页查询模型列表
        api_response = api_instance.list_models(x_auth_token, project_id, offset=offset, limit=limit, order=order, model_name=model_name, type=type)
        print("The response of DefaultApi->list_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **order** | **str**|  | [optional] 
 **model_name** | **str**|  | [optional] 
 **type** | **str**|  | [optional] 

### Return type

[**ListModelsResp**](ListModelsResp.md)

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

# **list_tables**
> ListTablesResp list_tables(x_auth_token, project_id, offset=offset, limit=limit, catalog_id=catalog_id, table_name=table_name, type=type)

查询表列表

### Example


```python
import iiot_openapi
from iiot_openapi.models.list_tables_resp import ListTablesResp
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
    offset = 56 # int |  (optional)
    limit = 56 # int |  (optional)
    catalog_id = 'catalog_id_example' # str |  (optional)
    table_name = 'table_name_example' # str |  (optional)
    type = 'type_example' # str |  (optional)

    try:
        # 查询表列表
        api_response = api_instance.list_tables(x_auth_token, project_id, offset=offset, limit=limit, catalog_id=catalog_id, table_name=table_name, type=type)
        print("The response of DefaultApi->list_tables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_tables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **catalog_id** | **str**|  | [optional] 
 **table_name** | **str**|  | [optional] 
 **type** | **str**|  | [optional] 

### Return type

[**ListTablesResp**](ListTablesResp.md)

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

# **list_thing_snapshot**
> ListSnapshotResp list_thing_snapshot(x_auth_token, project_id, thing_id)

查询物实例快照

### Example


```python
import iiot_openapi
from iiot_openapi.models.list_snapshot_resp import ListSnapshotResp
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
    thing_id = 'thing_id_example' # str | 

    try:
        # 查询物实例快照
        api_response = api_instance.list_thing_snapshot(x_auth_token, project_id, thing_id)
        print("The response of DefaultApi->list_thing_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_thing_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **thing_id** | **str**|  | 

### Return type

[**ListSnapshotResp**](ListSnapshotResp.md)

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

# **list_things**
> ListThingsResp list_things(x_auth_token, project_id, offset=offset, limit=limit, model_id=model_id, thing_name=thing_name, order=order)

### Example


```python
import iiot_openapi
from iiot_openapi.models.list_things_resp import ListThingsResp
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
    offset = 56 # int |  (optional)
    limit = 56 # int |  (optional)
    model_id = 'model_id_example' # str |  (optional)
    thing_name = 'thing_name_example' # str |  (optional)
    order = 'order_example' # str |  (optional)

    try:
        api_response = api_instance.list_things(x_auth_token, project_id, offset=offset, limit=limit, model_id=model_id, thing_name=thing_name, order=order)
        print("The response of DefaultApi->list_things:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_things: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **model_id** | **str**|  | [optional] 
 **thing_name** | **str**|  | [optional] 
 **order** | **str**|  | [optional] 

### Return type

[**ListThingsResp**](ListThingsResp.md)

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

# **list_things_in_device**
> ThingListDTO list_things_in_device(x_auth_token, project_id, device_id, offset=offset, limit=limit, order=order, model_id=model_id, thing_id=thing_id)

获取指定设备下实例列表

### Example


```python
import iiot_openapi
from iiot_openapi.models.thing_list_dto import ThingListDTO
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
    device_id = 'device_id_example' # str | 
    offset = 56 # int |  (optional)
    limit = 56 # int |  (optional)
    order = 'order_example' # str |  (optional)
    model_id = 'model_id_example' # str |  (optional)
    thing_id = 'thing_id_example' # str |  (optional)

    try:
        # 获取指定设备下实例列表
        api_response = api_instance.list_things_in_device(x_auth_token, project_id, device_id, offset=offset, limit=limit, order=order, model_id=model_id, thing_id=thing_id)
        print("The response of DefaultApi->list_things_in_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_things_in_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **device_id** | **str**|  | 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **order** | **str**|  | [optional] 
 **model_id** | **str**|  | [optional] 
 **thing_id** | **str**|  | [optional] 

### Return type

[**ThingListDTO**](ThingListDTO.md)

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

# **list_views**
> ListViewsResp list_views(x_auth_token, project_id)

查询视图列表

### Example


```python
import iiot_openapi
from iiot_openapi.models.list_views_resp import ListViewsResp
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

    try:
        # 查询视图列表
        api_response = api_instance.list_views(x_auth_token, project_id)
        print("The response of DefaultApi->list_views:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_views: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 

### Return type

[**ListViewsResp**](ListViewsResp.md)

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

# **modify_view_nodes**
> modify_view_nodes(x_auth_token, project_id, view_id, modify_view_nodes_req=modify_view_nodes_req)

修改视图节点

### Example


```python
import iiot_openapi
from iiot_openapi.models.modify_view_nodes_req import ModifyViewNodesReq
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
    view_id = 'view_id_example' # str | 
    modify_view_nodes_req = iiot_openapi.ModifyViewNodesReq() # ModifyViewNodesReq |  (optional)

    try:
        # 修改视图节点
        api_instance.modify_view_nodes(x_auth_token, project_id, view_id, modify_view_nodes_req=modify_view_nodes_req)
    except Exception as e:
        print("Exception when calling DefaultApi->modify_view_nodes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **view_id** | **str**|  | 
 **modify_view_nodes_req** | [**ModifyViewNodesReq**](ModifyViewNodesReq.md)|  | [optional] 

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
**204** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_time_series**
> TimeSeriesQueryResponse query_time_series(x_auth_token, project_id, thing_id, time_series_query_request)

查询 Thing 的属性历史值

### Example


```python
import iiot_openapi
from iiot_openapi.models.time_series_query_request import TimeSeriesQueryRequest
from iiot_openapi.models.time_series_query_response import TimeSeriesQueryResponse
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
    thing_id = 'thing_id_example' # str | 
    time_series_query_request = iiot_openapi.TimeSeriesQueryRequest() # TimeSeriesQueryRequest | 

    try:
        # 查询 Thing 的属性历史值
        api_response = api_instance.query_time_series(x_auth_token, project_id, thing_id, time_series_query_request)
        print("The response of DefaultApi->query_time_series:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_time_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **thing_id** | **str**|  | 
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
import iiot_openapi
from iiot_openapi.models.datasource_report_request import DatasourceReportRequest
from iiot_openapi.models.datasource_report_response import DatasourceReportResponse
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
    datasource_id = 'datasource_id_example' # str | 
    datasource_report_request = iiot_openapi.DatasourceReportRequest() # DatasourceReportRequest | 

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

# **set_thing_properties**
> PropertiesSetResp set_thing_properties(x_auth_token, project_id, thing_id, component_property=component_property)

设置物实例关联的设备属性

### Example


```python
import iiot_openapi
from iiot_openapi.models.component_property import ComponentProperty
from iiot_openapi.models.properties_set_resp import PropertiesSetResp
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
    thing_id = 'thing_id_example' # str | 
    component_property = iiot_openapi.ComponentProperty() # ComponentProperty |  (optional)

    try:
        # 设置物实例关联的设备属性
        api_response = api_instance.set_thing_properties(x_auth_token, project_id, thing_id, component_property=component_property)
        print("The response of DefaultApi->set_thing_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->set_thing_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **thing_id** | **str**|  | 
 **component_property** | [**ComponentProperty**](ComponentProperty.md)|  | [optional] 

### Return type

[**PropertiesSetResp**](PropertiesSetResp.md)

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

# **show_analysis_task**
> AnalysisTask show_analysis_task(x_auth_token, project_id, model_id, task_id)

查询单个分析任务信息

### Example


```python
import iiot_openapi
from iiot_openapi.models.analysis_task import AnalysisTask
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
    task_id = 'task_id_example' # str | 

    try:
        # 查询单个分析任务信息
        api_response = api_instance.show_analysis_task(x_auth_token, project_id, model_id, task_id)
        print("The response of DefaultApi->show_analysis_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->show_analysis_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **model_id** | **str**|  | 
 **task_id** | **str**|  | 

### Return type

[**AnalysisTask**](AnalysisTask.md)

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

# **show_catalog**
> Catalog show_catalog(x_auth_token, project_id, catalog_id)

查询目录详情

### Example


```python
import iiot_openapi
from iiot_openapi.models.catalog import Catalog
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
    catalog_id = 'catalog_id_example' # str | 

    try:
        # 查询目录详情
        api_response = api_instance.show_catalog(x_auth_token, project_id, catalog_id)
        print("The response of DefaultApi->show_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->show_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **catalog_id** | **str**|  | 

### Return type

[**Catalog**](Catalog.md)

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

# **show_device**
> GetDeviceRespDTO show_device(x_auth_token, project_id, device_id)

获取指定设备

### Example


```python
import iiot_openapi
from iiot_openapi.models.get_device_resp_dto import GetDeviceRespDTO
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
    device_id = 'device_id_example' # str | 

    try:
        # 获取指定设备
        api_response = api_instance.show_device(x_auth_token, project_id, device_id)
        print("The response of DefaultApi->show_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->show_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**GetDeviceRespDTO**](GetDeviceRespDTO.md)

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

# **show_dictionary**
> Dictionary show_dictionary(x_auth_token, project_id, dic_id)

查询字典详情

### Example


```python
import iiot_openapi
from iiot_openapi.models.dictionary import Dictionary
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
    dic_id = 'dic_id_example' # str | 

    try:
        # 查询字典详情
        api_response = api_instance.show_dictionary(x_auth_token, project_id, dic_id)
        print("The response of DefaultApi->show_dictionary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->show_dictionary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **dic_id** | **str**|  | 

### Return type

[**Dictionary**](Dictionary.md)

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

# **show_table**
> TableInfo show_table(x_auth_token, project_id, table_id)

查询表详情

### Example


```python
import iiot_openapi
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
    api_instance = iiot_openapi.DefaultApi(api_client)
    x_auth_token = 'x_auth_token_example' # str | 
    project_id = 'project_id_example' # str | 
    table_id = 'table_id_example' # str | 

    try:
        # 查询表详情
        api_response = api_instance.show_table(x_auth_token, project_id, table_id)
        print("The response of DefaultApi->show_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->show_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **table_id** | **str**|  | 

### Return type

[**TableInfo**](TableInfo.md)

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

# **show_view**
> View show_view(x_auth_token, project_id, view_id)

查询视图详情

### Example


```python
import iiot_openapi
from iiot_openapi.models.view import View
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
    view_id = 'view_id_example' # str | 

    try:
        # 查询视图详情
        api_response = api_instance.show_view(x_auth_token, project_id, view_id)
        print("The response of DefaultApi->show_view:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->show_view: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **view_id** | **str**|  | 

### Return type

[**View**](View.md)

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

# **show_view_nodes**
> QueryViewNodesRsp show_view_nodes(x_auth_token, project_id, view_id, query_view_nodes_req=query_view_nodes_req)

查询视图节点

### Example


```python
import iiot_openapi
from iiot_openapi.models.query_view_nodes_req import QueryViewNodesReq
from iiot_openapi.models.query_view_nodes_rsp import QueryViewNodesRsp
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
    view_id = 'view_id_example' # str | 
    query_view_nodes_req = iiot_openapi.QueryViewNodesReq() # QueryViewNodesReq |  (optional)

    try:
        # 查询视图节点
        api_response = api_instance.show_view_nodes(x_auth_token, project_id, view_id, query_view_nodes_req=query_view_nodes_req)
        print("The response of DefaultApi->show_view_nodes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->show_view_nodes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **view_id** | **str**|  | 
 **query_view_nodes_req** | [**QueryViewNodesReq**](QueryViewNodesReq.md)|  | [optional] 

### Return type

[**QueryViewNodesRsp**](QueryViewNodesRsp.md)

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

# **sync_records**
> MarkerTableRecords sync_records(x_auth_token, project_id, table_id, update_time=update_time, limit=limit, marker=marker)

同步表记录

### Example


```python
import iiot_openapi
from iiot_openapi.models.marker_table_records import MarkerTableRecords
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
    table_id = 'table_id_example' # str | 
    update_time = 'update_time_example' # str |  (optional)
    limit = 56 # int |  (optional)
    marker = 'marker_example' # str |  (optional)

    try:
        # 同步表记录
        api_response = api_instance.sync_records(x_auth_token, project_id, table_id, update_time=update_time, limit=limit, marker=marker)
        print("The response of DefaultApi->sync_records:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sync_records: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **table_id** | **str**|  | 
 **update_time** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **marker** | **str**|  | [optional] 

### Return type

[**MarkerTableRecords**](MarkerTableRecords.md)

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

# **update_analysis_task**
> AnalysisTask update_analysis_task(x_auth_token, project_id, model_id, task_id, update_analysis_task_req)

更新单个分析任务信息

### Example


```python
import iiot_openapi
from iiot_openapi.models.analysis_task import AnalysisTask
from iiot_openapi.models.update_analysis_task_req import UpdateAnalysisTaskReq
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
    task_id = 'task_id_example' # str | 
    update_analysis_task_req = iiot_openapi.UpdateAnalysisTaskReq() # UpdateAnalysisTaskReq | 

    try:
        # 更新单个分析任务信息
        api_response = api_instance.update_analysis_task(x_auth_token, project_id, model_id, task_id, update_analysis_task_req)
        print("The response of DefaultApi->update_analysis_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_analysis_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **model_id** | **str**|  | 
 **task_id** | **str**|  | 
 **update_analysis_task_req** | [**UpdateAnalysisTaskReq**](UpdateAnalysisTaskReq.md)|  | 

### Return type

[**AnalysisTask**](AnalysisTask.md)

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

# **update_catalog**
> Catalog update_catalog(x_auth_token, project_id, catalog_id, update_catalog_req=update_catalog_req)

修改目录

### Example


```python
import iiot_openapi
from iiot_openapi.models.catalog import Catalog
from iiot_openapi.models.update_catalog_req import UpdateCatalogReq
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
    catalog_id = 'catalog_id_example' # str | 
    update_catalog_req = iiot_openapi.UpdateCatalogReq() # UpdateCatalogReq |  (optional)

    try:
        # 修改目录
        api_response = api_instance.update_catalog(x_auth_token, project_id, catalog_id, update_catalog_req=update_catalog_req)
        print("The response of DefaultApi->update_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **catalog_id** | **str**|  | 
 **update_catalog_req** | [**UpdateCatalogReq**](UpdateCatalogReq.md)|  | [optional] 

### Return type

[**Catalog**](Catalog.md)

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

# **update_catalogs**
> UpdateCatalogsResp update_catalogs(x_auth_token, project_id, update_catalogs_req=update_catalogs_req)

批量修改目录

### Example


```python
import iiot_openapi
from iiot_openapi.models.update_catalogs_req import UpdateCatalogsReq
from iiot_openapi.models.update_catalogs_resp import UpdateCatalogsResp
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
    update_catalogs_req = iiot_openapi.UpdateCatalogsReq() # UpdateCatalogsReq |  (optional)

    try:
        # 批量修改目录
        api_response = api_instance.update_catalogs(x_auth_token, project_id, update_catalogs_req=update_catalogs_req)
        print("The response of DefaultApi->update_catalogs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_catalogs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **update_catalogs_req** | [**UpdateCatalogsReq**](UpdateCatalogsReq.md)|  | [optional] 

### Return type

[**UpdateCatalogsResp**](UpdateCatalogsResp.md)

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

# **update_device**
> GetDeviceRespDTO update_device(x_auth_token, project_id, device_id, update_device_dto=update_device_dto)

修改指定设备

### Example


```python
import iiot_openapi
from iiot_openapi.models.get_device_resp_dto import GetDeviceRespDTO
from iiot_openapi.models.update_device_dto import UpdateDeviceDTO
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
    device_id = 'device_id_example' # str | 
    update_device_dto = iiot_openapi.UpdateDeviceDTO() # UpdateDeviceDTO |  (optional)

    try:
        # 修改指定设备
        api_response = api_instance.update_device(x_auth_token, project_id, device_id, update_device_dto=update_device_dto)
        print("The response of DefaultApi->update_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **device_id** | **str**|  | 
 **update_device_dto** | [**UpdateDeviceDTO**](UpdateDeviceDTO.md)|  | [optional] 

### Return type

[**GetDeviceRespDTO**](GetDeviceRespDTO.md)

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

# **update_dictionary**
> Dictionary update_dictionary(x_auth_token, project_id, dic_id, update_dictionary_req=update_dictionary_req)

修改字典

### Example


```python
import iiot_openapi
from iiot_openapi.models.dictionary import Dictionary
from iiot_openapi.models.update_dictionary_req import UpdateDictionaryReq
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
    dic_id = 'dic_id_example' # str | 
    update_dictionary_req = iiot_openapi.UpdateDictionaryReq() # UpdateDictionaryReq |  (optional)

    try:
        # 修改字典
        api_response = api_instance.update_dictionary(x_auth_token, project_id, dic_id, update_dictionary_req=update_dictionary_req)
        print("The response of DefaultApi->update_dictionary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_dictionary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **dic_id** | **str**|  | 
 **update_dictionary_req** | [**UpdateDictionaryReq**](UpdateDictionaryReq.md)|  | [optional] 

### Return type

[**Dictionary**](Dictionary.md)

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

# **update_model**
> Model update_model(x_auth_token, project_id, model_id, update_model_req)

修改模型

### Example


```python
import iiot_openapi
from iiot_openapi.models.model import Model
from iiot_openapi.models.update_model_req import UpdateModelReq
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
    update_model_req = iiot_openapi.UpdateModelReq() # UpdateModelReq | 

    try:
        # 修改模型
        api_response = api_instance.update_model(x_auth_token, project_id, model_id, update_model_req)
        print("The response of DefaultApi->update_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **model_id** | **str**|  | 
 **update_model_req** | [**UpdateModelReq**](UpdateModelReq.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_table**
> TableInfo update_table(x_auth_token, project_id, table_id, update_table_request=update_table_request)

修改表

### Example


```python
import iiot_openapi
from iiot_openapi.models.table_info import TableInfo
from iiot_openapi.models.update_table_request import UpdateTableRequest
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
    table_id = 'table_id_example' # str | 
    update_table_request = iiot_openapi.UpdateTableRequest() # UpdateTableRequest |  (optional)

    try:
        # 修改表
        api_response = api_instance.update_table(x_auth_token, project_id, table_id, update_table_request=update_table_request)
        print("The response of DefaultApi->update_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **table_id** | **str**|  | 
 **update_table_request** | [**UpdateTableRequest**](UpdateTableRequest.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_thing**
> Thing update_thing(x_auth_token, project_id, thing_id, update_thing_request)

### Example


```python
import iiot_openapi
from iiot_openapi.models.thing import Thing
from iiot_openapi.models.update_thing_request import UpdateThingRequest
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
    thing_id = 'thing_id_example' # str | 
    update_thing_request = iiot_openapi.UpdateThingRequest() # UpdateThingRequest | 

    try:
        api_response = api_instance.update_thing(x_auth_token, project_id, thing_id, update_thing_request)
        print("The response of DefaultApi->update_thing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_thing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **thing_id** | **str**|  | 
 **update_thing_request** | [**UpdateThingRequest**](UpdateThingRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_view**
> View update_view(x_auth_token, project_id, view_id, update_view_req=update_view_req)

修改视图

### Example


```python
import iiot_openapi
from iiot_openapi.models.update_view_req import UpdateViewReq
from iiot_openapi.models.view import View
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
    view_id = 'view_id_example' # str | 
    update_view_req = iiot_openapi.UpdateViewReq() # UpdateViewReq |  (optional)

    try:
        # 修改视图
        api_response = api_instance.update_view(x_auth_token, project_id, view_id, update_view_req=update_view_req)
        print("The response of DefaultApi->update_view:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_view: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_auth_token** | **str**|  | 
 **project_id** | **str**|  | 
 **view_id** | **str**|  | 
 **update_view_req** | [**UpdateViewReq**](UpdateViewReq.md)|  | [optional] 

### Return type

[**View**](View.md)

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

