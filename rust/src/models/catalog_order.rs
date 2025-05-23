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
pub struct CatalogOrder {
    #[serde(rename = "catalog_id")]
    pub catalog_id: String,
    #[serde(rename = "display_order")]
    pub display_order: i32,
}

impl CatalogOrder {
    pub fn new(catalog_id: String, display_order: i32) -> CatalogOrder {
        CatalogOrder {
            catalog_id,
            display_order,
        }
    }
}

