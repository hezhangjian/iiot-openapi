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
import type { CleanSettings } from './CleanSettings';
import {
    CleanSettingsFromJSON,
    CleanSettingsFromJSONTyped,
    CleanSettingsToJSON,
    CleanSettingsToJSONTyped,
} from './CleanSettings';

/**
 * 
 * @export
 * @interface CleanAnalysisSettingsDto
 */
export interface CleanAnalysisSettingsDto {
    /**
     * 
     * @type {CleanSettings}
     * @memberof CleanAnalysisSettingsDto
     */
    cleanSettings?: CleanSettings;
}

/**
 * Check if a given object implements the CleanAnalysisSettingsDto interface.
 */
export function instanceOfCleanAnalysisSettingsDto(value: object): value is CleanAnalysisSettingsDto {
    return true;
}

export function CleanAnalysisSettingsDtoFromJSON(json: any): CleanAnalysisSettingsDto {
    return CleanAnalysisSettingsDtoFromJSONTyped(json, false);
}

export function CleanAnalysisSettingsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CleanAnalysisSettingsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'cleanSettings': json['clean_settings'] == null ? undefined : CleanSettingsFromJSON(json['clean_settings']),
    };
}

export function CleanAnalysisSettingsDtoToJSON(json: any): CleanAnalysisSettingsDto {
    return CleanAnalysisSettingsDtoToJSONTyped(json, false);
}

export function CleanAnalysisSettingsDtoToJSONTyped(value?: CleanAnalysisSettingsDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'clean_settings': CleanSettingsToJSON(value['cleanSettings']),
    };
}

