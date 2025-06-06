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
 * @interface CatalogNode
 */
export interface CatalogNode {
    /**
     * 
     * @type {string}
     * @memberof CatalogNode
     */
    levelId: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogNode
     */
    nodeId: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogNode
     */
    nodeName: string;
    /**
     * 
     * @type {number}
     * @memberof CatalogNode
     */
    displayOrder: number;
}

/**
 * Check if a given object implements the CatalogNode interface.
 */
export function instanceOfCatalogNode(value: object): value is CatalogNode {
    if (!('levelId' in value) || value['levelId'] === undefined) return false;
    if (!('nodeId' in value) || value['nodeId'] === undefined) return false;
    if (!('nodeName' in value) || value['nodeName'] === undefined) return false;
    if (!('displayOrder' in value) || value['displayOrder'] === undefined) return false;
    return true;
}

export function CatalogNodeFromJSON(json: any): CatalogNode {
    return CatalogNodeFromJSONTyped(json, false);
}

export function CatalogNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogNode {
    if (json == null) {
        return json;
    }
    return {
        
        'levelId': json['level_id'],
        'nodeId': json['node_id'],
        'nodeName': json['node_name'],
        'displayOrder': json['display_order'],
    };
}

export function CatalogNodeToJSON(json: any): CatalogNode {
    return CatalogNodeToJSONTyped(json, false);
}

export function CatalogNodeToJSONTyped(value?: CatalogNode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'level_id': value['levelId'],
        'node_id': value['nodeId'],
        'node_name': value['nodeName'],
        'display_order': value['displayOrder'],
    };
}

