# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot-openapi.models.time_series_query_response import TimeSeriesQueryResponse

class TestTimeSeriesQueryResponse(unittest.TestCase):
    """TimeSeriesQueryResponse unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> TimeSeriesQueryResponse:
        """Test TimeSeriesQueryResponse
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `TimeSeriesQueryResponse`
        """
        model = TimeSeriesQueryResponse()
        if include_optional:
            return TimeSeriesQueryResponse(
                thing_id = '',
                data = {
                    'key' : iiot-openapi.models.data_list.DataList(
                        timestamps = [
                            56
                            ], 
                        property_values = [
                            iiot-openapi.models.property_values.PropertyValues(
                                property_path = '', 
                                values = [
                                    ''
                                    ], )
                            ], )
                    },
                page_info = { }
            )
        else:
            return TimeSeriesQueryResponse(
        )
        """

    def testTimeSeriesQueryResponse(self):
        """Test TimeSeriesQueryResponse"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
