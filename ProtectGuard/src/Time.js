"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffTime = exports.Time = void 0;
function Time() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const times = [month, date, hour, min, sec];
    return times;
}
exports.Time = Time;
function DiffTime(item) {
    const diffMonth = Math.abs((Time()[0] - item.month) * 720);
    const diffDate = Math.abs((Time()[1] - item.date) * 24);
    const diffHour = Math.abs(Time()[2] - item.hour);
    const diffMin = Math.abs(Math.round(Math.abs(Time()[3] - item.min) * 100 / 60) / 100);
    const diffSec = Math.abs(Math.round(Math.abs(Time()[4] - item.sec) * 100 / 3600) / 100);
    const diffTime = diffMonth + diffDate + diffHour + diffMin + diffSec;
    const diffTimeRound = ((Math.round(diffTime * 100)) / 100);
    let diffResult = diffTimeRound.toString();
    const resultLen = diffResult.length;
    if (resultLen == diffResult.indexOf(".0") || resultLen == diffResult.indexOf(".1") || resultLen == diffResult.indexOf(".2") || resultLen == diffResult.indexOf(".3") || resultLen == diffResult.indexOf(".4") || resultLen == diffResult.indexOf(".5") || resultLen == diffResult.indexOf(".6") || resultLen == diffResult.indexOf(".7") || resultLen == diffResult.indexOf(".8") || resultLen == diffResult.indexOf(".9")) {
        diffResult = diffResult + "0";
    }
    return diffResult;
}
exports.DiffTime = DiffTime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsSUFBSTtJQUNoQixNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUM7SUFDL0IsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZDLE9BQU8sS0FBSyxDQUFBO0FBQ2hCLENBQUM7QUFURCxvQkFTQztBQUNELFNBQWdCLFFBQVEsQ0FBQyxJQUFRO0lBQzdCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDeEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtJQUNyRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QyxNQUFNLE9BQU8sR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2hGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUE7SUFDakYsTUFBTSxRQUFRLEdBQUcsU0FBUyxHQUFDLFFBQVEsR0FBQyxRQUFRLEdBQUMsT0FBTyxHQUFDLE9BQU8sQ0FBQztJQUM3RCxNQUFNLGFBQWEsR0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMxRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFHLFNBQVMsSUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDO1FBQ2xZLFVBQVUsR0FBQyxVQUFVLEdBQUMsR0FBRyxDQUFBO0tBQzVCO0lBQ0QsT0FBTyxVQUFVLENBQUE7QUFDckIsQ0FBQztBQWRELDRCQWNDIn0=