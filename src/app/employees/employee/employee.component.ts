import { Component, OnInit, Optional } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public infoForm: FormGroup;
  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.resetForm();
    // this.creatForm();
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null) {
      this.employeeService.insertEmployee(employeeForm.value);
    } else {
      this.employeeService.updateEmployee(employeeForm.value);
    }
    this.resetForm(employeeForm);
    alert('submitted Succefully!');
    // this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) {
      employeeForm.reset();
    }
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

  // creatForm() {
  //   this.infoForm = this.fb.group({
  //     name: [''],
  //     position: [''],
  //     Office: [''],
  //     Salary: [''],
  //   });
  // }
  // submitForm(infoForm) {
  //   console.log('infoForm', infoForm);
  // }

}
