# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot_openapi.models.update_column_schema import UpdateColumnSchema

class TestUpdateColumnSchema(unittest.TestCase):
    """UpdateColumnSchema unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> UpdateColumnSchema:
        """Test UpdateColumnSchema
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `UpdateColumnSchema`
        """
        model = UpdateColumnSchema()
        if include_optional:
            return UpdateColumnSchema(
                id = '',
                name = ''
            )
        else:
            return UpdateColumnSchema(
                id = '',
                name = '',
        )
        """

    def testUpdateColumnSchema(self):
        """Test UpdateColumnSchema"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
