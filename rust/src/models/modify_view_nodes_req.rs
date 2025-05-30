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
pub struct ModifyViewNodesReq {
    #[serde(rename = "catalog_nodes")]
    pub catalog_nodes: Vec<models::ModifyCatalogNode>,
}

impl ModifyViewNodesReq {
    pub fn new(catalog_nodes: Vec<models::ModifyCatalogNode>) -> ModifyViewNodesReq {
        ModifyViewNodesReq {
            catalog_nodes,
        }
    }
}

