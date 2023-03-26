export function Time(){
    const now = new Date();
    const month = now.getMonth()+1;
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const times = [month,date,hour,min,sec]
    return times
}
export function DiffTime(item:any){
    const diffMonth = Math.abs((Time()[0]-item.month) * 720)
    const diffDate = Math.abs((Time()[1]-item.date) * 24)
    const diffHour = Math.abs(Time()[2]-item.hour)
    const diffMin =  Math.abs(Math.round(Math.abs(Time()[3]-item.min)*100 / 60)/100)
    const diffSec = Math.abs(Math.round(Math.abs(Time()[4]-item.sec)*100 / 3600)/100)
    const diffTime = diffMonth+diffDate+diffHour+diffMin+diffSec;
    const diffTimeRound =((Math.round(diffTime * 100)) / 100);
    let diffResult = diffTimeRound.toString();
    const resultLen = diffResult.length;
    if(resultLen==diffResult.indexOf(".0") || resultLen==diffResult.indexOf(".1") || resultLen==diffResult.indexOf(".2") || resultLen==diffResult.indexOf(".3") || resultLen==diffResult.indexOf(".4") || resultLen==diffResult.indexOf(".5") || resultLen==diffResult.indexOf(".6") || resultLen==diffResult.indexOf(".7") || resultLen==diffResult.indexOf(".8") || resultLen==diffResult.indexOf(".9")){
        diffResult=diffResult+"0"
    }
    return diffResult
}