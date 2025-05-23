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
 * @interface Catalog
 */
export interface Catalog {
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    catalogId?: string;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    catalogName?: string;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof Catalog
     */
    displayOrder?: number;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    createTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Catalog
     */
    updateTime?: string;
}

/**
 * Check if a given object implements the Catalog interface.
 */
export function instanceOfCatalog(value: object): value is Catalog {
    return true;
}

export function CatalogFromJSON(json: any): Catalog {
    return CatalogFromJSONTyped(json, false);
}

export function CatalogFromJSONTyped(json: any, ignoreDiscriminator: boolean): Catalog {
    if (json == null) {
        return json;
    }
    return {
        
        'catalogId': json['catalog_id'] == null ? undefined : json['catalog_id'],
        'catalogName': json['catalog_name'] == null ? undefined : json['catalog_name'],
        'type': json['type'] == null ? undefined : json['type'],
        'displayOrder': json['display_order'] == null ? undefined : json['display_order'],
        'parentId': json['parent_id'] == null ? undefined : json['parent_id'],
        'createTime': json['create_time'] == null ? undefined : json['create_time'],
        'updateTime': json['update_time'] == null ? undefined : json['update_time'],
    };
}

export function CatalogToJSON(json: any): Catalog {
    return CatalogToJSONTyped(json, false);
}

export function CatalogToJSONTyped(value?: Catalog | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'catalog_id': value['catalogId'],
        'catalog_name': value['catalogName'],
        'type': value['type'],
        'display_order': value['displayOrder'],
        'parent_id': value['parentId'],
        'create_time': value['createTime'],
        'update_time': value['updateTime'],
    };
}

