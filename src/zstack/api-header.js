export var ApiHeader;
(function (ApiHeader) {
    class SessionInventory {
    }
    ApiHeader.SessionInventory = SessionInventory;
    class APISilentMsg {
        toApiMap() {
            var msg = {
                'org.zstack.test.multinodes.APISilentMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISilentMsg = APISilentMsg;
    class FakePolicyAllowMsg {
        toApiMap() {
            var msg = {
                'org.zstack.test.identity.FakePolicyAllowMsg': this
            };
            return msg;
        }
    }
    ApiHeader.FakePolicyAllowMsg = FakePolicyAllowMsg;
    class FakePolicyDenyMsg {
        toApiMap() {
            var msg = {
                'org.zstack.test.identity.FakePolicyDenyMsg': this
            };
            return msg;
        }
    }
    ApiHeader.FakePolicyDenyMsg = FakePolicyDenyMsg;
    class FakePolicyAllowHas2RoleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.test.identity.FakePolicyAllowHas2RoleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.FakePolicyAllowHas2RoleMsg = FakePolicyAllowHas2RoleMsg;
    class QueryCondition {
    }
    ApiHeader.QueryCondition = QueryCondition;
    class APIQueryGlobalConfigMsg {
        toApiMap() {
            var msg = {
                'org.zstack.core.config.APIQueryGlobalConfigMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryGlobalConfigMsg = APIQueryGlobalConfigMsg;
    class APIListGlobalConfigMsg {
        toApiMap() {
            var msg = {
                'org.zstack.core.config.APIListGlobalConfigMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListGlobalConfigMsg = APIListGlobalConfigMsg;
    class APIGetGlobalConfigMsg {
        toApiMap() {
            var msg = {
                'org.zstack.core.config.APIGetGlobalConfigMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetGlobalConfigMsg = APIGetGlobalConfigMsg;
    class APIUpdateGlobalConfigMsg {
        toApiMap() {
            var msg = {
                'org.zstack.core.config.APIUpdateGlobalConfigMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateGlobalConfigMsg = APIUpdateGlobalConfigMsg;
    class APIGenerateInventoryQueryDetailsMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.query.APIGenerateInventoryQueryDetailsMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGenerateInventoryQueryDetailsMsg = APIGenerateInventoryQueryDetailsMsg;
    class APIGenerateQueryableFieldsMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.query.APIGenerateQueryableFieldsMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGenerateQueryableFieldsMsg = APIGenerateQueryableFieldsMsg;
    class APIGetHostAllocatorStrategiesMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.allocator.APIGetHostAllocatorStrategiesMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetHostAllocatorStrategiesMsg = APIGetHostAllocatorStrategiesMsg;
    class APIGetCpuMemoryCapacityMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.allocator.APIGetCpuMemoryCapacityMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetCpuMemoryCapacityMsg = APIGetCpuMemoryCapacityMsg;
    class APIUpdateVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIUpdateVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateVmInstanceMsg = APIUpdateVmInstanceMsg;
    class APIGetVmAttachableL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIGetVmAttachableL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetVmAttachableL3NetworkMsg = APIGetVmAttachableL3NetworkMsg;
    class APIMigrateVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIMigrateVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIMigrateVmMsg = APIMigrateVmMsg;
    class APIStopVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIStopVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIStopVmInstanceMsg = APIStopVmInstanceMsg;
    class APIChangeInstanceOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIChangeInstanceOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeInstanceOfferingMsg = APIChangeInstanceOfferingMsg;
    class NOVTriple {
    }
    ApiHeader.NOVTriple = NOVTriple;
    class NOLTriple {
    }
    ApiHeader.NOLTriple = NOLTriple;
    class APISearchVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APISearchVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchVmInstanceMsg = APISearchVmInstanceMsg;
    class APIGetVmAttachableDataVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIGetVmAttachableDataVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetVmAttachableDataVolumeMsg = APIGetVmAttachableDataVolumeMsg;
    class APIQueryVmNicMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIQueryVmNicMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryVmNicMsg = APIQueryVmNicMsg;
    class APIAttachL3NetworkToVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIAttachL3NetworkToVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachL3NetworkToVmMsg = APIAttachL3NetworkToVmMsg;
    class APIDestroyVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIDestroyVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDestroyVmInstanceMsg = APIDestroyVmInstanceMsg;
    class APIGetVmMigrationCandidateHostsMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIGetVmMigrationCandidateHostsMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetVmMigrationCandidateHostsMsg = APIGetVmMigrationCandidateHostsMsg;
    class APIQueryVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIQueryVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryVmInstanceMsg = APIQueryVmInstanceMsg;
    class APIDetachL3NetworkFromVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIDetachL3NetworkFromVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachL3NetworkFromVmMsg = APIDetachL3NetworkFromVmMsg;
    class APIListVmNicMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIListVmNicMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListVmNicMsg = APIListVmNicMsg;
    class APIListVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIListVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListVmInstanceMsg = APIListVmInstanceMsg;
    class APIRebootVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIRebootVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRebootVmInstanceMsg = APIRebootVmInstanceMsg;
    class APICreateVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APICreateVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateVmInstanceMsg = APICreateVmInstanceMsg;
    class APIGetVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIGetVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetVmInstanceMsg = APIGetVmInstanceMsg;
    class APIStartVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIStartVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIStartVmInstanceMsg = APIStartVmInstanceMsg;
    class APIChangeImageStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APIChangeImageStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeImageStateMsg = APIChangeImageStateMsg;
    class APIGetImageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APIGetImageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetImageMsg = APIGetImageMsg;
    class APIUpdateImageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APIUpdateImageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateImageMsg = APIUpdateImageMsg;
    class APIDeleteImageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APIDeleteImageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteImageMsg = APIDeleteImageMsg;
    class APISearchImageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APISearchImageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchImageMsg = APISearchImageMsg;
    class APICreateDataVolumeTemplateFromVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APICreateDataVolumeTemplateFromVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateDataVolumeTemplateFromVolumeMsg = APICreateDataVolumeTemplateFromVolumeMsg;
    class APICreateRootVolumeTemplateFromRootVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APICreateRootVolumeTemplateFromRootVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateRootVolumeTemplateFromRootVolumeMsg = APICreateRootVolumeTemplateFromRootVolumeMsg;
    class APIQueryImageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APIQueryImageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryImageMsg = APIQueryImageMsg;
    class APIListImageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APIListImageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListImageMsg = APIListImageMsg;
    class APICreateRootVolumeTemplateFromVolumeSnapshotMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APICreateRootVolumeTemplateFromVolumeSnapshotMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateRootVolumeTemplateFromVolumeSnapshotMsg = APICreateRootVolumeTemplateFromVolumeSnapshotMsg;
    class APIAddImageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APIAddImageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddImageMsg = APIAddImageMsg;
    class APIRequestConsoleAccessMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.console.APIRequestConsoleAccessMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRequestConsoleAccessMsg = APIRequestConsoleAccessMsg;
    class APIBackupDataVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIBackupDataVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIBackupDataVolumeMsg = APIBackupDataVolumeMsg;
    class APIAttachDataVolumeToVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIAttachDataVolumeToVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachDataVolumeToVmMsg = APIAttachDataVolumeToVmMsg;
    class APISearchVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APISearchVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchVolumeMsg = APISearchVolumeMsg;
    class APIUpdateVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIUpdateVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateVolumeMsg = APIUpdateVolumeMsg;
    class APIQueryVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIQueryVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryVolumeMsg = APIQueryVolumeMsg;
    class APICreateDataVolumeFromVolumeSnapshotMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APICreateDataVolumeFromVolumeSnapshotMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateDataVolumeFromVolumeSnapshotMsg = APICreateDataVolumeFromVolumeSnapshotMsg;
    class APICreateDataVolumeFromVolumeTemplateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APICreateDataVolumeFromVolumeTemplateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateDataVolumeFromVolumeTemplateMsg = APICreateDataVolumeFromVolumeTemplateMsg;
    class APIDetachDataVolumeFromVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIDetachDataVolumeFromVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachDataVolumeFromVmMsg = APIDetachDataVolumeFromVmMsg;
    class APIGetVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIGetVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetVolumeMsg = APIGetVolumeMsg;
    class APICreateDataVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APICreateDataVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateDataVolumeMsg = APICreateDataVolumeMsg;
    class APIGetDataVolumeAttachableVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIGetDataVolumeAttachableVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetDataVolumeAttachableVmMsg = APIGetDataVolumeAttachableVmMsg;
    class APIGetVolumeFormatMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIGetVolumeFormatMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetVolumeFormatMsg = APIGetVolumeFormatMsg;
    class APIDeleteDataVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIDeleteDataVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteDataVolumeMsg = APIDeleteDataVolumeMsg;
    class APICreateVolumeSnapshotMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APICreateVolumeSnapshotMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateVolumeSnapshotMsg = APICreateVolumeSnapshotMsg;
    class APIListVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIListVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListVolumeMsg = APIListVolumeMsg;
    class APIChangeVolumeStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIChangeVolumeStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeVolumeStateMsg = APIChangeVolumeStateMsg;
    class APIIsReadyToGoMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.apimediator.APIIsReadyToGoMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIIsReadyToGoMsg = APIIsReadyToGoMsg;
    class APIListDiskOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIListDiskOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListDiskOfferingMsg = APIListDiskOfferingMsg;
    class APIGenerateApiTypeScriptDefinitionMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIGenerateApiTypeScriptDefinitionMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGenerateApiTypeScriptDefinitionMsg = APIGenerateApiTypeScriptDefinitionMsg;
    class APIDeleteDiskOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIDeleteDiskOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteDiskOfferingMsg = APIDeleteDiskOfferingMsg;
    class APIGenerateGroovyClassMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIGenerateGroovyClassMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGenerateGroovyClassMsg = APIGenerateGroovyClassMsg;
    class APIQueryInstanceOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIQueryInstanceOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryInstanceOfferingMsg = APIQueryInstanceOfferingMsg;
    class APIUpdateInstanceOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIUpdateInstanceOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateInstanceOfferingMsg = APIUpdateInstanceOfferingMsg;
    class APICreateInstanceOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APICreateInstanceOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateInstanceOfferingMsg = APICreateInstanceOfferingMsg;
    class APIGenerateApiJsonTemplateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIGenerateApiJsonTemplateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGenerateApiJsonTemplateMsg = APIGenerateApiJsonTemplateMsg;
    class APICreateDiskOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APICreateDiskOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateDiskOfferingMsg = APICreateDiskOfferingMsg;
    class APIGetInstanceOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIGetInstanceOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetInstanceOfferingMsg = APIGetInstanceOfferingMsg;
    class APIListInstanceOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIListInstanceOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListInstanceOfferingMsg = APIListInstanceOfferingMsg;
    class APISearchDnsMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APISearchDnsMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchDnsMsg = APISearchDnsMsg;
    class APISearchDiskOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APISearchDiskOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchDiskOfferingMsg = APISearchDiskOfferingMsg;
    class APIDeleteInstanceOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIDeleteInstanceOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteInstanceOfferingMsg = APIDeleteInstanceOfferingMsg;
    class APIGenerateSqlVOViewMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIGenerateSqlVOViewMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGenerateSqlVOViewMsg = APIGenerateSqlVOViewMsg;
    class APIGenerateTestLinkDocumentMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIGenerateTestLinkDocumentMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGenerateTestLinkDocumentMsg = APIGenerateTestLinkDocumentMsg;
    class APIGetGlobalPropertyMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIGetGlobalPropertyMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetGlobalPropertyMsg = APIGetGlobalPropertyMsg;
    class APIChangeInstanceOfferingStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIChangeInstanceOfferingStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeInstanceOfferingStateMsg = APIChangeInstanceOfferingStateMsg;
    class APIGenerateSqlIndexMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIGenerateSqlIndexMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGenerateSqlIndexMsg = APIGenerateSqlIndexMsg;
    class APIQueryDiskOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIQueryDiskOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryDiskOfferingMsg = APIQueryDiskOfferingMsg;
    class APIGetDiskOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIGetDiskOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetDiskOfferingMsg = APIGetDiskOfferingMsg;
    class APIGenerateSqlForeignKeyMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIGenerateSqlForeignKeyMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGenerateSqlForeignKeyMsg = APIGenerateSqlForeignKeyMsg;
    class APIUpdateDiskOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIUpdateDiskOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateDiskOfferingMsg = APIUpdateDiskOfferingMsg;
    class APIChangeDiskOfferingStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APIChangeDiskOfferingStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeDiskOfferingStateMsg = APIChangeDiskOfferingStateMsg;
    class APISearchInstanceOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.configuration.APISearchInstanceOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchInstanceOfferingMsg = APISearchInstanceOfferingMsg;
    class APISearchPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APISearchPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchPrimaryStorageMsg = APISearchPrimaryStorageMsg;
    class APIGetPrimaryStorageTypesMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIGetPrimaryStorageTypesMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetPrimaryStorageTypesMsg = APIGetPrimaryStorageTypesMsg;
    class APIAttachPrimaryStorageToClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIAttachPrimaryStorageToClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachPrimaryStorageToClusterMsg = APIAttachPrimaryStorageToClusterMsg;
    class APIListPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIListPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListPrimaryStorageMsg = APIListPrimaryStorageMsg;
    class APIGetPrimaryStorageCapacityMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIGetPrimaryStorageCapacityMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetPrimaryStorageCapacityMsg = APIGetPrimaryStorageCapacityMsg;
    class APIUpdatePrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIUpdatePrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdatePrimaryStorageMsg = APIUpdatePrimaryStorageMsg;
    class APIGetPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIGetPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetPrimaryStorageMsg = APIGetPrimaryStorageMsg;
    class APIQueryPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIQueryPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryPrimaryStorageMsg = APIQueryPrimaryStorageMsg;
    class APIChangePrimaryStorageStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIChangePrimaryStorageStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangePrimaryStorageStateMsg = APIChangePrimaryStorageStateMsg;
    class APISyncPrimaryStorageCapacityMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APISyncPrimaryStorageCapacityMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISyncPrimaryStorageCapacityMsg = APISyncPrimaryStorageCapacityMsg;
    class APIDeletePrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIDeletePrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeletePrimaryStorageMsg = APIDeletePrimaryStorageMsg;
    class APIReconnectPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIReconnectPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIReconnectPrimaryStorageMsg = APIReconnectPrimaryStorageMsg;
    class APIDetachPrimaryStorageFromClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIDetachPrimaryStorageFromClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachPrimaryStorageFromClusterMsg = APIDetachPrimaryStorageFromClusterMsg;
    class APIGetPrimaryStorageAllocatorStrategiesMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.primary.APIGetPrimaryStorageAllocatorStrategiesMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetPrimaryStorageAllocatorStrategiesMsg = APIGetPrimaryStorageAllocatorStrategiesMsg;
    class APIQueryVolumeSnapshotTreeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.snapshot.APIQueryVolumeSnapshotTreeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryVolumeSnapshotTreeMsg = APIQueryVolumeSnapshotTreeMsg;
    class APIDeleteVolumeSnapshotMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.snapshot.APIDeleteVolumeSnapshotMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteVolumeSnapshotMsg = APIDeleteVolumeSnapshotMsg;
    class APIUpdateVolumeSnapshotMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.snapshot.APIUpdateVolumeSnapshotMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateVolumeSnapshotMsg = APIUpdateVolumeSnapshotMsg;
    class APIDeleteVolumeSnapshotFromBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.snapshot.APIDeleteVolumeSnapshotFromBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteVolumeSnapshotFromBackupStorageMsg = APIDeleteVolumeSnapshotFromBackupStorageMsg;
    class APIQueryVolumeSnapshotMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.snapshot.APIQueryVolumeSnapshotMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryVolumeSnapshotMsg = APIQueryVolumeSnapshotMsg;
    class APIRevertVolumeFromSnapshotMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.snapshot.APIRevertVolumeFromSnapshotMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRevertVolumeFromSnapshotMsg = APIRevertVolumeFromSnapshotMsg;
    class APIBackupVolumeSnapshotMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.snapshot.APIBackupVolumeSnapshotMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIBackupVolumeSnapshotMsg = APIBackupVolumeSnapshotMsg;
    class APIGetVolumeSnapshotTreeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.snapshot.APIGetVolumeSnapshotTreeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetVolumeSnapshotTreeMsg = APIGetVolumeSnapshotTreeMsg;
    class APIQueryBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIQueryBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryBackupStorageMsg = APIQueryBackupStorageMsg;
    class APIListBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIListBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListBackupStorageMsg = APIListBackupStorageMsg;
    class APIAttachBackupStorageToZoneMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIAttachBackupStorageToZoneMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachBackupStorageToZoneMsg = APIAttachBackupStorageToZoneMsg;
    class APISearchBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APISearchBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchBackupStorageMsg = APISearchBackupStorageMsg;
    class APIGetBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIGetBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetBackupStorageMsg = APIGetBackupStorageMsg;
    class APIGetBackupStorageTypesMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIGetBackupStorageTypesMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetBackupStorageTypesMsg = APIGetBackupStorageTypesMsg;
    class APIChangeBackupStorageStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIChangeBackupStorageStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeBackupStorageStateMsg = APIChangeBackupStorageStateMsg;
    class APIScanBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIScanBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIScanBackupStorageMsg = APIScanBackupStorageMsg;
    class APIGetBackupStorageCapacityMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIGetBackupStorageCapacityMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetBackupStorageCapacityMsg = APIGetBackupStorageCapacityMsg;
    class APIDetachBackupStorageFromZoneMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIDetachBackupStorageFromZoneMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachBackupStorageFromZoneMsg = APIDetachBackupStorageFromZoneMsg;
    class APIUpdateBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIUpdateBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateBackupStorageMsg = APIUpdateBackupStorageMsg;
    class APIDeleteBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.storage.backup.APIDeleteBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteBackupStorageMsg = APIDeleteBackupStorageMsg;
    class APIListL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIListL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListL3NetworkMsg = APIListL3NetworkMsg;
    class APIAddDnsToL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIAddDnsToL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddDnsToL3NetworkMsg = APIAddDnsToL3NetworkMsg;
    class APICreateL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APICreateL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateL3NetworkMsg = APICreateL3NetworkMsg;
    class APIGetFreeIpMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIGetFreeIpMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetFreeIpMsg = APIGetFreeIpMsg;
    class APIUpdateL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIUpdateL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateL3NetworkMsg = APIUpdateL3NetworkMsg;
    class APIDeleteIpRangeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIDeleteIpRangeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteIpRangeMsg = APIDeleteIpRangeMsg;
    class APIChangeL3NetworkStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIChangeL3NetworkStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeL3NetworkStateMsg = APIChangeL3NetworkStateMsg;
    class APIGetL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIGetL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetL3NetworkMsg = APIGetL3NetworkMsg;
    class APIAddIpRangeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIAddIpRangeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddIpRangeMsg = APIAddIpRangeMsg;
    class APIGetL3NetworkTypesMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIGetL3NetworkTypesMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetL3NetworkTypesMsg = APIGetL3NetworkTypesMsg;
    class APISearchL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APISearchL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchL3NetworkMsg = APISearchL3NetworkMsg;
    class APIAddIpRangeByNetworkCidrMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIAddIpRangeByNetworkCidrMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddIpRangeByNetworkCidrMsg = APIAddIpRangeByNetworkCidrMsg;
    class APIQueryIpRangeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIQueryIpRangeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryIpRangeMsg = APIQueryIpRangeMsg;
    class APIRemoveDnsFromL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIRemoveDnsFromL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRemoveDnsFromL3NetworkMsg = APIRemoveDnsFromL3NetworkMsg;
    class APIListIpRangeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIListIpRangeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListIpRangeMsg = APIListIpRangeMsg;
    class APIGetIpAddressCapacityMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIGetIpAddressCapacityMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetIpAddressCapacityMsg = APIGetIpAddressCapacityMsg;
    class APIDeleteL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIDeleteL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteL3NetworkMsg = APIDeleteL3NetworkMsg;
    class APIUpdateIpRangeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIUpdateIpRangeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateIpRangeMsg = APIUpdateIpRangeMsg;
    class APIQueryL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l3.APIQueryL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryL3NetworkMsg = APIQueryL3NetworkMsg;
    class APIAttachNetworkServiceToL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.service.APIAttachNetworkServiceToL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachNetworkServiceToL3NetworkMsg = APIAttachNetworkServiceToL3NetworkMsg;
    class APIAddNetworkServiceProviderMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.service.APIAddNetworkServiceProviderMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddNetworkServiceProviderMsg = APIAddNetworkServiceProviderMsg;
    class APIQueryNetworkServiceL3NetworkRefMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.service.APIQueryNetworkServiceL3NetworkRefMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryNetworkServiceL3NetworkRefMsg = APIQueryNetworkServiceL3NetworkRefMsg;
    class APIAttachNetworkServiceProviderToL2NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.service.APIAttachNetworkServiceProviderToL2NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachNetworkServiceProviderToL2NetworkMsg = APIAttachNetworkServiceProviderToL2NetworkMsg;
    class APISearchNetworkServiceProviderMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.service.APISearchNetworkServiceProviderMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchNetworkServiceProviderMsg = APISearchNetworkServiceProviderMsg;
    class APIDetachNetworkServiceProviderFromL2NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.service.APIDetachNetworkServiceProviderFromL2NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachNetworkServiceProviderFromL2NetworkMsg = APIDetachNetworkServiceProviderFromL2NetworkMsg;
    class APIQueryNetworkServiceProviderMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.service.APIQueryNetworkServiceProviderMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryNetworkServiceProviderMsg = APIQueryNetworkServiceProviderMsg;
    class APIGetNetworkServiceTypesMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.service.APIGetNetworkServiceTypesMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetNetworkServiceTypesMsg = APIGetNetworkServiceTypesMsg;
    class APIGetNetworkServiceProviderMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.service.APIGetNetworkServiceProviderMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetNetworkServiceProviderMsg = APIGetNetworkServiceProviderMsg;
    class APIListNetworkServiceProviderMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.service.APIListNetworkServiceProviderMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListNetworkServiceProviderMsg = APIListNetworkServiceProviderMsg;
    class APIAttachL2NetworkToClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIAttachL2NetworkToClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachL2NetworkToClusterMsg = APIAttachL2NetworkToClusterMsg;
    class APIQueryL2VlanNetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIQueryL2VlanNetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryL2VlanNetworkMsg = APIQueryL2VlanNetworkMsg;
    class APIGetL2NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIGetL2NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetL2NetworkMsg = APIGetL2NetworkMsg;
    class APIListL2NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIListL2NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListL2NetworkMsg = APIListL2NetworkMsg;
    class APISearchL2VlanNetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APISearchL2VlanNetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchL2VlanNetworkMsg = APISearchL2VlanNetworkMsg;
    class APICreateL2VlanNetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APICreateL2VlanNetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateL2VlanNetworkMsg = APICreateL2VlanNetworkMsg;
    class APIDetachL2NetworkFromClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIDetachL2NetworkFromClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachL2NetworkFromClusterMsg = APIDetachL2NetworkFromClusterMsg;
    class APIDeleteL2NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIDeleteL2NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteL2NetworkMsg = APIDeleteL2NetworkMsg;
    class APISearchL2NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APISearchL2NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchL2NetworkMsg = APISearchL2NetworkMsg;
    class APICreateL2NoVlanNetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APICreateL2NoVlanNetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateL2NoVlanNetworkMsg = APICreateL2NoVlanNetworkMsg;
    class APIListL2VlanNetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIListL2VlanNetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListL2VlanNetworkMsg = APIListL2VlanNetworkMsg;
    class APIUpdateL2NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIUpdateL2NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateL2NetworkMsg = APIUpdateL2NetworkMsg;
    class APIGetL2VlanNetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIGetL2VlanNetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetL2VlanNetworkMsg = APIGetL2VlanNetworkMsg;
    class APIGetL2NetworkTypesMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIGetL2NetworkTypesMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetL2NetworkTypesMsg = APIGetL2NetworkTypesMsg;
    class APIQueryL2NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.network.l2.APIQueryL2NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryL2NetworkMsg = APIQueryL2NetworkMsg;
    class APIDeleteSearchIndexMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.search.APIDeleteSearchIndexMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteSearchIndexMsg = APIDeleteSearchIndexMsg;
    class APISearchGenerateSqlTriggerMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.search.APISearchGenerateSqlTriggerMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchGenerateSqlTriggerMsg = APISearchGenerateSqlTriggerMsg;
    class APICreateSearchIndexMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.search.APICreateSearchIndexMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateSearchIndexMsg = APICreateSearchIndexMsg;
    class APIQueryUserTagMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.tag.APIQueryUserTagMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryUserTagMsg = APIQueryUserTagMsg;
    class APIQuerySystemTagMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.tag.APIQuerySystemTagMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQuerySystemTagMsg = APIQuerySystemTagMsg;
    class APIDeleteTagMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.tag.APIDeleteTagMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteTagMsg = APIDeleteTagMsg;
    class APICreateUserTagMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.tag.APICreateUserTagMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateUserTagMsg = APICreateUserTagMsg;
    class APICreateSystemTagMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.tag.APICreateSystemTagMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateSystemTagMsg = APICreateSystemTagMsg;
    class APIUpdateSystemTagMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.tag.APIUpdateSystemTagMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateSystemTagMsg = APIUpdateSystemTagMsg;
    class APIQueryTagMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.tag.APIQueryTagMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryTagMsg = APIQueryTagMsg;
    class APIQueryManagementNodeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.managementnode.APIQueryManagementNodeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryManagementNodeMsg = APIQueryManagementNodeMsg;
    class APIListManagementNodeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.managementnode.APIListManagementNodeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListManagementNodeMsg = APIListManagementNodeMsg;
    class APICreateMessage {
        toApiMap() {
            var msg = {
                'org.zstack.header.message.APICreateMessage': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateMessage = APICreateMessage;
    class APIListClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.cluster.APIListClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListClusterMsg = APIListClusterMsg;
    class APIGetClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.cluster.APIGetClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetClusterMsg = APIGetClusterMsg;
    class APISearchClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.cluster.APISearchClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchClusterMsg = APISearchClusterMsg;
    class APIQueryClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.cluster.APIQueryClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryClusterMsg = APIQueryClusterMsg;
    class APIDeleteClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.cluster.APIDeleteClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteClusterMsg = APIDeleteClusterMsg;
    class APIUpdateClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.cluster.APIUpdateClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateClusterMsg = APIUpdateClusterMsg;
    class APICreateClusterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.cluster.APICreateClusterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateClusterMsg = APICreateClusterMsg;
    class APIChangeClusterStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.cluster.APIChangeClusterStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeClusterStateMsg = APIChangeClusterStateMsg;
    class APIAttachPolicyToUserGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIAttachPolicyToUserGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachPolicyToUserGroupMsg = APIAttachPolicyToUserGroupMsg;
    class APIRemoveUserFromGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIRemoveUserFromGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRemoveUserFromGroupMsg = APIRemoveUserFromGroupMsg;
    class APIAttachPolicyToUserMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIAttachPolicyToUserMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachPolicyToUserMsg = APIAttachPolicyToUserMsg;
    class APIGetAccountMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIGetAccountMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetAccountMsg = APIGetAccountMsg;
    class APIListAccountMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIListAccountMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListAccountMsg = APIListAccountMsg;
    class APIAddUserToGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIAddUserToGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddUserToGroupMsg = APIAddUserToGroupMsg;
    class APIQueryQuotaMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIQueryQuotaMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryQuotaMsg = APIQueryQuotaMsg;
    class APIShareResourceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIShareResourceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIShareResourceMsg = APIShareResourceMsg;
    class APIListPolicyMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIListPolicyMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListPolicyMsg = APIListPolicyMsg;
    class APICreateAccountMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APICreateAccountMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateAccountMsg = APICreateAccountMsg;
    class APIDeleteAccountMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIDeleteAccountMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteAccountMsg = APIDeleteAccountMsg;
    class APICreateUserGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APICreateUserGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateUserGroupMsg = APICreateUserGroupMsg;
    class APICreateUserMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APICreateUserMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateUserMsg = APICreateUserMsg;
    class APILogInByUserMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APILogInByUserMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APILogInByUserMsg = APILogInByUserMsg;
    class APISearchAccountMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APISearchAccountMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchAccountMsg = APISearchAccountMsg;
    class APISearchPolicyMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APISearchPolicyMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchPolicyMsg = APISearchPolicyMsg;
    class APISessionMessage {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APISessionMessage': this
            };
            return msg;
        }
    }
    ApiHeader.APISessionMessage = APISessionMessage;
    class APIGetUserMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIGetUserMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetUserMsg = APIGetUserMsg;
    class APIGetUserGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIGetUserGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetUserGroupMsg = APIGetUserGroupMsg;
    class APIDetachPolicyFromUserGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIDetachPolicyFromUserGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachPolicyFromUserGroupMsg = APIDetachPolicyFromUserGroupMsg;
    class APIUpdateQuotaMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIUpdateQuotaMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateQuotaMsg = APIUpdateQuotaMsg;
    class APIQueryAccountMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIQueryAccountMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryAccountMsg = APIQueryAccountMsg;
    class APIQueryPolicyMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIQueryPolicyMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryPolicyMsg = APIQueryPolicyMsg;
    class APIQueryUserMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIQueryUserMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryUserMsg = APIQueryUserMsg;
    class APIDeletePolicyMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIDeletePolicyMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeletePolicyMsg = APIDeletePolicyMsg;
    class APIRevokeResourceSharingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIRevokeResourceSharingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRevokeResourceSharingMsg = APIRevokeResourceSharingMsg;
    class APILogInByAccountMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APILogInByAccountMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APILogInByAccountMsg = APILogInByAccountMsg;
    class APIValidateSessionMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIValidateSessionMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIValidateSessionMsg = APIValidateSessionMsg;
    class APISearchUserGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APISearchUserGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchUserGroupMsg = APISearchUserGroupMsg;
    class APIListUserMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIListUserMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListUserMsg = APIListUserMsg;
    class APIDeleteUserMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIDeleteUserMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteUserMsg = APIDeleteUserMsg;
    class APIUpdateUserMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIUpdateUserMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateUserMsg = APIUpdateUserMsg;
    class APISearchUserMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APISearchUserMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchUserMsg = APISearchUserMsg;
    class APIUpdateAccountMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIUpdateAccountMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateAccountMsg = APIUpdateAccountMsg;
    class APIDeleteUserGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIDeleteUserGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteUserGroupMsg = APIDeleteUserGroupMsg;
    class APILogOutMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APILogOutMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APILogOutMsg = APILogOutMsg;
    class APIGetPolicyMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIGetPolicyMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetPolicyMsg = APIGetPolicyMsg;
    (function (StatementEffect) {
        StatementEffect[StatementEffect["Allow"] = 0] = "Allow";
        StatementEffect[StatementEffect["Deny"] = 1] = "Deny";
    })(ApiHeader.StatementEffect || (ApiHeader.StatementEffect = {}));
    var StatementEffect = ApiHeader.StatementEffect;
    class Statement {
    }
    ApiHeader.Statement = Statement;
    class APICreatePolicyMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APICreatePolicyMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreatePolicyMsg = APICreatePolicyMsg;
    class APIDetachPolicyFromUserMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIDetachPolicyFromUserMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachPolicyFromUserMsg = APIDetachPolicyFromUserMsg;
    class APIQueryUserGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.identity.APIQueryUserGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryUserGroupMsg = APIQueryUserGroupMsg;
    class APIUpdateZoneMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.zone.APIUpdateZoneMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateZoneMsg = APIUpdateZoneMsg;
    class APIGetZoneMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.zone.APIGetZoneMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetZoneMsg = APIGetZoneMsg;
    class APIDeleteZoneMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.zone.APIDeleteZoneMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteZoneMsg = APIDeleteZoneMsg;
    class APICreateZoneMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.zone.APICreateZoneMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateZoneMsg = APICreateZoneMsg;
    class APISearchZoneMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.zone.APISearchZoneMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchZoneMsg = APISearchZoneMsg;
    class APIQueryZoneMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.zone.APIQueryZoneMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryZoneMsg = APIQueryZoneMsg;
    class APIListZonesMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.zone.APIListZonesMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListZonesMsg = APIListZonesMsg;
    class APIChangeZoneStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.zone.APIChangeZoneStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeZoneStateMsg = APIChangeZoneStateMsg;
    class APIChangeHostStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.host.APIChangeHostStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeHostStateMsg = APIChangeHostStateMsg;
    class APIReconnectHostMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.host.APIReconnectHostMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIReconnectHostMsg = APIReconnectHostMsg;
    class APIListHostMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.host.APIListHostMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListHostMsg = APIListHostMsg;
    class APIUpdateHostMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.host.APIUpdateHostMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateHostMsg = APIUpdateHostMsg;
    class APIDeleteHostMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.host.APIDeleteHostMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteHostMsg = APIDeleteHostMsg;
    class APIGetHostMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.host.APIGetHostMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetHostMsg = APIGetHostMsg;
    class APISearchHostMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.host.APISearchHostMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchHostMsg = APISearchHostMsg;
    class APIGetHypervisorTypesMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.host.APIGetHypervisorTypesMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetHypervisorTypesMsg = APIGetHypervisorTypesMsg;
    class APIQueryHostMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.host.APIQueryHostMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryHostMsg = APIQueryHostMsg;
    class APIAddSimulatorHostMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.simulator.APIAddSimulatorHostMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddSimulatorHostMsg = APIAddSimulatorHostMsg;
    class APIAddSimulatorPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.simulator.storage.primary.APIAddSimulatorPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddSimulatorPrimaryStorageMsg = APIAddSimulatorPrimaryStorageMsg;
    class APIAddSimulatorBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.simulator.storage.backup.APIAddSimulatorBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddSimulatorBackupStorageMsg = APIAddSimulatorBackupStorageMsg;
    class APIListApplianceVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.appliancevm.APIListApplianceVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListApplianceVmMsg = APIListApplianceVmMsg;
    class APIQueryApplianceVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.appliancevm.APIQueryApplianceVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryApplianceVmMsg = APIQueryApplianceVmMsg;
    class APIAddIscsiFileSystemBackendPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.primary.iscsi.APIAddIscsiFileSystemBackendPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddIscsiFileSystemBackendPrimaryStorageMsg = APIAddIscsiFileSystemBackendPrimaryStorageMsg;
    class APIQueryIscsiFileSystemBackendPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.primary.iscsi.APIQueryIscsiFileSystemBackendPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryIscsiFileSystemBackendPrimaryStorageMsg = APIQueryIscsiFileSystemBackendPrimaryStorageMsg;
    class APIUpdateIscsiFileSystemBackendPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.primary.iscsi.APIUpdateIscsiFileSystemBackendPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateIscsiFileSystemBackendPrimaryStorageMsg = APIUpdateIscsiFileSystemBackendPrimaryStorageMsg;
    class APIAddLocalPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.primary.local.APIAddLocalPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddLocalPrimaryStorageMsg = APIAddLocalPrimaryStorageMsg;
    class APIAddSharedMountPointPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.primary.smp.APIAddSharedMountPointPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddSharedMountPointPrimaryStorageMsg = APIAddSharedMountPointPrimaryStorageMsg;
    class APIQueryCephPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.ceph.primary.APIQueryCephPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryCephPrimaryStorageMsg = APIQueryCephPrimaryStorageMsg;
    class APIAddCephPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.ceph.primary.APIAddCephPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddCephPrimaryStorageMsg = APIAddCephPrimaryStorageMsg;
    class APIAddMonToCephPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.ceph.primary.APIAddMonToCephPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddMonToCephPrimaryStorageMsg = APIAddMonToCephPrimaryStorageMsg;
    class APIRemoveMonFromCephPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.ceph.primary.APIRemoveMonFromCephPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRemoveMonFromCephPrimaryStorageMsg = APIRemoveMonFromCephPrimaryStorageMsg;
    class APIAddCephBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.ceph.backup.APIAddCephBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddCephBackupStorageMsg = APIAddCephBackupStorageMsg;
    class APIAddMonToCephBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.ceph.backup.APIAddMonToCephBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddMonToCephBackupStorageMsg = APIAddMonToCephBackupStorageMsg;
    class APIQueryCephBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.ceph.backup.APIQueryCephBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryCephBackupStorageMsg = APIQueryCephBackupStorageMsg;
    class APIRemoveMonFromCephBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.ceph.backup.APIRemoveMonFromCephBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRemoveMonFromCephBackupStorageMsg = APIRemoveMonFromCephBackupStorageMsg;
    class APIQueryFusionstorPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.fusionstor.primary.APIQueryFusionstorPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryFusionstorPrimaryStorageMsg = APIQueryFusionstorPrimaryStorageMsg;
    class APIAddFusionstorPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.fusionstor.primary.APIAddFusionstorPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddFusionstorPrimaryStorageMsg = APIAddFusionstorPrimaryStorageMsg;
    class APIAddMonToFusionstorPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.fusionstor.primary.APIAddMonToFusionstorPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddMonToFusionstorPrimaryStorageMsg = APIAddMonToFusionstorPrimaryStorageMsg;
    class APIRemoveMonFromFusionstorPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.fusionstor.primary.APIRemoveMonFromFusionstorPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRemoveMonFromFusionstorPrimaryStorageMsg = APIRemoveMonFromFusionstorPrimaryStorageMsg;
    class APIAddFusionstorBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.fusionstor.backup.APIAddFusionstorBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddFusionstorBackupStorageMsg = APIAddFusionstorBackupStorageMsg;
    class APIAddMonToFusionstorBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.fusionstor.backup.APIAddMonToFusionstorBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddMonToFusionstorBackupStorageMsg = APIAddMonToFusionstorBackupStorageMsg;
    class APIQueryFusionstorBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.fusionstor.backup.APIQueryFusionstorBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryFusionstorBackupStorageMsg = APIQueryFusionstorBackupStorageMsg;
    class APIRemoveMonFromFusionstorBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.fusionstor.backup.APIRemoveMonFromFusionstorBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRemoveMonFromFusionstorBackupStorageMsg = APIRemoveMonFromFusionstorBackupStorageMsg;
    class APIUpdateKVMHostMsg {
        toApiMap() {
            var msg = {
                'org.zstack.kvm.APIUpdateKVMHostMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateKVMHostMsg = APIUpdateKVMHostMsg;
    class APIAddKVMHostMsg {
        toApiMap() {
            var msg = {
                'org.zstack.kvm.APIAddKVMHostMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddKVMHostMsg = APIAddKVMHostMsg;
    class APIAddNfsPrimaryStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.primary.nfs.APIAddNfsPrimaryStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddNfsPrimaryStorageMsg = APIAddNfsPrimaryStorageMsg;
    class APIGetSftpBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.backup.sftp.APIGetSftpBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetSftpBackupStorageMsg = APIGetSftpBackupStorageMsg;
    class APISearchSftpBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.backup.sftp.APISearchSftpBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchSftpBackupStorageMsg = APISearchSftpBackupStorageMsg;
    class APIQuerySftpBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.backup.sftp.APIQuerySftpBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQuerySftpBackupStorageMsg = APIQuerySftpBackupStorageMsg;
    class APIReconnectSftpBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.backup.sftp.APIReconnectSftpBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIReconnectSftpBackupStorageMsg = APIReconnectSftpBackupStorageMsg;
    class APIUpdateSftpBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.backup.sftp.APIUpdateSftpBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateSftpBackupStorageMsg = APIUpdateSftpBackupStorageMsg;
    class APIAddSftpBackupStorageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.storage.backup.sftp.APIAddSftpBackupStorageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddSftpBackupStorageMsg = APIAddSftpBackupStorageMsg;
    class APIReconnectVirtualRouterMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.virtualrouter.APIReconnectVirtualRouterMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIReconnectVirtualRouterMsg = APIReconnectVirtualRouterMsg;
    class APICreateVirtualRouterVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.virtualrouter.APICreateVirtualRouterVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateVirtualRouterVmMsg = APICreateVirtualRouterVmMsg;
    class APIGetVirtualRouterOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.virtualrouter.APIGetVirtualRouterOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetVirtualRouterOfferingMsg = APIGetVirtualRouterOfferingMsg;
    class APISearchVirtualRouterVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.virtualrouter.APISearchVirtualRouterVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchVirtualRouterVmMsg = APISearchVirtualRouterVmMsg;
    class APIQueryVirtualRouterOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.virtualrouter.APIQueryVirtualRouterOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryVirtualRouterOfferingMsg = APIQueryVirtualRouterOfferingMsg;
    class APICreateVirtualRouterOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.virtualrouter.APICreateVirtualRouterOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateVirtualRouterOfferingMsg = APICreateVirtualRouterOfferingMsg;
    class APIQueryVirtualRouterVmMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.virtualrouter.APIQueryVirtualRouterVmMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryVirtualRouterVmMsg = APIQueryVirtualRouterVmMsg;
    class APISearchVirtualRouterOffingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.virtualrouter.APISearchVirtualRouterOffingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APISearchVirtualRouterOffingMsg = APISearchVirtualRouterOffingMsg;
    class APIUpdateVirtualRouterOfferingMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.virtualrouter.APIUpdateVirtualRouterOfferingMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateVirtualRouterOfferingMsg = APIUpdateVirtualRouterOfferingMsg;
    class APIAttachPortForwardingRuleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.portforwarding.APIAttachPortForwardingRuleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachPortForwardingRuleMsg = APIAttachPortForwardingRuleMsg;
    class APIDetachPortForwardingRuleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.portforwarding.APIDetachPortForwardingRuleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachPortForwardingRuleMsg = APIDetachPortForwardingRuleMsg;
    class APIGetPortForwardingAttachableVmNicsMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.portforwarding.APIGetPortForwardingAttachableVmNicsMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetPortForwardingAttachableVmNicsMsg = APIGetPortForwardingAttachableVmNicsMsg;
    class APIChangePortForwardingRuleStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.portforwarding.APIChangePortForwardingRuleStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangePortForwardingRuleStateMsg = APIChangePortForwardingRuleStateMsg;
    class APIUpdatePortForwardingRuleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.portforwarding.APIUpdatePortForwardingRuleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdatePortForwardingRuleMsg = APIUpdatePortForwardingRuleMsg;
    class APIListPortForwardingRuleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.portforwarding.APIListPortForwardingRuleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListPortForwardingRuleMsg = APIListPortForwardingRuleMsg;
    class APICreatePortForwardingRuleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.portforwarding.APICreatePortForwardingRuleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreatePortForwardingRuleMsg = APICreatePortForwardingRuleMsg;
    class APIQueryPortForwardingRuleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.portforwarding.APIQueryPortForwardingRuleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryPortForwardingRuleMsg = APIQueryPortForwardingRuleMsg;
    class APIDeletePortForwardingRuleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.portforwarding.APIDeletePortForwardingRuleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeletePortForwardingRuleMsg = APIDeletePortForwardingRuleMsg;
    class APIDetachEipMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.eip.APIDetachEipMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachEipMsg = APIDetachEipMsg;
    class APIGetEipAttachableVmNicsMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.eip.APIGetEipAttachableVmNicsMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetEipAttachableVmNicsMsg = APIGetEipAttachableVmNicsMsg;
    class APIUpdateEipMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.eip.APIUpdateEipMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateEipMsg = APIUpdateEipMsg;
    class APIQueryEipMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.eip.APIQueryEipMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryEipMsg = APIQueryEipMsg;
    class APIChangeEipStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.eip.APIChangeEipStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeEipStateMsg = APIChangeEipStateMsg;
    class APIDeleteEipMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.eip.APIDeleteEipMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteEipMsg = APIDeleteEipMsg;
    class APICreateEipMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.eip.APICreateEipMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateEipMsg = APICreateEipMsg;
    class APIAttachEipMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.eip.APIAttachEipMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachEipMsg = APIAttachEipMsg;
    class APIQueryLoadBalancerListenerMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.lb.APIQueryLoadBalancerListenerMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryLoadBalancerListenerMsg = APIQueryLoadBalancerListenerMsg;
    class APIDeleteLoadBalancerMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.lb.APIDeleteLoadBalancerMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteLoadBalancerMsg = APIDeleteLoadBalancerMsg;
    class APICreateLoadBalancerListenerMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.lb.APICreateLoadBalancerListenerMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateLoadBalancerListenerMsg = APICreateLoadBalancerListenerMsg;
    class APIRemoveVmNicFromLoadBalancerMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.lb.APIRemoveVmNicFromLoadBalancerMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRemoveVmNicFromLoadBalancerMsg = APIRemoveVmNicFromLoadBalancerMsg;
    class APIAddVmNicToLoadBalancerMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.lb.APIAddVmNicToLoadBalancerMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddVmNicToLoadBalancerMsg = APIAddVmNicToLoadBalancerMsg;
    class APICreateLoadBalancerMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.lb.APICreateLoadBalancerMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateLoadBalancerMsg = APICreateLoadBalancerMsg;
    class APIRefreshLoadBalancerMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.lb.APIRefreshLoadBalancerMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRefreshLoadBalancerMsg = APIRefreshLoadBalancerMsg;
    class APIDeleteLoadBalancerListenerMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.lb.APIDeleteLoadBalancerListenerMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteLoadBalancerListenerMsg = APIDeleteLoadBalancerListenerMsg;
    class APIQueryLoadBalancerMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.lb.APIQueryLoadBalancerMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryLoadBalancerMsg = APIQueryLoadBalancerMsg;
    class APIChangeSecurityGroupStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIChangeSecurityGroupStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeSecurityGroupStateMsg = APIChangeSecurityGroupStateMsg;
    class APIDetachSecurityGroupFromL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIDetachSecurityGroupFromL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDetachSecurityGroupFromL3NetworkMsg = APIDetachSecurityGroupFromL3NetworkMsg;
    class APIDeleteSecurityGroupRuleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIDeleteSecurityGroupRuleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteSecurityGroupRuleMsg = APIDeleteSecurityGroupRuleMsg;
    class APICreateSecurityGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APICreateSecurityGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateSecurityGroupMsg = APICreateSecurityGroupMsg;
    class APIListVmNicInSecurityGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIListVmNicInSecurityGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListVmNicInSecurityGroupMsg = APIListVmNicInSecurityGroupMsg;
    class APIQueryVmNicInSecurityGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIQueryVmNicInSecurityGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryVmNicInSecurityGroupMsg = APIQueryVmNicInSecurityGroupMsg;
    class APIQuerySecurityGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIQuerySecurityGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQuerySecurityGroupMsg = APIQuerySecurityGroupMsg;
    class SecurityGroupRuleAO {
    }
    ApiHeader.SecurityGroupRuleAO = SecurityGroupRuleAO;
    class APIAddSecurityGroupRuleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIAddSecurityGroupRuleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddSecurityGroupRuleMsg = APIAddSecurityGroupRuleMsg;
    class APIListSecurityGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIListSecurityGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIListSecurityGroupMsg = APIListSecurityGroupMsg;
    class APIQuerySecurityGroupRuleMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIQuerySecurityGroupRuleMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQuerySecurityGroupRuleMsg = APIQuerySecurityGroupRuleMsg;
    class APIDeleteSecurityGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIDeleteSecurityGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteSecurityGroupMsg = APIDeleteSecurityGroupMsg;
    class APIUpdateSecurityGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIUpdateSecurityGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateSecurityGroupMsg = APIUpdateSecurityGroupMsg;
    class APIDeleteVmNicFromSecurityGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIDeleteVmNicFromSecurityGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteVmNicFromSecurityGroupMsg = APIDeleteVmNicFromSecurityGroupMsg;
    class APIGetCandidateVmNicForSecurityGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIGetCandidateVmNicForSecurityGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetCandidateVmNicForSecurityGroupMsg = APIGetCandidateVmNicForSecurityGroupMsg;
    class APIAttachSecurityGroupToL3NetworkMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIAttachSecurityGroupToL3NetworkMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAttachSecurityGroupToL3NetworkMsg = APIAttachSecurityGroupToL3NetworkMsg;
    class APIAddVmNicToSecurityGroupMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.securitygroup.APIAddVmNicToSecurityGroupMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIAddVmNicToSecurityGroupMsg = APIAddVmNicToSecurityGroupMsg;
    class APIDeleteVipMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.vip.APIDeleteVipMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIDeleteVipMsg = APIDeleteVipMsg;
    class APIUpdateVipMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.vip.APIUpdateVipMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIUpdateVipMsg = APIUpdateVipMsg;
    class APIChangeVipStateMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.vip.APIChangeVipStateMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIChangeVipStateMsg = APIChangeVipStateMsg;
    class APICreateVipMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.vip.APICreateVipMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APICreateVipMsg = APICreateVipMsg;
    class APIQueryVipMsg {
        toApiMap() {
            var msg = {
                'org.zstack.network.service.vip.APIQueryVipMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIQueryVipMsg = APIQueryVipMsg;
    class ErrorCode {
    }
    ApiHeader.ErrorCode = ErrorCode;
    class FakeApiEvent {
    }
    ApiHeader.FakeApiEvent = FakeApiEvent;
    class GlobalConfigInventory {
    }
    ApiHeader.GlobalConfigInventory = GlobalConfigInventory;
    class APIUpdateGlobalConfigEvent {
    }
    ApiHeader.APIUpdateGlobalConfigEvent = APIUpdateGlobalConfigEvent;
    class InProgressEvent {
    }
    ApiHeader.InProgressEvent = InProgressEvent;
    class FixedInProgressEvent {
    }
    ApiHeader.FixedInProgressEvent = FixedInProgressEvent;
    class APIGenerateInventoryQueryDetailsEvent {
    }
    ApiHeader.APIGenerateInventoryQueryDetailsEvent = APIGenerateInventoryQueryDetailsEvent;
    class APIGenerateQueryableFieldsEvent {
    }
    ApiHeader.APIGenerateQueryableFieldsEvent = APIGenerateQueryableFieldsEvent;
    class VmNicInventory {
    }
    ApiHeader.VmNicInventory = VmNicInventory;
    class VolumeInventory {
    }
    ApiHeader.VolumeInventory = VolumeInventory;
    class VmInstanceInventory {
    }
    ApiHeader.VmInstanceInventory = VmInstanceInventory;
    class APIDetachL3NetworkFromVmEvent {
    }
    ApiHeader.APIDetachL3NetworkFromVmEvent = APIDetachL3NetworkFromVmEvent;
    class APIStartVmInstanceEvent {
    }
    ApiHeader.APIStartVmInstanceEvent = APIStartVmInstanceEvent;
    class APIAttachL3NetworkToVmEvent {
    }
    ApiHeader.APIAttachL3NetworkToVmEvent = APIAttachL3NetworkToVmEvent;
    class APIStopVmInstanceEvent {
    }
    ApiHeader.APIStopVmInstanceEvent = APIStopVmInstanceEvent;
    class APIMigrateVmEvent {
    }
    ApiHeader.APIMigrateVmEvent = APIMigrateVmEvent;
    class APIUpdateVmInstanceEvent {
    }
    ApiHeader.APIUpdateVmInstanceEvent = APIUpdateVmInstanceEvent;
    class APIDestroyVmInstanceEvent {
    }
    ApiHeader.APIDestroyVmInstanceEvent = APIDestroyVmInstanceEvent;
    class APIChangeInstanceOfferingEvent {
    }
    ApiHeader.APIChangeInstanceOfferingEvent = APIChangeInstanceOfferingEvent;
    class APICreateVmInstanceEvent {
    }
    ApiHeader.APICreateVmInstanceEvent = APICreateVmInstanceEvent;
    class APIRebootVmInstanceEvent {
    }
    ApiHeader.APIRebootVmInstanceEvent = APIRebootVmInstanceEvent;
    class ImageBackupStorageRefInventory {
    }
    ApiHeader.ImageBackupStorageRefInventory = ImageBackupStorageRefInventory;
    class ImageInventory {
    }
    ApiHeader.ImageInventory = ImageInventory;
    class APICreateRootVolumeTemplateFromRootVolumeEvent {
    }
    ApiHeader.APICreateRootVolumeTemplateFromRootVolumeEvent = APICreateRootVolumeTemplateFromRootVolumeEvent;
    class APIChangeImageStateEvent {
    }
    ApiHeader.APIChangeImageStateEvent = APIChangeImageStateEvent;
    class APIUpdateImageEvent {
    }
    ApiHeader.APIUpdateImageEvent = APIUpdateImageEvent;
    class APICreateDataVolumeTemplateFromVolumeEvent {
    }
    ApiHeader.APICreateDataVolumeTemplateFromVolumeEvent = APICreateDataVolumeTemplateFromVolumeEvent;
    class APICreateRootVolumeTemplateFromVolumeSnapshotEvent {
    }
    ApiHeader.APICreateRootVolumeTemplateFromVolumeSnapshotEvent = APICreateRootVolumeTemplateFromVolumeSnapshotEvent;
    class APIAddImageEvent {
    }
    ApiHeader.APIAddImageEvent = APIAddImageEvent;
    class APIDeleteImageEvent {
    }
    ApiHeader.APIDeleteImageEvent = APIDeleteImageEvent;
    class ConsoleInventory {
    }
    ApiHeader.ConsoleInventory = ConsoleInventory;
    class APIRequestConsoleAccessEvent {
    }
    ApiHeader.APIRequestConsoleAccessEvent = APIRequestConsoleAccessEvent;
    class APICreateDataVolumeEvent {
    }
    ApiHeader.APICreateDataVolumeEvent = APICreateDataVolumeEvent;
    class APIDetachDataVolumeFromVmEvent {
    }
    ApiHeader.APIDetachDataVolumeFromVmEvent = APIDetachDataVolumeFromVmEvent;
    class APIUpdateVolumeEvent {
    }
    ApiHeader.APIUpdateVolumeEvent = APIUpdateVolumeEvent;
    class APIDeleteDataVolumeEvent {
    }
    ApiHeader.APIDeleteDataVolumeEvent = APIDeleteDataVolumeEvent;
    class APICreateDataVolumeFromVolumeSnapshotEvent {
    }
    ApiHeader.APICreateDataVolumeFromVolumeSnapshotEvent = APICreateDataVolumeFromVolumeSnapshotEvent;
    class APIBackupDataVolumeEvent {
    }
    ApiHeader.APIBackupDataVolumeEvent = APIBackupDataVolumeEvent;
    class APICreateDataVolumeFromVolumeTemplateEvent {
    }
    ApiHeader.APICreateDataVolumeFromVolumeTemplateEvent = APICreateDataVolumeFromVolumeTemplateEvent;
    class APIChangeVolumeStateEvent {
    }
    ApiHeader.APIChangeVolumeStateEvent = APIChangeVolumeStateEvent;
    class VolumeSnapshotBackupStorageRefInventory {
    }
    ApiHeader.VolumeSnapshotBackupStorageRefInventory = VolumeSnapshotBackupStorageRefInventory;
    class VolumeSnapshotInventory {
    }
    ApiHeader.VolumeSnapshotInventory = VolumeSnapshotInventory;
    class APICreateVolumeSnapshotEvent {
    }
    ApiHeader.APICreateVolumeSnapshotEvent = APICreateVolumeSnapshotEvent;
    class APIAttachDataVolumeToVmEvent {
    }
    ApiHeader.APIAttachDataVolumeToVmEvent = APIAttachDataVolumeToVmEvent;
    class DiskOfferingInventory {
    }
    ApiHeader.DiskOfferingInventory = DiskOfferingInventory;
    class APICreateDiskOfferingEvent {
    }
    ApiHeader.APICreateDiskOfferingEvent = APICreateDiskOfferingEvent;
    class APIChangeDiskOfferingStateEvent {
    }
    ApiHeader.APIChangeDiskOfferingStateEvent = APIChangeDiskOfferingStateEvent;
    class APIUpdateDiskOfferingEvent {
    }
    ApiHeader.APIUpdateDiskOfferingEvent = APIUpdateDiskOfferingEvent;
    class APIDeleteInstanceOfferingEvent {
    }
    ApiHeader.APIDeleteInstanceOfferingEvent = APIDeleteInstanceOfferingEvent;
    class APIGenerateSqlForeignKeyEvent {
    }
    ApiHeader.APIGenerateSqlForeignKeyEvent = APIGenerateSqlForeignKeyEvent;
    class APIDeleteDiskOfferingEvent {
    }
    ApiHeader.APIDeleteDiskOfferingEvent = APIDeleteDiskOfferingEvent;
    class APIGenerateGroovyClassEvent {
    }
    ApiHeader.APIGenerateGroovyClassEvent = APIGenerateGroovyClassEvent;
    class APIGenerateSqlIndexEvent {
    }
    ApiHeader.APIGenerateSqlIndexEvent = APIGenerateSqlIndexEvent;
    class InstanceOfferingInventory {
    }
    ApiHeader.InstanceOfferingInventory = InstanceOfferingInventory;
    class APIUpdateInstanceOfferingEvent {
    }
    ApiHeader.APIUpdateInstanceOfferingEvent = APIUpdateInstanceOfferingEvent;
    class APIGenerateApiTypeScriptDefinitionEvent {
    }
    ApiHeader.APIGenerateApiTypeScriptDefinitionEvent = APIGenerateApiTypeScriptDefinitionEvent;
    class APIGenerateSqlVOViewEvent {
    }
    ApiHeader.APIGenerateSqlVOViewEvent = APIGenerateSqlVOViewEvent;
    class APICreateInstanceOfferingEvent {
    }
    ApiHeader.APICreateInstanceOfferingEvent = APICreateInstanceOfferingEvent;
    class APIChangeInstanceOfferingStateEvent {
    }
    ApiHeader.APIChangeInstanceOfferingStateEvent = APIChangeInstanceOfferingStateEvent;
    class APIGenerateTestLinkDocumentEvent {
    }
    ApiHeader.APIGenerateTestLinkDocumentEvent = APIGenerateTestLinkDocumentEvent;
    class APIGenerateApiJsonTemplateEvent {
    }
    ApiHeader.APIGenerateApiJsonTemplateEvent = APIGenerateApiJsonTemplateEvent;
    class PrimaryStorageInventory {
    }
    ApiHeader.PrimaryStorageInventory = PrimaryStorageInventory;
    class APISyncPrimaryStorageCapacityEvent {
    }
    ApiHeader.APISyncPrimaryStorageCapacityEvent = APISyncPrimaryStorageCapacityEvent;
    class APIDeletePrimaryStorageEvent {
    }
    ApiHeader.APIDeletePrimaryStorageEvent = APIDeletePrimaryStorageEvent;
    class APIDetachPrimaryStorageFromClusterEvent {
    }
    ApiHeader.APIDetachPrimaryStorageFromClusterEvent = APIDetachPrimaryStorageFromClusterEvent;
    class APIChangePrimaryStorageStateEvent {
    }
    ApiHeader.APIChangePrimaryStorageStateEvent = APIChangePrimaryStorageStateEvent;
    class APIUpdatePrimaryStorageEvent {
    }
    ApiHeader.APIUpdatePrimaryStorageEvent = APIUpdatePrimaryStorageEvent;
    class APIReconnectPrimaryStorageEvent {
    }
    ApiHeader.APIReconnectPrimaryStorageEvent = APIReconnectPrimaryStorageEvent;
    class APIAttachPrimaryStorageToClusterEvent {
    }
    ApiHeader.APIAttachPrimaryStorageToClusterEvent = APIAttachPrimaryStorageToClusterEvent;
    class APIAddPrimaryStorageEvent {
    }
    ApiHeader.APIAddPrimaryStorageEvent = APIAddPrimaryStorageEvent;
    class APIDeleteVolumeSnapshotEvent {
    }
    ApiHeader.APIDeleteVolumeSnapshotEvent = APIDeleteVolumeSnapshotEvent;
    class APIUpdateVolumeSnapshotEvent {
    }
    ApiHeader.APIUpdateVolumeSnapshotEvent = APIUpdateVolumeSnapshotEvent;
    class APIRevertVolumeFromSnapshotEvent {
    }
    ApiHeader.APIRevertVolumeFromSnapshotEvent = APIRevertVolumeFromSnapshotEvent;
    class APIDeleteVolumeSnapshotFromBackupStorageEvent {
    }
    ApiHeader.APIDeleteVolumeSnapshotFromBackupStorageEvent = APIDeleteVolumeSnapshotFromBackupStorageEvent;
    class APIBackupVolumeSnapshotEvent {
    }
    ApiHeader.APIBackupVolumeSnapshotEvent = APIBackupVolumeSnapshotEvent;
    class BackupStorageInventory {
    }
    ApiHeader.BackupStorageInventory = BackupStorageInventory;
    class APIUpdateBackupStorageEvent {
    }
    ApiHeader.APIUpdateBackupStorageEvent = APIUpdateBackupStorageEvent;
    class APIDetachBackupStorageFromZoneEvent {
    }
    ApiHeader.APIDetachBackupStorageFromZoneEvent = APIDetachBackupStorageFromZoneEvent;
    class APIScanBackupStorageEvent {
    }
    ApiHeader.APIScanBackupStorageEvent = APIScanBackupStorageEvent;
    class APIAddBackupStorageEvent {
    }
    ApiHeader.APIAddBackupStorageEvent = APIAddBackupStorageEvent;
    class APIAttachBackupStorageToZoneEvent {
    }
    ApiHeader.APIAttachBackupStorageToZoneEvent = APIAttachBackupStorageToZoneEvent;
    class APIChangeBackupStorageStateEvent {
    }
    ApiHeader.APIChangeBackupStorageStateEvent = APIChangeBackupStorageStateEvent;
    class APIDeleteBackupStorageEvent {
    }
    ApiHeader.APIDeleteBackupStorageEvent = APIDeleteBackupStorageEvent;
    class IpRangeInventory {
    }
    ApiHeader.IpRangeInventory = IpRangeInventory;
    class APIAddIpRangeEvent {
    }
    ApiHeader.APIAddIpRangeEvent = APIAddIpRangeEvent;
    class NetworkServiceL3NetworkRefInventory {
    }
    ApiHeader.NetworkServiceL3NetworkRefInventory = NetworkServiceL3NetworkRefInventory;
    class L3NetworkInventory {
    }
    ApiHeader.L3NetworkInventory = L3NetworkInventory;
    class APIRemoveDnsFromL3NetworkEvent {
    }
    ApiHeader.APIRemoveDnsFromL3NetworkEvent = APIRemoveDnsFromL3NetworkEvent;
    class APIDeleteL3NetworkEvent {
    }
    ApiHeader.APIDeleteL3NetworkEvent = APIDeleteL3NetworkEvent;
    class APIChangeL3NetworkStateEvent {
    }
    ApiHeader.APIChangeL3NetworkStateEvent = APIChangeL3NetworkStateEvent;
    class APIDeleteIpRangeEvent {
    }
    ApiHeader.APIDeleteIpRangeEvent = APIDeleteIpRangeEvent;
    class APIAddIpRangeByNetworkCidrEvent {
    }
    ApiHeader.APIAddIpRangeByNetworkCidrEvent = APIAddIpRangeByNetworkCidrEvent;
    class APIUpdateIpRangeEvent {
    }
    ApiHeader.APIUpdateIpRangeEvent = APIUpdateIpRangeEvent;
    class APIUpdateL3NetworkEvent {
    }
    ApiHeader.APIUpdateL3NetworkEvent = APIUpdateL3NetworkEvent;
    class APIAddDnsToL3NetworkEvent {
    }
    ApiHeader.APIAddDnsToL3NetworkEvent = APIAddDnsToL3NetworkEvent;
    class APICreateL3NetworkEvent {
    }
    ApiHeader.APICreateL3NetworkEvent = APICreateL3NetworkEvent;
    class NetworkServiceProviderInventory {
    }
    ApiHeader.NetworkServiceProviderInventory = NetworkServiceProviderInventory;
    class APIDetachNetworkServiceProviderFromL2NetworkEvent {
    }
    ApiHeader.APIDetachNetworkServiceProviderFromL2NetworkEvent = APIDetachNetworkServiceProviderFromL2NetworkEvent;
    class APIAddNetworkServiceProviderEvent {
    }
    ApiHeader.APIAddNetworkServiceProviderEvent = APIAddNetworkServiceProviderEvent;
    class APIAttachNetworkServiceProviderToL2NetworkEvent {
    }
    ApiHeader.APIAttachNetworkServiceProviderToL2NetworkEvent = APIAttachNetworkServiceProviderToL2NetworkEvent;
    class APIAttachNetworkServiceToL3NetworkEvent {
    }
    ApiHeader.APIAttachNetworkServiceToL3NetworkEvent = APIAttachNetworkServiceToL3NetworkEvent;
    class L2NetworkInventory {
    }
    ApiHeader.L2NetworkInventory = L2NetworkInventory;
    class APIAttachL2NetworkToClusterEvent {
    }
    ApiHeader.APIAttachL2NetworkToClusterEvent = APIAttachL2NetworkToClusterEvent;
    class L2VlanNetworkInventory {
    }
    ApiHeader.L2VlanNetworkInventory = L2VlanNetworkInventory;
    class APICreateL2VlanNetworkEvent {
    }
    ApiHeader.APICreateL2VlanNetworkEvent = APICreateL2VlanNetworkEvent;
    class APIDetachL2NetworkFromClusterEvent {
    }
    ApiHeader.APIDetachL2NetworkFromClusterEvent = APIDetachL2NetworkFromClusterEvent;
    class APIDeleteL2NetworkEvent {
    }
    ApiHeader.APIDeleteL2NetworkEvent = APIDeleteL2NetworkEvent;
    class APICreateL2NetworkEvent {
    }
    ApiHeader.APICreateL2NetworkEvent = APICreateL2NetworkEvent;
    class APIUpdateL2NetworkEvent {
    }
    ApiHeader.APIUpdateL2NetworkEvent = APIUpdateL2NetworkEvent;
    class APIDeleteSearchIndexEvent {
    }
    ApiHeader.APIDeleteSearchIndexEvent = APIDeleteSearchIndexEvent;
    class APISearchGenerateSqlTriggerEvent {
    }
    ApiHeader.APISearchGenerateSqlTriggerEvent = APISearchGenerateSqlTriggerEvent;
    class APICreateSearchIndexEvent {
    }
    ApiHeader.APICreateSearchIndexEvent = APICreateSearchIndexEvent;
    class UserTagInventory {
    }
    ApiHeader.UserTagInventory = UserTagInventory;
    class APICreateUserTagEvent {
    }
    ApiHeader.APICreateUserTagEvent = APICreateUserTagEvent;
    class APIDeleteTagEvent {
    }
    ApiHeader.APIDeleteTagEvent = APIDeleteTagEvent;
    class TagInventory {
    }
    ApiHeader.TagInventory = TagInventory;
    class APICreateTagEvent {
    }
    ApiHeader.APICreateTagEvent = APICreateTagEvent;
    class SystemTagInventory {
    }
    ApiHeader.SystemTagInventory = SystemTagInventory;
    class APICreateSystemTagEvent {
    }
    ApiHeader.APICreateSystemTagEvent = APICreateSystemTagEvent;
    class APIUpdateSystemTagEvent {
    }
    ApiHeader.APIUpdateSystemTagEvent = APIUpdateSystemTagEvent;
    class APIEvent {
    }
    ApiHeader.APIEvent = APIEvent;
    class APIDeleteClusterEvent {
    }
    ApiHeader.APIDeleteClusterEvent = APIDeleteClusterEvent;
    class ClusterInventory {
    }
    ApiHeader.ClusterInventory = ClusterInventory;
    class APICreateClusterEvent {
    }
    ApiHeader.APICreateClusterEvent = APICreateClusterEvent;
    class APIChangeClusterStateEvent {
    }
    ApiHeader.APIChangeClusterStateEvent = APIChangeClusterStateEvent;
    class APIUpdateClusterEvent {
    }
    ApiHeader.APIUpdateClusterEvent = APIUpdateClusterEvent;
    class APIRemoveUserFromGroupEvent {
    }
    ApiHeader.APIRemoveUserFromGroupEvent = APIRemoveUserFromGroupEvent;
    class AccountInventory {
    }
    ApiHeader.AccountInventory = AccountInventory;
    class APICreateAccountEvent {
    }
    ApiHeader.APICreateAccountEvent = APICreateAccountEvent;
    class APIDeleteUserGroupEvent {
    }
    ApiHeader.APIDeleteUserGroupEvent = APIDeleteUserGroupEvent;
    class APIAttachPolicyToUserEvent {
    }
    ApiHeader.APIAttachPolicyToUserEvent = APIAttachPolicyToUserEvent;
    class APIShareResourceEvent {
    }
    ApiHeader.APIShareResourceEvent = APIShareResourceEvent;
    class APIDetachPolicyFromUserGroupEvent {
    }
    ApiHeader.APIDetachPolicyFromUserGroupEvent = APIDetachPolicyFromUserGroupEvent;
    class APIDeletePolicyEvent {
    }
    ApiHeader.APIDeletePolicyEvent = APIDeletePolicyEvent;
    class APIAddUserToGroupEvent {
    }
    ApiHeader.APIAddUserToGroupEvent = APIAddUserToGroupEvent;
    class APIUpdateUserEvent {
    }
    ApiHeader.APIUpdateUserEvent = APIUpdateUserEvent;
    class APIDeleteAccountEvent {
    }
    ApiHeader.APIDeleteAccountEvent = APIDeleteAccountEvent;
    class APIUpdateAccountEvent {
    }
    ApiHeader.APIUpdateAccountEvent = APIUpdateAccountEvent;
    class QuotaInventory {
    }
    ApiHeader.QuotaInventory = QuotaInventory;
    class APIUpdateQuotaEvent {
    }
    ApiHeader.APIUpdateQuotaEvent = APIUpdateQuotaEvent;
    class PolicyInventory {
    }
    ApiHeader.PolicyInventory = PolicyInventory;
    class APICreatePolicyEvent {
    }
    ApiHeader.APICreatePolicyEvent = APICreatePolicyEvent;
    class UserInventory {
    }
    ApiHeader.UserInventory = UserInventory;
    class APICreateUserEvent {
    }
    ApiHeader.APICreateUserEvent = APICreateUserEvent;
    class APIDetachPolicyFromUserEvent {
    }
    ApiHeader.APIDetachPolicyFromUserEvent = APIDetachPolicyFromUserEvent;
    class APIDeleteUserEvent {
    }
    ApiHeader.APIDeleteUserEvent = APIDeleteUserEvent;
    class UserGroupInventory {
    }
    ApiHeader.UserGroupInventory = UserGroupInventory;
    class APICreateUserGroupEvent {
    }
    ApiHeader.APICreateUserGroupEvent = APICreateUserGroupEvent;
    class APIAttachPolicyToUserGroupEvent {
    }
    ApiHeader.APIAttachPolicyToUserGroupEvent = APIAttachPolicyToUserGroupEvent;
    class APIRevokeResourceSharingEvent {
    }
    ApiHeader.APIRevokeResourceSharingEvent = APIRevokeResourceSharingEvent;
    class ZoneInventory {
    }
    ApiHeader.ZoneInventory = ZoneInventory;
    class APIUpdateZoneEvent {
    }
    ApiHeader.APIUpdateZoneEvent = APIUpdateZoneEvent;
    class APIChangeZoneStateEvent {
    }
    ApiHeader.APIChangeZoneStateEvent = APIChangeZoneStateEvent;
    class APICreateZoneEvent {
    }
    ApiHeader.APICreateZoneEvent = APICreateZoneEvent;
    class APIDeleteZoneEvent {
    }
    ApiHeader.APIDeleteZoneEvent = APIDeleteZoneEvent;
    class HostInventory {
    }
    ApiHeader.HostInventory = HostInventory;
    class APIAddHostEvent {
    }
    ApiHeader.APIAddHostEvent = APIAddHostEvent;
    class APIChangeHostStateEvent {
    }
    ApiHeader.APIChangeHostStateEvent = APIChangeHostStateEvent;
    class APIDeleteHostEvent {
    }
    ApiHeader.APIDeleteHostEvent = APIDeleteHostEvent;
    class APIReconnectHostEvent {
    }
    ApiHeader.APIReconnectHostEvent = APIReconnectHostEvent;
    class APIUpdateHostEvent {
    }
    ApiHeader.APIUpdateHostEvent = APIUpdateHostEvent;
    class CephPrimaryStorageMonInventory {
    }
    ApiHeader.CephPrimaryStorageMonInventory = CephPrimaryStorageMonInventory;
    class CephPrimaryStorageInventory {
    }
    ApiHeader.CephPrimaryStorageInventory = CephPrimaryStorageInventory;
    class APIRemoveMonFromCephPrimaryStorageEvent {
    }
    ApiHeader.APIRemoveMonFromCephPrimaryStorageEvent = APIRemoveMonFromCephPrimaryStorageEvent;
    class APIAddMonToCephPrimaryStorageEvent {
    }
    ApiHeader.APIAddMonToCephPrimaryStorageEvent = APIAddMonToCephPrimaryStorageEvent;
    class CephBackupStorageMonInventory {
    }
    ApiHeader.CephBackupStorageMonInventory = CephBackupStorageMonInventory;
    class CephBackupStorageInventory {
    }
    ApiHeader.CephBackupStorageInventory = CephBackupStorageInventory;
    class APIRemoveMonFromCephBackupStorageEvent {
    }
    ApiHeader.APIRemoveMonFromCephBackupStorageEvent = APIRemoveMonFromCephBackupStorageEvent;
    class APIAddMonToCephBackupStorageEvent {
    }
    ApiHeader.APIAddMonToCephBackupStorageEvent = APIAddMonToCephBackupStorageEvent;
    class FusionstorPrimaryStorageMonInventory {
    }
    ApiHeader.FusionstorPrimaryStorageMonInventory = FusionstorPrimaryStorageMonInventory;
    class FusionstorPrimaryStorageInventory {
    }
    ApiHeader.FusionstorPrimaryStorageInventory = FusionstorPrimaryStorageInventory;
    class APIRemoveMonFromFusionstorPrimaryStorageEvent {
    }
    ApiHeader.APIRemoveMonFromFusionstorPrimaryStorageEvent = APIRemoveMonFromFusionstorPrimaryStorageEvent;
    class APIAddMonToFusionstorPrimaryStorageEvent {
    }
    ApiHeader.APIAddMonToFusionstorPrimaryStorageEvent = APIAddMonToFusionstorPrimaryStorageEvent;
    class FusionstorBackupStorageMonInventory {
    }
    ApiHeader.FusionstorBackupStorageMonInventory = FusionstorBackupStorageMonInventory;
    class FusionstorBackupStorageInventory {
    }
    ApiHeader.FusionstorBackupStorageInventory = FusionstorBackupStorageInventory;
    class APIRemoveMonFromFusionstorBackupStorageEvent {
    }
    ApiHeader.APIRemoveMonFromFusionstorBackupStorageEvent = APIRemoveMonFromFusionstorBackupStorageEvent;
    class APIAddMonToFusionstorBackupStorageEvent {
    }
    ApiHeader.APIAddMonToFusionstorBackupStorageEvent = APIAddMonToFusionstorBackupStorageEvent;
    class SftpBackupStorageInventory {
    }
    ApiHeader.SftpBackupStorageInventory = SftpBackupStorageInventory;
    class APIAddSftpBackupStorageEvent {
    }
    ApiHeader.APIAddSftpBackupStorageEvent = APIAddSftpBackupStorageEvent;
    class APIReconnectSftpBackupStorageEvent {
    }
    ApiHeader.APIReconnectSftpBackupStorageEvent = APIReconnectSftpBackupStorageEvent;
    class ApplianceVmInventory {
    }
    ApiHeader.ApplianceVmInventory = ApplianceVmInventory;
    class APIReconnectVirtualRouterEvent {
    }
    ApiHeader.APIReconnectVirtualRouterEvent = APIReconnectVirtualRouterEvent;
    class APIDeletePortForwardingRuleEvent {
    }
    ApiHeader.APIDeletePortForwardingRuleEvent = APIDeletePortForwardingRuleEvent;
    class PortForwardingRuleInventory {
    }
    ApiHeader.PortForwardingRuleInventory = PortForwardingRuleInventory;
    class APIChangePortForwardingRuleStateEvent {
    }
    ApiHeader.APIChangePortForwardingRuleStateEvent = APIChangePortForwardingRuleStateEvent;
    class APIDetachPortForwardingRuleEvent {
    }
    ApiHeader.APIDetachPortForwardingRuleEvent = APIDetachPortForwardingRuleEvent;
    class APIAttachPortForwardingRuleEvent {
    }
    ApiHeader.APIAttachPortForwardingRuleEvent = APIAttachPortForwardingRuleEvent;
    class APICreatePortForwardingRuleEvent {
    }
    ApiHeader.APICreatePortForwardingRuleEvent = APICreatePortForwardingRuleEvent;
    class APIUpdatePortForwardingRuleEvent {
    }
    ApiHeader.APIUpdatePortForwardingRuleEvent = APIUpdatePortForwardingRuleEvent;
    class EipInventory {
    }
    ApiHeader.EipInventory = EipInventory;
    class APIChangeEipStateEvent {
    }
    ApiHeader.APIChangeEipStateEvent = APIChangeEipStateEvent;
    class APIUpdateEipEvent {
    }
    ApiHeader.APIUpdateEipEvent = APIUpdateEipEvent;
    class APICreateEipEvent {
    }
    ApiHeader.APICreateEipEvent = APICreateEipEvent;
    class APIDetachEipEvent {
    }
    ApiHeader.APIDetachEipEvent = APIDetachEipEvent;
    class APIAttachEipEvent {
    }
    ApiHeader.APIAttachEipEvent = APIAttachEipEvent;
    class APIDeleteEipEvent {
    }
    ApiHeader.APIDeleteEipEvent = APIDeleteEipEvent;
    class LoadBalancerListenerVmNicRefInventory {
    }
    ApiHeader.LoadBalancerListenerVmNicRefInventory = LoadBalancerListenerVmNicRefInventory;
    class LoadBalancerListenerInventory {
    }
    ApiHeader.LoadBalancerListenerInventory = LoadBalancerListenerInventory;
    class LoadBalancerInventory {
    }
    ApiHeader.LoadBalancerInventory = LoadBalancerInventory;
    class APIRefreshLoadBalancerEvent {
    }
    ApiHeader.APIRefreshLoadBalancerEvent = APIRefreshLoadBalancerEvent;
    class APICreateLoadBalancerEvent {
    }
    ApiHeader.APICreateLoadBalancerEvent = APICreateLoadBalancerEvent;
    class APIRemoveVmNicFromLoadBalancerEvent {
    }
    ApiHeader.APIRemoveVmNicFromLoadBalancerEvent = APIRemoveVmNicFromLoadBalancerEvent;
    class APIAddVmNicToLoadBalancerEvent {
    }
    ApiHeader.APIAddVmNicToLoadBalancerEvent = APIAddVmNicToLoadBalancerEvent;
    class APIDeleteLoadBalancerListenerEvent {
    }
    ApiHeader.APIDeleteLoadBalancerListenerEvent = APIDeleteLoadBalancerListenerEvent;
    class APICreateLoadBalancerListenerEvent {
    }
    ApiHeader.APICreateLoadBalancerListenerEvent = APICreateLoadBalancerListenerEvent;
    class APIDeleteLoadBalancerEvent {
    }
    ApiHeader.APIDeleteLoadBalancerEvent = APIDeleteLoadBalancerEvent;
    class SecurityGroupRuleInventory {
    }
    ApiHeader.SecurityGroupRuleInventory = SecurityGroupRuleInventory;
    class SecurityGroupInventory {
    }
    ApiHeader.SecurityGroupInventory = SecurityGroupInventory;
    class APIAttachSecurityGroupToL3NetworkEvent {
    }
    ApiHeader.APIAttachSecurityGroupToL3NetworkEvent = APIAttachSecurityGroupToL3NetworkEvent;
    class APIDeleteSecurityGroupRuleEvent {
    }
    ApiHeader.APIDeleteSecurityGroupRuleEvent = APIDeleteSecurityGroupRuleEvent;
    class APIAddVmNicToSecurityGroupEvent {
    }
    ApiHeader.APIAddVmNicToSecurityGroupEvent = APIAddVmNicToSecurityGroupEvent;
    class APIChangeSecurityGroupStateEvent {
    }
    ApiHeader.APIChangeSecurityGroupStateEvent = APIChangeSecurityGroupStateEvent;
    class APIUpdateSecurityGroupEvent {
    }
    ApiHeader.APIUpdateSecurityGroupEvent = APIUpdateSecurityGroupEvent;
    class APIDeleteVmNicFromSecurityGroupEvent {
    }
    ApiHeader.APIDeleteVmNicFromSecurityGroupEvent = APIDeleteVmNicFromSecurityGroupEvent;
    class APIAddSecurityGroupRuleEvent {
    }
    ApiHeader.APIAddSecurityGroupRuleEvent = APIAddSecurityGroupRuleEvent;
    class APICreateSecurityGroupEvent {
    }
    ApiHeader.APICreateSecurityGroupEvent = APICreateSecurityGroupEvent;
    class APIDetachSecurityGroupFromL3NetworkEvent {
    }
    ApiHeader.APIDetachSecurityGroupFromL3NetworkEvent = APIDetachSecurityGroupFromL3NetworkEvent;
    class APIDeleteSecurityGroupEvent {
    }
    ApiHeader.APIDeleteSecurityGroupEvent = APIDeleteSecurityGroupEvent;
    class VipInventory {
    }
    ApiHeader.VipInventory = VipInventory;
    class APICreateVipEvent {
    }
    ApiHeader.APICreateVipEvent = APICreateVipEvent;
    class APIUpdateVipEvent {
    }
    ApiHeader.APIUpdateVipEvent = APIUpdateVipEvent;
    class APIDeleteVipEvent {
    }
    ApiHeader.APIDeleteVipEvent = APIDeleteVipEvent;
    class APIChangeVipStateEvent {
    }
    ApiHeader.APIChangeVipStateEvent = APIChangeVipStateEvent;
    class APIGetGlobalConfigReply {
    }
    ApiHeader.APIGetGlobalConfigReply = APIGetGlobalConfigReply;
    class APIQueryGlobalConfigReply {
    }
    ApiHeader.APIQueryGlobalConfigReply = APIQueryGlobalConfigReply;
    class APIListGlobalConfigReply {
    }
    ApiHeader.APIListGlobalConfigReply = APIListGlobalConfigReply;
    class APIQueryReply {
    }
    ApiHeader.APIQueryReply = APIQueryReply;
    class APIGetCpuMemoryCapacityReply {
    }
    ApiHeader.APIGetCpuMemoryCapacityReply = APIGetCpuMemoryCapacityReply;
    class APIGetHostAllocatorStrategiesReply {
    }
    ApiHeader.APIGetHostAllocatorStrategiesReply = APIGetHostAllocatorStrategiesReply;
    class APISearchVmInstanceReply {
    }
    ApiHeader.APISearchVmInstanceReply = APISearchVmInstanceReply;
    class APIGetVmInstanceReply {
    }
    ApiHeader.APIGetVmInstanceReply = APIGetVmInstanceReply;
    class APIGetVmAttachableDataVolumeReply {
    }
    ApiHeader.APIGetVmAttachableDataVolumeReply = APIGetVmAttachableDataVolumeReply;
    class APIGetVmMigrationCandidateHostsReply {
    }
    ApiHeader.APIGetVmMigrationCandidateHostsReply = APIGetVmMigrationCandidateHostsReply;
    class APIListVmInstanceReply {
    }
    ApiHeader.APIListVmInstanceReply = APIListVmInstanceReply;
    class APIListVmNicReply {
    }
    ApiHeader.APIListVmNicReply = APIListVmNicReply;
    class APIQueryVmInstanceReply {
    }
    ApiHeader.APIQueryVmInstanceReply = APIQueryVmInstanceReply;
    class APIQueryVmNicReply {
    }
    ApiHeader.APIQueryVmNicReply = APIQueryVmNicReply;
    class APIGetVmAttachableL3NetworkReply {
    }
    ApiHeader.APIGetVmAttachableL3NetworkReply = APIGetVmAttachableL3NetworkReply;
    class APIGetImageReply {
    }
    ApiHeader.APIGetImageReply = APIGetImageReply;
    class APIQueryImageReply {
    }
    ApiHeader.APIQueryImageReply = APIQueryImageReply;
    class APIListImageReply {
    }
    ApiHeader.APIListImageReply = APIListImageReply;
    class APISearchImageReply {
    }
    ApiHeader.APISearchImageReply = APISearchImageReply;
    class VolumeFormatReplyStruct {
    }
    ApiHeader.VolumeFormatReplyStruct = VolumeFormatReplyStruct;
    class APIGetVolumeFormatReply {
    }
    ApiHeader.APIGetVolumeFormatReply = APIGetVolumeFormatReply;
    class APIGetDataVolumeAttachableVmReply {
    }
    ApiHeader.APIGetDataVolumeAttachableVmReply = APIGetDataVolumeAttachableVmReply;
    class APIQueryVolumeReply {
    }
    ApiHeader.APIQueryVolumeReply = APIQueryVolumeReply;
    class APIGetVolumeReply {
    }
    ApiHeader.APIGetVolumeReply = APIGetVolumeReply;
    class APIListVolumeReply {
    }
    ApiHeader.APIListVolumeReply = APIListVolumeReply;
    class APISearchVolumeReply {
    }
    ApiHeader.APISearchVolumeReply = APISearchVolumeReply;
    class APIIsReadyToGoReply {
    }
    ApiHeader.APIIsReadyToGoReply = APIIsReadyToGoReply;
    class APISearchInstanceOfferingReply {
    }
    ApiHeader.APISearchInstanceOfferingReply = APISearchInstanceOfferingReply;
    class APIGetGlobalPropertyReply {
    }
    ApiHeader.APIGetGlobalPropertyReply = APIGetGlobalPropertyReply;
    class APIListDiskOfferingReply {
    }
    ApiHeader.APIListDiskOfferingReply = APIListDiskOfferingReply;
    class APIListInstanceOfferingReply {
    }
    ApiHeader.APIListInstanceOfferingReply = APIListInstanceOfferingReply;
    class APISearchDnsReply {
    }
    ApiHeader.APISearchDnsReply = APISearchDnsReply;
    class APIGetInstanceOfferingReply {
    }
    ApiHeader.APIGetInstanceOfferingReply = APIGetInstanceOfferingReply;
    class APIQueryDiskOfferingReply {
    }
    ApiHeader.APIQueryDiskOfferingReply = APIQueryDiskOfferingReply;
    class APISearchDiskOfferingReply {
    }
    ApiHeader.APISearchDiskOfferingReply = APISearchDiskOfferingReply;
    class APIGetDiskOfferingReply {
    }
    ApiHeader.APIGetDiskOfferingReply = APIGetDiskOfferingReply;
    class APIQueryInstanceOfferingReply {
    }
    ApiHeader.APIQueryInstanceOfferingReply = APIQueryInstanceOfferingReply;
    class APIListPrimaryStorageReply {
    }
    ApiHeader.APIListPrimaryStorageReply = APIListPrimaryStorageReply;
    class APIGetPrimaryStorageTypesReply {
    }
    ApiHeader.APIGetPrimaryStorageTypesReply = APIGetPrimaryStorageTypesReply;
    class CreateTemplateFromVolumeOnPrimaryStorageReply {
    }
    ApiHeader.CreateTemplateFromVolumeOnPrimaryStorageReply = CreateTemplateFromVolumeOnPrimaryStorageReply;
    class APIGetPrimaryStorageReply {
    }
    ApiHeader.APIGetPrimaryStorageReply = APIGetPrimaryStorageReply;
    class APISearchPrimaryStorageReply {
    }
    ApiHeader.APISearchPrimaryStorageReply = APISearchPrimaryStorageReply;
    class APIGetPrimaryStorageAllocatorStrategiesReply {
    }
    ApiHeader.APIGetPrimaryStorageAllocatorStrategiesReply = APIGetPrimaryStorageAllocatorStrategiesReply;
    class APIQueryPrimaryStorageReply {
    }
    ApiHeader.APIQueryPrimaryStorageReply = APIQueryPrimaryStorageReply;
    class APIGetPrimaryStorageCapacityReply {
    }
    ApiHeader.APIGetPrimaryStorageCapacityReply = APIGetPrimaryStorageCapacityReply;
    class APIQueryVolumeSnapshotReply {
    }
    ApiHeader.APIQueryVolumeSnapshotReply = APIQueryVolumeSnapshotReply;
    class SnapshotLeafInventory {
    }
    ApiHeader.SnapshotLeafInventory = SnapshotLeafInventory;
    class VolumeSnapshotTreeInventory {
    }
    ApiHeader.VolumeSnapshotTreeInventory = VolumeSnapshotTreeInventory;
    class APIQueryVolumeSnapshotTreeReply {
    }
    ApiHeader.APIQueryVolumeSnapshotTreeReply = APIQueryVolumeSnapshotTreeReply;
    class APIGetVolumeSnapshotTreeReply {
    }
    ApiHeader.APIGetVolumeSnapshotTreeReply = APIGetVolumeSnapshotTreeReply;
    class APISearchBackupStorageReply {
    }
    ApiHeader.APISearchBackupStorageReply = APISearchBackupStorageReply;
    class APIGetBackupStorageCapacityReply {
    }
    ApiHeader.APIGetBackupStorageCapacityReply = APIGetBackupStorageCapacityReply;
    class APIQueryBackupStorageReply {
    }
    ApiHeader.APIQueryBackupStorageReply = APIQueryBackupStorageReply;
    class APIGetBackupStorageTypesReply {
    }
    ApiHeader.APIGetBackupStorageTypesReply = APIGetBackupStorageTypesReply;
    class APIGetBackupStorageReply {
    }
    ApiHeader.APIGetBackupStorageReply = APIGetBackupStorageReply;
    class APIListBackupStorageReply {
    }
    ApiHeader.APIListBackupStorageReply = APIListBackupStorageReply;
    class APIListIpRangeReply {
    }
    ApiHeader.APIListIpRangeReply = APIListIpRangeReply;
    class APISearchL3NetworkReply {
    }
    ApiHeader.APISearchL3NetworkReply = APISearchL3NetworkReply;
    class APIGetL3NetworkTypesReply {
    }
    ApiHeader.APIGetL3NetworkTypesReply = APIGetL3NetworkTypesReply;
    class APIGetL3NetworkReply {
    }
    ApiHeader.APIGetL3NetworkReply = APIGetL3NetworkReply;
    class APIGetIpAddressCapacityReply {
    }
    ApiHeader.APIGetIpAddressCapacityReply = APIGetIpAddressCapacityReply;
    class APIQueryL3NetworkReply {
    }
    ApiHeader.APIQueryL3NetworkReply = APIQueryL3NetworkReply;
    class FreeIpInventory {
    }
    ApiHeader.FreeIpInventory = FreeIpInventory;
    class APIGetFreeIpReply {
    }
    ApiHeader.APIGetFreeIpReply = APIGetFreeIpReply;
    class APIQueryIpRangeReply {
    }
    ApiHeader.APIQueryIpRangeReply = APIQueryIpRangeReply;
    class APIListL3NetworkReply {
    }
    ApiHeader.APIListL3NetworkReply = APIListL3NetworkReply;
    class APIQueryNetworkServiceL3NetworkRefReply {
    }
    ApiHeader.APIQueryNetworkServiceL3NetworkRefReply = APIQueryNetworkServiceL3NetworkRefReply;
    class APISearchNetworkServiceProviderReply {
    }
    ApiHeader.APISearchNetworkServiceProviderReply = APISearchNetworkServiceProviderReply;
    class APIGetNetworkServiceProviderReply {
    }
    ApiHeader.APIGetNetworkServiceProviderReply = APIGetNetworkServiceProviderReply;
    class APIGetNetworkServiceTypesReply {
    }
    ApiHeader.APIGetNetworkServiceTypesReply = APIGetNetworkServiceTypesReply;
    class APIListNetworkServiceProviderReply {
    }
    ApiHeader.APIListNetworkServiceProviderReply = APIListNetworkServiceProviderReply;
    class APIQueryNetworkServiceProviderReply {
    }
    ApiHeader.APIQueryNetworkServiceProviderReply = APIQueryNetworkServiceProviderReply;
    class APIGetL2VlanNetworkReply {
    }
    ApiHeader.APIGetL2VlanNetworkReply = APIGetL2VlanNetworkReply;
    class APIGetL2NetworkReply {
    }
    ApiHeader.APIGetL2NetworkReply = APIGetL2NetworkReply;
    class APIQueryL2VlanNetworkReply {
    }
    ApiHeader.APIQueryL2VlanNetworkReply = APIQueryL2VlanNetworkReply;
    class APIGetL2NetworkTypesReply {
    }
    ApiHeader.APIGetL2NetworkTypesReply = APIGetL2NetworkTypesReply;
    class APIListL2VlanNetworkReply {
    }
    ApiHeader.APIListL2VlanNetworkReply = APIListL2VlanNetworkReply;
    class APISearchL2VlanNetworkReply {
    }
    ApiHeader.APISearchL2VlanNetworkReply = APISearchL2VlanNetworkReply;
    class APIQueryL2NetworkReply {
    }
    ApiHeader.APIQueryL2NetworkReply = APIQueryL2NetworkReply;
    class APISearchL2NetworkReply {
    }
    ApiHeader.APISearchL2NetworkReply = APISearchL2NetworkReply;
    class APIListL2NetworkReply {
    }
    ApiHeader.APIListL2NetworkReply = APIListL2NetworkReply;
    class APISearchReply {
    }
    ApiHeader.APISearchReply = APISearchReply;
    class APIQueryUserTagReply {
    }
    ApiHeader.APIQueryUserTagReply = APIQueryUserTagReply;
    class APIQuerySystemTagReply {
    }
    ApiHeader.APIQuerySystemTagReply = APIQuerySystemTagReply;
    class APIQueryTagReply {
    }
    ApiHeader.APIQueryTagReply = APIQueryTagReply;
    class ManagementNodeInventory {
    }
    ApiHeader.ManagementNodeInventory = ManagementNodeInventory;
    class APIQueryManagementNodeReply {
    }
    ApiHeader.APIQueryManagementNodeReply = APIQueryManagementNodeReply;
    class APIListManagementNodeReply {
    }
    ApiHeader.APIListManagementNodeReply = APIListManagementNodeReply;
    class APIReply {
    }
    ApiHeader.APIReply = APIReply;
    class APISearchClusterReply {
    }
    ApiHeader.APISearchClusterReply = APISearchClusterReply;
    class APIListClusterReply {
    }
    ApiHeader.APIListClusterReply = APIListClusterReply;
    class APIGetClusterReply {
    }
    ApiHeader.APIGetClusterReply = APIGetClusterReply;
    class APIQueryClusterReply {
    }
    ApiHeader.APIQueryClusterReply = APIQueryClusterReply;
    class APIListUserReply {
    }
    ApiHeader.APIListUserReply = APIListUserReply;
    class APIQueryUserGroupReply {
    }
    ApiHeader.APIQueryUserGroupReply = APIQueryUserGroupReply;
    class APIGetUserReply {
    }
    ApiHeader.APIGetUserReply = APIGetUserReply;
    class APIGetAccountReply {
    }
    ApiHeader.APIGetAccountReply = APIGetAccountReply;
    class APIQueryUserReply {
    }
    ApiHeader.APIQueryUserReply = APIQueryUserReply;
    class APIListAccountReply {
    }
    ApiHeader.APIListAccountReply = APIListAccountReply;
    class APISearchPolicyReply {
    }
    ApiHeader.APISearchPolicyReply = APISearchPolicyReply;
    class APIQueryAccountReply {
    }
    ApiHeader.APIQueryAccountReply = APIQueryAccountReply;
    class APILogOutReply {
    }
    ApiHeader.APILogOutReply = APILogOutReply;
    class APISearchUserGroupReply {
    }
    ApiHeader.APISearchUserGroupReply = APISearchUserGroupReply;
    class APIGetPolicyReply {
    }
    ApiHeader.APIGetPolicyReply = APIGetPolicyReply;
    class APILogInReply {
    }
    ApiHeader.APILogInReply = APILogInReply;
    class APIListPolicyReply {
    }
    ApiHeader.APIListPolicyReply = APIListPolicyReply;
    class APIQueryQuotaReply {
    }
    ApiHeader.APIQueryQuotaReply = APIQueryQuotaReply;
    class APIGetUserGroupReply {
    }
    ApiHeader.APIGetUserGroupReply = APIGetUserGroupReply;
    class APIQueryPolicyReply {
    }
    ApiHeader.APIQueryPolicyReply = APIQueryPolicyReply;
    class APISearchAccountReply {
    }
    ApiHeader.APISearchAccountReply = APISearchAccountReply;
    class APISearchUserReply {
    }
    ApiHeader.APISearchUserReply = APISearchUserReply;
    class APIValidateSessionReply {
    }
    ApiHeader.APIValidateSessionReply = APIValidateSessionReply;
    class APIGetZoneReply {
    }
    ApiHeader.APIGetZoneReply = APIGetZoneReply;
    class APISearchZoneReply {
    }
    ApiHeader.APISearchZoneReply = APISearchZoneReply;
    class APIListZonesReply {
    }
    ApiHeader.APIListZonesReply = APIListZonesReply;
    class APIQueryZoneReply {
    }
    ApiHeader.APIQueryZoneReply = APIQueryZoneReply;
    class APIGetHypervisorTypesReply {
    }
    ApiHeader.APIGetHypervisorTypesReply = APIGetHypervisorTypesReply;
    class APIGetHostReply {
    }
    ApiHeader.APIGetHostReply = APIGetHostReply;
    class APIListHostReply {
    }
    ApiHeader.APIListHostReply = APIListHostReply;
    class APISearchHostReply {
    }
    ApiHeader.APISearchHostReply = APISearchHostReply;
    class APIQueryHostReply {
    }
    ApiHeader.APIQueryHostReply = APIQueryHostReply;
    class APIQueryApplianceVmReply {
    }
    ApiHeader.APIQueryApplianceVmReply = APIQueryApplianceVmReply;
    class APIListApplianceVmReply {
    }
    ApiHeader.APIListApplianceVmReply = APIListApplianceVmReply;
    class IscsiFileSystemBackendPrimaryStorageInventory {
    }
    ApiHeader.IscsiFileSystemBackendPrimaryStorageInventory = IscsiFileSystemBackendPrimaryStorageInventory;
    class APIQueryIscsiFileSystemBackendPrimaryStorageReply {
    }
    ApiHeader.APIQueryIscsiFileSystemBackendPrimaryStorageReply = APIQueryIscsiFileSystemBackendPrimaryStorageReply;
    class APIGetSftpBackupStorageReply {
    }
    ApiHeader.APIGetSftpBackupStorageReply = APIGetSftpBackupStorageReply;
    class APIQuerySftpBackupStorageReply {
    }
    ApiHeader.APIQuerySftpBackupStorageReply = APIQuerySftpBackupStorageReply;
    class APISearchSftpBackupStorageReply {
    }
    ApiHeader.APISearchSftpBackupStorageReply = APISearchSftpBackupStorageReply;
    class APISearchVirtualRouterVmReply {
    }
    ApiHeader.APISearchVirtualRouterVmReply = APISearchVirtualRouterVmReply;
    class APIGetVirtualRouterOfferingReply {
    }
    ApiHeader.APIGetVirtualRouterOfferingReply = APIGetVirtualRouterOfferingReply;
    class APISearchVirtualRouterOffingReply {
    }
    ApiHeader.APISearchVirtualRouterOffingReply = APISearchVirtualRouterOffingReply;
    class VirtualRouterOfferingInventory {
    }
    ApiHeader.VirtualRouterOfferingInventory = VirtualRouterOfferingInventory;
    class APIQueryVirtualRouterOfferingReply {
    }
    ApiHeader.APIQueryVirtualRouterOfferingReply = APIQueryVirtualRouterOfferingReply;
    class VirtualRouterVmInventory {
    }
    ApiHeader.VirtualRouterVmInventory = VirtualRouterVmInventory;
    class APIQueryVirtualRouterVmReply {
    }
    ApiHeader.APIQueryVirtualRouterVmReply = APIQueryVirtualRouterVmReply;
    class APIQueryPortForwardingRuleReply {
    }
    ApiHeader.APIQueryPortForwardingRuleReply = APIQueryPortForwardingRuleReply;
    class APIListPortForwardingRuleReply {
    }
    ApiHeader.APIListPortForwardingRuleReply = APIListPortForwardingRuleReply;
    class APIGetPortForwardingAttachableVmNicsReply {
    }
    ApiHeader.APIGetPortForwardingAttachableVmNicsReply = APIGetPortForwardingAttachableVmNicsReply;
    class APIQueryEipReply {
    }
    ApiHeader.APIQueryEipReply = APIQueryEipReply;
    class APIGetEipAttachableVmNicsReply {
    }
    ApiHeader.APIGetEipAttachableVmNicsReply = APIGetEipAttachableVmNicsReply;
    class APIQueryLoadBalancerListenerReply {
    }
    ApiHeader.APIQueryLoadBalancerListenerReply = APIQueryLoadBalancerListenerReply;
    class APIQueryLoadBalancerReply {
    }
    ApiHeader.APIQueryLoadBalancerReply = APIQueryLoadBalancerReply;
    class APIListSecurityGroupReply {
    }
    ApiHeader.APIListSecurityGroupReply = APIListSecurityGroupReply;
    class APIQuerySecurityGroupRuleReply {
    }
    ApiHeader.APIQuerySecurityGroupRuleReply = APIQuerySecurityGroupRuleReply;
    class APIGetCandidateVmNicForSecurityGroupReply {
    }
    ApiHeader.APIGetCandidateVmNicForSecurityGroupReply = APIGetCandidateVmNicForSecurityGroupReply;
    class VmNicSecurityGroupRefInventory {
    }
    ApiHeader.VmNicSecurityGroupRefInventory = VmNicSecurityGroupRefInventory;
    class APIListVmNicInSecurityGroupReply {
    }
    ApiHeader.APIListVmNicInSecurityGroupReply = APIListVmNicInSecurityGroupReply;
    class APIQuerySecurityGroupReply {
    }
    ApiHeader.APIQuerySecurityGroupReply = APIQuerySecurityGroupReply;
    class APIQueryVmNicInSecurityGroupReply {
    }
    ApiHeader.APIQueryVmNicInSecurityGroupReply = APIQueryVmNicInSecurityGroupReply;
    class APIQueryVipReply {
    }
    ApiHeader.APIQueryVipReply = APIQueryVipReply;
    class HostCapacityInventory {
    }
    ApiHeader.HostCapacityInventory = HostCapacityInventory;
    class ConsoleProxyInventory {
    }
    ApiHeader.ConsoleProxyInventory = ConsoleProxyInventory;
    class PrimaryStorageClusterRefInventory {
    }
    ApiHeader.PrimaryStorageClusterRefInventory = PrimaryStorageClusterRefInventory;
    class PrimaryStorageCapacityInventory {
    }
    ApiHeader.PrimaryStorageCapacityInventory = PrimaryStorageCapacityInventory;
    class BackupStorageZoneRefInventory {
    }
    ApiHeader.BackupStorageZoneRefInventory = BackupStorageZoneRefInventory;
    class IpUseInventory {
    }
    ApiHeader.IpUseInventory = IpUseInventory;
    class L3NetworkDnsInventory {
    }
    ApiHeader.L3NetworkDnsInventory = L3NetworkDnsInventory;
    class NetworkServiceTypeInventory {
    }
    ApiHeader.NetworkServiceTypeInventory = NetworkServiceTypeInventory;
    class NetworkServiceProviderL2NetworkRefInventory {
    }
    ApiHeader.NetworkServiceProviderL2NetworkRefInventory = NetworkServiceProviderL2NetworkRefInventory;
    class L2NetworkClusterRefInventory {
    }
    ApiHeader.L2NetworkClusterRefInventory = L2NetworkClusterRefInventory;
    class AccountResourceRefInventory {
    }
    ApiHeader.AccountResourceRefInventory = AccountResourceRefInventory;
    class UserGroupPolicyRefInventory {
    }
    ApiHeader.UserGroupPolicyRefInventory = UserGroupPolicyRefInventory;
    class UserPolicyRefInventory {
    }
    ApiHeader.UserPolicyRefInventory = UserPolicyRefInventory;
    class UserGroupUserRefInventory {
    }
    ApiHeader.UserGroupUserRefInventory = UserGroupUserRefInventory;
    class SimulatorHostInventory {
    }
    ApiHeader.SimulatorHostInventory = SimulatorHostInventory;
    class ApplianceVmFirewallRuleInventory {
    }
    ApiHeader.ApplianceVmFirewallRuleInventory = ApplianceVmFirewallRuleInventory;
    class KVMHostInventory {
    }
    ApiHeader.KVMHostInventory = KVMHostInventory;
    class VirtualRouterEipRefInventory {
    }
    ApiHeader.VirtualRouterEipRefInventory = VirtualRouterEipRefInventory;
    class VirtualRouterLoadBalancerRefInventory {
    }
    ApiHeader.VirtualRouterLoadBalancerRefInventory = VirtualRouterLoadBalancerRefInventory;
    class VirtualRouterVipInventory {
    }
    ApiHeader.VirtualRouterVipInventory = VirtualRouterVipInventory;
    class VirtualRouterPortForwardingRuleRefInventory {
    }
    ApiHeader.VirtualRouterPortForwardingRuleRefInventory = VirtualRouterPortForwardingRuleRefInventory;
    class SecurityGroupL3NetworkRefInventory {
    }
    ApiHeader.SecurityGroupL3NetworkRefInventory = SecurityGroupL3NetworkRefInventory;
    ApiHeader.GlobalConfigInventoryQueryable = ['name', 'category', 'description', 'defaultValue', 'value'];
    ApiHeader.TagResourceTypeGlobalConfigVO = 'GlobalConfigVO';
    ApiHeader.HostCapacityInventoryQueryable = ['uuid', 'totalMemory', 'totalCpu', 'availableMemory', 'availableCpu'];
    ApiHeader.TagResourceTypeHostCapacityVO = 'HostCapacityVO';
    ApiHeader.VmNicInventoryQueryable = ['uuid', 'vmInstanceUuid', 'l3NetworkUuid', 'ip', 'mac', 'netmask', 'gateway', 'metaData', 'deviceId', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVmNicVO = 'VmNicVO';
    ApiHeader.VmInstanceInventoryQueryable = ['uuid', 'name', 'description', 'zoneUuid', 'clusterUuid', 'imageUuid', 'hostUuid', 'lastHostUuid', 'instanceOfferingUuid', 'rootVolumeUuid', 'platform', 'defaultL3NetworkUuid', 'type', 'hypervisorType', 'memorySize', 'cpuNum', 'cpuSpeed', 'allocatorStrategy', 'createDate', 'lastOpDate', 'state', 'vmNics.uuid', 'vmNics.vmInstanceUuid', 'vmNics.l3NetworkUuid', 'vmNics.ip', 'vmNics.mac', 'vmNics.netmask', 'vmNics.gateway', 'vmNics.metaData', 'vmNics.deviceId', 'vmNics.createDate', 'vmNics.lastOpDate', 'allVolumes.uuid', 'allVolumes.name', 'allVolumes.description', 'allVolumes.primaryStorageUuid', 'allVolumes.vmInstanceUuid', 'allVolumes.diskOfferingUuid', 'allVolumes.rootImageUuid', 'allVolumes.installPath', 'allVolumes.type', 'allVolumes.format', 'allVolumes.size', 'allVolumes.deviceId', 'allVolumes.state', 'allVolumes.status', 'allVolumes.createDate', 'allVolumes.lastOpDate'];
    ApiHeader.TagResourceTypeVmInstanceVO = 'VmInstanceVO';
    ApiHeader.ImageInventoryQueryable = ['uuid', 'name', 'description', 'state', 'status', 'size', 'md5Sum', 'url', 'mediaType', 'guestOsType', 'type', 'platform', 'format', 'system', 'createDate', 'lastOpDate', 'backupStorageRefs.imageUuid', 'backupStorageRefs.backupStorageUuid', 'backupStorageRefs.installPath', 'backupStorageRefs.createDate', 'backupStorageRefs.lastOpDate'];
    ApiHeader.TagResourceTypeImageVO = 'ImageVO';
    ApiHeader.ImageBackupStorageRefInventoryQueryable = ['imageUuid', 'backupStorageUuid', 'installPath', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeImageBackupStorageRefVO = 'ImageBackupStorageRefVO';
    ApiHeader.ConsoleProxyInventoryQueryable = ['uuid', 'vmInstanceUuid', 'agentIp', 'token', 'agentType', 'proxyHostname', 'proxyPort', 'targetHostname', 'targetPort', 'scheme', 'proxyIdentity', 'status', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeConsoleProxyVO = 'ConsoleProxyVO';
    ApiHeader.VolumeInventoryQueryable = ['uuid', 'name', 'description', 'primaryStorageUuid', 'vmInstanceUuid', 'diskOfferingUuid', 'rootImageUuid', 'installPath', 'type', 'format', 'size', 'deviceId', 'state', 'status', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVolumeVO = 'VolumeVO';
    ApiHeader.InstanceOfferingInventoryQueryable = ['uuid', 'name', 'description', 'cpuNum', 'cpuSpeed', 'memorySize', 'type', 'allocatorStrategy', 'sortKey', 'createDate', 'lastOpDate', 'state'];
    ApiHeader.TagResourceTypeInstanceOfferingVO = 'InstanceOfferingVO';
    ApiHeader.DiskOfferingInventoryQueryable = ['uuid', 'name', 'description', 'diskSize', 'sortKey', 'state', 'type', 'createDate', 'lastOpDate', 'allocatorStrategy'];
    ApiHeader.TagResourceTypeDiskOfferingVO = 'DiskOfferingVO';
    ApiHeader.PrimaryStorageInventoryQueryable = ['uuid', 'zoneUuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'totalPhysicalCapacity', 'availablePhysicalCapacity', 'type', 'state', 'status', 'mountPath', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypePrimaryStorageVO = 'PrimaryStorageVO';
    ApiHeader.PrimaryStorageClusterRefInventoryQueryable = ['id', 'clusterUuid', 'primaryStorageUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypePrimaryStorageClusterRefVO = 'PrimaryStorageClusterRefVO';
    ApiHeader.PrimaryStorageCapacityInventoryQueryable = ['uuid', 'totalCapacity', 'availableCapacity', 'totalPhysicalCapacity', 'availablePhsicalCapacity', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypePrimaryStorageCapacityVO = 'PrimaryStorageCapacityVO';
    ApiHeader.VolumeSnapshotInventoryQueryable = ['uuid', 'name', 'description', 'type', 'volumeUuid', 'treeUuid', 'parentUuid', 'primaryStorageUuid', 'primaryStorageInstallPath', 'volumeType', 'format', 'latest', 'size', 'state', 'status', 'createDate', 'lastOpDate', 'backupStorageRefs.volumeSnapshotUuid', 'backupStorageRefs.backupStorageUuid', 'backupStorageRefs.installPath'];
    ApiHeader.TagResourceTypeVolumeSnapshotVO = 'VolumeSnapshotVO';
    ApiHeader.VolumeSnapshotBackupStorageRefInventoryQueryable = ['volumeSnapshotUuid', 'backupStorageUuid', 'installPath'];
    ApiHeader.TagResourceTypeVolumeSnapshotBackupStorageRefVO = 'VolumeSnapshotBackupStorageRefVO';
    ApiHeader.VolumeSnapshotTreeInventoryQueryable = ['uuid', 'volumeUuid', 'current', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVolumeSnapshotTreeVO = 'VolumeSnapshotTreeVO';
    ApiHeader.BackupStorageInventoryQueryable = ['uuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'type', 'state', 'status', 'createDate', 'lastOpDate', 'attachedZoneUuids'];
    ApiHeader.TagResourceTypeBackupStorageVO = 'BackupStorageVO';
    ApiHeader.BackupStorageZoneRefInventoryQueryable = ['id', 'backupStorageUuid', 'zoneUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeBackupStorageZoneRefVO = 'BackupStorageZoneRefVO';
    ApiHeader.IpRangeInventoryQueryable = ['uuid', 'l3NetworkUuid', 'name', 'description', 'startIp', 'endIp', 'netmask', 'gateway', 'networkCidr', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeIpRangeVO = 'IpRangeVO';
    ApiHeader.L3NetworkInventoryQueryable = ['uuid', 'name', 'description', 'type', 'zoneUuid', 'l2NetworkUuid', 'state', 'dnsDomain', 'system', 'createDate', 'lastOpDate', 'dns', 'ipRanges.uuid', 'ipRanges.l3NetworkUuid', 'ipRanges.name', 'ipRanges.description', 'ipRanges.startIp', 'ipRanges.endIp', 'ipRanges.netmask', 'ipRanges.gateway', 'ipRanges.networkCidr', 'ipRanges.createDate', 'ipRanges.lastOpDate', 'networkServices.l3NetworkUuid', 'networkServices.networkServiceProviderUuid', 'networkServices.networkServiceType'];
    ApiHeader.TagResourceTypeL3NetworkVO = 'L3NetworkVO';
    ApiHeader.IpUseInventoryQueryable = ['uuid', 'usedIpUuid', 'serviceId', 'use', 'details', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeIpUseVO = 'IpUseVO';
    ApiHeader.L3NetworkDnsInventoryQueryable = ['l3NetworkUuid', 'dns', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeL3NetworkDnsVO = 'L3NetworkDnsVO';
    ApiHeader.NetworkServiceL3NetworkRefInventoryQueryable = ['l3NetworkUuid', 'networkServiceProviderUuid', 'networkServiceType'];
    ApiHeader.TagResourceTypeNetworkServiceL3NetworkRefVO = 'NetworkServiceL3NetworkRefVO';
    ApiHeader.NetworkServiceTypeInventoryQueryable = ['networkServiceProviderUuid', 'type'];
    ApiHeader.TagResourceTypeNetworkServiceTypeVO = 'NetworkServiceTypeVO';
    ApiHeader.NetworkServiceProviderInventoryQueryable = ['uuid', 'name', 'description', 'type', 'createDate', 'lastOpDate', 'networkServiceTypes', 'attachedL2NetworkUuids'];
    ApiHeader.TagResourceTypeNetworkServiceProviderVO = 'NetworkServiceProviderVO';
    ApiHeader.NetworkServiceProviderL2NetworkRefInventoryQueryable = ['networkServiceProviderUuid', 'l2NetworkUuid'];
    ApiHeader.TagResourceTypeNetworkServiceProviderL2NetworkRefVO = 'NetworkServiceProviderL2NetworkRefVO';
    ApiHeader.L2VlanNetworkInventoryQueryable = ['vlan', 'uuid', 'name', 'description', 'zoneUuid', 'physicalInterface', 'type', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypeL2VlanNetworkVO = 'L2VlanNetworkVO';
    ApiHeader.L2NetworkClusterRefInventoryQueryable = ['clusterUuid', 'l2NetworkUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeL2NetworkClusterRefVO = 'L2NetworkClusterRefVO';
    ApiHeader.L2NetworkInventoryQueryable = ['uuid', 'name', 'description', 'zoneUuid', 'physicalInterface', 'type', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypeL2NetworkVO = 'L2NetworkVO';
    ApiHeader.UserTagInventoryQueryable = ['uuid', 'resourceUuid', 'resourceType', 'tag', 'type', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserTagVO = 'UserTagVO';
    ApiHeader.SystemTagInventoryQueryable = ['inherent', 'uuid', 'resourceUuid', 'resourceType', 'tag', 'type', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeSystemTagVO = 'SystemTagVO';
    ApiHeader.ManagementNodeInventoryQueryable = ['uuid', 'hostName', 'joinDate', 'heartBeat'];
    ApiHeader.TagResourceTypeManagementNodeVO = 'ManagementNodeVO';
    ApiHeader.ClusterInventoryQueryable = ['name', 'uuid', 'description', 'state', 'hypervisorType', 'createDate', 'lastOpDate', 'zoneUuid', 'type'];
    ApiHeader.TagResourceTypeClusterVO = 'ClusterVO';
    ApiHeader.UserInventoryQueryable = ['uuid', 'accountUuid', 'name', 'description', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserVO = 'UserVO';
    ApiHeader.UserGroupInventoryQueryable = ['uuid', 'accountUuid', 'name', 'description', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserGroupVO = 'UserGroupVO';
    ApiHeader.PolicyInventoryQueryable = ['statements.name', 'statements.effect', 'statements.principals', 'statements.actions', 'statements.resources', 'name', 'uuid', 'accountUuid'];
    ApiHeader.TagResourceTypePolicyVO = 'PolicyVO';
    ApiHeader.AccountResourceRefInventoryQueryable = ['accountUuid', 'ownerAccountUuid', 'resourceUuid', 'resourceType', 'permission', 'isShared', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeAccountResourceRefVO = 'AccountResourceRefVO';
    ApiHeader.UserGroupPolicyRefInventoryQueryable = ['groupUuid', 'policyUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserGroupPolicyRefVO = 'UserGroupPolicyRefVO';
    ApiHeader.AccountInventoryQueryable = ['uuid', 'name', 'description', 'type', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeAccountVO = 'AccountVO';
    ApiHeader.QuotaInventoryQueryable = ['name', 'identityUuid', 'identityType', 'value', 'lastOpDate', 'createDate'];
    ApiHeader.TagResourceTypeQuotaVO = 'QuotaVO';
    ApiHeader.UserPolicyRefInventoryQueryable = ['userUuid', 'policyUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserPolicyRefVO = 'UserPolicyRefVO';
    ApiHeader.UserGroupUserRefInventoryQueryable = ['userUuid', 'groupUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserGroupUserRefVO = 'UserGroupUserRefVO';
    ApiHeader.ZoneInventoryQueryable = ['uuid', 'name', 'description', 'state', 'type', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeZoneVO = 'ZoneVO';
    ApiHeader.HostInventoryQueryable = ['zoneUuid', 'name', 'uuid', 'clusterUuid', 'description', 'managementIp', 'hypervisorType', 'state', 'status', 'totalCpuCapacity', 'availableCpuCapacity', 'totalMemoryCapacity', 'availableMemoryCapacity', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeHostVO = 'HostVO';
    ApiHeader.SimulatorHostInventoryQueryable = ['memoryCapacity', 'cpuCapacity', 'zoneUuid', 'name', 'uuid', 'clusterUuid', 'description', 'managementIp', 'hypervisorType', 'state', 'status', 'totalCpuCapacity', 'availableCpuCapacity', 'totalMemoryCapacity', 'availableMemoryCapacity', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeSimulatorHostVO = 'SimulatorHostVO';
    ApiHeader.ApplianceVmFirewallRuleInventoryQueryable = ['applianceVmUuid', 'protocol', 'startPort', 'endPort', 'allowCidr', 'sourceIp', 'destIp', 'l3NetworkUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeApplianceVmFirewallRuleVO = 'ApplianceVmFirewallRuleVO';
    ApiHeader.ApplianceVmInventoryQueryable = ['applianceVmType', 'managementNetworkUuid', 'defaultRouteL3NetworkUuid', 'status', 'uuid', 'name', 'description', 'zoneUuid', 'clusterUuid', 'imageUuid', 'hostUuid', 'lastHostUuid', 'instanceOfferingUuid', 'rootVolumeUuid', 'platform', 'defaultL3NetworkUuid', 'type', 'hypervisorType', 'memorySize', 'cpuNum', 'cpuSpeed', 'allocatorStrategy', 'createDate', 'lastOpDate', 'state', 'vmNics.uuid', 'vmNics.vmInstanceUuid', 'vmNics.l3NetworkUuid', 'vmNics.ip', 'vmNics.mac', 'vmNics.netmask', 'vmNics.gateway', 'vmNics.metaData', 'vmNics.deviceId', 'vmNics.createDate', 'vmNics.lastOpDate', 'allVolumes.uuid', 'allVolumes.name', 'allVolumes.description', 'allVolumes.primaryStorageUuid', 'allVolumes.vmInstanceUuid', 'allVolumes.diskOfferingUuid', 'allVolumes.rootImageUuid', 'allVolumes.installPath', 'allVolumes.type', 'allVolumes.format', 'allVolumes.size', 'allVolumes.deviceId', 'allVolumes.state', 'allVolumes.status', 'allVolumes.createDate', 'allVolumes.lastOpDate'];
    ApiHeader.TagResourceTypeApplianceVmVO = 'ApplianceVmVO';
    ApiHeader.IscsiFileSystemBackendPrimaryStorageInventoryQueryable = ['chapUsername', 'hostname', 'sshUsername', 'filesystemType', 'uuid', 'zoneUuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'totalPhysicalCapacity', 'availablePhysicalCapacity', 'type', 'state', 'status', 'mountPath', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypeIscsiFileSystemBackendPrimaryStorageVO = 'IscsiFileSystemBackendPrimaryStorageVO';
    ApiHeader.CephPrimaryStorageInventoryQueryable = ['mons.hostname', 'mons.monPort', 'mons.createDate', 'mons.lastOpDate', 'mons.primaryStorageUuid', 'fsid', 'rootVolumePoolName', 'dataVolumePoolName', 'imageCachePoolName', 'uuid', 'zoneUuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'totalPhysicalCapacity', 'availablePhysicalCapacity', 'type', 'state', 'status', 'mountPath', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypeCephPrimaryStorageVO = 'CephPrimaryStorageVO';
    ApiHeader.CephPrimaryStorageMonInventoryQueryable = ['hostname', 'monPort', 'createDate', 'lastOpDate', 'primaryStorageUuid'];
    ApiHeader.TagResourceTypeCephPrimaryStorageMonVO = 'CephPrimaryStorageMonVO';
    ApiHeader.CephBackupStorageInventoryQueryable = ['mons.hostname', 'mons.monPort', 'mons.createDate', 'mons.lastOpDate', 'mons.backupStorageUuid', 'fsid', 'poolName', 'uuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'type', 'state', 'status', 'createDate', 'lastOpDate', 'attachedZoneUuids'];
    ApiHeader.TagResourceTypeCephBackupStorageVO = 'CephBackupStorageVO';
    ApiHeader.CephBackupStorageMonInventoryQueryable = ['hostname', 'monPort', 'createDate', 'lastOpDate', 'backupStorageUuid'];
    ApiHeader.TagResourceTypeCephBackupStorageMonVO = 'CephBackupStorageMonVO';
    ApiHeader.FusionstorPrimaryStorageInventoryQueryable = ['mons.hostname', 'mons.monPort', 'mons.createDate', 'mons.lastOpDate', 'mons.primaryStorageUuid', 'fsid', 'rootVolumePoolName', 'dataVolumePoolName', 'imageCachePoolName', 'uuid', 'zoneUuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'totalPhysicalCapacity', 'availablePhysicalCapacity', 'type', 'state', 'status', 'mountPath', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypeFusionstorPrimaryStorageVO = 'FusionstorPrimaryStorageVO';
    ApiHeader.FusionstorPrimaryStorageMonInventoryQueryable = ['hostname', 'monPort', 'createDate', 'lastOpDate', 'primaryStorageUuid'];
    ApiHeader.TagResourceTypeFusionstorPrimaryStorageMonVO = 'FusionstorPrimaryStorageMonVO';
    ApiHeader.FusionstorBackupStorageInventoryQueryable = ['mons.hostname', 'mons.monPort', 'mons.createDate', 'mons.lastOpDate', 'mons.backupStorageUuid', 'fsid', 'poolName', 'uuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'type', 'state', 'status', 'createDate', 'lastOpDate', 'attachedZoneUuids'];
    ApiHeader.TagResourceTypeFusionstorBackupStorageVO = 'FusionstorBackupStorageVO';
    ApiHeader.FusionstorBackupStorageMonInventoryQueryable = ['hostname', 'monPort', 'createDate', 'lastOpDate', 'backupStorageUuid'];
    ApiHeader.TagResourceTypeFusionstorBackupStorageMonVO = 'FusionstorBackupStorageMonVO';
    ApiHeader.KVMHostInventoryQueryable = ['username', 'zoneUuid', 'name', 'uuid', 'clusterUuid', 'description', 'managementIp', 'hypervisorType', 'state', 'status', 'totalCpuCapacity', 'availableCpuCapacity', 'totalMemoryCapacity', 'availableMemoryCapacity', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeKVMHostVO = 'KVMHostVO';
    ApiHeader.SftpBackupStorageInventoryQueryable = ['hostname', 'uuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'type', 'state', 'status', 'createDate', 'lastOpDate', 'attachedZoneUuids'];
    ApiHeader.TagResourceTypeSftpBackupStorageVO = 'SftpBackupStorageVO';
    ApiHeader.VirtualRouterOfferingInventoryQueryable = ['managementNetworkUuid', 'publicNetworkUuid', 'zoneUuid', 'isDefault', 'imageUuid', 'uuid', 'name', 'description', 'cpuNum', 'cpuSpeed', 'memorySize', 'type', 'allocatorStrategy', 'sortKey', 'createDate', 'lastOpDate', 'state'];
    ApiHeader.TagResourceTypeVirtualRouterOfferingVO = 'VirtualRouterOfferingVO';
    ApiHeader.VirtualRouterEipRefInventoryQueryable = ['eipUuid', 'virtualRouterVmUuid'];
    ApiHeader.TagResourceTypeVirtualRouterEipRefVO = 'VirtualRouterEipRefVO';
    ApiHeader.VirtualRouterVmInventoryQueryable = ['publicNetworkUuid', 'applianceVmType', 'managementNetworkUuid', 'defaultRouteL3NetworkUuid', 'status', 'uuid', 'name', 'description', 'zoneUuid', 'clusterUuid', 'imageUuid', 'hostUuid', 'lastHostUuid', 'instanceOfferingUuid', 'rootVolumeUuid', 'platform', 'defaultL3NetworkUuid', 'type', 'hypervisorType', 'memorySize', 'cpuNum', 'cpuSpeed', 'allocatorStrategy', 'createDate', 'lastOpDate', 'state', 'vmNics.uuid', 'vmNics.vmInstanceUuid', 'vmNics.l3NetworkUuid', 'vmNics.ip', 'vmNics.mac', 'vmNics.netmask', 'vmNics.gateway', 'vmNics.metaData', 'vmNics.deviceId', 'vmNics.createDate', 'vmNics.lastOpDate', 'allVolumes.uuid', 'allVolumes.name', 'allVolumes.description', 'allVolumes.primaryStorageUuid', 'allVolumes.vmInstanceUuid', 'allVolumes.diskOfferingUuid', 'allVolumes.rootImageUuid', 'allVolumes.installPath', 'allVolumes.type', 'allVolumes.format', 'allVolumes.size', 'allVolumes.deviceId', 'allVolumes.state', 'allVolumes.status', 'allVolumes.createDate', 'allVolumes.lastOpDate'];
    ApiHeader.TagResourceTypeVirtualRouterVmVO = 'VirtualRouterVmVO';
    ApiHeader.VirtualRouterLoadBalancerRefInventoryQueryable = ['id', 'virtualRouterVmUuid', 'loadBalancerUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVirtualRouterLoadBalancerRefVO = 'VirtualRouterLoadBalancerRefVO';
    ApiHeader.VirtualRouterVipInventoryQueryable = ['uuid', 'virtualRouterVmUuid'];
    ApiHeader.TagResourceTypeVirtualRouterVipVO = 'VirtualRouterVipVO';
    ApiHeader.VirtualRouterPortForwardingRuleRefInventoryQueryable = ['uuid', 'vipUuid', 'virtualRouterVmUuid'];
    ApiHeader.TagResourceTypeVirtualRouterPortForwardingRuleRefVO = 'VirtualRouterPortForwardingRuleRefVO';
    ApiHeader.PortForwardingRuleInventoryQueryable = ['uuid', 'name', 'description', 'vipIp', 'guestIp', 'vipUuid', 'vipPortStart', 'vipPortEnd', 'privatePortStart', 'privatePortEnd', 'vmNicUuid', 'protocolType', 'state', 'allowedCidr', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypePortForwardingRuleVO = 'PortForwardingRuleVO';
    ApiHeader.EipInventoryQueryable = ['uuid', 'name', 'description', 'vmNicUuid', 'vipUuid', 'createDate', 'lastOpDate', 'state', 'vipIp', 'guestIp'];
    ApiHeader.TagResourceTypeEipVO = 'EipVO';
    ApiHeader.LoadBalancerInventoryQueryable = ['name', 'uuid', 'description', 'state', 'vipUuid', 'listeners.uuid', 'listeners.name', 'listeners.description', 'listeners.loadBalancerUuid', 'listeners.instancePort', 'listeners.loadBalancerPort', 'listeners.protocol', 'listeners.createDate', 'listeners.lastOpDate', 'vmNicRefs.id', 'vmNicRefs.listenerUuid', 'vmNicRefs.vmNicUuid', 'vmNicRefs.status', 'vmNicRefs.createDate', 'vmNicRefs.lastOpDate'];
    ApiHeader.TagResourceTypeLoadBalancerVO = 'LoadBalancerVO';
    ApiHeader.LoadBalancerListenerVmNicRefInventoryQueryable = ['id', 'listenerUuid', 'vmNicUuid', 'status', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeLoadBalancerListenerVmNicRefVO = 'LoadBalancerListenerVmNicRefVO';
    ApiHeader.LoadBalancerListenerInventoryQueryable = ['uuid', 'name', 'description', 'loadBalancerUuid', 'instancePort', 'loadBalancerPort', 'protocol', 'createDate', 'lastOpDate', 'vmNicRefs.id', 'vmNicRefs.listenerUuid', 'vmNicRefs.vmNicUuid', 'vmNicRefs.status', 'vmNicRefs.createDate', 'vmNicRefs.lastOpDate'];
    ApiHeader.TagResourceTypeLoadBalancerListenerVO = 'LoadBalancerListenerVO';
    ApiHeader.VmNicSecurityGroupRefInventoryQueryable = ['vmNicUuid', 'securityGroupUuid', 'vmInstanceUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVmNicSecurityGroupRefVO = 'VmNicSecurityGroupRefVO';
    ApiHeader.SecurityGroupRuleInventoryQueryable = ['uuid', 'securityGroupUuid', 'type', 'startPort', 'endPort', 'protocol', 'state', 'allowedCidr', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeSecurityGroupRuleVO = 'SecurityGroupRuleVO';
    ApiHeader.SecurityGroupInventoryQueryable = ['uuid', 'name', 'description', 'state', 'createDate', 'lastOpDate', 'rules.uuid', 'rules.securityGroupUuid', 'rules.type', 'rules.startPort', 'rules.endPort', 'rules.protocol', 'rules.state', 'rules.allowedCidr', 'rules.createDate', 'rules.lastOpDate', 'attachedL3NetworkUuids'];
    ApiHeader.TagResourceTypeSecurityGroupVO = 'SecurityGroupVO';
    ApiHeader.SecurityGroupL3NetworkRefInventoryQueryable = ['uuid', 'l3NetworkUuid', 'securityGroupUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeSecurityGroupL3NetworkRefVO = 'SecurityGroupL3NetworkRefVO';
    ApiHeader.VipInventoryQueryable = ['uuid', 'name', 'description', 'l3NetworkUuid', 'ip', 'state', 'gateway', 'netmask', 'serviceProvider', 'peerL3NetworkUuid', 'useFor', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVipVO = 'VipVO';
    class APIExpungeVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIExpungeVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIExpungeVmInstanceMsg = APIExpungeVmInstanceMsg;
    class APIExpungeVmInstanceEvent {
    }
    ApiHeader.APIExpungeVmInstanceEvent = APIExpungeVmInstanceEvent;
    class APIRecoverVmInstanceMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.vm.APIRecoverVmInstanceMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRecoverVmInstanceMsg = APIRecoverVmInstanceMsg;
    class APIRecoverVmInstanceEvent {
    }
    ApiHeader.APIRecoverVmInstanceEvent = APIRecoverVmInstanceEvent;
    class APIRecoverImageEvent {
    }
    ApiHeader.APIRecoverImageEvent = APIRecoverImageEvent;
    class APIExpungeImageEvent {
    }
    ApiHeader.APIExpungeImageEvent = APIExpungeImageEvent;
    class APIExpungeImageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APIExpungeImageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIExpungeImageMsg = APIExpungeImageMsg;
    class APIRecoverImageMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.image.APIRecoverImageMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRecoverImageMsg = APIRecoverImageMsg;
    class APIExpungeDataVolumeEvent {
    }
    ApiHeader.APIExpungeDataVolumeEvent = APIExpungeDataVolumeEvent;
    class APIRecoverDataVolumeEvent {
    }
    ApiHeader.APIRecoverDataVolumeEvent = APIRecoverDataVolumeEvent;
    class APIExpungeDataVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIExpungeDataVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIExpungeDataVolumeMsg = APIExpungeDataVolumeMsg;
    class APIRecoverDataVolumeMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.volume.APIRecoverDataVolumeMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIRecoverDataVolumeMsg = APIRecoverDataVolumeMsg;
    class APIGetVersionMsg {
        toApiMap() {
            var msg = {
                'org.zstack.header.managementnode.APIGetVersionMsg': this
            };
            return msg;
        }
    }
    ApiHeader.APIGetVersionMsg = APIGetVersionMsg;
    class APIGetVersionMsgEvent {
    }
    ApiHeader.APIGetVersionMsgEvent = APIGetVersionMsgEvent;
})(ApiHeader || (ApiHeader = {}));
//# sourceMappingURL=api-header.js.map