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
pub struct DoubleSchema {
    #[serde(rename = "min", skip_serializing_if = "Option::is_none")]
    pub min: Option<f64>,
    #[serde(rename = "max", skip_serializing_if = "Option::is_none")]
    pub max: Option<f64>,
}

impl DoubleSchema {
    pub fn new() -> DoubleSchema {
        DoubleSchema {
            min: None,
            max: None,
        }
    }
}

