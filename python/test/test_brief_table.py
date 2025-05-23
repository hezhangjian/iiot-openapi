# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot_openapi.models.brief_table import BriefTable

class TestBriefTable(unittest.TestCase):
    """BriefTable unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> BriefTable:
        """Test BriefTable
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `BriefTable`
        """
        model = BriefTable()
        if include_optional:
            return BriefTable(
                table_id = '',
                table_name = '',
                type = '',
                catalog_id = '',
                description = '',
                create_time = '',
                update_time = '',
                original_reports = iiot_openapi.models.original_reports.OriginalReports(
                    sync_time = '', 
                    aging_time = '', ),
                integrated_reports = iiot_openapi.models.integrated_reports.IntegratedReports(
                    integrated_time = '', 
                    aging_time = '', 
                    integrated_status = '', 
                    integrated_result = '', ),
                itstat_reports = iiot_openapi.models.it_stat_reports.ITStatReports(
                    stat_time = '', 
                    aging_time = '', 
                    stat_status = '', 
                    stat_result = '', ),
                otstat_reports = iiot_openapi.models.it_stat_reports.ITStatReports(
                    stat_time = '', 
                    aging_time = '', 
                    stat_status = '', 
                    stat_result = '', ),
                process_settings = iiot_openapi.models.brief_process_settings.BriefProcessSettings(
                    enabled = True, 
                    schedule_type = '', 
                    period = '', )
            )
        else:
            return BriefTable(
        )
        """

    def testBriefTable(self):
        """Test BriefTable"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
