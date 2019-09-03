$('#crearSuscripcion').on('click', function (e) {
  var idPlan = $("#idPlan").val();
  var idCard = $('#idCard').val();

  $.ajax({
    type: 'POST',
    url: 'http://localhost:8083/suscripcion/culqi-php-develop/examples/04-create-subscription.php',
    data: { idPlan , idCard },
    datatype: 'json',
    success: function(data) {
      var result3 = "";
        if(data.constructor == String){
            result3 = JSON.parse(data);
        }
        if(data.constructor == Object){
            result3 = JSON.parse(JSON.stringify(data));
        }
      if(result3.object === 'subscription'){
       alert('Se creo el objeto Suscripción con el siguiente ID: ' + result3.id);
      }
      if(result3.object === 'error'){
          alert(result3);
      }
    },
    error: function(error) {
      resultdiv3(error)
    }
  });
});
