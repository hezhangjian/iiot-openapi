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
pub struct AnalysisTask {
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
    #[serde(rename = "task_id", skip_serializing_if = "Option::is_none")]
    pub task_id: Option<String>,
    #[serde(rename = "task_name", skip_serializing_if = "Option::is_none")]
    pub task_name: Option<String>,
    #[serde(rename = "enabled", skip_serializing_if = "Option::is_none")]
    pub enabled: Option<bool>,
    #[serde(rename = "calc_type", skip_serializing_if = "Option::is_none")]
    pub calc_type: Option<String>,
    #[serde(rename = "schedule_type", skip_serializing_if = "Option::is_none")]
    pub schedule_type: Option<String>,
    #[serde(rename = "period", skip_serializing_if = "Option::is_none")]
    pub period: Option<String>,
    #[serde(rename = "tag_matchers", skip_serializing_if = "Option::is_none")]
    pub tag_matchers: Option<Vec<models::TagMatcher>>,
    #[serde(rename = "create_time", skip_serializing_if = "Option::is_none")]
    pub create_time: Option<String>,
    #[serde(rename = "update_time", skip_serializing_if = "Option::is_none")]
    pub update_time: Option<String>,
}

impl AnalysisTask {
    pub fn new() -> AnalysisTask {
        AnalysisTask {
            clean_settings: None,
            event_class: None,
            event_gen_settings: None,
            complex_settings: None,
            expression_settings: None,
            task_id: None,
            task_name: None,
            enabled: None,
            calc_type: None,
            schedule_type: None,
            period: None,
            tag_matchers: None,
            create_time: None,
            update_time: None,
        }
    }
}

