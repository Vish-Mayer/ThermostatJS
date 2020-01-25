var thermostat = new Thermostat()

$(document).ready(function() {
$('#temp').text(thermostat.currentTemperature);
  })
    
$('#Up').on('click', function() {
  thermostat.increase()
  $('#temp').text(thermostat.currentTemperature);
})
  
$('#Down').on('click', function() {
  thermostat.decrease()
  $('#temp').text(thermostat.currentTemperature);
})
  
$('#Reset').on('click', function() {
  thermostat.reset()
  $('#temp').text(thermostat.currentTemperature);
})
  
$('#PSmode').click(function() {
  thermostat.togglePowerSavingMode()
  if (thermostat.powerSavingMode === true) {
  $('#PSmode').css('color', '#39ff14')
  } else {
    $('#PSmode').css('color', 'white')
    }
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=1bbff88fcd12ae61f63bcef0d5a23b92&units=metric', function(data) {
   $('#Outside').text(data.main.temp)
})



  //1bbff88fcd12ae61f63bcef0d5a23b92