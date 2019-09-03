$("#response-panel3").hide();
$('#crearPlan').on('click', function (e) {
  var name_plan = $("#name_plan").val();
  var moneda_plan = $('#moneda_plan').val()
  var monto_plan = $('#monto_plan').val()
  var cada = $('#cada').val()
  var periodo = $('#periodo').val()
  var numero_veces = $('#numero_veces').val()


  $.ajax({
         type: 'POST',
         url: 'http://localhost:8083/suscripcion/culqi-php-develop/examples/03-create-plan.php',
         data: { name_plan , moneda_plan , monto_plan , cada , periodo , numero_veces },
         datatype: 'json',
         success: function(data) {
           var result3 = "";
             if(data.constructor == String){
                 result3 = JSON.parse(data);
             }
             if(data.constructor == Object){
                 result3 = JSON.parse(JSON.stringify(data));
             }
           if(result3.object === 'plan'){
            resultdiv3('Se creo el objeto Plan con el siguiente ID: ' + result3.id);
           }
           if(result3.object === 'error'){
               resultdiv3(result3);
               alert(result3);
           }
         },
         error: function(error) {
           resultdiv3(error)
         }
      });
  function resultdiv3(message){
    $('#response-panel3').show();
    $('#response3').html(message);
  }
});
