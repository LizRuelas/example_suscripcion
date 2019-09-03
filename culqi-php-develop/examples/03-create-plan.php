<?php
/**
 * Ejemplo 3
 * Como crear un plan usando Culqi PHP.
 */
 header('Content-Type: application/json');

   require '../Requests-master/library/Requests.php';
   Requests::register_autoloader();
   require '../lib/culqi.php';

 use Culqi\Culqi;

  // Configurar tu API Key y autenticación
$SECRET_API_KEY = 'sk_test_F3wDa6xwYfrYoIXi';
$culqi = new Culqi(array('api_key' => $SECRET_API_KEY));
try {
  // Creando Cargo a una tarjeta
  $plan = $culqi->Plans->create(
      array(
        "name" => $_POST["name_plan"],
        "currency_code" => $_POST["moneda_plan"],
        "amount" => $_POST["monto_plan"],
        "interval_count" => $_POST["cada"],
        "interval" => $_POST["periodo"],
        "limit" => $_POST["numero_veces"]
      )
  );
  // Respuesta
  echo json_encode($plan);

} catch (Exception $e) {
  echo json_encode($e->getMessage());
}
