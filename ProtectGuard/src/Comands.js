"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const config_json_1 = require("../config.json");
const InspectFunction_1 = require("./InspectFunction");
const PermissionConvert_1 = require("./PermissionConvert");
const RollbackFunction_1 = require("./RollbackFunction");
const Sql_1 = require("./Sql");
const Time_1 = require("./Time");
command_2.command.register('co', 'CoreProtect', (0, PermissionConvert_1.PermissionConvert)(config_json_1.Config.CommandPermission)).overload((p, o, op) => {
    const pl = o.getEntity();
    (0, InspectFunction_1.InspectTag)(pl);
}, {
    enum: command_2.command.enum("i", "i")
}).overload((p, o, op) => {
    const pl = o.getEntity();
    (0, InspectFunction_1.InspectTag)(pl);
}, {
    enum: command_2.command.enum("inspect", "inspect")
}).overload((p, o, op) => {
    const pl = o.getEntity();
    pl.sendMessage(config_json_1.Config.HelpPreffix);
    pl.sendMessage(config_json_1.Config.HelpCommandDescription);
    pl.sendMessage(config_json_1.Config.InspectCommandDescription);
    pl.sendMessage(config_json_1.Config.RollbackCommandDescription);
    pl.sendMessage(config_json_1.Config.RestoreCommandDescription);
    pl.sendMessage(config_json_1.Config.LookupCommandDescription);
    pl.sendMessage(config_json_1.Config.PurgeCommandDescription);
    pl.sendMessage(config_json_1.Config.StatusCommandDescription);
}, {
    enum: command_2.command.enum("help", "help")
}).overload((p, o, op) => {
    const pl = o.getEntity();
    (0, RollbackFunction_1.RollbackParam)(pl, p.params.text, 0);
}, {
    enum: command_2.command.enum("rollback", "rollback"),
    params: command_1.CommandRawText
}).overload((p, o, op) => {
    const pl = o.getEntity();
    (0, RollbackFunction_1.RollbackParam)(pl, p.params.text, 1);
}, {
    enum: command_2.command.enum("restore", "restore"),
    params: command_1.CommandRawText
}).overload((p, o, op) => {
    const pl = o.getEntity();
    (0, RollbackFunction_1.RollbackParam)(pl, p.params.text, 2);
}, {
    enum: command_2.command.enum("lookup", "lookup"),
    params: command_1.CommandRawText
}).overload((p, o, op) => {
    const pl = o.getEntity();
    pl.sendMessage(config_json_1.Config.StatusPreffix);
    pl.sendMessage(config_json_1.Config.Version);
    pl.sendMessage(config_json_1.Config.License);
    pl.sendMessage(config_json_1.Config.Database);
    pl.sendMessage(config_json_1.Config.Consumer);
    pl.sendMessage(config_json_1.Config.Discord);
    pl.sendMessage(config_json_1.Config.Patreon);
}, {
    enum: command_2.command.enum("status", "status")
}).overload((p, o, op) => {
    const params = p.params.text.split(" ");
    const pl = o.getEntity();
    if (params.length != 1) {
        pl.sendMessage(config_json_1.Config.ParamError);
    }
    for (const item of params) {
        const num = item.substr(3, item.length - 1);
        const time = item.substr(item.length - 1, item.length);
        let data;
        switch (time) {
            case "d":
                data = (0, Sql_1.Run)(`delete from data where date = ${(0, Time_1.Time)()[0]} and date <= ${(0, Time_1.Time)()[1] - Number(num)};`);
                break;
            case "h":
                data = (0, Sql_1.Run)(`delete from data where date = ${(0, Time_1.Time)()[0]} and date = ${(0, Time_1.Time)()[1]} and hour <= ${(0, Time_1.Time)()[2] - Number(num)};`);
                break;
            case "m":
                data = (0, Sql_1.Run)(`delete from data where date = ${(0, Time_1.Time)()[0]} and date = ${(0, Time_1.Time)()[1]} and hour = ${(0, Time_1.Time)()[2]} and min <= ${(0, Time_1.Time)()[3] - Number(num)};`);
                break;
            case "s":
                data = (0, Sql_1.Run)(`delete from data where date = ${(0, Time_1.Time)()[0]} and date = ${(0, Time_1.Time)()[1]} and hour = ${(0, Time_1.Time)()[2]} and min = ${(0, Time_1.Time)()[3]} and sec <= ${(0, Time_1.Time)()[3] - Number(num)};`);
                break;
            case "w":
                data = (0, Sql_1.Run)(`delete from data where date <= ${(0, Time_1.Time)()[0] - Number(num) * 7};`);
                break;
        }
    }
}, {
    enum: command_2.command.enum("purge", "purge"),
    params: command_1.CommandRawText
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tYW5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbWFuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBa0Q7QUFFbEQsMENBQXVDO0FBQ3ZDLGdEQUF1QztBQUN2Qyx1REFBK0M7QUFDL0MsMkRBQXdEO0FBQ3hELHlEQUFtRDtBQUNuRCwrQkFBNEI7QUFDNUIsaUNBQThCO0FBRTlCLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUMsSUFBQSxxQ0FBaUIsRUFBQyxvQkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3BHLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQVksQ0FBQTtJQUNsQyxJQUFBLDRCQUFVLEVBQUMsRUFBRSxDQUFDLENBQUE7QUFDbEIsQ0FBQyxFQUFDO0lBQ0UsSUFBSSxFQUFFLGlCQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7Q0FDOUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDckIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBWSxDQUFBO0lBQ2xDLElBQUEsNEJBQVUsRUFBQyxFQUFFLENBQUMsQ0FBQTtBQUNsQixDQUFDLEVBQUM7SUFDRSxJQUFJLEVBQUUsaUJBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLFNBQVMsQ0FBQztDQUMxQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRTtJQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQVksQ0FBQTtJQUNsQyxFQUFFLENBQUMsV0FBVyxDQUFDLG9CQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDbEMsRUFBRSxD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