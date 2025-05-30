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

import { mapValues } from '../runtime';
import type { ComponentDto } from './ComponentDto';
import {
    ComponentDtoFromJSON,
    ComponentDtoFromJSONTyped,
    ComponentDtoToJSON,
    ComponentDtoToJSONTyped,
} from './ComponentDto';
import type { PropertyDto } from './PropertyDto';
import {
    PropertyDtoFromJSON,
    PropertyDtoFromJSONTyped,
    PropertyDtoToJSON,
    PropertyDtoToJSONTyped,
} from './PropertyDto';

/**
 * 
 * @export
 * @interface CreateModelRequest
 */
export interface CreateModelRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateModelRequest
     */
    modelId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateModelRequest
     */
    modelName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateModelRequest
     */
    type?: CreateModelRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateModelRequest
     */
    description?: string;
    /**
     * 
     * @type {Array<PropertyDto>}
     * @memberof CreateModelRequest
     */
    properties?: Array<PropertyDto>;
    /**
     * 
     * @type {Array<ComponentDto>}
     * @memberof CreateModelRequest
     */
    components?: Array<ComponentDto>;
}


/**
 * @export
 */
export const CreateModelRequestTypeEnum = {
    Local: 'local',
    Cascade: 'cascade'
} as const;
export type CreateModelRequestTypeEnum = typeof CreateModelRequestTypeEnum[keyof typeof CreateModelRequestTypeEnum];


/**
 * Check if a given object implements the CreateModelRequest interface.
 */
export function instanceOfCreateModelRequest(value: object): value is CreateModelRequest {
    if (!('modelId' in value) || value['modelId'] === undefined) return false;
    if (!('modelName' in value) || value['modelName'] === undefined) return false;
    return true;
}

export function CreateModelRequestFromJSON(json: any): CreateModelRequest {
    return CreateModelRequestFromJSONTyped(json, false);
}

export function CreateModelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateModelRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'modelId': json['model_id'],
        'modelName': json['model_name'],
        'type': json['type'] == null ? undefined : json['type'],
        'description': json['description'] == null ? undefined : json['description'],
        'properties': json['properties'] == null ? undefined : ((json['properties'] as Array<any>).map(PropertyDtoFromJSON)),
        'components': json['components'] == null ? undefined : ((json['components'] as Array<any>).map(ComponentDtoFromJSON)),
    };
}

export function CreateModelRequestToJSON(json: any): CreateModelRequest {
    return CreateModelRequestToJSONTyped(json, false);
}

export function CreateModelRequestToJSONTyped(value?: CreateModelRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'model_id': value['modelId'],
        'model_name': value['modelName'],
        'type': value['type'],
        'description': value['description'],
        'properties': value['properties'] == null ? undefined : ((value['properties'] as Array<any>).map(PropertyDtoToJSON)),
        'components': value['components'] == null ? undefined : ((value['components'] as Array<any>).map(ComponentDtoToJSON)),
    };
}

