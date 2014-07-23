<?php $this->load->view('templates/header'); ?>
    
    
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/ui/1.11.0/jquery-ui.js"></script>

  <style type="text/css">
    .ui-dialog {
        display:none;
    }

    #new-dept-input {
        width:100%;
    }
  </style>

<div id="add-new-department-dialog" class="ui-dialog" title="Add New Department"> 
    <input id="new-dept-input" type="text"/>
</div>

<script type="text/javascript">
    var ajax = "<?php echo site_url(). 'index.php/ajax/department_ajax/'; ?>";

    $(document).ready(function() {

        function addNewDepartment() {
            
            $("#add-new-department-dialog").dialog({
                modal:true,
                width:500,
                buttons: {
                    Add: function() {
                        var new_dept = $("#new-dept-input").val();

                        $.post(ajax + "addDepartment", {new_dept: new_dept}, function(response){
                            location.reload();
                        });

                        $(this).dialog("close");
                    },
                    Cancel: function() {
                        $(this).dialog("close");
                    }
                }
            });

        }

        $(document).on("click", "#add-new-dept", function() {
            addNewDepartment();
        });

        $(document).on("click", "#edit", function() {
            alert("edit");
        });

        $(document).on("click", "#archieve", function() {
            alert("archieve");
        });

        $(document).on("keydown", "#search", function() {
            var search_key = $("#search").val();

            $.post(ajax + "search_department", {key: search_key}, function(response) {
                $("tbody").html("");
                $("tbody").append(response);
            });
        });

    });
</script>
<!-- CSS -->
<!-- END CSS -->
    <div class="wrapper row-offcanvas row-offcanvas-left">
            <!-- Left side column. contains the logo and sidebar -->
            <aside class="left-side sidebar-offcanvas">                
                <!-- sidebar: style can be found in sidebar.less -->
                <section class="sidebar">
                    <!-- Sidebar user panel -->
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="<?php echo site_url('assets/img/face.png')?>" class="img-circle" alt="User Image" />
                        </div>
                        <div class="pull-left info">
                            <p>Hello, Eric</p>
                        </div>
                    </div>
                    <!-- search form -->
                    <!--<form action="#" method="get" class="sidebar-form">
                        <div class="input-group">
                            <input type="text" name="q" class="form-control" placeholder="Search..."/>
                            <span class="input-group-btn">
                                <button type='submit' name='seach' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>
                            </span>
                        </div>
                    </form>-->
                    <!-- /.search form -->
                    <!-- sidebar menu: : style can be found in sidebar.less -->
                    <ul class="sidebar-menu">
                        <li>
                            <a href="<?php echo site_url(); ?>">
                                <i class="fa fa-home"></i> <span>Home</span>
                            </a>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-user"></i>
                                <span>Profile</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>My Profile</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>View Payslip</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-users"></i>
                                <span>Employees</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Employee List</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Add Employee</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Edit Employee</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-money"></i>
                                <span>Payslip</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Print Payslip</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Edit Payroll</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-plane"></i>
                                <span>Leave</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Apply Leave</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Leave Statistics</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Leave List</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-gavel"></i>
                                <span>Infractions</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Add Infraction</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Infractions List</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <!-- /.sidebar -->
            </aside>

            <!-- Right side column. Contains the navbar and content of the page -->
            <aside class="right-side">                
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    <h1>
                      Departments
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
                        <li><a href="#"><i class="fa fa-sitemap"></i> Department</a></li>
                    </ol>
                </section>

                <!-- Main content -->
                <section class="content">
                    
                    <!-- Announcement -->
                    <div class="row">
                        <div class="col-md-12">
                            <!-- TO DO List -->
                            <div class="box box-primary">
                                <div class="box-header">
                                </div><!-- /.box-header -->
                                <div class="box-body table-responsive">
                                    <div id="example1_wrapper" class="dataTables_wrapper form-inline" role="grid">
                                        <div class="row"><div class="col-xs-6"><div id="example1_length" class="dataTables_length">
                                            <label><select size="1" name="example1_length" aria-controls="example1">
                                                <option value="10" selected="selected">10</option><option value="25">25</option>
                                                <option value="50">50</option><option value="100">100</option></select> records per page</label>
                                            </div></div><div class="col-xs-6"><div class="dataTables_filter" id="example1_filter">
                                            <label>Search: <input id="search" type="text" aria-controls="example1"></label>
                                            <button id="add-new-dept">Add New Department</button>
                                            </div></div></div>
                                            <table id="example1" class="table table-bordered table-striped dataTable" aria-describedby="example1_info">
                                        

                                        <thead>
                                            <tr role="row">
                                                <th class="sorting_asc" role="columnheader" tabindex="0" 
                                                aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" 
                                                aria-label="Rendering engine: activate to sort column descending" 
                                                style="width: 232px;">Department</th>
                                                <th class="sorting" role="columnheader" tabindex="0" aria-controls="example1" 
                                                rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" 
                                                style="width: 348px;">Manager</th><th class="sorting" role="columnheader" 
                                                tabindex="0" aria-controls="example1" rowspan="1" colspan="1" 
                                                aria-label="Platform(s): activate to sort column ascending" 
                                                style="width: 301px;">Employee</th><th class="sorting" role="columnheader" 
                                                tabindex="0" aria-controls="example1" rowspan="1" colspan="1" 
                                                aria-label="Engine version: activate to sort column ascending" 
                                                style="width: 200px;">Action</th><!--<th class="sorting" 
                                                role="columnheader" tabindex="0" aria-controls="example1" 
                                                rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending" 
                                                style="width: 141px;">CSS grade</th></tr>-->
                                        </thead>
                                        
                                        <!--<tfoot>
                                            <tr><th rowspan="1" colspan="1">Rendering engine</th><th rowspan="1" colspan="1">Browser</th><th rowspan="1" colspan="1">Platform(s)</th><th rowspan="1" colspan="1">Engine version</th><th rowspan="1" colspan="1">CSS grade</th></tr>
                                        </tfoot> -->
                                    <tbody role="alert" aria-live="polite" aria-relevant="all">
                                            <?php foreach($department_list as $value): ?>
                                                <tr>
                                                    <td><?php echo $value->department_name; ?></td>
                                                    <td> </td>
                                                    <td> </td>
                                                    <td>
                                                        <a id="archieve" href="#"><img src="<?php echo site_url("assets/img/garbage.gif"); ?>"></a>
                                                        <a id="edit" href="#"><img src="<?php echo site_url("assets/img/edit.gif"); ?>"></a>
                                                    </td>
                                                </tr>
                                            <?php endforeach; ?>
                                            <!--
                                            <tr class="odd">
                                                <td class=" sorting_1">Gecko</td>
                                                <td class=" ">Firefox 1.0</td>
                                                <td class=" ">Win 98+ / OSX.2+</td>
                                                <td class=" ">1.7</td>
                                                <td class=" ">A</td>
                                            </tr><tr class="even">
                                                <td class=" sorting_1">Gecko</td>
                                                <td class=" ">Firefox 1.5</td>
                                                <td class=" ">Win 98+ / OSX.2+</td>
                                                <td class=" ">1.8</td>
                                                <td class=" ">A</td>
                                            </tr><tr class="odd">
                                                <td class=" sorting_1">Gecko</td>
                                                <td class=" ">Firefox 2.0</td>
                                                <td class=" ">Win 98+ / OSX.2+</td>
                                                <td class=" ">1.8</td>
                                                <td class=" ">A</td>
                                            </tr><tr class="even">
                                                <td class=" sorting_1">Gecko</td>
                                                <td class=" ">Firefox 3.0</td>
                                                <td class=" ">Win 2k+ / OSX.3+</td>
                                                <td class=" ">1.9</td>
                                                <td class=" ">A</td>
                                            </tr><tr class="odd">
                                                <td class=" sorting_1">Gecko</td>
                                                <td class=" ">Camino 1.0</td>
                                                <td class=" ">OSX.2+</td>
                                                <td class=" ">1.8</td>
                                                <td class=" ">A</td>
                                            </tr><tr class="even">
                                                <td class=" sorting_1">Gecko</td>
                                                <td class=" ">Camino 1.5</td>
                                                <td class=" ">OSX.3+</td>
                                                <td class=" ">1.8</td>
                                                <td class=" ">A</td>
                                            </tr><tr class="odd">
                                                <td class=" sorting_1">Gecko</td>
                                                <td class=" ">Netscape 7.2</td>
                                                <td class=" ">Win 95+ / Mac OS 8.6-9.2</td>
                                                <td class=" ">1.7</td>
                                                <td class=" ">A</td>
                                            </tr><tr class="even">
                                                <td class=" sorting_1">Gecko</td>
                                                <td class=" ">Netscape Browser 8</td>
                                                <td class=" ">Win 98SE+</td>
                                                <td class=" ">1.7</td>
                                                <td class=" ">A</td>
                                            </tr><tr class="odd">
                                                <td class=" sorting_1">Gecko</td>
                                                <td class=" ">Netscape Navigator 9</td>
                                                <td class=" ">Win 98+ / OSX.2+</td>
                                                <td class=" ">1.8</td>
                                                <td class=" ">A</td>
                                            </tr><tr class="even">
                                                <td class=" sorting_1">Gecko</td>
                                                <td class=" ">Mozilla 1.0</td>
                                                <td class=" ">Win 95+ / OSX.1+</td>
                                                <td class=" ">1</td>
                                                <td class=" ">A</td>
                                            </tr>
                                            -->
                                        </tbody></table><div class="row"><div class="col-xs-6"><div class="dataTables_info" id="example1_info">Showing 1 to 10 of 57 entries</div></div><div class="col-xs-6"><div class="dataTables_paginate paging_bootstrap"><ul class="pagination"><li class="prev disabled"><a href="#">← Previous</a></li><li class="active"><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li class="next"><a href="#">Next → </a></li></ul></div></div></div></div>
                                </div><!-- /.box-body -->
                                <div class="box-footer clearfix no-border">
                                    <button class="btn btn-default pull-right " data-toggle="modal" data-target="#department-modal">
                                      <i class="fa fa-sitemap"></i> Add Department
                                    </button>
                                </div>
                            </div><!-- /.box -->
                            <!-- End Announcement -->
                        </div>
                    </div><!-- /.row -->  
                    

                </section><!-- /.content -->
            </aside><!-- /.right-side -->
            
        </div><!-- ./wrapper -->
        
        <!-- ADD ANNOUNCEMENT MODAL -->
        <div class="modal fade" id="department-modal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title"><i class="fa fa-sitemap"></i> Add Department</h4>
                    </div>
                    <form action="#" method="post">
                        <div class="modal-body">
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">Department Name:</span>
                                    <input name="department_name" type="text" class="form-control" placeholder="Department">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                      Manager:
                                    </span>
                                    <input type="text" class="form-control pull-right" id="manager_name"/>
                                    <!--- use this for autocomplete? or other http://www.devbridge.com/sourcery/components/jquery-autocomplete/ -->
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer clearfix">

                            <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-times"></i> Discard</button>

                            <button type="submit" class="btn btn-primary pull-left"><i class="fa fa-sitemap"></i> Save Department</button>
                        </div>
                    </form>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
       
        <!-- SCRIPTS -->
        <!-- I did this like this because I wanted to. LOL - ERIC -->
        <!-- END SCRIPTS -->
<?php $this->load->view('templates/footer'); ?>