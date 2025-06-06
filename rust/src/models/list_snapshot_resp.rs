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
pub struct ListSnapshotResp {
    #[serde(rename = "properties", skip_serializing_if = "Option::is_none")]
    pub properties: Option<std::collections::HashMap<String, models::PropertyValueTime>>,
    #[serde(rename = "components", skip_serializing_if = "Option::is_none")]
    pub components: Option<std::collections::HashMap<String, models::ListSnapshotResp>>,
}

impl ListSnapshotResp {
    pub fn new() -> ListSnapshotResp {
        ListSnapshotResp {
            properties: None,
            components: None,
        }
    }
}

