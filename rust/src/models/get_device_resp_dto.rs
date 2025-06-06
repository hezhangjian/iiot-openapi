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
pub struct GetDeviceRespDto {
    #[serde(rename = "device_id", skip_serializing_if = "Option::is_none")]
    pub device_id: Option<String>,
    #[serde(rename = "device_name", skip_serializing_if = "Option::is_none")]
    pub device_name: Option<String>,
    #[serde(rename = "device_type", skip_serializing_if = "Option::is_none")]
    pub device_type: Option<String>,
    #[serde(rename = "device_status", skip_serializing_if = "Option::is_none")]
    pub device_status: Option<String>,
    #[serde(rename = "create_time", skip_serializing_if = "Option::is_none")]
    pub create_time: Option<String>,
    #[serde(rename = "update_time", skip_serializing_if = "Option::is_none")]
    pub update_time: Option<String>,
}

impl GetDeviceRespDto {
    pub fn new() -> GetDeviceRespDto {
        GetDeviceRespDto {
            device_id: None,
            device_name: None,
            device_type: None,
            device_status: None,
            create_time: None,
            update_time: None,
        }
    }
}

