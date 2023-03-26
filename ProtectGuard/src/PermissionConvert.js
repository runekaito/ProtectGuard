"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionConvert = void 0;
const command_1 = require("bdsx/bds/command");
function PermissionConvert(str) {
    let permission = command_1.CommandPermissionLevel.Operator;
    switch (str) {
        case "Normal":
            permission = command_1.CommandPermissionLevel.Normal;
            break;
        case "Host":
            permission = command_1.CommandPermissionLevel.Host;
            break;
        case "Automation":
            permission = command_1.CommandPermissionLevel.Automation;
            break;
        case "Admin":
            permission = command_1.CommandPermissionLevel.Admin;
            break;
        case "Internal":
            permission = command_1.CommandPermissionLevel.Internal;
            break;
    }
    return permission;
}
exports.PermissionConvert = PermissionConvert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVybWlzc2lvbkNvbnZlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQZXJtaXNzaW9uQ29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBMEQ7QUFFMUQsU0FBZ0IsaUJBQWlCLENBQUMsR0FBVTtJQUN4QyxJQUFJLFVBQVUsR0FBd0IsZ0NBQXNCLENBQUMsUUFBUSxDQUFDO0lBQ3RFLFFBQU8sR0FBRyxFQUFDO1FBQ1AsS0FBSyxRQUFRO1lBQ1QsVUFBVSxHQUFDLGdDQUFzQixDQUFDLE1BQU0sQ0FBQTtZQUN4QyxNQUFLO1FBQ1QsS0FBSyxNQUFNO1lBQ1AsVUFBVSxHQUFDLGdDQUFzQixDQUFDLElBQUksQ0FBQTtZQUN0QyxNQUFLO1FBQ1QsS0FBSyxZQUFZO1lBQ1QsVUFBVSxHQUFDLGdDQUFzQixDQUFDLFVBQVUsQ0FBQTtZQUNoRCxNQUFLO1FBQ1QsS0FBSyxPQUFPO1lBQ1IsVUFBVSxHQUFDLGdDQUFzQixDQUFDLEtBQUssQ0FBQTtZQUN2QyxNQUFLO1FBQ1QsS0FBSyxVQUFVO1lBQ1AsVUFBVSxHQUFDLGdDQUFzQixDQUFDLFFBQVEsQ0FBQTtZQUM5QyxNQUFLO0tBQ1o7SUFDRCxPQUFPLFVBQVUsQ0FBQTtBQUNyQixDQUFDO0FBcEJELDhDQW9CQyJ9