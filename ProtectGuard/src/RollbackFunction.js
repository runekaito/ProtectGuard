"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rollback = exports.RollbackParam = void 0;
const config_json_1 = require("../config.json");
const Sql_1 = require("./Sql");
const Time_1 = require("./Time");
function RollbackParam(pl, paramText, num) {
    const x = pl.getPosition().x;
    const y = pl.getPosition().y;
    const z = pl.getPosition().z;
    const params = paramText.split(" ");
    let dataParams = [];
    let dataList = [];
    let dataList2 = [];
    let data = [];
    let Len = [];
    for (const i in params) {
        const item = params[i];
        const userLen = item.indexOf("u:");
        const timeLen = item.indexOf("t:");
        const actionLen = item.indexOf("a:");
        const blockLen = item.indexOf("b:");
        const ExceptionLen = item.indexOf("e:");
        const RadiusLen = item.indexOf("r:");
        const dataParam = item.substr(2);
        const num = item.substr(3, item.length - 1);
        const time = item.substr(item.length - 1, item.length);
        Len.push(userLen, timeLen, actionLen, blockLen, ExceptionLen, RadiusLen);
        if (userLen != -1) {
            data = (0, Sql_1.Search)(`select * from data where UPPER(name) = UPPER('${dataParam.toUpperCase()}');`);
        }
        else if (timeLen != -1) {
            switch (time) {
                case "d":
                    data = (0, Sql_1.Search)(`select * from data where month = ${(0, Time_1.Time)()[0]} and date <= ${(0, Time_1.Time)()[1] - Number(num)};`);
                    break;
                case "h":
                    data = (0, Sql_1.Search)(`select * from data where month = ${(0, Time_1.Time)()[0]} and date = ${(0, Time_1.Time)()[1]} and hour <= ${(0, Time_1.Time)()[2] - Number(num)};`);
                    break;
                case "m":
                    data = (0, Sql_1.Search)(`select * from data where month = ${(0, Time_1.Time)()[0]} and date = ${(0, Time_1.Time)()[1]} and hour = ${(0, Time_1.Time)()[2]} and min <= ${(0, Time_1.Time)()[3] - Number(num)};`);
                    break;
                case "s":
                    data = (0, Sql_1.Search)(`select * from data where month = ${(0, Time_1.Time)()[0]} and date = ${(0, Time_1.Time)()[1]} and hour = ${(0, Time_1.Time)()[2]} and min = ${(0, Time_1.Time)()[3]} and sec <= ${(0, Time_1.Time)()[3] - Number(num)};`);
                    break;
                case "w":
                    data = (0, Sql_1.Search)(`select * from data where date <= ${(0, Time_1.Time)()[0] - Number(num) * 7};`);
                    break;
            }
        }
        else if (actionLen != -1) {
            if (dataParam == "block") {
                data = (0, Sql_1.Search)(`select * from data where ev = 0 or ev = 1;`);
            }
            else if (dataParam == "+block") {
                data = (0, Sql_1.Search)(`select * from data where ev = 0;`);
            }
            else if (dataParam == "-block") {
                data = (0, Sql_1.Search)(`select * from data where ev = 1;`);
            }
        }
        else if (blockLen != -1) {
            const blockName = dataParam.replace("minecraft:", "");
            data = (0, Sql_1.Search)(`select * from data where bn = '${blockName}';`);
        }
        else if (ExceptionLen != -1) {
            const blockName = dataParam.replace("minecraft:", "");
            data = (0, Sql_1.Search)(`select * from data where bn != '${blockName}';`);
        }
        else if (RadiusLen != -1) {
            data = (0, Sql_1.Search)(`select * from data where x < ${x + Number(dataParam)} and x > ${x - Number(dataParam)} and y < ${y + Number(dataParam)} and y > ${y - Number(dataParam)} and z < ${z + Number(dataParam)} and z > ${z - Number(dataParam)};`);
        }
        dataList.push(data);
        dataParams.push(dataParam);
    }
    for (let j = 0; j < dataList.length; j++) {
        for (const k in dataList[j]) {
            for (const l in dataList[j - 1]) {
                if (dataList[j][k].pass == dataList[j - 1][l].pass) {
                    dataList2.push(dataList[j][k]);
                }
            }
        }
    }
    Rollback(dataList2, pl, dataParams, Len, num);
}
exports.RollbackParam = RollbackParam;
function Rollback(dataList, pl, dataParams, len, num) {
    let ChengedBlockLen = 0;
    if (num == 2) {
        if (!dataList.length) {
            pl.sendMessage(config_json_1.Config.Preffix + config_json_1.Config.NoBlockDataText);
            return;
        }
        pl.sendMessage(config_json_1.Config.LookupResultPreffix);
    }
    for (const item of dataList) {
        if (num == 2) {
            const diffResult = (0, Time_1.DiffTime)(item);
            const TargetLog = config_json_1.Config.LookupText.replace("%s", item.name).replace("%e", item.bn).replace("%f", item.x).replace("%g", item.y).replace("%h", item.z).replace("%h", diffResult);
            if (item.ev == 0) {
                pl.sendMessage(TargetLog.replace("%d", "placed"));
            }
            else {
                pl.sendMessage(TargetLog.replace("%d", "broken"));
            }
        }
        else {
            if (item.ev == 1) {
                if (num == 0) {
                    pl.runCommand(`setblock ${item.x} ${item.y} ${item.z} ${item.bn}`);
                }
                else {
                    pl.runCommand(`setblock ${item.x} ${item.y} ${item.z} air`);
                }
                ChengedBlockLen++;
            }
            else {
                if (num == 0) {
                    pl.runCommand(`setblock ${item.x} ${item.y} ${item.z} air`);
                }
                else {
                    pl.runCommand(`setblock ${item.x} ${item.y} ${item.z} ${item.bn}`);
                }
                ChengedBlockLen++;
            }
        }
    }
    let j = 0;
    pl.sendMessage(config_json_1.Config.Delimiter);
    for (let i = 0; j < len.length; i++) {
        if (len[j] != -1) {
            pl.sendMessage(config_json_1.Config.Preffix + config_json_1.Config.RollbackLog1.replace("%s", dataParams[i]));
        }
        if (len[j + 1] != -1) {
            pl.sendMessage(config_json_1.Config.Preffix + config_json_1.Config.RollbackLog2.replace("%s", dataParams[i]));
        }
        if (len[j + 2] != -1) {
            pl.sendMessage(config_json_1.Config.Preffix + config_json_1.Config.RollbackLog3.replace("%s", dataParams[i]));
        }
        if (len[j + 3] != -1) {
            pl.sendMessage(config_json_1.Config.Preffix + config_json_1.Config.RollbackLog4.replace("%s", dataParams[i]));
        }
        if (len[j + 5] != -1) {
            pl.sendMessage(config_json_1.Config.Preffix + config_json_1.Config.RollbackLog5.replace("%s", dataParams[i]));
        }
        j = j + 6;
    }
    if (num != 2) {
        pl.sendMessage(config_json_1.Config.Preffix + config_json_1.Config.RollbackLog6.replace("%s", ChengedBlockLen.toString()));
        pl.sendMessage(config_json_1.Config.Delimiter);
    }
}
exports.Rollback = Rollback;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sbGJhY2tGdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJvbGxiYWNrRnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsZ0RBQXVDO0FBQ3ZDLCtCQUE4QjtBQUM5QixpQ0FBdUM7QUFFdkMsU0FBZ0IsYUFBYSxDQUFDLEVBQVMsRUFBQyxTQUFpQixFQUFDLEdBQVU7SUFDcEUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM1QixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzVCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDNUIsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNuQyxJQUFJLFVBQVUsR0FBVSxFQUFFLENBQUM7SUFDM0IsSUFBSSxRQUFRLEdBQU8sRUFBRSxDQUFBO0lBQ3JCLElBQUksU0FBUyxHQUFPLEVBQUUsQ0FBQTtJQUN0QixJQUFJLElBQUksR0FBTyxFQUFFLENBQUM7SUFDbEIsSUFBSSxHQUFHLEdBQVUsRUFBRSxDQUFBO0lBQ25CLEtBQUksTUFBTSxDQUFDLElBQUksTUFBTSxFQUFDO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25DLE1BQU0s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