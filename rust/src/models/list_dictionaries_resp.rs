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
pub struct ListDictionariesResp {
    #[serde(rename = "dictionaries", skip_serializing_if = "Option::is_none")]
    pub dictionaries: Option<Vec<models::BriefDictionary>>,
    #[serde(rename = "count", skip_serializing_if = "Option::is_none")]
    pub count: Option<i32>,
}

impl ListDictionariesResp {
    pub fn new() -> ListDictionariesResp {
        ListDictionariesResp {
            dictionaries: None,
            count: None,
        }
    }
}

