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
import type { BatchListThingSnapshotsRespThingsInner } from './BatchListThingSnapshotsRespThingsInner';
import {
    BatchListThingSnapshotsRespThingsInnerFromJSON,
    BatchListThingSnapshotsRespThingsInnerFromJSONTyped,
    BatchListThingSnapshotsRespThingsInnerToJSON,
    BatchListThingSnapshotsRespThingsInnerToJSONTyped,
} from './BatchListThingSnapshotsRespThingsInner';

/**
 * 
 * @export
 * @interface BatchListThingSnapshotsResp
 */
export interface BatchListThingSnapshotsResp {
    /**
     * 
     * @type {Array<BatchListThingSnapshotsRespThingsInner>}
     * @memberof BatchListThingSnapshotsResp
     */
    things?: Array<BatchListThingSnapshotsRespThingsInner>;
}

/**
 * Check if a given object implements the BatchListThingSnapshotsResp interface.
 */
export function instanceOfBatchListThingSnapshotsResp(value: object): value is BatchListThingSnapshotsResp {
    return true;
}

export function BatchListThingSnapshotsRespFromJSON(json: any): BatchListThingSnapshotsResp {
    return BatchListThingSnapshotsRespFromJSONTyped(json, false);
}

export function BatchListThingSnapshotsRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchListThingSnapshotsResp {
    if (json == null) {
        return json;
    }
    return {
        
        'things': json['things'] == null ? undefined : ((json['things'] as Array<any>).map(BatchListThingSnapshotsRespThingsInnerFromJSON)),
    };
}

export function BatchListThingSnapshotsRespToJSON(json: any): BatchListThingSnapshotsResp {
    return BatchListThingSnapshotsRespToJSONTyped(json, false);
}

export function BatchListThingSnapshotsRespToJSONTyped(value?: BatchListThingSnapshotsResp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'things': value['things'] == null ? undefined : ((value['things'] as Array<any>).map(BatchListThingSnapshotsRespThingsInnerToJSON)),
    };
}

