/*
@author: Emad Bin Abid
@date: 26-10-2018
*/

//Establishing database connectivity

//Dependencies
const DB_NAME = "HUCapstoneDashboard";
var IP = "";
var PORT_NUM = "";

exports.connect = function(mongoose_instance, ip, port_num)
{
    PORT_NUM = port_num.toString();
    IP = ip;
    mongoose_instance.connect(`mongodb://${IP}/${DB_NAME}`, {useNewUrlParser: true}, (err) => {
        if(err)
        {
            console.log(`[-]Error: Couldn't connect to ${DB_NAME} at ${IP}:${PORT_NUM}`);
        }
        else
        {
            console.log(`[+]Success: Successfully connected to ${DB_NAME} at ${IP}:${PORT_NUM}`);
        }
    });
}