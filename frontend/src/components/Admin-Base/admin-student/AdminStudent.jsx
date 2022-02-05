import React from 'react'
import './style.css'
function AdminStudent() {
    return (
        <div class="container ccc">
        <div class="row">
          <div class="col-md-4 col-xl-8">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <a href="admin-student/view-student">
                  <h6 class="m-b-20">View All Student</h6>
                </a>
                <br/>
                <h2 class="text-right"><i class="fas fa-eye f-left"></i></h2>
    
              </div>
            </div>
          </div>
    
          <div class="col-md-4 col-xl-8">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <a href="admin-student/add-student">
                  <h6 class="m-b-20">Add Student</h6>
                </a>
                <br/>
                <h2 class="text-right"><i class="fas fa-plus-circle f-left"></i></h2>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    )
}

export default AdminStudent
