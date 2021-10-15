<?php

namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\Admin_model;


class V1 extends ResourceController
{
    public function __construct()
	{
		header('Access-Control-Allow-Origin: *');
   		header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	}
    use ResponseTrait;

    // all users
    public function index(){
      $model = new Admin_model();
      $data= $model->getAllUsers();
      return $this->respond($data);
    }

      // all users
      public function register(){
        $model = new Admin_model();
        $data  = $this->request->getPost();

        $res= $model->registerUser($data);

        return $this->respond($res);
      }

      // all users
      public function login(){
        $model = new Admin_model();
        $data  = $this->request->getPost();

        $res= $model->checkUserExists($data);

        return $this->respond($res);
      }

      
      public function registerGame(){
        $model = new Admin_model();
        $data  = $this->request->getPost();

        $res= $model->registerNewGame($data);

        return $this->respond($res);
      }

      

}
