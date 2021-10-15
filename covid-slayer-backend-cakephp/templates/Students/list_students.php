<table id="tbl-students-list" class="table table-bordered table-striped">
  <thead>
      <tr>
            <td colspan="5" align="right"><a href="<?= $this->Url->build('/add-student/', ['fullBase' => true]) ?>">Add Student</a></td>
       </tr>
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Action</th>
      </tr>
  </thead>
  <tbody>
      <?php
        if (count($students) > 0) {
            foreach ($students as $index => $data) {
        ?>
              <tr>
                  <td><?= $data->id ?></td>
                  <td><?= $data->name ?></td>
                  <td><?= $data->email ?></td>
                  <td><?= $data->phone_no ?></td>
                  <td>
                      <form id="frm-delete-student-<?= $data->id ?>" action="<?= $this->Url->build('/delete-student/' . $data->id, ['fullBase' => false]) ?>" method="post"><input type="hidden" value="<?= $data->id ?>" name="id" /></form>
                      <a href="<?= $this->Url->build('/edit-student/' . $data->id, ['fullBase' => true]) ?>" class="btn btn-warning">Edit</a>
                      <a href="javascript:void(0)" onclick="if(confirm('Are you sure want to delete ?')){ $('#frm-delete-student-<?= $data->id ?>').submit() }" class="btn btn-danger">Delete</a>
                  </td>
              </tr>
      <?php
            }
        }
        ?>
  </tbody>
</table>