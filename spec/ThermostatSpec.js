'use strict';

describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat()
  })

  it('shows a default temperature of 20', function() {
    expect(thermostat.currentTemperature).toEqual(20)
  })

  it('resets to the default temperature with a reset function,', function() {
    thermostat.currentTemperature = 25
    expect(thermostat.reset()).toEqual(20)
  })

  it('temperature cannot be lower than the set minimum', function() {
    for(let step = 0; step < 10; step++) {thermostat.decrease()};
    expect(thermostat.decrease()).toEqual(10)
  })

  it('increases temperature with up function', function() {
    expect(thermostat.increase()).toEqual(21) 
  })

  it('decreases temperature with down function', function() {
    expect(thermostat.decrease()).toEqual(19)
  })

  it('has a max temperature with power saving mode is on', function() {
    thermostat.currentTemperature = 25
    expect(thermostat.increase()).toEqual(25)
  })

  it('has a max temperature with power saving mode is off', function() {
    thermostat.togglePowerSavingMode();
    thermostat.currentTemperature = 25
    expect(thermostat.increase()).toEqual(26)
    thermostat.currentTemperature = 32
    expect(thermostat.increase()).toEqual(32)
  })

  it('checks if the usage is "Low" if current temperature', function() {
    thermostat.currentTemperature = 15
    expect(thermostat.currentEnergyUsage()).toEqual('Low usage')
  })

  it('checks if the usage is "Medium" if current temperature', function() {
    thermostat.currentTemperature = 20
    expect(thermostat.currentEnergyUsage()).toEqual('Medium usage')
  })

  it('checks if the usage is "High" if current temperature', function() {
    thermostat.currentTemperature = 26
    expect(thermostat.currentEnergyUsage()).toEqual('High usage')
  })

})