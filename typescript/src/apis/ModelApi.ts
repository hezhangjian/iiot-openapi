/* tslint:disable */
/* eslint-disable */
/**
 * IIoT OpenAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateModelRequest,
  Model,
} from '../models/index';
import {
    CreateModelRequestFromJSON,
    CreateModelRequestToJSON,
    ModelFromJSON,
    ModelToJSON,
} from '../models/index';

export interface CreateModelOperationRequest {
    xAuthToken: string;
    projectId: string;
    createModelRequest: CreateModelRequest;
}

/**
 * 
 */
export class ModelApi extends runtime.BaseAPI {

    /**
     * 创建模型
     */
    async createModelRaw(requestParameters: CreateModelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters['xAuthToken'] == null) {
            throw new runtime.RequiredError(
                'xAuthToken',
                'Required parameter "xAuthToken" was null or undefined when calling createModel().'
            );
        }

        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling createModel().'
            );
        }

        if (requestParameters['createModelRequest'] == null) {
            throw new runtime.RequiredError(
                'createModelRequest',
                'Required parameter "createModelRequest" was null or undefined when calling createModel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xAuthToken'] != null) {
            headerParameters['X-Auth-Token'] = String(requestParameters['xAuthToken']);
        }

        const response = await this.request({
            path: `/v5/{project_id}/models`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateModelRequestToJSON(requestParameters['createModelRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     * 创建模型
     */
    async createModel(requestParameters: CreateModelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.createModelRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
