# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot_openapi.models.integrated_reports import IntegratedReports

class TestIntegratedReports(unittest.TestCase):
    """IntegratedReports unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> IntegratedReports:
        """Test IntegratedReports
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `IntegratedReports`
        """
        model = IntegratedReports()
        if include_optional:
            return IntegratedReports(
                integrated_time = '',
                aging_time = '',
                integrated_status = '',
                integrated_result = ''
            )
        else:
            return IntegratedReports(
        )
        """

    def testIntegratedReports(self):
        """Test IntegratedReports"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
