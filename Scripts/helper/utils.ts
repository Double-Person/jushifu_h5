/**
获取服务器ip地址
*/
export function getServerIp(): string {
    try {
        let os = require('os');
        var map = [];
        var ifaces = os.networkInterfaces();
        for (var dev in ifaces) {
            if (ifaces[dev] != null && ifaces[dev].length >= 2 && ifaces[dev][1].address) {
                return ifaces[dev][1].address;
            }
        }
    }
    catch (err) {
        console.log(err);
    }

    return "192.168.0.70";
}