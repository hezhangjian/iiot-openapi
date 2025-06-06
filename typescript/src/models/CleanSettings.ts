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
import type { Expression } from './Expression';
import {
    ExpressionFromJSON,
    ExpressionFromJSONTyped,
    ExpressionToJSON,
    ExpressionToJSONTyped,
} from './Expression';

/**
 * 
 * @export
 * @interface CleanSettings
 */
export interface CleanSettings {
    /**
     * 
     * @type {string}
     * @memberof CleanSettings
     */
    condition?: string;
    /**
     * 
     * @type {Array<Expression>}
     * @memberof CleanSettings
     */
    expressions: Array<Expression>;
}

/**
 * Check if a given object implements the CleanSettings interface.
 */
export function instanceOfCleanSettings(value: object): value is CleanSettings {
    if (!('expressions' in value) || value['expressions'] === undefined) return false;
    return true;
}

export function CleanSettingsFromJSON(json: any): CleanSettings {
    return CleanSettingsFromJSONTyped(json, false);
}

export function CleanSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CleanSettings {
    if (json == null) {
        return json;
    }
    return {
        
        'condition': json['condition'] == null ? undefined : json['condition'],
        'expressions': ((json['expressions'] as Array<any>).map(ExpressionFromJSON)),
    };
}

export function CleanSettingsToJSON(json: any): CleanSettings {
    return CleanSettingsToJSONTyped(json, false);
}

export function CleanSettingsToJSONTyped(value?: CleanSettings | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'condition': value['condition'],
        'expressions': ((value['expressions'] as Array<any>).map(ExpressionToJSON)),
    };
}

