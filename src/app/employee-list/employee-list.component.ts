import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface EmployeeListModel {
  employeeId: string;
  name: string;
  designation: string;
  location: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  employeeFormGroup !: FormGroup;

  employeeList: EmployeeListModel[] = [
    {
      employeeId: "E001",
      name: "Alice Johnson",
      designation: "Software Engineer",
      location: "New York"
    },
    {
      employeeId: "E002",
      name: "Bob Smith",
      designation: "Project Manager",
      location: "San Francisco"
    },
    {
      employeeId: "E003",
      name: "Charlie Brown",
      designation: "UX Designer",
      location: "Los Angeles"
    },
    {
      employeeId: "E004",
      name: "Diana Prince",
      designation: "Quality Assurance",
      location: "Chicago"
    },
    {
      employeeId: "E005",
      name: "Ethan Hunt",
      designation: "DevOps Engineer",
      location: "Seattle"
    }
  ];

  displayedColumns: string[] = ['employeeId', 'name', 'designation', 'location', 'actions'];
  dataSource = new MatTableDataSource<EmployeeListModel>();
  isEditing: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.employeeFormGroup = this.fb.group({
      employeeId: [''],
      name: [''],
      designation: [''],
      location: ['']
    });
    this.dataSource = new MatTableDataSource(this.employeeList);
  }

  addingRecord() {
    const newEmployee: EmployeeListModel = { employeeId: 'E006', name: 'New Employee', designation: 'New Role', location: 'New Location' };
    this.startEdit(newEmployee);
  }

  startEdit(employee: EmployeeListModel) {
    this.isEditing[employee.employeeId] = true;
    this.employeeFormGroup.setValue(employee);
    this.dataSource.data.push(employee);
     this.dataSource.data = this.dataSource.data;
  }

  edit(data: EmployeeListModel): void {

  }

  delete(data: EmployeeListModel): void {
    this.dataSource.data = this.dataSource.data.filter((x) => x.employeeId !== data.employeeId);
  }

  saveEditedData(data: EmployeeListModel): void {

  }

  cancel(data: EmployeeListModel) {

  }

  consoleLog(){
    console.log("table data" , this.dataSource.data);
    
  }
}
