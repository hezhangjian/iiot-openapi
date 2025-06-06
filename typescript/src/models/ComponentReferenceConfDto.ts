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
import type { ReferenceConfDto } from './ReferenceConfDto';
import {
    ReferenceConfDtoFromJSON,
    ReferenceConfDtoFromJSONTyped,
    ReferenceConfDtoToJSON,
    ReferenceConfDtoToJSONTyped,
} from './ReferenceConfDto';

/**
 * 
 * @export
 * @interface ComponentReferenceConfDto
 */
export interface ComponentReferenceConfDto {
    /**
     * 
     * @type {{ [key: string]: ReferenceConfDto; }}
     * @memberof ComponentReferenceConfDto
     */
    properties?: { [key: string]: ReferenceConfDto; };
    /**
     * 
     * @type {{ [key: string]: ComponentReferenceConfDto; }}
     * @memberof ComponentReferenceConfDto
     */
    components?: { [key: string]: ComponentReferenceConfDto; };
}

/**
 * Check if a given object implements the ComponentReferenceConfDto interface.
 */
export function instanceOfComponentReferenceConfDto(value: object): value is ComponentReferenceConfDto {
    return true;
}

export function ComponentReferenceConfDtoFromJSON(json: any): ComponentReferenceConfDto {
    return ComponentReferenceConfDtoFromJSONTyped(json, false);
}

export function ComponentReferenceConfDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComponentReferenceConfDto {
    if (json == null) {
        return json;
    }
    return {
        
        'properties': json['properties'] == null ? undefined : (mapValues(json['properties'], ReferenceConfDtoFromJSON)),
        'components': json['components'] == null ? undefined : (mapValues(json['components'], ComponentReferenceConfDtoFromJSON)),
    };
}

export function ComponentReferenceConfDtoToJSON(json: any): ComponentReferenceConfDto {
    return ComponentReferenceConfDtoToJSONTyped(json, false);
}

export function ComponentReferenceConfDtoToJSONTyped(value?: ComponentReferenceConfDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'properties': value['properties'] == null ? undefined : (mapValues(value['properties'], ReferenceConfDtoToJSON)),
        'components': value['components'] == null ? undefined : (mapValues(value['components'], ComponentReferenceConfDtoToJSON)),
    };
}

