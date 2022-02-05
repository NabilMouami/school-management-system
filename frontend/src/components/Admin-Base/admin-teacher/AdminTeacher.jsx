import React, {useEffect,useState} from 'react'


import './style.css'
function AdminTeacher() {

    return (
        <div>
             <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
                    <div class="container ccc">
                        <div class="row">
                        <div class="col-md-4 col-xl-3">
                            <div class="card bg-c-blue order-card">
                            <div class="card-block">
                                <a href="/admin-teacher/view-teacher">
                                <h6 class="m-b-20">View All Teacher</h6>
                                </a>
                                <br/>
                                <h2 class="text-right"><i class="fas fa-eye f-left"></i></h2>

                            </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                            <div class="card bg-c-green order-card">
                            <div class="card-block">
                                <a href="/admin-teacher/add-teacher">
                                <h6 class="m-b-20">Add Teacher</h6>
                                </a>
                                <br/>
                                <h2 class="text-right"><i class="fas fa-plus-circle f-left"></i></h2>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                            <div class="card bg-c-yellow order-card">
                            <div class="card-block">
                                <a href="/admin-teacher/add-notes">
                                <h6 class="m-b-20">Register Notes</h6>
                                </a>
                                <br/>
                                <h2 class="text-right"><i class="fas fa-check-circle f-left"></i></h2>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                            <div class="card bg-c-pink order-card">
                            <div class="card-block">
                                <a href="/admin-teacher/view-notes">
                                <h6 class="m-b-20">View All Students Notes</h6>
                                </a>
                                <br/>
                                <h2 class="text-right"><i class="fas fa-rupee-sign f-left"></i></h2>
                            </div>
                            </div>
                        </div>
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
        </div>
    )
}

export default AdminTeacher
