function Thermostat(){
  this.defaultTemperature = 20
  this.currentTemperature = 20
  this.minimumTemperature= 10
  this.maximumTemperature= 25
  this.powerSavingMode = true 
  this.maximumTemperaturePSTrue = 25
  this.maximumTemperaturePSFalse = 32

}

Thermostat.prototype.increase = function() {
  if(this.currentTemperature < this.maximumTemperature) {this.currentTemperature ++}
  return this.currentTemperature
}

Thermostat.prototype.decrease = function() {
  if(this.currentTemperature > this.minimumTemperature) {this.currentTemperature --}
  return this.currentTemperature
}

Thermostat.prototype.togglePowerSavingMode = function() {
  if(this.powerSavingMode == true) {
    this.maximumTemperature = this.maximumTemperaturePSFalse
    this.powerSavingMode = false
  }
  else{
    this.maximumTemperature = this.maximumTemperaturePSTrue
    this.powerSavingMode = true
    if(this.currentTemperature > this.minimumTemperature) {
      this.currentTemperature = this.maximumTemperature
    }
  }
}

Thermostat.prototype.reset = function() {
  this.currentTemperature = this.defaultTemperature
  return this.currentTemperature
}

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.currentTemperature < 18) {
    return "Low usage"
  } else if (this.currentTemperature < 25) {
    return "Medium usage"
  } else {
    return "High usage"
  }
};




