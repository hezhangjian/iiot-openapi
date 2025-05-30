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
pub struct Model {
    #[serde(rename = "model_id")]
    pub model_id: String,
    #[serde(rename = "model_name")]
    pub model_name: String,
    #[serde(rename = "type", skip_serializing_if = "Option::is_none")]
    pub r#type: Option<Type>,
    #[serde(rename = "description", skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    #[serde(rename = "properties", skip_serializing_if = "Option::is_none")]
    pub properties: Option<Vec<models::PropertyDto>>,
    #[serde(rename = "components", skip_serializing_if = "Option::is_none")]
    pub components: Option<Vec<models::ComponentDto>>,
    #[serde(rename = "create_time", skip_serializing_if = "Option::is_none")]
    pub create_time: Option<String>,
    #[serde(rename = "update_time", skip_serializing_if = "Option::is_none")]
    pub update_time: Option<String>,
}

impl Model {
    pub fn new(model_id: String, model_name: String) -> Model {
        Model {
            model_id,
            model_name,
            r#type: None,
            description: None,
            properties: None,
            components: None,
            create_time: None,
            update_time: None,
        }
    }
}
/// 
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum Type {
    #[serde(rename = "local")]
    Local,
    #[serde(rename = "cascade")]
    Cascade,
}

impl Default for Type {
    fn default() -> Type {
        Self::Local
    }
}

