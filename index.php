<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
/*
league = nom de la ligue des coffres (standard, hardcore, heist, hardcore heist, SSF standard, etc.)
tabs = 1 affiche les id des tabs
tabIndex = 1,N > affiche le tab (0 pour le premier)
accountName = affiche le nom du compte (possible de pouvoir retrouver le compte depuis le cookie ?)
https://www.pathofexile.com/character-window/get-stash-items?league=heist&tabs=1&tabIndex=1,3&accountName=Toofi
*/
$league = $_GET['league'];
$tab = $_GET['tab'];
$tabIndex = $_GET['tabIndex'];
$accountName = $_GET['accountName'];

$curl = curl_init('https://www.pathofexile.com/character-window/get-stash-items?league='.$league.'&tabs='.$tab.'&tabIndex='.$tabIndex.'&accountName='.$accountName.'');
curl_setopt_array($curl, [  CURLOPT_RETURNTRANSFER => true,
                            CURLOPT_COOKIE => 'POESESSID=cc71f27d41cde603453b3fadabdc6303; SameSite=Lax'
                          ]);

if ($data === false) {
  var_dump(curl_error($curl));
} else {
  $data = curl_exec($curl);
}
curl_close($curl);

$result = json_decode($data,true);
var_dump($result);
?>