const expect = require('chai').expect
const os_instance = require('../index')

describe('OS module', () => {
  describe('"getServerUsage"', () => {
    it('should export a function', () => {
      expect(os_instance.getServerUsage).to.be.a('function')
    })

    it('should get sever usage information', () => {
      const res_cpu = os_instance.getServerUsage().CPU_usage
      const res_mem = os_instance.getServerUsage().Memory_usage
      expect(res_cpu.idle).to.be.a('number')
      expect(res_cpu.total).to.be.a('number')
      expect(res_mem).to.be.a('number')
    })
  })

  describe('"serverLoadMonitor"', () => {
    it('should export a function', () => {
      expect(os_instance.serverLoadMonitor).to.be.a('function')
    })

    it('should get 5 minutes load average', () => {
      expect(os_instance.serverLoadMonitor(5)).to.be.a('number')
    })

    it('should get 10 minutes load average', () => {
      expect(os_instance.serverLoadMonitor(10)).to.be.a('number')
    })

    it('should get 15 minutes load average', () => {
      expect(os_instance.serverLoadMonitor(15)).to.be.a('number')
    })
  })
})
