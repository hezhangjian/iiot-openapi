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
 * @interface Expression
 */
export interface Expression {
    /**
     * 
     * @type {string}
     * @memberof Expression
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Expression
     */
    condition?: string;
    /**
     * 
     * @type {string}
     * @memberof Expression
     */
    expression: string;
    /**
     * 
     * @type {string}
     * @memberof Expression
     */
    propertyPath?: string;
}

/**
 * Check if a given object implements the Expression interface.
 */
export function instanceOfExpression(value: object): value is Expression {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('expression' in value) || value['expression'] === undefined) return false;
    return true;
}

export function ExpressionFromJSON(json: any): Expression {
    return ExpressionFromJSONTyped(json, false);
}

export function ExpressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Expression {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'condition': json['condition'] == null ? undefined : json['condition'],
        'expression': json['expression'],
        'propertyPath': json['property_path'] == null ? undefined : json['property_path'],
    };
}

export function ExpressionToJSON(json: any): Expression {
    return ExpressionToJSONTyped(json, false);
}

export function ExpressionToJSONTyped(value?: Expression | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'condition': value['condition'],
        'expression': value['expression'],
        'property_path': value['propertyPath'],
    };
}

