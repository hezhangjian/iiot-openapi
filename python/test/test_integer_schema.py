# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot-openapi.models.integer_schema import IntegerSchema

class TestIntegerSchema(unittest.TestCase):
    """IntegerSchema unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> IntegerSchema:
        """Test IntegerSchema
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `IntegerSchema`
        """
        model = IntegerSchema()
        if include_optional:
            return IntegerSchema(
                min = 56,
                max = 56
            )
        else:
            return IntegerSchema(
        )
        """

    def testIntegerSchema(self):
        """Test IntegerSchema"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
