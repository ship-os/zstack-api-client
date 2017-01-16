export declare module ApiHeader {
    interface APIMessage {
        session?: SessionInventory;
        toApiMap(): any;
    }
    class SessionInventory {
        uuid: string;
        accountUuid: string;
        userUuid: string;
    }
    class APISilentMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class FakePolicyAllowMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class FakePolicyDenyMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class FakePolicyAllowHas2RoleMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class QueryCondition {
        name: string;
        op: string;
        value: string;
    }
    class APIQueryGlobalConfigMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListGlobalConfigMsg implements APIMessage {
        toApiMap(): any;
        ids: Array<number>;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetGlobalConfigMsg implements APIMessage {
        toApiMap(): any;
        category: string;
        name: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateGlobalConfigMsg implements APIMessage {
        toApiMap(): any;
        category: string;
        name: string;
        value: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGenerateInventoryQueryDetailsMsg implements APIMessage {
        toApiMap(): any;
        outputDir: string;
        basePackageNames: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGenerateQueryableFieldsMsg implements APIMessage {
        toApiMap(): any;
        PYTHON_FORMAT: string;
        format: string;
        outputFolder: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetHostAllocatorStrategiesMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetCpuMemoryCapacityMsg implements APIMessage {
        toApiMap(): any;
        zoneUuids: Array<string>;
        clusterUuids: Array<string>;
        hostUuids: Array<string>;
        all: boolean;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        state: string;
        defaultL3NetworkUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetVmAttachableL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        vmInstanceUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIMigrateVmMsg implements APIMessage {
        toApiMap(): any;
        vmInstanceUuid: string;
        hostUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIStopVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeInstanceOfferingMsg implements APIMessage {
        toApiMap(): any;
        vmInstanceUuid: string;
        instanceOfferingUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class NOVTriple {
        name: string;
        op: string;
        val: string;
    }
    class NOLTriple {
        name: string;
        op: string;
        vals: Array<string>;
    }
    class APISearchVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetVmAttachableDataVolumeMsg implements APIMessage {
        toApiMap(): any;
        vmInstanceUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryVmNicMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachL3NetworkToVmMsg implements APIMessage {
        toApiMap(): any;
        vmInstanceUuid: string;
        l3NetworkUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDestroyVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetVmMigrationCandidateHostsMsg implements APIMessage {
        toApiMap(): any;
        vmInstanceUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachL3NetworkFromVmMsg implements APIMessage {
        toApiMap(): any;
        vmNicUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListVmNicMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRebootVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        instanceOfferingUuid: string;
        imageUuid: string;
        l3NetworkUuids: Array<string>;
        type: string;
        rootDiskOfferingUuid: string;
        dataDiskOfferingUuids: Array<string>;
        zoneUuid: string;
        clusterUuid: string;
        hostUuid: string;
        description: string;
        defaultL3NetworkUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIStartVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeImageStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetImageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateImageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        guestOsType: string;
        mediaType: string;
        format: string;
        system: boolean;
        platform: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteImageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        backupStorageUuids: Array<string>;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchImageMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateDataVolumeTemplateFromVolumeMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        volumeUuid: string;
        backupStorageUuids: Array<string>;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateRootVolumeTemplateFromRootVolumeMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        guestOsType: string;
        backupStorageUuids: Array<string>;
        rootVolumeUuid: string;
        platform: string;
        system: boolean;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryImageMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListImageMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateRootVolumeTemplateFromVolumeSnapshotMsg implements APIMessage {
        toApiMap(): any;
        snapshotUuid: string;
        name: string;
        description: string;
        guestOsType: string;
        backupStorageUuids: Array<string>;
        platform: string;
        system: boolean;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddImageMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        url: string;
        mediaType: string;
        guestOsType: string;
        system: boolean;
        format: string;
        platform: string;
        backupStorageUuids: Array<string>;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRequestConsoleAccessMsg implements APIMessage {
        toApiMap(): any;
        vmInstanceUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIBackupDataVolumeMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        backupStorageUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachDataVolumeToVmMsg implements APIMessage {
        toApiMap(): any;
        vmInstanceUuid: string;
        volumeUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchVolumeMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateVolumeMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryVolumeMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateDataVolumeFromVolumeSnapshotMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        volumeSnapshotUuid: string;
        primaryStorageUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateDataVolumeFromVolumeTemplateMsg implements APIMessage {
        toApiMap(): any;
        imageUuid: string;
        name: string;
        description: string;
        primaryStorageUuid: string;
        hostUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachDataVolumeFromVmMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetVolumeMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateDataVolumeMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        diskOfferingUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetDataVolumeAttachableVmMsg implements APIMessage {
        toApiMap(): any;
        volumeUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetVolumeFormatMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteDataVolumeMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateVolumeSnapshotMsg implements APIMessage {
        toApiMap(): any;
        volumeUuid: string;
        name: string;
        description: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListVolumeMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeVolumeStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIIsReadyToGoMsg implements APIMessage {
        toApiMap(): any;
        managementNodeId: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListDiskOfferingMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGenerateApiTypeScriptDefinitionMsg implements APIMessage {
        toApiMap(): any;
        outputPath: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteDiskOfferingMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGenerateGroovyClassMsg implements APIMessage {
        toApiMap(): any;
        outputPath: string;
        basePackageNames: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryInstanceOfferingMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateInstanceOfferingMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateInstanceOfferingMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        cpuNum: number;
        cpuSpeed: number;
        memorySize: number;
        allocatorStrategy: string;
        sortKey: number;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGenerateApiJsonTemplateMsg implements APIMessage {
        toApiMap(): any;
        exportPath: string;
        basePackageNames: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateDiskOfferingMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        diskSize: number;
        sortKey: number;
        allocationStrategy: string;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetInstanceOfferingMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListInstanceOfferingMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchDnsMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchDiskOfferingMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteInstanceOfferingMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGenerateSqlVOViewMsg implements APIMessage {
        toApiMap(): any;
        basePackageNames: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGenerateTestLinkDocumentMsg implements APIMessage {
        toApiMap(): any;
        outputDir: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetGlobalPropertyMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeInstanceOfferingStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGenerateSqlIndexMsg implements APIMessage {
        toApiMap(): any;
        outputPath: string;
        basePackageNames: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryDiskOfferingMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetDiskOfferingMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGenerateSqlForeignKeyMsg implements APIMessage {
        toApiMap(): any;
        outputPath: string;
        basePackageNames: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateDiskOfferingMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeDiskOfferingStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchInstanceOfferingMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetPrimaryStorageTypesMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachPrimaryStorageToClusterMsg implements APIMessage {
        toApiMap(): any;
        clusterUuid: string;
        primaryStorageUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetPrimaryStorageCapacityMsg implements APIMessage {
        toApiMap(): any;
        zoneUuids: Array<string>;
        clusterUuids: Array<string>;
        primaryStorageUuids: Array<string>;
        all: boolean;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdatePrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangePrimaryStorageStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISyncPrimaryStorageCapacityMsg implements APIMessage {
        toApiMap(): any;
        primaryStorageUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeletePrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIReconnectPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachPrimaryStorageFromClusterMsg implements APIMessage {
        toApiMap(): any;
        primaryStorageUuid: string;
        clusterUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetPrimaryStorageAllocatorStrategiesMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryVolumeSnapshotTreeMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteVolumeSnapshotMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateVolumeSnapshotMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteVolumeSnapshotFromBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        backupStorageUuids: Array<string>;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryVolumeSnapshotMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRevertVolumeFromSnapshotMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIBackupVolumeSnapshotMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        backupStorageUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetVolumeSnapshotTreeMsg implements APIMessage {
        toApiMap(): any;
        volumeUuid: string;
        treeUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachBackupStorageToZoneMsg implements APIMessage {
        toApiMap(): any;
        zoneUuid: string;
        backupStorageUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetBackupStorageTypesMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeBackupStorageStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIScanBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        backupStorageUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetBackupStorageCapacityMsg implements APIMessage {
        toApiMap(): any;
        zoneUuids: Array<string>;
        backupStorageUuids: Array<string>;
        all: boolean;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachBackupStorageFromZoneMsg implements APIMessage {
        toApiMap(): any;
        backupStorageUuid: string;
        zoneUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddDnsToL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        l3NetworkUuid: string;
        dns: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        type: string;
        l2NetworkUuid: string;
        system: boolean;
        dnsDomain: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetFreeIpMsg implements APIMessage {
        toApiMap(): any;
        l3NetworkUuid: string;
        ipRangeUuid: string;
        limit: number;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        system: boolean;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteIpRangeMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeL3NetworkStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddIpRangeMsg implements APIMessage {
        toApiMap(): any;
        l3NetworkUuid: string;
        name: string;
        description: string;
        startIp: string;
        endIp: string;
        netmask: string;
        gateway: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetL3NetworkTypesMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddIpRangeByNetworkCidrMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        l3NetworkUuid: string;
        networkCidr: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryIpRangeMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRemoveDnsFromL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        l3NetworkUuid: string;
        dns: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListIpRangeMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetIpAddressCapacityMsg implements APIMessage {
        toApiMap(): any;
        zoneUuids: Array<string>;
        l3NetworkUuids: Array<string>;
        ipRangeUuids: Array<string>;
        all: boolean;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateIpRangeMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachNetworkServiceToL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        l3NetworkUuid: string;
        networkServices: any;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddNetworkServiceProviderMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        networkServiceTypes: Array<string>;
        type: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryNetworkServiceL3NetworkRefMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachNetworkServiceProviderToL2NetworkMsg implements APIMessage {
        toApiMap(): any;
        networkServiceProviderUuid: string;
        l2NetworkUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchNetworkServiceProviderMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachNetworkServiceProviderFromL2NetworkMsg implements APIMessage {
        toApiMap(): any;
        networkServiceProviderUuid: string;
        l2NetworkUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryNetworkServiceProviderMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetNetworkServiceTypesMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetNetworkServiceProviderMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListNetworkServiceProviderMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachL2NetworkToClusterMsg implements APIMessage {
        toApiMap(): any;
        l2NetworkUuid: string;
        clusterUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryL2VlanNetworkMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetL2NetworkMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListL2NetworkMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchL2VlanNetworkMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateL2VlanNetworkMsg implements APIMessage {
        toApiMap(): any;
        vlan: number;
        name: string;
        description: string;
        zoneUuid: string;
        physicalInterface: string;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachL2NetworkFromClusterMsg implements APIMessage {
        toApiMap(): any;
        l2NetworkUuid: string;
        clusterUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteL2NetworkMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchL2NetworkMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateL2NoVlanNetworkMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        zoneUuid: string;
        physicalInterface: string;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListL2VlanNetworkMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateL2NetworkMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetL2VlanNetworkMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetL2NetworkTypesMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryL2NetworkMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteSearchIndexMsg implements APIMessage {
        toApiMap(): any;
        indexName: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchGenerateSqlTriggerMsg implements APIMessage {
        toApiMap(): any;
        resultPath: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateSearchIndexMsg implements APIMessage {
        toApiMap(): any;
        inventoryNames: Array<string>;
        isRecreate: boolean;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryUserTagMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQuerySystemTagMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteTagMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateUserTagMsg implements APIMessage {
        toApiMap(): any;
        resourceType: string;
        resourceUuid: string;
        tag: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateSystemTagMsg implements APIMessage {
        toApiMap(): any;
        resourceType: string;
        resourceUuid: string;
        tag: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateSystemTagMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        tag: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryTagMsg implements APIMessage {
        toApiMap(): any;
        systemTag: boolean;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryManagementNodeMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListManagementNodeMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateMessage implements APIMessage {
        toApiMap(): any;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListClusterMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetClusterMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchClusterMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryClusterMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteClusterMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateClusterMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateClusterMsg implements APIMessage {
        toApiMap(): any;
        zoneUuid: string;
        name: string;
        description: string;
        hypervisorType: string;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeClusterStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachPolicyToUserGroupMsg implements APIMessage {
        toApiMap(): any;
        policyUuid: string;
        groupUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIRemoveUserFromGroupMsg implements APIMessage {
        toApiMap(): any;
        userUuid: string;
        groupUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachPolicyToUserMsg implements APIMessage {
        toApiMap(): any;
        userUuid: string;
        policyUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetAccountMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListAccountMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddUserToGroupMsg implements APIMessage {
        toApiMap(): any;
        userUuid: string;
        groupUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryQuotaMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIShareResourceMsg implements APIMessage {
        toApiMap(): any;
        resourceUuids: Array<string>;
        accountUuids: Array<string>;
        toPublic: boolean;
        session: SessionInventory;
        timeout: number;
    }
    class APIListPolicyMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateAccountMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        password: string;
        type: string;
        description: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteAccountMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateUserGroupMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateUserMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        password: string;
        description: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APILogInByUserMsg implements APIMessage {
        toApiMap(): any;
        accountUuid: string;
        userName: string;
        password: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchAccountMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchPolicyMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISessionMessage implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetUserMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetUserGroupMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachPolicyFromUserGroupMsg implements APIMessage {
        toApiMap(): any;
        policyUuid: string;
        groupUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateQuotaMsg implements APIMessage {
        toApiMap(): any;
        identityUuid: string;
        name: string;
        value: number;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryAccountMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryPolicyMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryUserMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeletePolicyMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIRevokeResourceSharingMsg implements APIMessage {
        toApiMap(): any;
        resourceUuids: Array<string>;
        toPublic: boolean;
        accountUuids: Array<string>;
        all: boolean;
        session: SessionInventory;
        timeout: number;
    }
    class APILogInByAccountMsg implements APIMessage {
        toApiMap(): any;
        accountName: string;
        password: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIValidateSessionMsg implements APIMessage {
        toApiMap(): any;
        sessionUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchUserGroupMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListUserMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteUserMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateUserMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        password: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchUserMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateAccountMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        password: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteUserGroupMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APILogOutMsg implements APIMessage {
        toApiMap(): any;
        sessionUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetPolicyMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    enum StatementEffect {
        Allow = 0,
        Deny = 1,
    }
    class Statement {
        name: string;
        effect: any;
        principals: Array<string>;
        actions: Array<string>;
        resources: Array<string>;
    }
    class APICreatePolicyMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        statements: Array<Statement>;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachPolicyFromUserMsg implements APIMessage {
        toApiMap(): any;
        policyUuid: string;
        userUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryUserGroupMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateZoneMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetZoneMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteZoneMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateZoneMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchZoneMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryZoneMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListZonesMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeZoneStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeHostStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIReconnectHostMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListHostMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateHostMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteHostMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetHostMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchHostMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetHypervisorTypesMsg implements APIMessage {
        toApiMap(): any;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryHostMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddSimulatorHostMsg implements APIMessage {
        toApiMap(): any;
        memoryCapacity: number;
        cpuCapacity: number;
        name: string;
        description: string;
        managementIp: string;
        clusterUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddSimulatorPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        totalCapacity: number;
        availableCapacity: number;
        url: string;
        name: string;
        description: string;
        type: string;
        zoneUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddSimulatorBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        totalCapacity: number;
        availableCapacity: number;
        url: string;
        name: string;
        description: string;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListApplianceVmMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryApplianceVmMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddIscsiFileSystemBackendPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        hostname: string;
        sshUsername: string;
        sshPassword: string;
        filesystemType: string;
        chapUsername: string;
        chapPassword: string;
        url: string;
        name: string;
        description: string;
        type: string;
        zoneUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryIscsiFileSystemBackendPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateIscsiFileSystemBackendPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        chapUsername: string;
        chapPassword: string;
        sshUsername: string;
        sshPassword: string;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddLocalPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        url: string;
        name: string;
        description: string;
        type: string;
        zoneUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddSharedMountPointPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        url: string;
        name: string;
        description: string;
        zoneUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryCephPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddCephPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        monUrls: Array<string>;
        rootVolumePoolName: string;
        dataVolumePoolName: string;
        imageCachePoolName: string;
        url: string;
        name: string;
        description: string;
        type: string;
        zoneUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddMonToCephPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        monUrls: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRemoveMonFromCephPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        monHostnames: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddCephBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        monUrls: Array<string>;
        poolName: string;
        url: string;
        name: string;
        description: string;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddMonToCephBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        monUrls: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryCephBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRemoveMonFromCephBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        monHostnames: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryFusionstorPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddFusionstorPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        monUrls: Array<string>;
        rootVolumePoolName: string;
        dataVolumePoolName: string;
        imageCachePoolName: string;
        url: string;
        name: string;
        description: string;
        type: string;
        zoneUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddMonToFusionstorPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        monUrls: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRemoveMonFromFusionstorPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        monHostnames: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddFusionstorBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        monUrls: Array<string>;
        poolName: string;
        url: string;
        name: string;
        description: string;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddMonToFusionstorBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        monUrls: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryFusionstorBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRemoveMonFromFusionstorBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        monHostnames: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateKVMHostMsg implements APIMessage {
        toApiMap(): any;
        username: string;
        password: string;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddKVMHostMsg implements APIMessage {
        toApiMap(): any;
        username: string;
        password: string;
        name: string;
        port: number;
        description: string;
        managementIp: string;
        clusterUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddNfsPrimaryStorageMsg implements APIMessage {
        toApiMap(): any;
        url: string;
        name: string;
        description: string;
        type: string;
        zoneUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetSftpBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchSftpBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQuerySftpBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIReconnectSftpBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateSftpBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        username: string;
        password: string;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddSftpBackupStorageMsg implements APIMessage {
        toApiMap(): any;
        hostname: string;
        username: string;
        password: string;
        port: number;
        url: string;
        name: string;
        description: string;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIReconnectVirtualRouterMsg implements APIMessage {
        toApiMap(): any;
        vmInstanceUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateVirtualRouterVmMsg implements APIMessage {
        toApiMap(): any;
        managementNetworkUuid: string;
        publicNetworkUuid: string;
        networkServicesProvided: Array<string>;
        name: string;
        instanceOfferingUuid: string;
        imageUuid: string;
        l3NetworkUuids: Array<string>;
        type: string;
        rootDiskOfferingUuid: string;
        dataDiskOfferingUuids: Array<string>;
        zoneUuid: string;
        clusterUuid: string;
        hostUuid: string;
        description: string;
        defaultL3NetworkUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetVirtualRouterOfferingMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchVirtualRouterVmMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryVirtualRouterOfferingMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateVirtualRouterOfferingMsg implements APIMessage {
        toApiMap(): any;
        zoneUuid: string;
        managementNetworkUuid: string;
        imageUuid: string;
        publicNetworkUuid: string;
        isDefault: boolean;
        name: string;
        description: string;
        cpuNum: number;
        cpuSpeed: number;
        memorySize: number;
        allocatorStrategy: string;
        sortKey: number;
        type: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryVirtualRouterVmMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APISearchVirtualRouterOffingMsg implements APIMessage {
        toApiMap(): any;
        fields: Array<string>;
        nameOpValueTriples: Array<NOVTriple>;
        nameOpListTriples: Array<NOLTriple>;
        start: number;
        size: number;
        inventoryUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateVirtualRouterOfferingMsg implements APIMessage {
        toApiMap(): any;
        isDefault: boolean;
        imageUuid: string;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachPortForwardingRuleMsg implements APIMessage {
        toApiMap(): any;
        ruleUuid: string;
        vmNicUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachPortForwardingRuleMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetPortForwardingAttachableVmNicsMsg implements APIMessage {
        toApiMap(): any;
        ruleUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangePortForwardingRuleStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdatePortForwardingRuleMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIListPortForwardingRuleMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreatePortForwardingRuleMsg implements APIMessage {
        toApiMap(): any;
        vipUuid: string;
        vipPortStart: number;
        vipPortEnd: number;
        privatePortStart: number;
        privatePortEnd: number;
        protocolType: string;
        vmNicUuid: string;
        allowedCidr: string;
        name: string;
        description: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryPortForwardingRuleMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeletePortForwardingRuleMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachEipMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetEipAttachableVmNicsMsg implements APIMessage {
        toApiMap(): any;
        eipUuid: string;
        vipUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateEipMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryEipMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeEipStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteEipMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateEipMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        vipUuid: string;
        vmNicUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachEipMsg implements APIMessage {
        toApiMap(): any;
        eipUuid: string;
        vmNicUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryLoadBalancerListenerMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteLoadBalancerMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateLoadBalancerListenerMsg implements APIMessage {
        toApiMap(): any;
        loadBalancerUuid: string;
        name: string;
        description: string;
        instancePort: number;
        loadBalancerPort: number;
        protocol: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRemoveVmNicFromLoadBalancerMsg implements APIMessage {
        toApiMap(): any;
        vmNicUuids: Array<string>;
        listenerUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddVmNicToLoadBalancerMsg implements APIMessage {
        toApiMap(): any;
        vmNicUuids: Array<string>;
        listenerUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateLoadBalancerMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        vipUuid: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRefreshLoadBalancerMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteLoadBalancerListenerMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryLoadBalancerMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeSecurityGroupStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDetachSecurityGroupFromL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        securityGroupUuid: string;
        l3NetworkUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteSecurityGroupRuleMsg implements APIMessage {
        toApiMap(): any;
        ruleUuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateSecurityGroupMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListVmNicInSecurityGroupMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryVmNicInSecurityGroupMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQuerySecurityGroupMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class SecurityGroupRuleAO {
        type: string;
        startPort: number;
        endPort: number;
        protocol: string;
        allowedCidr: string;
    }
    class APIAddSecurityGroupRuleMsg implements APIMessage {
        toApiMap(): any;
        securityGroupUuid: string;
        rules: Array<SecurityGroupRuleAO>;
        session: SessionInventory;
        timeout: number;
    }
    class APIListSecurityGroupMsg implements APIMessage {
        toApiMap(): any;
        length: number;
        offset: number;
        uuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQuerySecurityGroupRuleMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteSecurityGroupMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateSecurityGroupMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteVmNicFromSecurityGroupMsg implements APIMessage {
        toApiMap(): any;
        securityGroupUuid: string;
        vmNicUuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetCandidateVmNicForSecurityGroupMsg implements APIMessage {
        toApiMap(): any;
        securityGroupUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAttachSecurityGroupToL3NetworkMsg implements APIMessage {
        toApiMap(): any;
        securityGroupUuid: string;
        l3NetworkUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIAddVmNicToSecurityGroupMsg implements APIMessage {
        toApiMap(): any;
        securityGroupUuid: string;
        vmNicUuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIDeleteVipMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        deleteMode: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIUpdateVipMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        name: string;
        description: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIChangeVipStateMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        stateEvent: string;
        session: SessionInventory;
        timeout: number;
    }
    class APICreateVipMsg implements APIMessage {
        toApiMap(): any;
        name: string;
        description: string;
        l3NetworkUuid: string;
        allocatorStrategy: string;
        requiredIp: string;
        resourceUuid: string;
        userTags: Array<string>;
        systemTags: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIQueryVipMsg implements APIMessage {
        toApiMap(): any;
        conditions: Array<QueryCondition>;
        limit: number;
        start: number;
        count: boolean;
        replyWithCount: boolean;
        sortBy: string;
        sortDirection: string;
        fields: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class ErrorCode {
        code: string;
        description: string;
        details: string;
        elaboration: string;
        cause: ErrorCode;
    }
    class FakeApiEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class GlobalConfigInventory {
        name: string;
        category: string;
        description: string;
        defaultValue: string;
        value: string;
    }
    class APIUpdateGlobalConfigEvent {
        inventory: GlobalConfigInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class InProgressEvent {
        description: string;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class FixedInProgressEvent {
        total: number;
        current: number;
        description: string;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIGenerateInventoryQueryDetailsEvent {
        outputDir: string;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIGenerateQueryableFieldsEvent {
        outputFolder: string;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class VmNicInventory {
        uuid: string;
        vmInstanceUuid: string;
        l3NetworkUuid: string;
        ip: string;
        mac: string;
        netmask: string;
        gateway: string;
        metaData: string;
        deviceId: number;
        createDate: string;
        lastOpDate: string;
    }
    class VolumeInventory {
        uuid: string;
        name: string;
        description: string;
        primaryStorageUuid: string;
        vmInstanceUuid: string;
        diskOfferingUuid: string;
        rootImageUuid: string;
        installPath: string;
        type: string;
        format: string;
        size: number;
        deviceId: number;
        state: string;
        status: string;
        createDate: string;
        lastOpDate: string;
    }
    class VmInstanceInventory {
        uuid: string;
        name: string;
        description: string;
        zoneUuid: string;
        clusterUuid: string;
        imageUuid: string;
        hostUuid: string;
        lastHostUuid: string;
        instanceOfferingUuid: string;
        rootVolumeUuid: string;
        platform: string;
        defaultL3NetworkUuid: string;
        type: string;
        hypervisorType: string;
        memorySize: number;
        cpuNum: number;
        cpuSpeed: number;
        allocatorStrategy: string;
        createDate: string;
        lastOpDate: string;
        state: string;
        vmNics: Array<VmNicInventory>;
        allVolumes: Array<VolumeInventory>;
    }
    class APIDetachL3NetworkFromVmEvent {
        inventory: VmInstanceInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIStartVmInstanceEvent {
        inventory: VmInstanceInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAttachL3NetworkToVmEvent {
        inventory: VmInstanceInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIStopVmInstanceEvent {
        inventory: VmInstanceInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIMigrateVmEvent {
        inventory: VmInstanceInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateVmInstanceEvent {
        inventory: VmInstanceInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDestroyVmInstanceEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeInstanceOfferingEvent {
        inventory: VmInstanceInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateVmInstanceEvent {
        inventory: VmInstanceInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIRebootVmInstanceEvent {
        inventory: VmInstanceInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class ImageBackupStorageRefInventory {
        imageUuid: string;
        backupStorageUuid: string;
        installPath: string;
        createDate: string;
        lastOpDate: string;
    }
    class ImageInventory {
        uuid: string;
        name: string;
        description: string;
        state: string;
        status: string;
        size: number;
        md5Sum: string;
        url: string;
        mediaType: string;
        guestOsType: string;
        type: string;
        platform: string;
        format: string;
        system: boolean;
        createDate: string;
        lastOpDate: string;
        backupStorageRefs: Array<ImageBackupStorageRefInventory>;
    }
    class APICreateRootVolumeTemplateFromRootVolumeEvent {
        inventory: ImageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeImageStateEvent {
        inventory: ImageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateImageEvent {
        inventory: ImageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateDataVolumeTemplateFromVolumeEvent {
        inventory: ImageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateRootVolumeTemplateFromVolumeSnapshotEvent {
        inventory: ImageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddImageEvent {
        inventory: ImageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteImageEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class ConsoleInventory {
        scheme: string;
        hostname: string;
        port: number;
        token: string;
    }
    class APIRequestConsoleAccessEvent {
        inventory: ConsoleInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateDataVolumeEvent {
        inventory: VolumeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDetachDataVolumeFromVmEvent {
        inventory: VolumeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateVolumeEvent {
        inventory: VolumeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteDataVolumeEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateDataVolumeFromVolumeSnapshotEvent {
        inventory: VolumeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIBackupDataVolumeEvent {
        inventory: VolumeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateDataVolumeFromVolumeTemplateEvent {
        inventory: VolumeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeVolumeStateEvent {
        inventory: VolumeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class VolumeSnapshotBackupStorageRefInventory {
        volumeSnapshotUuid: string;
        backupStorageUuid: string;
        installPath: string;
    }
    class VolumeSnapshotInventory {
        uuid: string;
        name: string;
        description: string;
        type: string;
        volumeUuid: string;
        treeUuid: string;
        parentUuid: string;
        primaryStorageUuid: string;
        primaryStorageInstallPath: string;
        volumeType: string;
        format: string;
        latest: boolean;
        size: number;
        state: string;
        status: string;
        createDate: string;
        lastOpDate: string;
        backupStorageRefs: Array<VolumeSnapshotBackupStorageRefInventory>;
    }
    class APICreateVolumeSnapshotEvent {
        inventory: VolumeSnapshotInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAttachDataVolumeToVmEvent {
        inventory: VolumeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class DiskOfferingInventory {
        uuid: string;
        name: string;
        description: string;
        diskSize: number;
        sortKey: number;
        state: string;
        type: string;
        createDate: string;
        lastOpDate: string;
        allocatorStrategy: string;
    }
    class APICreateDiskOfferingEvent {
        inventory: DiskOfferingInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeDiskOfferingStateEvent {
        inventory: DiskOfferingInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateDiskOfferingEvent {
        inventory: DiskOfferingInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteInstanceOfferingEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIGenerateSqlForeignKeyEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteDiskOfferingEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIGenerateGroovyClassEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIGenerateSqlIndexEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class InstanceOfferingInventory {
        uuid: string;
        name: string;
        description: string;
        cpuNum: number;
        cpuSpeed: number;
        memorySize: number;
        type: string;
        allocatorStrategy: string;
        sortKey: number;
        createDate: string;
        lastOpDate: string;
        state: string;
    }
    class APIUpdateInstanceOfferingEvent {
        inventory: InstanceOfferingInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIGenerateApiTypeScriptDefinitionEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIGenerateSqlVOViewEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateInstanceOfferingEvent {
        inventory: InstanceOfferingInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeInstanceOfferingStateEvent {
        inventory: InstanceOfferingInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIGenerateTestLinkDocumentEvent {
        outputDir: string;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIGenerateApiJsonTemplateEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class PrimaryStorageInventory {
        uuid: string;
        zoneUuid: string;
        name: string;
        url: string;
        description: string;
        totalCapacity: number;
        availableCapacity: number;
        totalPhysicalCapacity: number;
        availablePhysicalCapacity: number;
        type: string;
        state: string;
        status: string;
        mountPath: string;
        createDate: string;
        lastOpDate: string;
        attachedClusterUuids: Array<string>;
    }
    class APISyncPrimaryStorageCapacityEvent {
        inventory: PrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeletePrimaryStorageEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDetachPrimaryStorageFromClusterEvent {
        inventory: PrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangePrimaryStorageStateEvent {
        inventory: PrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdatePrimaryStorageEvent {
        inventory: PrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIReconnectPrimaryStorageEvent {
        inventory: PrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAttachPrimaryStorageToClusterEvent {
        inventory: PrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddPrimaryStorageEvent {
        inventory: PrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteVolumeSnapshotEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateVolumeSnapshotEvent {
        inventory: VolumeSnapshotInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIRevertVolumeFromSnapshotEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteVolumeSnapshotFromBackupStorageEvent {
        inventory: VolumeSnapshotInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIBackupVolumeSnapshotEvent {
        inventory: VolumeSnapshotInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class BackupStorageInventory {
        uuid: string;
        name: string;
        url: string;
        description: string;
        totalCapacity: number;
        availableCapacity: number;
        type: string;
        sshPort: number;
        state: string;
        status: string;
        createDate: string;
        lastOpDate: string;
        attachedZoneUuids: Array<string>;
    }
    class APIUpdateBackupStorageEvent {
        inventory: BackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDetachBackupStorageFromZoneEvent {
        inventory: BackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIScanBackupStorageEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddBackupStorageEvent {
        inventory: BackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAttachBackupStorageToZoneEvent {
        inventory: BackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeBackupStorageStateEvent {
        inventory: BackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteBackupStorageEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class IpRangeInventory {
        uuid: string;
        l3NetworkUuid: string;
        name: string;
        description: string;
        startIp: string;
        endIp: string;
        netmask: string;
        gateway: string;
        networkCidr: string;
        createDate: string;
        lastOpDate: string;
    }
    class APIAddIpRangeEvent {
        inventory: IpRangeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class NetworkServiceL3NetworkRefInventory {
        l3NetworkUuid: string;
        networkServiceProviderUuid: string;
        networkServiceType: string;
    }
    class L3NetworkInventory {
        uuid: string;
        name: string;
        description: string;
        type: string;
        zoneUuid: string;
        l2NetworkUuid: string;
        state: string;
        dnsDomain: string;
        system: boolean;
        createDate: string;
        lastOpDate: string;
        dns: Array<string>;
        ipRanges: Array<IpRangeInventory>;
        networkServices: Array<NetworkServiceL3NetworkRefInventory>;
    }
    class APIRemoveDnsFromL3NetworkEvent {
        inventory: L3NetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteL3NetworkEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeL3NetworkStateEvent {
        inventory: L3NetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteIpRangeEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddIpRangeByNetworkCidrEvent {
        inventory: IpRangeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateIpRangeEvent {
        inventory: IpRangeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateL3NetworkEvent {
        inventory: L3NetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddDnsToL3NetworkEvent {
        inventory: L3NetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateL3NetworkEvent {
        inventory: L3NetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class NetworkServiceProviderInventory {
        uuid: string;
        name: string;
        description: string;
        type: string;
        createDate: string;
        lastOpDate: string;
        networkServiceTypes: Array<string>;
        attachedL2NetworkUuids: Array<string>;
    }
    class APIDetachNetworkServiceProviderFromL2NetworkEvent {
        inventory: NetworkServiceProviderInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddNetworkServiceProviderEvent {
        inventory: NetworkServiceProviderInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAttachNetworkServiceProviderToL2NetworkEvent {
        inventory: NetworkServiceProviderInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAttachNetworkServiceToL3NetworkEvent {
        inventory: L3NetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class L2NetworkInventory {
        uuid: string;
        name: string;
        description: string;
        zoneUuid: string;
        physicalInterface: string;
        type: string;
        createDate: string;
        lastOpDate: string;
        attachedClusterUuids: Array<string>;
    }
    class APIAttachL2NetworkToClusterEvent {
        inventory: L2NetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class L2VlanNetworkInventory {
        vlan: number;
        uuid: string;
        name: string;
        description: string;
        zoneUuid: string;
        physicalInterface: string;
        type: string;
        createDate: string;
        lastOpDate: string;
        attachedClusterUuids: Array<string>;
    }
    class APICreateL2VlanNetworkEvent {
        inventory: L2VlanNetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDetachL2NetworkFromClusterEvent {
        inventory: L2NetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteL2NetworkEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateL2NetworkEvent {
        inventory: L2NetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateL2NetworkEvent {
        inventory: L2NetworkInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteSearchIndexEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APISearchGenerateSqlTriggerEvent {
        resultPath: string;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateSearchIndexEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class UserTagInventory {
        uuid: string;
        resourceUuid: string;
        resourceType: string;
        tag: string;
        type: string;
        createDate: string;
        lastOpDate: string;
    }
    class APICreateUserTagEvent {
        inventory: UserTagInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteTagEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class TagInventory {
        uuid: string;
        resourceUuid: string;
        resourceType: string;
        tag: string;
        type: string;
        createDate: string;
        lastOpDate: string;
    }
    class APICreateTagEvent {
        inventory: TagInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class SystemTagInventory {
        inherent: boolean;
        uuid: string;
        resourceUuid: string;
        resourceType: string;
        tag: string;
        type: string;
        createDate: string;
        lastOpDate: string;
    }
    class APICreateSystemTagEvent {
        inventory: SystemTagInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateSystemTagEvent {
        inventory: SystemTagInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteClusterEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class ClusterInventory {
        name: string;
        uuid: string;
        description: string;
        state: string;
        hypervisorType: string;
        createDate: string;
        lastOpDate: string;
        zoneUuid: string;
        type: string;
    }
    class APICreateClusterEvent {
        inventory: ClusterInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeClusterStateEvent {
        inventory: ClusterInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateClusterEvent {
        inventory: ClusterInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIRemoveUserFromGroupEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class AccountInventory {
        uuid: string;
        name: string;
        description: string;
        type: string;
        createDate: string;
        lastOpDate: string;
    }
    class APICreateAccountEvent {
        inventory: AccountInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteUserGroupEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAttachPolicyToUserEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIShareResourceEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDetachPolicyFromUserGroupEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeletePolicyEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddUserToGroupEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateUserEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteAccountEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateAccountEvent {
        inventory: AccountInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class QuotaInventory {
        name: string;
        identityUuid: string;
        identityType: string;
        value: number;
        lastOpDate: string;
        createDate: string;
    }
    class APIUpdateQuotaEvent {
        inventory: QuotaInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class PolicyInventory {
        statements: Array<Statement>;
        name: string;
        uuid: string;
        accountUuid: string;
    }
    class APICreatePolicyEvent {
        inventory: PolicyInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class UserInventory {
        uuid: string;
        accountUuid: string;
        name: string;
        description: string;
        createDate: string;
        lastOpDate: string;
    }
    class APICreateUserEvent {
        inventory: UserInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDetachPolicyFromUserEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteUserEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class UserGroupInventory {
        uuid: string;
        accountUuid: string;
        name: string;
        description: string;
        createDate: string;
        lastOpDate: string;
    }
    class APICreateUserGroupEvent {
        inventory: UserGroupInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAttachPolicyToUserGroupEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIRevokeResourceSharingEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class ZoneInventory {
        uuid: string;
        name: string;
        description: string;
        state: string;
        type: string;
        createDate: string;
        lastOpDate: string;
    }
    class APIUpdateZoneEvent {
        inventory: ZoneInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeZoneStateEvent {
        inventory: ZoneInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateZoneEvent {
        inventory: ZoneInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteZoneEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class HostInventory {
        zoneUuid: string;
        name: string;
        uuid: string;
        clusterUuid: string;
        description: string;
        managementIp: string;
        hypervisorType: string;
        sshPort: number;
        state: string;
        status: string;
        totalCpuCapacity: number;
        availableCpuCapacity: number;
        totalMemoryCapacity: number;
        availableMemoryCapacity: number;
        createDate: string;
        lastOpDate: string;
    }
    class APIAddHostEvent {
        inventory: HostInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeHostStateEvent {
        inventory: HostInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteHostEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIReconnectHostEvent {
        inventory: HostInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateHostEvent {
        inventory: HostInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class CephPrimaryStorageMonInventory {
        hostname: string;
        monPort: number;
        createDate: string;
        lastOpDate: string;
        primaryStorageUuid: string;
    }
    class CephPrimaryStorageInventory {
        mons: Array<CephPrimaryStorageMonInventory>;
        fsid: string;
        rootVolumePoolName: string;
        dataVolumePoolName: string;
        imageCachePoolName: string;
        uuid: string;
        zoneUuid: string;
        name: string;
        url: string;
        description: string;
        totalCapacity: number;
        availableCapacity: number;
        totalPhysicalCapacity: number;
        availablePhysicalCapacity: number;
        type: string;
        state: string;
        status: string;
        mountPath: string;
        createDate: string;
        lastOpDate: string;
        attachedClusterUuids: Array<string>;
    }
    class APIRemoveMonFromCephPrimaryStorageEvent {
        inventory: CephPrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddMonToCephPrimaryStorageEvent {
        inventory: CephPrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class CephBackupStorageMonInventory {
        hostname: string;
        monPort: number;
        createDate: string;
        lastOpDate: string;
        backupStorageUuid: string;
    }
    class CephBackupStorageInventory {
        mons: Array<CephBackupStorageMonInventory>;
        fsid: string;
        poolName: string;
        uuid: string;
        name: string;
        url: string;
        description: string;
        totalCapacity: number;
        availableCapacity: number;
        type: string;
        state: string;
        status: string;
        createDate: string;
        lastOpDate: string;
        attachedZoneUuids: Array<string>;
    }
    class APIRemoveMonFromCephBackupStorageEvent {
        inventory: CephBackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddMonToCephBackupStorageEvent {
        inventory: CephBackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class FusionstorPrimaryStorageMonInventory {
        hostname: string;
        monPort: number;
        createDate: string;
        lastOpDate: string;
        primaryStorageUuid: string;
    }
    class FusionstorPrimaryStorageInventory {
        mons: Array<FusionstorPrimaryStorageMonInventory>;
        fsid: string;
        rootVolumePoolName: string;
        dataVolumePoolName: string;
        imageCachePoolName: string;
        uuid: string;
        zoneUuid: string;
        name: string;
        url: string;
        description: string;
        totalCapacity: number;
        availableCapacity: number;
        totalPhysicalCapacity: number;
        availablePhysicalCapacity: number;
        type: string;
        state: string;
        status: string;
        mountPath: string;
        createDate: string;
        lastOpDate: string;
        attachedClusterUuids: Array<string>;
    }
    class APIRemoveMonFromFusionstorPrimaryStorageEvent {
        inventory: FusionstorPrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddMonToFusionstorPrimaryStorageEvent {
        inventory: FusionstorPrimaryStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class FusionstorBackupStorageMonInventory {
        hostname: string;
        monPort: number;
        createDate: string;
        lastOpDate: string;
        backupStorageUuid: string;
    }
    class FusionstorBackupStorageInventory {
        mons: Array<FusionstorBackupStorageMonInventory>;
        fsid: string;
        poolName: string;
        uuid: string;
        name: string;
        url: string;
        description: string;
        totalCapacity: number;
        availableCapacity: number;
        type: string;
        state: string;
        status: string;
        createDate: string;
        lastOpDate: string;
        attachedZoneUuids: Array<string>;
    }
    class APIRemoveMonFromFusionstorBackupStorageEvent {
        inventory: FusionstorBackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddMonToFusionstorBackupStorageEvent {
        inventory: FusionstorBackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class SftpBackupStorageInventory {
        hostname: string;
        uuid: string;
        name: string;
        url: string;
        description: string;
        totalCapacity: number;
        availableCapacity: number;
        sshPort: number;
        type: string;
        state: string;
        status: string;
        createDate: string;
        lastOpDate: string;
        attachedZoneUuids: Array<string>;
    }
    class APIAddSftpBackupStorageEvent {
        inventory: SftpBackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIReconnectSftpBackupStorageEvent {
        inventory: SftpBackupStorageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class ApplianceVmInventory {
        applianceVmType: string;
        managementNetworkUuid: string;
        defaultRouteL3NetworkUuid: string;
        status: string;
        uuid: string;
        name: string;
        description: string;
        zoneUuid: string;
        clusterUuid: string;
        imageUuid: string;
        hostUuid: string;
        lastHostUuid: string;
        instanceOfferingUuid: string;
        rootVolumeUuid: string;
        platform: string;
        defaultL3NetworkUuid: string;
        type: string;
        hypervisorType: string;
        memorySize: number;
        cpuNum: number;
        cpuSpeed: number;
        allocatorStrategy: string;
        createDate: string;
        lastOpDate: string;
        state: string;
        vmNics: Array<VmNicInventory>;
        allVolumes: Array<VolumeInventory>;
    }
    class APIReconnectVirtualRouterEvent {
        inventory: ApplianceVmInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeletePortForwardingRuleEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class PortForwardingRuleInventory {
        uuid: string;
        name: string;
        description: string;
        vipIp: string;
        guestIp: string;
        vipUuid: string;
        vipPortStart: number;
        vipPortEnd: number;
        privatePortStart: number;
        privatePortEnd: number;
        vmNicUuid: string;
        protocolType: string;
        state: string;
        allowedCidr: string;
        createDate: string;
        lastOpDate: string;
    }
    class APIChangePortForwardingRuleStateEvent {
        inventory: PortForwardingRuleInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDetachPortForwardingRuleEvent {
        inventory: PortForwardingRuleInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAttachPortForwardingRuleEvent {
        inventory: PortForwardingRuleInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreatePortForwardingRuleEvent {
        inventory: PortForwardingRuleInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdatePortForwardingRuleEvent {
        inventory: PortForwardingRuleInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class EipInventory {
        uuid: string;
        name: string;
        description: string;
        vmNicUuid: string;
        vipUuid: string;
        createDate: string;
        lastOpDate: string;
        state: string;
        vipIp: string;
        guestIp: string;
    }
    class APIChangeEipStateEvent {
        inventory: EipInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateEipEvent {
        inventory: EipInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateEipEvent {
        inventory: EipInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDetachEipEvent {
        inventory: EipInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAttachEipEvent {
        inventory: EipInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteEipEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class LoadBalancerListenerVmNicRefInventory {
        id: number;
        listenerUuid: string;
        vmNicUuid: string;
        status: string;
        createDate: string;
        lastOpDate: string;
    }
    class LoadBalancerListenerInventory {
        uuid: string;
        name: string;
        description: string;
        loadBalancerUuid: string;
        instancePort: number;
        loadBalancerPort: number;
        protocol: string;
        createDate: string;
        lastOpDate: string;
        vmNicRefs: Array<LoadBalancerListenerVmNicRefInventory>;
    }
    class LoadBalancerInventory {
        name: string;
        uuid: string;
        description: string;
        state: string;
        vipUuid: string;
        listeners: Array<LoadBalancerListenerInventory>;
    }
    class APIRefreshLoadBalancerEvent {
        inventory: LoadBalancerInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateLoadBalancerEvent {
        inventory: LoadBalancerInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIRemoveVmNicFromLoadBalancerEvent {
        inventory: LoadBalancerInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddVmNicToLoadBalancerEvent {
        inventory: LoadBalancerListenerInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteLoadBalancerListenerEvent {
        inventory: LoadBalancerInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateLoadBalancerListenerEvent {
        inventory: LoadBalancerListenerInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteLoadBalancerEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class SecurityGroupRuleInventory {
        uuid: string;
        securityGroupUuid: string;
        type: string;
        startPort: number;
        endPort: number;
        protocol: string;
        state: string;
        allowedCidr: string;
        createDate: string;
        lastOpDate: string;
    }
    class SecurityGroupInventory {
        uuid: string;
        name: string;
        description: string;
        state: string;
        createDate: string;
        lastOpDate: string;
        rules: Array<SecurityGroupRuleInventory>;
        attachedL3NetworkUuids: Array<string>;
    }
    class APIAttachSecurityGroupToL3NetworkEvent {
        inventory: SecurityGroupInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteSecurityGroupRuleEvent {
        inventory: SecurityGroupInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddVmNicToSecurityGroupEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeSecurityGroupStateEvent {
        inventory: SecurityGroupInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateSecurityGroupEvent {
        inventory: SecurityGroupInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteVmNicFromSecurityGroupEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIAddSecurityGroupRuleEvent {
        inventory: SecurityGroupInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APICreateSecurityGroupEvent {
        inventory: SecurityGroupInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDetachSecurityGroupFromL3NetworkEvent {
        inventory: SecurityGroupInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteSecurityGroupEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class VipInventory {
        uuid: string;
        name: string;
        description: string;
        l3NetworkUuid: string;
        ip: string;
        state: string;
        gateway: string;
        netmask: string;
        serviceProvider: string;
        peerL3NetworkUuid: string;
        useFor: string;
        createDate: string;
        lastOpDate: string;
    }
    class APICreateVipEvent {
        inventory: VipInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIUpdateVipEvent {
        inventory: VipInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIDeleteVipEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIChangeVipStateEvent {
        inventory: VipInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIGetGlobalConfigReply {
        inventory: GlobalConfigInventory;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryGlobalConfigReply {
        inventories: Array<GlobalConfigInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIListGlobalConfigReply {
        inventories: GlobalConfigInventory[];
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryReply {
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetCpuMemoryCapacityReply {
        totalCpu: number;
        availableCpu: number;
        totalMemory: number;
        availableMemory: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetHostAllocatorStrategiesReply {
        hostAllocatorStrategies: Array<string>;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchVmInstanceReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetVmInstanceReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetVmAttachableDataVolumeReply {
        inventories: Array<VolumeInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetVmMigrationCandidateHostsReply {
        inventories: Array<HostInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIListVmInstanceReply {
        inventories: Array<VmInstanceInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIListVmNicReply {
        inventories: Array<VmNicInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryVmInstanceReply {
        inventories: Array<VmInstanceInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryVmNicReply {
        inventories: Array<VmNicInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetVmAttachableL3NetworkReply {
        inventories: Array<L3NetworkInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetImageReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryImageReply {
        inventories: Array<ImageInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIListImageReply {
        inventories: Array<ImageInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchImageReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class VolumeFormatReplyStruct {
        format: string;
        masterHypervisorType: string;
        supportingHypervisorTypes: Array<string>;
    }
    class APIGetVolumeFormatReply {
        formats: Array<VolumeFormatReplyStruct>;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetDataVolumeAttachableVmReply {
        inventories: Array<VmInstanceInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryVolumeReply {
        inventories: Array<VolumeInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetVolumeReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIListVolumeReply {
        inventories: Array<VolumeInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchVolumeReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIIsReadyToGoReply {
        managementNodeId: string;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchInstanceOfferingReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetGlobalPropertyReply {
        properties: Array<string>;
        success: boolean;
        error: ErrorCode;
    }
    class APIListDiskOfferingReply {
        inventories: Array<DiskOfferingInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIListInstanceOfferingReply {
        inventories: Array<InstanceOfferingInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchDnsReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetInstanceOfferingReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryDiskOfferingReply {
        inventories: Array<DiskOfferingInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchDiskOfferingReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetDiskOfferingReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryInstanceOfferingReply {
        inventories: Array<InstanceOfferingInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIListPrimaryStorageReply {
        inventories: Array<PrimaryStorageInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetPrimaryStorageTypesReply {
        primaryStorageTypes: Array<string>;
        success: boolean;
        error: ErrorCode;
    }
    class CreateTemplateFromVolumeOnPrimaryStorageReply {
        templateBackupStorageInstallPath: string;
        format: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetPrimaryStorageReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchPrimaryStorageReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetPrimaryStorageAllocatorStrategiesReply {
        primaryStorageAllocatorStrategies: Array<string>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryPrimaryStorageReply {
        inventories: Array<PrimaryStorageInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetPrimaryStorageCapacityReply {
        totalCapacity: number;
        availableCapacity: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryVolumeSnapshotReply {
        inventories: Array<VolumeSnapshotInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class SnapshotLeafInventory {
        inventory: VolumeSnapshotInventory;
        parentUuid: string;
        children: Array<SnapshotLeafInventory>;
    }
    class VolumeSnapshotTreeInventory {
        uuid: string;
        volumeUuid: string;
        current: boolean;
        tree: SnapshotLeafInventory;
        createDate: string;
        lastOpDate: string;
    }
    class APIQueryVolumeSnapshotTreeReply {
        inventories: Array<VolumeSnapshotTreeInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetVolumeSnapshotTreeReply {
        inventories: Array<VolumeSnapshotTreeInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchBackupStorageReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetBackupStorageCapacityReply {
        totalCapacity: number;
        availableCapacity: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryBackupStorageReply {
        inventories: Array<BackupStorageInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetBackupStorageTypesReply {
        backupStorageTypes: Array<string>;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetBackupStorageReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIListBackupStorageReply {
        inventories: Array<BackupStorageInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIListIpRangeReply {
        inventories: Array<IpRangeInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchL3NetworkReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetL3NetworkTypesReply {
        l3NetworkTypes: Array<string>;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetL3NetworkReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetIpAddressCapacityReply {
        totalCapacity: number;
        availableCapacity: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryL3NetworkReply {
        inventories: Array<L3NetworkInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class FreeIpInventory {
        ipRangeUuid: string;
        ip: string;
        netmask: string;
        gateway: string;
    }
    class APIGetFreeIpReply {
        inventories: Array<FreeIpInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryIpRangeReply {
        inventories: Array<IpRangeInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIListL3NetworkReply {
        inventories: Array<L3NetworkInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryNetworkServiceL3NetworkRefReply {
        inventories: Array<NetworkServiceL3NetworkRefInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchNetworkServiceProviderReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetNetworkServiceProviderReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetNetworkServiceTypesReply {
        serviceAndProviderTypes: any;
        success: boolean;
        error: ErrorCode;
    }
    class APIListNetworkServiceProviderReply {
        inventories: Array<NetworkServiceProviderInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryNetworkServiceProviderReply {
        inventories: Array<NetworkServiceProviderInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetL2VlanNetworkReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetL2NetworkReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryL2VlanNetworkReply {
        inventories: Array<L2VlanNetworkInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetL2NetworkTypesReply {
        l2NetworkTypes: Array<string>;
        success: boolean;
        error: ErrorCode;
    }
    class APIListL2VlanNetworkReply {
        inventories: Array<L2VlanNetworkInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchL2VlanNetworkReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryL2NetworkReply {
        inventories: Array<L2NetworkInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchL2NetworkReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIListL2NetworkReply {
        inventories: Array<L2NetworkInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryUserTagReply {
        inventories: Array<UserTagInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQuerySystemTagReply {
        inventories: Array<SystemTagInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryTagReply {
        inventories: Array<TagInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class ManagementNodeInventory {
        uuid: string;
        hostName: string;
        joinDate: string;
        heartBeat: string;
    }
    class APIQueryManagementNodeReply {
        inventories: Array<ManagementNodeInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIListManagementNodeReply {
        inventories: Array<ManagementNodeInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIReply {
        success: boolean;
        error: ErrorCode;
    }
    class APISearchClusterReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIListClusterReply {
        inventories: Array<ClusterInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetClusterReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryClusterReply {
        inventories: Array<ClusterInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIListUserReply {
        inventories: Array<UserInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryUserGroupReply {
        inventories: Array<UserGroupInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetUserReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetAccountReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryUserReply {
        inventories: Array<UserInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIListAccountReply {
        inventories: Array<AccountInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchPolicyReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryAccountReply {
        inventories: Array<AccountInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APILogOutReply {
        success: boolean;
        error: ErrorCode;
    }
    class APISearchUserGroupReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetPolicyReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APILogInReply {
        inventory: SessionInventory;
        success: boolean;
        error: ErrorCode;
    }
    class APIListPolicyReply {
        inventories: Array<PolicyInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryQuotaReply {
        inventories: Array<QuotaInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetUserGroupReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryPolicyReply {
        inventories: Array<PolicyInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchAccountReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchUserReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIValidateSessionReply {
        validSession: boolean;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetZoneReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchZoneReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIListZonesReply {
        inventories: Array<ZoneInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryZoneReply {
        inventories: Array<ZoneInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetHypervisorTypesReply {
        hypervisorTypes: Array<string>;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetHostReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIListHostReply {
        inventories: Array<HostInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchHostReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryHostReply {
        inventories: Array<HostInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryApplianceVmReply {
        inventories: Array<ApplianceVmInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIListApplianceVmReply {
        inventories: Array<ApplianceVmInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class IscsiFileSystemBackendPrimaryStorageInventory {
        chapUsername: string;
        hostname: string;
        sshUsername: string;
        filesystemType: string;
        uuid: string;
        zoneUuid: string;
        name: string;
        url: string;
        description: string;
        totalCapacity: number;
        availableCapacity: number;
        totalPhysicalCapacity: number;
        availablePhysicalCapacity: number;
        type: string;
        state: string;
        status: string;
        mountPath: string;
        createDate: string;
        lastOpDate: string;
        attachedClusterUuids: Array<string>;
    }
    class APIQueryIscsiFileSystemBackendPrimaryStorageReply {
        inventories: Array<IscsiFileSystemBackendPrimaryStorageInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetSftpBackupStorageReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIQuerySftpBackupStorageReply {
        inventories: Array<SftpBackupStorageInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchSftpBackupStorageReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchVirtualRouterVmReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetVirtualRouterOfferingReply {
        inventory: string;
        success: boolean;
        error: ErrorCode;
    }
    class APISearchVirtualRouterOffingReply {
        content: string;
        success: boolean;
        error: ErrorCode;
    }
    class VirtualRouterOfferingInventory {
        managementNetworkUuid: string;
        publicNetworkUuid: string;
        zoneUuid: string;
        isDefault: boolean;
        imageUuid: string;
        uuid: string;
        name: string;
        description: string;
        cpuNum: number;
        cpuSpeed: number;
        memorySize: number;
        type: string;
        allocatorStrategy: string;
        sortKey: number;
        createDate: string;
        lastOpDate: string;
        state: string;
    }
    class APIQueryVirtualRouterOfferingReply {
        inventories: Array<VirtualRouterOfferingInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class VirtualRouterVmInventory {
        publicNetworkUuid: string;
        applianceVmType: string;
        managementNetworkUuid: string;
        defaultRouteL3NetworkUuid: string;
        status: string;
        uuid: string;
        name: string;
        description: string;
        zoneUuid: string;
        clusterUuid: string;
        imageUuid: string;
        hostUuid: string;
        lastHostUuid: string;
        instanceOfferingUuid: string;
        rootVolumeUuid: string;
        platform: string;
        defaultL3NetworkUuid: string;
        type: string;
        hypervisorType: string;
        memorySize: number;
        cpuNum: number;
        cpuSpeed: number;
        allocatorStrategy: string;
        createDate: string;
        lastOpDate: string;
        state: string;
        vmNics: Array<VmNicInventory>;
        allVolumes: Array<VolumeInventory>;
    }
    class APIQueryVirtualRouterVmReply {
        inventories: Array<VirtualRouterVmInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryPortForwardingRuleReply {
        inventories: Array<PortForwardingRuleInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIListPortForwardingRuleReply {
        inventories: Array<PortForwardingRuleInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetPortForwardingAttachableVmNicsReply {
        inventories: Array<VmNicInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryEipReply {
        inventories: Array<EipInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetEipAttachableVmNicsReply {
        inventories: Array<VmNicInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryLoadBalancerListenerReply {
        inventories: Array<LoadBalancerListenerInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryLoadBalancerReply {
        inventories: Array<LoadBalancerInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIListSecurityGroupReply {
        inventories: Array<SecurityGroupInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQuerySecurityGroupRuleReply {
        inventories: Array<SecurityGroupRuleInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIGetCandidateVmNicForSecurityGroupReply {
        inventories: Array<VmNicInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class VmNicSecurityGroupRefInventory {
        vmNicUuid: string;
        securityGroupUuid: string;
        vmInstanceUuid: string;
        createDate: string;
        lastOpDate: string;
    }
    class APIListVmNicInSecurityGroupReply {
        inventories: Array<VmNicSecurityGroupRefInventory>;
        success: boolean;
        error: ErrorCode;
    }
    class APIQuerySecurityGroupReply {
        inventories: Array<SecurityGroupInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryVmNicInSecurityGroupReply {
        inventories: Array<VmNicSecurityGroupRefInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class APIQueryVipReply {
        inventories: Array<VipInventory>;
        total: number;
        success: boolean;
        error: ErrorCode;
    }
    class HostCapacityInventory {
        uuid: string;
        totalMemory: number;
        totalCpu: number;
        availableMemory: number;
        availableCpu: number;
    }
    class ConsoleProxyInventory {
        uuid: string;
        vmInstanceUuid: string;
        agentIp: string;
        token: string;
        agentType: string;
        proxyHostname: string;
        proxyPort: number;
        targetHostname: string;
        targetPort: number;
        scheme: string;
        proxyIdentity: string;
        status: string;
        createDate: string;
        lastOpDate: string;
    }
    class PrimaryStorageClusterRefInventory {
        id: number;
        clusterUuid: string;
        primaryStorageUuid: string;
        createDate: string;
        lastOpDate: string;
    }
    class PrimaryStorageCapacityInventory {
        uuid: string;
        totalCapacity: number;
        availableCapacity: number;
        totalPhysicalCapacity: number;
        availablePhsicalCapacity: number;
        createDate: string;
        lastOpDate: string;
    }
    class BackupStorageZoneRefInventory {
        id: number;
        backupStorageUuid: string;
        zoneUuid: string;
        createDate: string;
        lastOpDate: string;
    }
    class IpUseInventory {
        uuid: string;
        usedIpUuid: string;
        serviceId: string;
        use: string;
        details: string;
        createDate: string;
        lastOpDate: string;
    }
    class L3NetworkDnsInventory {
        l3NetworkUuid: string;
        dns: string;
        createDate: string;
        lastOpDate: string;
    }
    class NetworkServiceTypeInventory {
        networkServiceProviderUuid: string;
        type: string;
    }
    class NetworkServiceProviderL2NetworkRefInventory {
        networkServiceProviderUuid: string;
        l2NetworkUuid: string;
    }
    class L2NetworkClusterRefInventory {
        clusterUuid: string;
        l2NetworkUuid: string;
        createDate: string;
        lastOpDate: string;
    }
    class AccountResourceRefInventory {
        accountUuid: string;
        ownerAccountUuid: string;
        resourceUuid: string;
        resourceType: string;
        permission: number;
        isShared: boolean;
        createDate: string;
        lastOpDate: string;
    }
    class UserGroupPolicyRefInventory {
        groupUuid: string;
        policyUuid: string;
        createDate: string;
        lastOpDate: string;
    }
    class UserPolicyRefInventory {
        userUuid: string;
        policyUuid: string;
        createDate: string;
        lastOpDate: string;
    }
    class UserGroupUserRefInventory {
        userUuid: string;
        groupUuid: string;
        createDate: string;
        lastOpDate: string;
    }
    class SimulatorHostInventory {
        memoryCapacity: number;
        cpuCapacity: number;
        zoneUuid: string;
        name: string;
        uuid: string;
        clusterUuid: string;
        description: string;
        managementIp: string;
        hypervisorType: string;
        state: string;
        status: string;
        totalCpuCapacity: number;
        availableCpuCapacity: number;
        totalMemoryCapacity: number;
        availableMemoryCapacity: number;
        createDate: string;
        lastOpDate: string;
    }
    class ApplianceVmFirewallRuleInventory {
        applianceVmUuid: string;
        protocol: string;
        startPort: number;
        endPort: number;
        allowCidr: string;
        sourceIp: string;
        destIp: string;
        l3NetworkUuid: string;
        createDate: string;
        lastOpDate: string;
    }
    class KVMHostInventory {
        username: string;
        zoneUuid: string;
        name: string;
        uuid: string;
        clusterUuid: string;
        description: string;
        managementIp: string;
        hypervisorType: string;
        state: string;
        status: string;
        totalCpuCapacity: number;
        availableCpuCapacity: number;
        totalMemoryCapacity: number;
        availableMemoryCapacity: number;
        createDate: string;
        lastOpDate: string;
    }
    class VirtualRouterEipRefInventory {
        eipUuid: string;
        virtualRouterVmUuid: string;
    }
    class VirtualRouterLoadBalancerRefInventory {
        id: number;
        virtualRouterVmUuid: string;
        loadBalancerUuid: string;
        createDate: string;
        lastOpDate: string;
    }
    class VirtualRouterVipInventory {
        uuid: string;
        virtualRouterVmUuid: string;
    }
    class VirtualRouterPortForwardingRuleRefInventory {
        uuid: string;
        vipUuid: string;
        virtualRouterVmUuid: string;
    }
    class SecurityGroupL3NetworkRefInventory {
        uuid: string;
        l3NetworkUuid: string;
        securityGroupUuid: string;
        createDate: string;
        lastOpDate: string;
    }
    var GlobalConfigInventoryQueryable: string[];
    var TagResourceTypeGlobalConfigVO: string;
    var HostCapacityInventoryQueryable: string[];
    var TagResourceTypeHostCapacityVO: string;
    var VmNicInventoryQueryable: string[];
    var TagResourceTypeVmNicVO: string;
    var VmInstanceInventoryQueryable: string[];
    var TagResourceTypeVmInstanceVO: string;
    var ImageInventoryQueryable: string[];
    var TagResourceTypeImageVO: string;
    var ImageBackupStorageRefInventoryQueryable: string[];
    var TagResourceTypeImageBackupStorageRefVO: string;
    var ConsoleProxyInventoryQueryable: string[];
    var TagResourceTypeConsoleProxyVO: string;
    var VolumeInventoryQueryable: string[];
    var TagResourceTypeVolumeVO: string;
    var InstanceOfferingInventoryQueryable: string[];
    var TagResourceTypeInstanceOfferingVO: string;
    var DiskOfferingInventoryQueryable: string[];
    var TagResourceTypeDiskOfferingVO: string;
    var PrimaryStorageInventoryQueryable: string[];
    var TagResourceTypePrimaryStorageVO: string;
    var PrimaryStorageClusterRefInventoryQueryable: string[];
    var TagResourceTypePrimaryStorageClusterRefVO: string;
    var PrimaryStorageCapacityInventoryQueryable: string[];
    var TagResourceTypePrimaryStorageCapacityVO: string;
    var VolumeSnapshotInventoryQueryable: string[];
    var TagResourceTypeVolumeSnapshotVO: string;
    var VolumeSnapshotBackupStorageRefInventoryQueryable: string[];
    var TagResourceTypeVolumeSnapshotBackupStorageRefVO: string;
    var VolumeSnapshotTreeInventoryQueryable: string[];
    var TagResourceTypeVolumeSnapshotTreeVO: string;
    var BackupStorageInventoryQueryable: string[];
    var TagResourceTypeBackupStorageVO: string;
    var BackupStorageZoneRefInventoryQueryable: string[];
    var TagResourceTypeBackupStorageZoneRefVO: string;
    var IpRangeInventoryQueryable: string[];
    var TagResourceTypeIpRangeVO: string;
    var L3NetworkInventoryQueryable: string[];
    var TagResourceTypeL3NetworkVO: string;
    var IpUseInventoryQueryable: string[];
    var TagResourceTypeIpUseVO: string;
    var L3NetworkDnsInventoryQueryable: string[];
    var TagResourceTypeL3NetworkDnsVO: string;
    var NetworkServiceL3NetworkRefInventoryQueryable: string[];
    var TagResourceTypeNetworkServiceL3NetworkRefVO: string;
    var NetworkServiceTypeInventoryQueryable: string[];
    var TagResourceTypeNetworkServiceTypeVO: string;
    var NetworkServiceProviderInventoryQueryable: string[];
    var TagResourceTypeNetworkServiceProviderVO: string;
    var NetworkServiceProviderL2NetworkRefInventoryQueryable: string[];
    var TagResourceTypeNetworkServiceProviderL2NetworkRefVO: string;
    var L2VlanNetworkInventoryQueryable: string[];
    var TagResourceTypeL2VlanNetworkVO: string;
    var L2NetworkClusterRefInventoryQueryable: string[];
    var TagResourceTypeL2NetworkClusterRefVO: string;
    var L2NetworkInventoryQueryable: string[];
    var TagResourceTypeL2NetworkVO: string;
    var UserTagInventoryQueryable: string[];
    var TagResourceTypeUserTagVO: string;
    var SystemTagInventoryQueryable: string[];
    var TagResourceTypeSystemTagVO: string;
    var ManagementNodeInventoryQueryable: string[];
    var TagResourceTypeManagementNodeVO: string;
    var ClusterInventoryQueryable: string[];
    var TagResourceTypeClusterVO: string;
    var UserInventoryQueryable: string[];
    var TagResourceTypeUserVO: string;
    var UserGroupInventoryQueryable: string[];
    var TagResourceTypeUserGroupVO: string;
    var PolicyInventoryQueryable: string[];
    var TagResourceTypePolicyVO: string;
    var AccountResourceRefInventoryQueryable: string[];
    var TagResourceTypeAccountResourceRefVO: string;
    var UserGroupPolicyRefInventoryQueryable: string[];
    var TagResourceTypeUserGroupPolicyRefVO: string;
    var AccountInventoryQueryable: string[];
    var TagResourceTypeAccountVO: string;
    var QuotaInventoryQueryable: string[];
    var TagResourceTypeQuotaVO: string;
    var UserPolicyRefInventoryQueryable: string[];
    var TagResourceTypeUserPolicyRefVO: string;
    var UserGroupUserRefInventoryQueryable: string[];
    var TagResourceTypeUserGroupUserRefVO: string;
    var ZoneInventoryQueryable: string[];
    var TagResourceTypeZoneVO: string;
    var HostInventoryQueryable: string[];
    var TagResourceTypeHostVO: string;
    var SimulatorHostInventoryQueryable: string[];
    var TagResourceTypeSimulatorHostVO: string;
    var ApplianceVmFirewallRuleInventoryQueryable: string[];
    var TagResourceTypeApplianceVmFirewallRuleVO: string;
    var ApplianceVmInventoryQueryable: string[];
    var TagResourceTypeApplianceVmVO: string;
    var IscsiFileSystemBackendPrimaryStorageInventoryQueryable: string[];
    var TagResourceTypeIscsiFileSystemBackendPrimaryStorageVO: string;
    var CephPrimaryStorageInventoryQueryable: string[];
    var TagResourceTypeCephPrimaryStorageVO: string;
    var CephPrimaryStorageMonInventoryQueryable: string[];
    var TagResourceTypeCephPrimaryStorageMonVO: string;
    var CephBackupStorageInventoryQueryable: string[];
    var TagResourceTypeCephBackupStorageVO: string;
    var CephBackupStorageMonInventoryQueryable: string[];
    var TagResourceTypeCephBackupStorageMonVO: string;
    var FusionstorPrimaryStorageInventoryQueryable: string[];
    var TagResourceTypeFusionstorPrimaryStorageVO: string;
    var FusionstorPrimaryStorageMonInventoryQueryable: string[];
    var TagResourceTypeFusionstorPrimaryStorageMonVO: string;
    var FusionstorBackupStorageInventoryQueryable: string[];
    var TagResourceTypeFusionstorBackupStorageVO: string;
    var FusionstorBackupStorageMonInventoryQueryable: string[];
    var TagResourceTypeFusionstorBackupStorageMonVO: string;
    var KVMHostInventoryQueryable: string[];
    var TagResourceTypeKVMHostVO: string;
    var SftpBackupStorageInventoryQueryable: string[];
    var TagResourceTypeSftpBackupStorageVO: string;
    var VirtualRouterOfferingInventoryQueryable: string[];
    var TagResourceTypeVirtualRouterOfferingVO: string;
    var VirtualRouterEipRefInventoryQueryable: string[];
    var TagResourceTypeVirtualRouterEipRefVO: string;
    var VirtualRouterVmInventoryQueryable: string[];
    var TagResourceTypeVirtualRouterVmVO: string;
    var VirtualRouterLoadBalancerRefInventoryQueryable: string[];
    var TagResourceTypeVirtualRouterLoadBalancerRefVO: string;
    var VirtualRouterVipInventoryQueryable: string[];
    var TagResourceTypeVirtualRouterVipVO: string;
    var VirtualRouterPortForwardingRuleRefInventoryQueryable: string[];
    var TagResourceTypeVirtualRouterPortForwardingRuleRefVO: string;
    var PortForwardingRuleInventoryQueryable: string[];
    var TagResourceTypePortForwardingRuleVO: string;
    var EipInventoryQueryable: string[];
    var TagResourceTypeEipVO: string;
    var LoadBalancerInventoryQueryable: string[];
    var TagResourceTypeLoadBalancerVO: string;
    var LoadBalancerListenerVmNicRefInventoryQueryable: string[];
    var TagResourceTypeLoadBalancerListenerVmNicRefVO: string;
    var LoadBalancerListenerInventoryQueryable: string[];
    var TagResourceTypeLoadBalancerListenerVO: string;
    var VmNicSecurityGroupRefInventoryQueryable: string[];
    var TagResourceTypeVmNicSecurityGroupRefVO: string;
    var SecurityGroupRuleInventoryQueryable: string[];
    var TagResourceTypeSecurityGroupRuleVO: string;
    var SecurityGroupInventoryQueryable: string[];
    var TagResourceTypeSecurityGroupVO: string;
    var SecurityGroupL3NetworkRefInventoryQueryable: string[];
    var TagResourceTypeSecurityGroupL3NetworkRefVO: string;
    var VipInventoryQueryable: string[];
    var TagResourceTypeVipVO: string;
    class APIExpungeVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIExpungeVmInstanceEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIRecoverVmInstanceMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        vmInstanceUuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIRecoverVmInstanceEvent {
        inventory: VmInstanceInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIRecoverImageEvent {
        inventory: ImageInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIExpungeImageEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIExpungeImageMsg implements APIMessage {
        toApiMap(): any;
        imageUuid: string;
        backupStorageUuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIRecoverImageMsg implements APIMessage {
        toApiMap(): any;
        imageUuid: string;
        backupStorageUuids: Array<string>;
        session: SessionInventory;
        timeout: number;
    }
    class APIExpungeDataVolumeEvent {
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIRecoverDataVolumeEvent {
        inventory: VolumeInventory;
        API_EVENT: string;
        success: boolean;
        error: ErrorCode;
        BINDING_KEY_PERFIX: string;
    }
    class APIExpungeDataVolumeMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIRecoverDataVolumeMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
    }
    class APIGetVersionMsg implements APIMessage {
        toApiMap(): any;
        uuid: string;
        session: SessionInventory;
        timeout: number;
        version: string;
    }
    class APIGetVersionMsgEvent {
        success: boolean;
        version: string;
    }
}
