import { events } from "bdsx/event";
import { Add } from "../Sql";
import { Config } from "../../config.json"
import { CANCEL } from "bdsx/common";
import { Player } from "bdsx/bds/player";
import { Log } from "../InspectFunction";
import { Time } from "../Time";
import { random } from "../RandomNum";

events.blockDestroy.on((ev)=>{
    const pl = ev.player as Player
    const data = {
        xuid: ev.player.getXuid(),
        name: ev.player.getNameTag(),
        x: ev.blockPos.x,
        y: ev.blockPos.y,
        z: ev.blockPos.z,
        bn: ev.blockSource.getBlock(ev.blockPos).getName().replace("minecraft:", ""),
        month: Time()[0],
        date: Time()[1],
        hour: Time()[2],
        min: Time()[3],
        sec: Time()[4],
        pass: random()
    }
    if(ev.player.hasTag(Config.InspectTag)){
        Log(data,pl)
        return CANCEL
    }
    Add(data.xuid,data.name,data.x,data.y,data.z,data.bn,1,data.month,data.date,data.hour,data.min,data.sec,data.pass)
})