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
/**
 * 
 * @export
 * @interface PropertyValueTime
 */
export interface PropertyValueTime {
    /**
     * 
     * @type {object}
     * @memberof PropertyValueTime
     */
    value?: object;
    /**
     * 
     * @type {string}
     * @memberof PropertyValueTime
     */
    time?: string;
}

/**
 * Check if a given object implements the PropertyValueTime interface.
 */
export function instanceOfPropertyValueTime(value: object): value is PropertyValueTime {
    return true;
}

export function PropertyValueTimeFromJSON(json: any): PropertyValueTime {
    return PropertyValueTimeFromJSONTyped(json, false);
}

export function PropertyValueTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyValueTime {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'] == null ? undefined : json['value'],
        'time': json['time'] == null ? undefined : json['time'],
    };
}

export function PropertyValueTimeToJSON(json: any): PropertyValueTime {
    return PropertyValueTimeToJSONTyped(json, false);
}

export function PropertyValueTimeToJSONTyped(value?: PropertyValueTime | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value': value['value'],
        'time': value['time'],
    };
}

