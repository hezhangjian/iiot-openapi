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
pub struct AnalysisTaskListRsp {
    #[serde(rename = "tasks", skip_serializing_if = "Option::is_none")]
    pub tasks: Option<Vec<models::BriefAnalysisTask>>,
}

impl AnalysisTaskListRsp {
    pub fn new() -> AnalysisTaskListRsp {
        AnalysisTaskListRsp {
            tasks: None,
        }
    }
}

