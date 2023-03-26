"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InspectTag = exports.Inspect = exports.Log = void 0;
const Sql_1 = require("./Sql");
const config_json_1 = require("../config.json");
const Time_1 = require("./Time");
function Log(data, pl) {
    const Log = (0, Sql_1.Search)(`select * from data where x = ${data.x} and y = ${data.y} and z = ${data.z};`);
    Inspect(data, pl, Log);
}
exports.Log = Log;
function Inspect(data, pl, Log) {
    const Preffix = config_json_1.Config.InspectPreffix.replace("%s", data.x).replace("%d", data.y).replace("%e", data.z);
    if (!Log.length) {
        pl.sendMessage(config_json_1.Config.Preffix + config_json_1.Config.NoBlockInspectDataText.replace("%s", data.bn));
        return;
    }
    pl.sendMessage(Preffix);
    for (const item of Log) {
        const diffResult = (0, Time_1.DiffTime)(item);
        const TargetLog = config_json_1.Config.InspectText.replace("%s", item.name).replace("%e", item.bn).replace("%h", diffResult);
        if (item.ev == 0) {
            pl.sendMessage(TargetLog.replace("%d", "placed").replace("%g", "§a+"));
        }
        else {
            pl.sendMessage(TargetLog.replace("%d", "broken").replace("%g", "§c-"));
        }
    }
}
exports.Inspect = Inspect;
function InspectTag(pl) {
    if (pl.hasTag(config_json_1.Config.InspectTag)) {
        pl.removeTag(config_json_1.Config.InspectTag);
        pl.sendMessage(config_json_1.Config.Preffix + config_json_1.Config.InspectTextDisabled);
    }
    else {
        pl.addTag(config_json_1.Config.InspectTag);
        pl.sendMessage(config_json_1.Config.Preffix + config_json_1.Config.InspectTextEnabled);
    }
}
exports.InspectTag = InspectTag;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zcGVjdEZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW5zcGVjdEZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUE4QjtBQUM5QixnREFBdUM7QUFFdkMsaUNBQWlDO0FBQ2pDLFNBQWdCLEdBQUcsQ0FBQyxJQUFRLEVBQUMsRUFBUztJQUM5QixNQUFNLEdBQUcsR0FBRyxJQUFBLFlBQU0sRUFBQyxnQ0FBZ0MsSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2pHLE9BQU8sQ0FBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFIRCxrQkFHQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxJQUFRLEVBQUMsRUFBUyxFQUFDLEdBQU87SUFDOUMsTUFBTSxPQUFPLEdBQUcsb0JBQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDcEcsSUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUM7UUFDWCxFQUFFLENBQUMsV0FBVyxDQUFDLG9CQUFNLENBQUMsT0FBTyxHQUFDLG9CQUFNLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNsRixPQUFPO0tBQ1Y7SUFDRCxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3ZCLEtBQUksTUFBTSxJQUFJLElBQUksR0FBRyxFQUFDO1FBQ2xCLE1BQU0sVUFBVSxHQUFHLElBQUEsZUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sU0FBUyxHQUFHLG9CQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDM0csSUFBRyxJQUFJLENBQUMsRUFBRSxJQUFFLENBQUMsRUFBQztZQUNWLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ3ZFO2FBQU07WUFDSCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUN2RTtLQUNKO0FBQ0wsQ0FBQztBQWhCRCwwQkFnQkM7QUFFRCxTQUFnQixVQUFVLENBQUMsRUFBUztJQUNoQyxJQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsb0JBQU0sQ0FBQyxVQUFVLENBQUMsRUFBQztRQUM1QixFQUFFLENBQUMsU0FBUyxDQUFDLG9CQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDL0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxvQkFBTSxDQUFDLE9BQU8sR0FBQyxvQkFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUE7S0FDNUQ7U0FBTTtRQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsb0JBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1QixFQUFFLENBQUMsV0FBVyxDQUFDLG9CQUFNLENBQUMsT0FBTyxHQUFDLG9CQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtLQUMzRDtBQUNMLENBQUM7QUFSRCxnQ0FRQyJ9