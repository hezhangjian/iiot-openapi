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
pub struct PropertiesGetResp {
    #[serde(rename = "properties", skip_serializing_if = "Option::is_none")]
    pub properties: Option<std::collections::HashMap<String, models::PropertyValueObject>>,
    #[serde(rename = "components", skip_serializing_if = "Option::is_none")]
    pub components: Option<std::collections::HashMap<String, models::ComponentProperty>>,
    #[serde(rename = "result_code", skip_serializing_if = "Option::is_none")]
    pub result_code: Option<i32>,
    #[serde(rename = "result_desc", skip_serializing_if = "Option::is_none")]
    pub result_desc: Option<String>,
}

impl PropertiesGetResp {
    pub fn new() -> PropertiesGetResp {
        PropertiesGetResp {
            properties: None,
            components: None,
            result_code: None,
            result_desc: None,
        }
    }
}

