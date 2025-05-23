/*
 * IIoT OpenAPI
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.0
 * 
 * Generated by: https://openapi-generator.tech
 */

use crate::models;
use serde::{Deserialize, Serialize};

#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct CreateCatalogReq {
    #[serde(rename = "catalog_id")]
    pub catalog_id: String,
    #[serde(rename = "catalog_name")]
    pub catalog_name: String,
    #[serde(rename = "type")]
    pub r#type: String,
    #[serde(rename = "display_order")]
    pub display_order: i32,
    #[serde(rename = "parent_id")]
    pub parent_id: String,
}

impl CreateCatalogReq {
    pub fn new(catalog_id: String, catalog_name: String, r#type: String, display_order: i32, parent_id: String) -> CreateCatalogReq {
        CreateCatalogReq {
            catalog_id,
            catalog_name,
            r#type,
            display_order,
            parent_id,
        }
    }
}

