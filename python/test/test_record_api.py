# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot_openapi.api.record_api import RecordApi


class TestRecordApi(unittest.TestCase):
    """RecordApi unit test stubs"""

    def setUp(self) -> None:
        self.api = RecordApi()

    def tearDown(self) -> None:
        pass

    def test_list_records(self) -> None:
        """Test case for list_records

        查询表记录
        """
        pass

    def test_save_records(self) -> None:
        """Test case for save_records

        保存表记录
        """
        pass


if __name__ == '__main__':
    unittest.main()
