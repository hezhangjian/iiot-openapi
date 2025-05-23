# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot_openapi.models.list_dictionaries_resp import ListDictionariesResp

class TestListDictionariesResp(unittest.TestCase):
    """ListDictionariesResp unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ListDictionariesResp:
        """Test ListDictionariesResp
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ListDictionariesResp`
        """
        model = ListDictionariesResp()
        if include_optional:
            return ListDictionariesResp(
                dictionaries = [
                    iiot_openapi.models.brief_dictionary.BriefDictionary(
                        dic_id = '', 
                        dic_name = '', 
                        data_type = '', 
                        catalog_id = '', 
                        create_time = '', 
                        update_time = '', )
                    ],
                count = 56
            )
        else:
            return ListDictionariesResp(
        )
        """

    def testListDictionariesResp(self):
        """Test ListDictionariesResp"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
