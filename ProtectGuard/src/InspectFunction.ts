import { Search } from "./Sql"
import { Config } from "../config.json"
import { Player } from "bdsx/bds/player"
import { DiffTime } from "./Time"
export function Log(data:any,pl:Player){
        const Log = Search(`select * from data where x = ${data.x} and y = ${data.y} and z = ${data.z};`)
        Inspect(data,pl,Log)
}

export function Inspect(data:any,pl:Player,Log:any){
    const Preffix = Config.InspectPreffix.replace("%s",data.x).replace("%d",data.y).replace("%e",data.z)
    if(!Log.length){
        pl.sendMessage(Config.Preffix+Config.NoBlockInspectDataText.replace("%s",data.bn))
        return;
    }
    pl.sendMessage(Preffix)
    for(const item of Log){
        const diffResult = DiffTime(item);
        const TargetLog = Config.InspectText.replace("%s",item.name).replace("%e",item.bn).replace("%h",diffResult)
        if(item.ev==0){
            pl.sendMessage(TargetLog.replace("%d","placed").replace("%g","§a+"))
        } else {
            pl.sendMessage(TargetLog.replace("%d","broken").replace("%g","§c-"))
        }
    }
}

export function InspectTag(pl:Player){
    if(pl.hasTag(Config.InspectTag)){
        pl.removeTag(Config.InspectTag)
        pl.sendMessage(Config.Preffix+Config.InspectTextDisabled)
    } else {
        pl.addTag(Config.InspectTag)
        pl.sendMessage(Config.Preffix+Config.InspectTextEnabled)
    }
}