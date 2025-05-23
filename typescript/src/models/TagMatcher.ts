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
 * @interface TagMatcher
 */
export interface TagMatcher {
    /**
     * 
     * @type {string}
     * @memberof TagMatcher
     */
    match: string;
    /**
     * 
     * @type {string}
     * @memberof TagMatcher
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TagMatcher
     */
    values: Array<string>;
}

/**
 * Check if a given object implements the TagMatcher interface.
 */
export function instanceOfTagMatcher(value: object): value is TagMatcher {
    if (!('match' in value) || value['match'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('values' in value) || value['values'] === undefined) return false;
    return true;
}

export function TagMatcherFromJSON(json: any): TagMatcher {
    return TagMatcherFromJSONTyped(json, false);
}

export function TagMatcherFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagMatcher {
    if (json == null) {
        return json;
    }
    return {
        
        'match': json['match'],
        'name': json['name'],
        'values': json['values'],
    };
}

export function TagMatcherToJSON(json: any): TagMatcher {
    return TagMatcherToJSONTyped(json, false);
}

export function TagMatcherToJSONTyped(value?: TagMatcher | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'match': value['match'],
        'name': value['name'],
        'values': value['values'],
    };
}

