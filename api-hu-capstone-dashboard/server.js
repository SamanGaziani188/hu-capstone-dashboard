/*
@author: Emad Bin Abid
@date: 26-10-2018
*/

//Creating the express server

var PORT_NUM = null;

exports.run = function(express_instance, port_num)
{
    PORT_NUM = port_num;
    //If passed 'port' is busy, listens on dynamically assigned port.
    express_instance.listen(PORT_NUM || process.env.PORT, (err) => {
        if(err)
        {
            console.log("[-]Error: in establishing server connection.");
        }
        else
        {
            console.log(`[+]Success: Express server listening on port ${PORT_NUM}...`);
        }
    });
}