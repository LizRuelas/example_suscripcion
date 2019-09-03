<?php
header('Content-Type: application/json');

require '../Requests-master/library/Requests.php';
Requests::register_autoloader();
require '../lib/culqi.php';

use Culqi\Culqi;

$SECRET_API_KEY = 'sk_test_F3wDa6xwYfrYoIXi';
$culqi = new Culqi(array('api_key' => $SECRET_API_KEY));
try {
  // Creando Cargo a una tarjeta
  $subscription = $culqi->Subscriptions->create(
    array(
      "plan_id" => $_POST["idPlan"],
      "card_id"=> $_POST["idCard"]
    )
  );
  // Response
  echo json_encode($subscription);

} catch (Exception $e) {
  echo json_encode($e->getMessage());
}
?>
