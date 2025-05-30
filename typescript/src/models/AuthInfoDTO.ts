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
 * @interface AuthInfoDTO
 */
export interface AuthInfoDTO {
    /**
     * 
     * @type {string}
     * @memberof AuthInfoDTO
     */
    secret?: string;
}

/**
 * Check if a given object implements the AuthInfoDTO interface.
 */
export function instanceOfAuthInfoDTO(value: object): value is AuthInfoDTO {
    return true;
}

export function AuthInfoDTOFromJSON(json: any): AuthInfoDTO {
    return AuthInfoDTOFromJSONTyped(json, false);
}

export function AuthInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthInfoDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'secret': json['secret'] == null ? undefined : json['secret'],
    };
}

export function AuthInfoDTOToJSON(json: any): AuthInfoDTO {
    return AuthInfoDTOToJSONTyped(json, false);
}

export function AuthInfoDTOToJSONTyped(value?: AuthInfoDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'secret': value['secret'],
    };
}

