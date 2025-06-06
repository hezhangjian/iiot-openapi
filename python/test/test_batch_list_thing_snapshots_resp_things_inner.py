# coding: utf-8

"""
    IIoT OpenAPI

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 5.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from iiot_openapi.models.batch_list_thing_snapshots_resp_things_inner import BatchListThingSnapshotsRespThingsInner

class TestBatchListThingSnapshotsRespThingsInner(unittest.TestCase):
    """BatchListThingSnapshotsRespThingsInner unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> BatchListThingSnapshotsRespThingsInner:
        """Test BatchListThingSnapshotsRespThingsInner
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `BatchListThingSnapshotsRespThingsInner`
        """
        model = BatchListThingSnapshotsRespThingsInner()
        if include_optional:
            return BatchListThingSnapshotsRespThingsInner(
                thing_id = '',
                properties = {
                    'key' : iiot_openapi.models.property_value_time.PropertyValueTime(
                        value = iiot_openapi.models.value.value(), 
                        time = '', )
                    },
                components = {
                    'key' : iiot_openapi.models.list_snapshot_resp.ListSnapshotResp(
                        properties = {
                            'key' : iiot_openapi.models.property_value_time.PropertyValueTime(
                                value = iiot_openapi.models.value.value(), 
                                time = '', )
                            }, 
                        components = {
                            'key' : iiot_openapi.models.list_snapshot_resp.ListSnapshotResp()
                            }, )
                    }
            )
        else:
            return BatchListThingSnapshotsRespThingsInner(
        )
        """

    def testBatchListThingSnapshotsRespThingsInner(self):
        """Test BatchListThingSnapshotsRespThingsInner"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
