# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot_openapi.models.token_rsp import TokenRsp

class TestTokenRsp(unittest.TestCase):
    """TokenRsp unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> TokenRsp:
        """Test TokenRsp
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `TokenRsp`
        """
        model = TokenRsp()
        if include_optional:
            return TokenRsp(
                access_token = '',
                expires_in = 56
            )
        else:
            return TokenRsp(
        )
        """

    def testTokenRsp(self):
        """Test TokenRsp"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
