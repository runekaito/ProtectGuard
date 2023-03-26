import { Block } from "bdsx/bds/block"
import { BlockPos } from "bdsx/bds/blockpos"
import { Player } from "bdsx/bds/player"
import { text } from "blessed"
import { Config } from "../config.json"
import { Search } from "./Sql"
import { DiffTime, Time } from "./Time"

export function RollbackParam(pl:Player,paramText: string,num:number){
const x = pl.getPosition().x
const y = pl.getPosition().y
const z = pl.getPosition().z
const params = paramText.split(" ")
let dataParams:string[]=[];
let dataList:any[]=[]
let dataList2:any[]=[]
let data:any[]=[];
let Len:number[]=[]
for(const i in params){
    const item = params[i]
    const userLen = item.indexOf("u:")
    const timeLen = item.indexOf("t:")
    const actionLen = item.indexOf("a:")
    const blockLen = item.indexOf("b:")
    const ExceptionLen = item.indexOf("e:")
    const RadiusLen = item.indexOf("r:")
    const dataParam = item.substr(2);
    const num = item.substr(3,item.length-1)
    const time = item.substr(item.length-1,item.length)
    Len.push(userLen,timeLen,actionLen,blockLen,ExceptionLen,RadiusLen)
    if(userLen!=-1){
        data = Search(`select * from data where UPPER(name) = UPPER('${dataParam.toUpperCase()}');`)
    } else if(timeLen!=-1){
        switch(time){
            case "d":
            data = Search(`select * from data where month = ${Time()[0]} and date <= ${Time()[1]-Number(num)};`)
            break
            case "h":
            data = Search(`select * from data where month = ${Time()[0]} and date = ${Time()[1]} and hour <= ${Time()[2]-Number(num)};`)
            break
            case "m":
            data = Search(`select * from data where month = ${Time()[0]} and date = ${Time()[1]} and hour = ${Time()[2]} and min <= ${Time()[3]-Number(num)};`)
            break
            case "s":
            data = Search(`select * from data where month = ${Time()[0]} and date = ${Time()[1]} and hour = ${Time()[2]} and min = ${Time()[3]} and sec <= ${Time()[3]-Number(num)};`)
            break
            case "w":
            data = Search(`select * from data where date <= ${Time()[0]-Number(num)*7};`)
            break
        }
    } else if(actionLen!=-1){
        if(dataParam=="block"){
            data = Search(`select * from data where ev = 0 or ev = 1;`)
        } else if(dataParam=="+block"){
            data = Search(`select * from data where ev = 0;`)
        } else if(dataParam=="-block"){
            data = Search(`select * from data where ev = 1;`)
        }
    } else if(blockLen!=-1){
        const blockName = dataParam.replace("minecraft:","")
        data = Search(`select * from data where bn = '${blockName}';`)
    } else if(ExceptionLen!=-1){
        const blockName = dataParam.replace("minecraft:","")
        data = Search(`select * from data where bn != '${blockName}';`)
    } else if(RadiusLen!=-1){
        data = Search(`select * from data where x < ${x+Number(dataParam)} and x > ${x-Number(dataParam)} and y < ${y+Number(dataParam)} and y > ${y-Number(dataParam)} and z < ${z+Number(dataParam)} and z > ${z-Number(dataParam)};`)
    }
    dataList.push(data);
    dataParams.push(dataParam)
}
    for(let j=0; j<dataList.length; j++){
        for(const k in dataList[j]){
            for(const l in dataList[j-1]){
                if(dataList[j][k].pass==dataList[j-1][l].pass){
                    dataList2.push(dataList[j][k]);
                }
            }
    }
}
    Rollback(dataList2,pl,dataParams,Len,num)
}
export function Rollback(dataList:any[],pl:Player,dataParams:string[],len:number[],num:number){
    let ChengedBlockLen = 0;
    if(num==2){
        if(!dataList.length){
            pl.sendMessage(Config.Preffix+Config.NoBlockDataText)
            return;
        }
        pl.sendMessage(Config.LookupResultPreffix);
    }
    for(const item of dataList){
        if(num==2){
            const diffResult = DiffTime(item);
            const TargetLog = Config.LookupText.replace("%s",item.name).replace("%e",item.bn).replace("%f",item.x).replace("%g",item.y).replace("%h",item.z).replace("%h",diffResult);
        if(item.ev==0){
            pl.sendMessage(TargetLog.replace("%d","placed"))
        } else {
            pl.sendMessage(TargetLog.replace("%d","broken"))
        }
    } else {
            if(item.ev==1){
            if(num==0){
                pl.runCommand(`setblock ${item.x} ${item.y} ${item.z} ${item.bn}`)
            } else {
                pl.runCommand(`setblock ${item.x} ${item.y} ${item.z} air`)
            }
            ChengedBlockLen++
        } else {
            if(num==0){
                pl.runCommand(`setblock ${item.x} ${item.y} ${item.z} air`)
            } else {
                pl.runCommand(`setblock ${item.x} ${item.y} ${item.z} ${item.bn}`)
            }
            ChengedBlockLen++
        }
    }
}
        let j=0;
        pl.sendMessage(Config.Delimiter)
        for(let i=0; j<len.length; i++){
            if(len[j]!=-1){
                pl.sendMessage(Config.Preffix+Config.RollbackLog1.replace("%s",dataParams[i]))
            }
            if(len[j+1]!=-1){
                pl.sendMessage(Config.Preffix+Config.RollbackLog2.replace("%s",dataParams[i]))
            }
            if(len[j+2]!=-1){
                pl.sendMessage(Config.Preffix+Config.RollbackLog3.replace("%s",dataParams[i]))
            }
            if(len[j+3]!=-1){
                pl.sendMessage(Config.Preffix+Config.RollbackLog4.replace("%s",dataParams[i]))
            }
            if(len[j+5]!=-1){
                pl.sendMessage(Config.Preffix+Config.RollbackLog5.replace("%s",dataParams[i]))
            }
            j=j+6;
            }
        if(num!=2){
            pl.sendMessage(Config.Preffix+Config.RollbackLog6.replace("%s",ChengedBlockLen.toString()))
            pl.sendMessage(Config.Delimiter)
        }
    }