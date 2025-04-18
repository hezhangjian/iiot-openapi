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
 * @interface ServiceData
 */
export interface ServiceData {
    /**
     * 
     * @type {string}
     * @memberof ServiceData
     */
    serviceId: string;
    /**
     * 
     * @type {Date}
     * @memberof ServiceData
     */
    eventTime: Date;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ServiceData
     */
    properties: { [key: string]: any; };
}

/**
 * Check if a given object implements the ServiceData interface.
 */
export function instanceOfServiceData(value: object): value is ServiceData {
    if (!('serviceId' in value) || value['serviceId'] === undefined) return false;
    if (!('eventTime' in value) || value['eventTime'] === undefined) return false;
    if (!('properties' in value) || value['properties'] === undefined) return false;
    return true;
}

export function ServiceDataFromJSON(json: any): ServiceData {
    return ServiceDataFromJSONTyped(json, false);
}

export function ServiceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceData {
    if (json == null) {
        return json;
    }
    return {
        
        'serviceId': json['service_id'],
        'eventTime': (new Date(json['event_time'])),
        'properties': json['properties'],
    };
}

export function ServiceDataToJSON(json: any): ServiceData {
    return ServiceDataToJSONTyped(json, false);
}

export function ServiceDataToJSONTyped(value?: ServiceData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'service_id': value['serviceId'],
        'event_time': ((value['eventTime']).toISOString()),
        'properties': value['properties'],
    };
}

