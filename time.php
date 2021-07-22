<?php 
 $time = new DateTime();
 echo json_encode(
     [
         'hour'=>$time->format("H"),
         'minute'=>$time->format("i"),
     ]
 );