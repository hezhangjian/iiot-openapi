# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from iiot_openapi.models.brief_process_settings import BriefProcessSettings
from iiot_openapi.models.integrated_reports import IntegratedReports
from iiot_openapi.models.it_stat_reports import ITStatReports
from iiot_openapi.models.original_reports import OriginalReports
from iiot_openapi.models.otstat_reports import OtstatReports
from typing import Optional, Set
from typing_extensions import Self

class BriefTable(BaseModel):
    """
    BriefTable
    """ # noqa: E501
    table_id: Optional[StrictStr] = None
    table_name: Optional[StrictStr] = None
    type: Optional[StrictStr] = None
    catalog_id: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    create_time: Optional[StrictStr] = None
    update_time: Optional[StrictStr] = None
    original_reports: Optional[OriginalReports] = None
    integrated_reports: Optional[IntegratedReports] = None
    itstat_reports: Optional[ITStatReports] = None
    otstat_reports: Optional[OtstatReports] = None
    process_settings: Optional[BriefProcessSettings] = None
    __properties: ClassVar[List[str]] = ["table_id", "table_name", "type", "catalog_id", "description", "create_time", "update_time", "original_reports", "integrated_reports", "itstat_reports", "otstat_reports", "process_settings"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of BriefTable from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of original_reports
        if self.original_reports:
            _dict['original_reports'] = self.original_reports.to_dict()
        # override the default output from pydantic by calling `to_dict()` of integrated_reports
        if self.integrated_reports:
            _dict['integrated_reports'] = self.integrated_reports.to_dict()
        # override the default output from pydantic by calling `to_dict()` of itstat_reports
        if self.itstat_reports:
            _dict['itstat_reports'] = self.itstat_reports.to_dict()
        # override the default output from pydantic by calling `to_dict()` of otstat_reports
        if self.otstat_reports:
            _dict['otstat_reports'] = self.otstat_reports.to_dict()
        # override the default output from pydantic by calling `to_dict()` of process_settings
        if self.process_settings:
            _dict['process_settings'] = self.process_settings.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of BriefTable from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "table_id": obj.get("table_id"),
            "table_name": obj.get("table_name"),
            "type": obj.get("type"),
            "catalog_id": obj.get("catalog_id"),
            "description": obj.get("description"),
            "create_time": obj.get("create_time"),
            "update_time": obj.get("update_time"),
            "original_reports": OriginalReports.from_dict(obj["original_reports"]) if obj.get("original_reports") is not None else None,
            "integrated_reports": IntegratedReports.from_dict(obj["integrated_reports"]) if obj.get("integrated_reports") is not None else None,
            "itstat_reports": ITStatReports.from_dict(obj["itstat_reports"]) if obj.get("itstat_reports") is not None else None,
            "otstat_reports": OtstatReports.from_dict(obj["otstat_reports"]) if obj.get("otstat_reports") is not None else None,
            "process_settings": BriefProcessSettings.from_dict(obj["process_settings"]) if obj.get("process_settings") is not None else None
        })
        return _obj


