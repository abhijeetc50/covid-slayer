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
        $query = $db->query('SELECT * FROM USERS')->getResult();
        return $query;
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

        if ($db->simpleQuery("INSERT INTO GAME_BIBLE (GAME_ID, USER_ID) 
        VALUES ('$game_id', '$user_id')")) {
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
