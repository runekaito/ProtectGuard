"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const len = 8;
const str = "1234567890abcdefghijklmnopqrstuvwxyz";
const strLen = str.length;
function random() {
    let result = "";
    for (var i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * strLen)];
    }
    return result;
}
exports.random = random;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFuZG9tTnVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmFuZG9tTnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNkLE1BQU0sR0FBRyxHQUFHLHNDQUFzQyxDQUFDO0FBQ25ELE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFFMUIsU0FBZ0IsTUFBTTtJQUN0QixJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUM7SUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixNQUFNLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDbkQ7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNiLENBQUM7QUFORCx3QkFNQyJ9