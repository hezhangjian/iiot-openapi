# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot_openapi.models.complex_setting import ComplexSetting

class TestComplexSetting(unittest.TestCase):
    """ComplexSetting unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ComplexSetting:
        """Test ComplexSetting
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ComplexSetting`
        """
        model = ComplexSetting()
        if include_optional:
            return ComplexSetting(
                start_trigger = iiot_openapi.models.event_trigger.EventTrigger(
                    condition = '', 
                    duratioin = '', ),
                end_trigger = iiot_openapi.models.event_trigger.EventTrigger(
                    condition = '', 
                    duratioin = '', ),
                expressions = [
                    iiot_openapi.models.event_gen_expression.EventGenExpression(
                        name = '', 
                        class = '', 
                        condition = '', 
                        expression = '', 
                        triggers = [
                            ''
                            ], )
                    ],
                outputs = iiot_openapi.models.prop_gen_output.PropGenOutput(
                    properties = [
                        iiot_openapi.models.prop_output_expression.PropOutputExpression(
                            expression = '', 
                            property_path = '', )
                        ], ),
                subevents = [
                    iiot_openapi.models.sub_event_prop_setting.SubEventPropSetting(
                        name = '', 
                        start_trigger = iiot_openapi.models.event_trigger.EventTrigger(
                            condition = '', 
                            duratioin = '', ), 
                        end_trigger = iiot_openapi.models.event_trigger.EventTrigger(
                            condition = '', 
                            duratioin = '', ), 
                        expressions = [
                            iiot_openapi.models.event_gen_expression.EventGenExpression(
                                name = '', 
                                class = '', 
                                condition = '', 
                                expression = '', 
                                triggers = [
                                    ''
                                    ], )
                            ], )
                    ]
            )
        else:
            return ComplexSetting(
                expressions = [
                    iiot_openapi.models.event_gen_expression.EventGenExpression(
                        name = '', 
                        class = '', 
                        condition = '', 
                        expression = '', 
                        triggers = [
                            ''
                            ], )
                    ],
                outputs = iiot_openapi.models.prop_gen_output.PropGenOutput(
                    properties = [
                        iiot_openapi.models.prop_output_expression.PropOutputExpression(
                            expression = '', 
                            property_path = '', )
                        ], ),
        )
        """

    def testComplexSetting(self):
        """Test ComplexSetting"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
