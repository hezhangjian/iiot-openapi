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
pub struct BatchListThingSnapshotsResp {
    #[serde(rename = "things", skip_serializing_if = "Option::is_none")]
    pub things: Option<Vec<models::BatchListThingSnapshotsRespThingsInner>>,
}

impl BatchListThingSnapshotsResp {
    pub fn new() -> BatchListThingSnapshotsResp {
        BatchListThingSnapshotsResp {
            things: None,
        }
    }
}

