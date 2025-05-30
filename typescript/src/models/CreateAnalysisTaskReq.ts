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
import type { EventGenSetting } from './EventGenSetting';
import {
    EventGenSettingFromJSON,
    EventGenSettingFromJSONTyped,
    EventGenSettingToJSON,
    EventGenSettingToJSONTyped,
} from './EventGenSetting';
import type { ExpressionSettings } from './ExpressionSettings';
import {
    ExpressionSettingsFromJSON,
    ExpressionSettingsFromJSONTyped,
    ExpressionSettingsToJSON,
    ExpressionSettingsToJSONTyped,
} from './ExpressionSettings';
import type { ComplexSetting } from './ComplexSetting';
import {
    ComplexSettingFromJSON,
    ComplexSettingFromJSONTyped,
    ComplexSettingToJSON,
    ComplexSettingToJSONTyped,
} from './ComplexSetting';
import type { TagMatcher } from './TagMatcher';
import {
    TagMatcherFromJSON,
    TagMatcherFromJSONTyped,
    TagMatcherToJSON,
    TagMatcherToJSONTyped,
} from './TagMatcher';

/**
 * 
 * @export
 * @interface CreateAnalysisTaskReq
 */
export interface CreateAnalysisTaskReq {
    /**
     * 
     * @type {CleanSettings}
     * @memberof CreateAnalysisTaskReq
     */
    cleanSettings?: CleanSettings;
    /**
     * 
     * @type {string}
     * @memberof CreateAnalysisTaskReq
     */
    eventClass?: string;
    /**
     * 
     * @type {EventGenSetting}
     * @memberof CreateAnalysisTaskReq
     */
    eventGenSettings?: EventGenSetting;
    /**
     * 
     * @type {ComplexSetting}
     * @memberof CreateAnalysisTaskReq
     */
    complexSettings?: ComplexSetting;
    /**
     * 
     * @type {ExpressionSettings}
     * @memberof CreateAnalysisTaskReq
     */
    expressionSettings?: ExpressionSettings;
    /**
     * 
     * @type {string}
     * @memberof CreateAnalysisTaskReq
     */
    taskName: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateAnalysisTaskReq
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateAnalysisTaskReq
     */
    calcType: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAnalysisTaskReq
     */
    scheduleType: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAnalysisTaskReq
     */
    period?: string;
    /**
     * 
     * @type {Array<TagMatcher>}
     * @memberof CreateAnalysisTaskReq
     */
    tagMatchers?: Array<TagMatcher>;
}

/**
 * Check if a given object implements the CreateAnalysisTaskReq interface.
 */
export function instanceOfCreateAnalysisTaskReq(value: object): value is CreateAnalysisTaskReq {
    if (!('taskName' in value) || value['taskName'] === undefined) return false;
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    if (!('calcType' in value) || value['calcType'] === undefined) return false;
    if (!('scheduleType' in value) || value['scheduleType'] === undefined) return false;
    return true;
}

export function CreateAnalysisTaskReqFromJSON(json: any): CreateAnalysisTaskReq {
    return CreateAnalysisTaskReqFromJSONTyped(json, false);
}

export function CreateAnalysisTaskReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAnalysisTaskReq {
    if (json == null) {
        return json;
    }
    return {
        
        'cleanSettings': json['clean_settings'] == null ? undefined : CleanSettingsFromJSON(json['clean_settings']),
        'eventClass': json['event_class'] == null ? undefined : json['event_class'],
        'eventGenSettings': json['event_gen_settings'] == null ? undefined : EventGenSettingFromJSON(json['event_gen_settings']),
        'complexSettings': json['complex_settings'] == null ? undefined : ComplexSettingFromJSON(json['complex_settings']),
        'expressionSettings': json['expression_settings'] == null ? undefined : ExpressionSettingsFromJSON(json['expression_settings']),
        'taskName': json['task_name'],
        'enabled': json['enabled'],
        'calcType': json['calc_type'],
        'scheduleType': json['schedule_type'],
        'period': json['period'] == null ? undefined : json['period'],
        'tagMatchers': json['tag_matchers'] == null ? undefined : ((json['tag_matchers'] as Array<any>).map(TagMatcherFromJSON)),
    };
}

export function CreateAnalysisTaskReqToJSON(json: any): CreateAnalysisTaskReq {
    return CreateAnalysisTaskReqToJSONTyped(json, false);
}

export function CreateAnalysisTaskReqToJSONTyped(value?: CreateAnalysisTaskReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'clean_settings': CleanSettingsToJSON(value['cleanSettings']),
        'event_class': value['eventClass'],
        'event_gen_settings': EventGenSettingToJSON(value['eventGenSettings']),
        'complex_settings': ComplexSettingToJSON(value['complexSettings']),
        'expression_settings': ExpressionSettingsToJSON(value['expressionSettings']),
        'task_name': value['taskName'],
        'enabled': value['enabled'],
        'calc_type': value['calcType'],
        'schedule_type': value['scheduleType'],
        'period': value['period'],
        'tag_matchers': value['tagMatchers'] == null ? undefined : ((value['tagMatchers'] as Array<any>).map(TagMatcherToJSON)),
    };
}

