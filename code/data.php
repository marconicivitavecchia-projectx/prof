<?php

$commandObj = new stdClass();
$commandObj->commandList = array();

$commandObj->commandList[0] = new stdClass();
$commandObj->commandList[0]->name = "Bring me a coffee";
$commandObj->commandList[0]->description = "Prepare a cofee and bring it to the user";

$commandObj->commandList[1] = new stdClass();
$commandObj->commandList[1]->name = "Turn on the lights";
$commandObj->commandList[1]->description = "Turn on the light of the current location";


echo json_encode($commandObj);

?>