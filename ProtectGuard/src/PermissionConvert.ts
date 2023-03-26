import { CommandPermissionLevel } from "bdsx/bds/command";

export function PermissionConvert(str:string){
    let permission:CommandPermissionLevel=CommandPermissionLevel.Operator;
    switch(str){
        case "Normal":
            permission=CommandPermissionLevel.Normal
            break
        case "Host":
            permission=CommandPermissionLevel.Host
            break
        case "Automation":
                permission=CommandPermissionLevel.Automation
            break
        case "Admin":
            permission=CommandPermissionLevel.Admin
            break
        case "Internal":
                permission=CommandPermissionLevel.Internal
            break
    }
    return permission
}