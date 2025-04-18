# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot_openapi.models.property_dto import PropertyDto

class TestPropertyDto(unittest.TestCase):
    """PropertyDto unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PropertyDto:
        """Test PropertyDto
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PropertyDto`
        """
        model = PropertyDto()
        if include_optional:
            return PropertyDto(
                property_id = '',
                property_name = '',
                data_schema = iiot_openapi.models.data_schema.DataSchema(
                    type = 'bool', 
                    integer_schema = iiot_openapi.models.integer_schema.IntegerSchema(
                        min = 56, 
                        max = 56, ), 
                    double_schema = iiot_openapi.models.double_schema.DoubleSchema(
                        min = 1.337, 
                        max = 1.337, ), 
                    string_schema = iiot_openapi.models.string_schema.StringSchema(
                        min_length = 56, 
                        max_length = 56, ), 
                    object_schema = iiot_openapi.models.string_schema.StringSchema(
                        min_length = 56, 
                        max_length = 56, ), ),
                writable = True,
                categories = [
                    ''
                    ],
                description = '',
                unit = '',
                ref_type = 'table',
                table_ref = iiot_openapi.models.table_ref.TableRef(
                    table_id = '', 
                    column_id = '', 
                    where = { }, )
            )
        else:
            return PropertyDto(
                property_id = '',
                property_name = '',
                data_schema = iiot_openapi.models.data_schema.DataSchema(
                    type = 'bool', 
                    integer_schema = iiot_openapi.models.integer_schema.IntegerSchema(
                        min = 56, 
                        max = 56, ), 
                    double_schema = iiot_openapi.models.double_schema.DoubleSchema(
                        min = 1.337, 
                        max = 1.337, ), 
                    string_schema = iiot_openapi.models.string_schema.StringSchema(
                        min_length = 56, 
                        max_length = 56, ), 
                    object_schema = iiot_openapi.models.string_schema.StringSchema(
                        min_length = 56, 
                        max_length = 56, ), ),
        )
        """

    def testPropertyDto(self):
        """Test PropertyDto"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
