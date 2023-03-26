import { CommandRawText } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { Config } from "../config.json"
import { InspectTag } from "./InspectFunction";
import { PermissionConvert } from "./PermissionConvert";
import { RollbackParam } from "./RollbackFunction";
import { Run } from "./Sql";
import { Time } from "./Time";

command.register('co', 'ProtectGuard',PermissionConvert(Config.CommandPermission)).overload((p, o, op) => {
    const pl = o.getEntity() as Player
    InspectTag(pl)
},{
    enum: command.enum("i","i")
}).overload((p, o, op) => {
    const pl = o.getEntity() as Player
    InspectTag(pl)
},{
    enum: command.enum("inspect","inspect")
}).overload((p,o,op)=>{
        const pl = o.getEntity() as Player
        pl.sendMessage(Config.HelpPreffix)
        pl.sendMessage(Config.HelpCommandDescription)
        pl.sendMessage(Config.InspectCommandDescription)
        pl.sendMessage(Config.RollbackCommandDescription)
        pl.sendMessage(Config.RestoreCommandDescription)
        pl.sendMessage(Config.LookupCommandDescription)
        pl.sendMessage(Config.PurgeCommandDescription)
        pl.sendMessage(Config.StatusCommandDescription)
    },{
        enum: command.enum("help","help")
    }).overload((p,o,op)=>{
        const pl = o.getEntity() as Player
        RollbackParam(pl,p.params.text,0)
    },{
        enum: command.enum("rollback","rollback"),
        params: CommandRawText
    }).overload((p,o,op)=>{
        const pl = o.getEntity() as Player
        RollbackParam(pl,p.params.text,1)
    },{
        enum: command.enum("restore","restore"),
        params: CommandRawText
    }).overload((p,o,op)=>{
        const pl = o.getEntity() as Player
        RollbackParam(pl,p.params.text,2)
    },{
        enum: command.enum("lookup","lookup"),
        params: CommandRawText
    }).overload((p,o,op)=>{
        const pl = o.getEntity() as Player
        pl.sendMessage(Config.StatusPreffix)
        pl.sendMessage(Config.Version)
        pl.sendMessage(Config.License)
        pl.sendMessage(Config.Database)
        pl.sendMessage(Config.Consumer)
        pl.sendMessage(Config.Discord)
        pl.sendMessage(Config.Patreon)
    },{
        enum: command.enum("status","status")
    }).overload((p,o,op)=>{
        const params = p.params.text.split(" ")
        const pl = o.getEntity() as Player
        if(params.length!=1){
            pl.sendMessage(Config.ParamError)
        }
        for(const item of params){
            const num = item.substr(3,item.length-1)
            const time = item.substr(item.length-1,item.length)
            let data:any;
            switch(time){
                case "d":
                data = Run(`delete from data where date = ${Time()[0]} and date <= ${Time()[1]-Number(num)};`)
                break
                case "h":
                data = Run(`delete from data where date = ${Time()[0]} and date = ${Time()[1]} and hour <= ${Time()[2]-Number(num)};`)
                break
                case "m":
                data = Run(`delete from data where date = ${Time()[0]} and date = ${Time()[1]} and hour = ${Time()[2]} and min <= ${Time()[3]-Number(num)};`)
                break
                case "s":
                data = Run(`delete from data where date = ${Time()[0]} and date = ${Time()[1]} and hour = ${Time()[2]} and min = ${Time()[3]} and sec <= ${Time()[3]-Number(num)};`)
                break
                case "w":
                data = Run(`delete from data where date <= ${Time()[0]-Number(num)*7};`)
                break
            }
        }
    },{
        enum: command.enum("purge","purge"),
        params: CommandRawText
    })
