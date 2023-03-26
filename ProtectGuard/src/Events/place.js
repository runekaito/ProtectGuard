"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
const Sql_1 = require("../Sql");
const config_json_1 = require("../../config.json");
const common_1 = require("bdsx/common");
const InspectFunction_1 = require("../InspectFunction");
const Time_1 = require("../Time");
const RandomNum_1 = require("../RandomNum");
event_1.events.blockPlace.on((ev) => {
    const pl = ev.player;
    const data = {
        xuid: ev.player.getXuid(),
        name: ev.player.getNameTag(),
        x: ev.blockPos.x,
        y: ev.blockPos.y,
        z: ev.blockPos.z,
        bn: ev.block.getName().replace("minecraft:", ""),
        month: (0, Time_1.Time)()[0],
        date: (0, Time_1.Time)()[1],
        hour: (0, Time_1.Time)()[2],
        min: (0, Time_1.Time)()[3],
        sec: (0, Time_1.Time)()[4],
        pass: (0, RandomNum_1.random)()
    };
    if (ev.player.hasTag(config_json_1.Config.InspectTag)) {
        (0, InspectFunction_1.Log)(data, pl);
        return common_1.CANCEL;
    }
    (0, Sql_1.Add)(data.xuid, data.name, data.x, data.y, data.z, data.bn, 0, data.month, data.date, data.hour, data.min, data.sec, data.pass);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvQztBQUNwQyxnQ0FBNkI7QUFDN0IsbURBQTBDO0FBQzFDLHdDQUFxQztBQUNyQyx3REFBeUM7QUFFekMsa0NBQStCO0FBQy9CLDRDQUFzQztBQUV0QyxjQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFO0lBQ3ZCLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFnQixDQUFBO0lBQzlCLE1BQU0sSUFBSSxHQUFHO1FBQ1QsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ3pCLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUM1QixDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQixFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztRQUNoRCxLQUFLLEVBQUUsSUFBQSxXQUFJLEdBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxFQUFFLElBQUEsV0FBSSxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxFQUFFLElBQUEsV0FBSSxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2YsR0FBRyxFQUFFLElBQUEsV0FBSSxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2QsR0FBRyxFQUFFLElBQUEsV0FBSSxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxFQUFFLElBQUEsa0JBQU0sR0FBRTtLQUNqQixDQUFBO0lBQ0QsSUFBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFDO1FBQ25DLElBQUEscUJBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFDWixPQUFPLGVBQU0sQ0FBQTtLQUNoQjtJQUNELElBQUEsU0FBRyxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RILENBQUMsQ0FBQyxDQUFBIn0=