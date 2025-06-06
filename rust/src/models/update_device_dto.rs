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
pub struct UpdateDeviceDto {
    #[serde(rename = "device_name", skip_serializing_if = "Option::is_none")]
    pub device_name: Option<String>,
}

impl UpdateDeviceDto {
    pub fn new() -> UpdateDeviceDto {
        UpdateDeviceDto {
            device_name: None,
        }
    }
}

