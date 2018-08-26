var cpu = require('./lib/cpu.js')
var os = require('os')
var osutils = require('os-utils')

exports.getServerUsage = function() {

    var mem_usage = osutils.totalmem() - osutils.freemem()
    var mem_percent = mem_usage / osutils.totalmem()

    var usage = {
      Memory_usage: mem_percent,
      CPU_usage: cpu.cpuAverage()
    }
    return usage
}

exports.serverLoadMonitor = function(min) {
    const avg_load = osutils.loadavg(min)
    return avg_load
}
