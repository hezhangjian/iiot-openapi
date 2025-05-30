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
pub struct UpdateDictionaryReq {
    #[serde(rename = "dic_name", skip_serializing_if = "Option::is_none")]
    pub dic_name: Option<String>,
    #[serde(rename = "catalog_id", skip_serializing_if = "Option::is_none")]
    pub catalog_id: Option<String>,
    #[serde(rename = "values", skip_serializing_if = "Option::is_none")]
    pub values: Option<Vec<models::DicItem>>,
}

impl UpdateDictionaryReq {
    pub fn new() -> UpdateDictionaryReq {
        UpdateDictionaryReq {
            dic_name: None,
            catalog_id: None,
            values: None,
        }
    }
}

