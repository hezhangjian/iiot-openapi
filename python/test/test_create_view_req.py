# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot_openapi.models.create_view_req import CreateViewReq

class TestCreateViewReq(unittest.TestCase):
    """CreateViewReq unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CreateViewReq:
        """Test CreateViewReq
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CreateViewReq`
        """
        model = CreateViewReq()
        if include_optional:
            return CreateViewReq(
                view_id = '',
                view_name = '',
                description = ''
            )
        else:
            return CreateViewReq(
                view_id = '',
                view_name = '',
        )
        """

    def testCreateViewReq(self):
        """Test CreateViewReq"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
