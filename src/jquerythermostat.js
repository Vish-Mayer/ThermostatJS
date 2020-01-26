
$(document).ready(function() {
  var thermostat = new Thermostat()
  updateTemperature();
    
$('#Up').on('click', function() {
  thermostat.increase()
  updateTemperature();
})
  
$('#Down').on('click', function() {
  thermostat.decrease()
  updateTemperature();
})
  
$('#Reset').on('click', function() {
  thermostat.reset()
  updateTemperature();
})
  
$('#PSmode').click(function() {
  thermostat.togglePowerSavingMode()
  if (thermostat.powerSavingMode === true) {
  $('#PSmode').css('color', '#39ff14')
  } else {
    $('#PSmode').css('color', 'white')
    }
  })

  function updateTemperature() {
    $('#temp').text(thermostat.currentTemperature);
    $('#temp').attr('class', thermostat.currentEnergyUsage())
  }
})

$('#current-city').change(function() {
  var city = $('#current-city').val()
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=1bbff88fcd12ae61f63bcef0d5a23b92&units=metric', function(data) {
   $('#Outside').text(data.main.temp)
  

  })
})



  //1bbff88fcd12ae61f63bcef0d5a23b92