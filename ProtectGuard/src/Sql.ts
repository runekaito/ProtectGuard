import { Config } from "../config.json"
const sqlite = require("sqlite-sync");
sqlite.connect(Config.DataPath);
sqlite.run("create table if not exists data(xuid,name,x,y,z,bn,ev,month,date,hour,min,sec,pass);",function(res: { error: any; }){
    if(res.error)
        throw res.error;
});
export function Search(cmd:string){
  return JSON.parse(JSON.stringify(sqlite.run(cmd)))
}
export function Add(Xuid:string,Name:string,X:number,Y:number,Z:number,Block:string,Ev:number,Month:number,Date:number,Hour:number,Min:number,Sec:number,Pass:string){
  sqlite.insert("data",{xuid: Xuid,name:Name,x:X,y:Y,z:Z,bn:Block,ev:Ev,month:Month,date:Date,hour:Hour,min:Min,sec:Sec,pass:Pass}, function(res: { error: any; }){
    if(res.error)
        throw res.error;
  });
}
export function Run(cmd:string){
  sqlite.run(cmd,function(res: { error: any; }){
      if(res.error)
          throw res.error;
  });
}