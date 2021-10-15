<?php

namespace App\Controller;

use App\Controller\AppController;

class StudentsController extends AppController
{
    public function initialize(): void
    {
        parent::initialize();
       
        $this->loadModel("Students");
    }

    public function addStudent()
    {
        $student = $this->Students->newEmptyEntity();
        if ($this->request->is('post')) {
            $student = $this->Students->patchEntity($student, $this->request->getData());
            if ($this->Students->save($student)) {
                $this->Flash->success(__('The student has been created.'));
            }
            $this->Flash->error(__('Failed to create student. Please, try again.'));
        }

        $this->set([
            'student' => $student,
        ]);
        $this->viewBuilder()->setOption('serialize', ['student']);
    }

    public function listStudents()
    {
        $students = $this->Students->find()->toList();
        $this->set('students', $students);
        $this->viewBuilder()->setOption('serialize', ['students']);
    }

}
