import express = require('express');

declare global {
    namespace Express {
        interface Request {
            permissionManager: initializePermissionManager.IPermissionManager;
        }
    }
}

declare function initializePermissionManager(req: any, res: any, next: any): express.RequestHandler;

declare namespace initializePermissionManager {
    const initializePermissionManager: (req: any, res: any, next: any) => Promise<void>;

    interface IUserController {
        revokePermissions(permissionSlug: any): Promise<void>;
        assignPermissions(permissionSlug: any): Promise<void>;
        group(): Promise<any>;
        groups(): Promise<any[]>;
        permissions(): Promise<any[]>;
        assignGroup(groupSlug: any): Promise<void>;
        syncPermissions(permissionSlug: any): Promise<void>;
        checkPermissions(permissionSlug: any, isDirectPermission?: boolean): Promise<boolean>;
        hasPermission(permissionSlug: any): Promise<boolean>;
        can(permissionSlug: any): Promise<boolean>;
        hasAnyPermission(permissionSlug: any): Promise<boolean>;
        hasAllPermissions(permissionSlug: any): Promise<boolean>;
        hasDirectPermission(permissionSlug: any): Promise<boolean>;
        hasAnyDirectPermission(permissionSlug: any): Promise<boolean>;
        hasAllDirectPermissions(permissionSlug: any): Promise<boolean>;
        revokeGroup(groupSlug: any): Promise<void>;
        hasGroup(groupSlug: any): Promise<any>;
        hasAnyGroup(groupSlug: any): Promise<any>;
        hasAllGroups(groupSlug: any): Promise<boolean>;
    }

    interface IPermissionController {
        create(obj: any): Promise<any>;
        delete(permissionId: any): Promise<any>;
        getAllPermissions(): Promise<any[]>;
        assignGroup(groupSlug: any): Promise<void>;
    }

    interface IGroupController {
        create(obj: any): Promise<any>;
        delete(groupId: any): Promise<any>;
        getAllGroups(): Promise<any[]>;
        revokePermissions(permissionSlug: any): Promise<void>;
        assignPermissions(permissionSlug: any): Promise<void>;
        assignUser(userId: any): Promise<void>;
        getAssignedPermissions(): Promise<any[]>;
        getAssignedUserIds(): Promise<any[]>;
    }

    interface IPermissionManager {
        permissions(_permissionId?: any): IPermissionController;
        group(groupId?: any): IGroupController;
        user(userId: any): IUserController;
    }
    
}

export = initializePermissionManager;
