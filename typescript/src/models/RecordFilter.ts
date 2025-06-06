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
 * @interface RecordFilter
 */
export interface RecordFilter {
    /**
     * 
     * @type {string}
     * @memberof RecordFilter
     */
    columnId?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordFilter
     */
    operator?: string;
    /**
     * 
     * @type {object}
     * @memberof RecordFilter
     */
    value?: object;
}

/**
 * Check if a given object implements the RecordFilter interface.
 */
export function instanceOfRecordFilter(value: object): value is RecordFilter {
    return true;
}

export function RecordFilterFromJSON(json: any): RecordFilter {
    return RecordFilterFromJSONTyped(json, false);
}

export function RecordFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'columnId': json['column_id'] == null ? undefined : json['column_id'],
        'operator': json['operator'] == null ? undefined : json['operator'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function RecordFilterToJSON(json: any): RecordFilter {
    return RecordFilterToJSONTyped(json, false);
}

export function RecordFilterToJSONTyped(value?: RecordFilter | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'column_id': value['columnId'],
        'operator': value['operator'],
        'value': value['value'],
    };
}

