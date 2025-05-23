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
 * @interface PropertyValueObject
 */
export interface PropertyValueObject {
    /**
     * 
     * @type {string}
     * @memberof PropertyValueObject
     */
    value: string;
    /**
     * 
     * @type {object}
     * @memberof PropertyValueObject
     */
    object: object;
}

/**
 * Check if a given object implements the PropertyValueObject interface.
 */
export function instanceOfPropertyValueObject(value: object): value is PropertyValueObject {
    if (!('value' in value) || value['value'] === undefined) return false;
    if (!('object' in value) || value['object'] === undefined) return false;
    return true;
}

export function PropertyValueObjectFromJSON(json: any): PropertyValueObject {
    return PropertyValueObjectFromJSONTyped(json, false);
}

export function PropertyValueObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyValueObject {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'],
        'object': json['object'],
    };
}

export function PropertyValueObjectToJSON(json: any): PropertyValueObject {
    return PropertyValueObjectToJSONTyped(json, false);
}

export function PropertyValueObjectToJSONTyped(value?: PropertyValueObject | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value': value['value'],
        'object': value['object'],
    };
}

