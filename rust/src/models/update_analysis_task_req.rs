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
pub struct UpdateAnalysisTaskReq {
    #[serde(rename = "clean_settings", skip_serializing_if = "Option::is_none")]
    pub clean_settings: Option<Box<models::CleanSettings>>,
    #[serde(rename = "event_class", skip_serializing_if = "Option::is_none")]
    pub event_class: Option<String>,
    #[serde(rename = "event_gen_settings", skip_serializing_if = "Option::is_none")]
    pub event_gen_settings: Option<Box<models::EventGenSetting>>,
    #[serde(rename = "complex_settings", skip_serializing_if = "Option::is_none")]
    pub complex_settings: Option<Box<models::ComplexSetting>>,
    #[serde(rename = "expression_settings", skip_serializing_if = "Option::is_none")]
    pub expression_settings: Option<Box<models::ExpressionSettings>>,
    #[serde(rename = "task_name", skip_serializing_if = "Option::is_none")]
    pub task_name: Option<String>,
    #[serde(rename = "enabled", skip_serializing_if = "Option::is_none")]
    pub enabled: Option<bool>,
    #[serde(rename = "period", skip_serializing_if = "Option::is_none")]
    pub period: Option<String>,
    #[serde(rename = "tag_matchers", skip_serializing_if = "Option::is_none")]
    pub tag_matchers: Option<Vec<models::TagMatcher>>,
    #[serde(rename = "condition", skip_serializing_if = "Option::is_none")]
    pub condition: Option<String>,
    #[serde(rename = "expressions", skip_serializing_if = "Option::is_none")]
    pub expressions: Option<Vec<models::Expression>>,
}

impl UpdateAnalysisTaskReq {
    pub fn new() -> UpdateAnalysisTaskReq {
        UpdateAnalysisTaskReq {
            clean_settings: None,
            event_class: None,
            event_gen_settings: None,
            complex_settings: None,
            expression_settings: None,
            task_name: None,
            enabled: None,
            period: None,
            tag_matchers: None,
            condition: None,
            expressions: None,
        }
    }
}

