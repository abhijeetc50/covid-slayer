<?php

namespace App\Models;

use CodeIgniter\Model;

class Admin_model extends Model
{
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name', 'email'];

    public function getAllUsers()
    {
        $db = \Config\Database::connect();
        $query = $db->query('SELECT * FROM USERS')->getResultArray();
        return $query;
    }

    public function getGameLogbyUser($data)
    {
        $id  = $data['id'];
        $db = \Config\Database::connect();
        $query = $db->query("SELECT ID, 
        GAME_ID, STATUS, 
        DATE(CREATED_AT) DATE 
        FROM GAME_BIBLE 
        WHERE USER_ID = '$id'
        ORDER BY CREATED_AT DESC")->getResultArray();
        return $query;
    }

    public function getGameCountbyUser($data)
    {
        $db = \Config\Database::connect();

        $id  = $data['id'];

        $queryWon = $db->query("SELECT count(*) WON
        FROM GAME_BIBLE 
        WHERE STATUS = 'WON'
        AND USER_ID = '$id'")->getResultArray();

        $queryLost = $db->query("SELECT count(*) LOST
        FROM GAME_BIBLE 
        WHERE STATUS = 'LOST'
        AND USER_ID = '$id'")->getResultArray();

        $data = [];
        $data["WON"] = $queryWon;
        $data["LOST"] = $queryLost;

        return $data;
    }

    public function getGainerLoser()
    {
        $db = \Config\Database::connect();

        $query_gainer = $db->query("SELECT B.NAME,  A.USER_ID, COUNT(A.GAME_ID) COUNT
        FROM GAME_BIBLE A
        JOIN USERS B ON A.USER_ID = B.ID
        WHERE A.STATUS  = 'WON'
        GROUP BY A.USER_ID 
        ORDER BY COUNT(A.GAME_ID) DESC")->getResultArray();
    
        $query_loser = $db->query("SELECT B.NAME,  A.USER_ID, COUNT(A.GAME_ID) COUNT
        FROM GAME_BIBLE A
        JOIN USERS B ON A.USER_ID = B.ID
        WHERE A.STATUS  = 'LOST'
        GROUP BY A.USER_ID 
        ORDER BY COUNT(A.GAME_ID) DESC")->getResultArray();

        $data = [];
        $data["GAINERS"] =  $query_gainer;
        $data["LOSERS"] =  $query_loser;
      
        return $data;
    }

    // create
    public function registerUser($data)
    {
        $db = \Config\Database::connect();

        $name  = $data['name'];
        $email  = $data['email'];
        $password = $data['password'];
        $age = $data['age'];
        $gender = $data['gender'];

        if ($db->simpleQuery("INSERT INTO USERS (NAME, EMAIL, PASSWORD, AGE, GENDER) 
        VALUES ('$name', '$email','$password', '$age','$gender')")) {
            $status  = "true";
        } else {
            $status  = "false";
        }

        return $status;
    }

    public function checkUserExists($data)
    {
        $db = \Config\Database::connect();

        $email  = $data['username'];
        $password = $data['password'];

        $query = $db->query("SELECT * FROM USERS 
        WHERE EMAIL = '$email' AND PASSWORD = '$password'")->getResultArray();
        // print_r(json_encode( $query)); die;
        if (count($query) > 0) {
            $status = [
                "status" => "true",
                "user_id" => $query[0]["ID"],
                "name" => $query[0]["NAME"]
            ];
        } else {
            $status = [
                "status" => "false"
            ];
        }

        return $status;
    }

    public function registerNewGame($data)
    {
        $db = \Config\Database::connect();

        $game_id  = $data['game_id'];
        $user_id  = $data['user_id'];

        if ($db->simpleQuery("INSERT INTO GAME_BIBLE (GAME_ID, USER_ID, STATUS) 
        VALUES ('$game_id', '$user_id', 'LOST')")) {
           $status = [
            "status" => "true",
        ];
        } else {
            $status = [
                "status" => "false",
            ];
        }

        return $status;
    }

    public function logGameData($data)
    {
        $db = \Config\Database::connect();

        $game_id  = $data['game_id'];
        $point  = $data['point'];
        $playertype  = $data['playertype'];
        $type  = $data['type'];

        if ($db->simpleQuery("INSERT INTO GAME_LOG (GAME_ID, POINT, PLAYER_TYPE, ATTACK_TYPE) 
        VALUES ('$game_id', '$point', '$playertype', '$type')")) {
           $status = [
            "status" => "true",
        ];
        } else {
            $status = [
                "status" => "false",
            ];
        }

        return $status;
    }

    public function logWinner($data)
    {
        $db = \Config\Database::connect();

        $game_id  = $data['game_id'];
        $winner  = $data['winner'];

        if( $winner == 'Monster'){
            $status  = 'LOST';
        }else{
            $status  = 'WON';
        }

        if ($db->simpleQuery("UPDATE GAME_BIBLE 
        SET STATUS = '$status' 
        WHERE GAME_ID = '$game_id'")) {
           $status = [
            "status" => "true",
        ];
        } else {
            $status = [
                "status" => "false",
            ];
        }

        return $status;
    }
}
