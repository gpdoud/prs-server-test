import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.class';
import { SystemService } from 'src/app/services/system.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-controller-test',
  templateUrl: './user-controller-test.component.html',
  styleUrls: ['./user-controller-test.component.css']
})
export class UserControllerTestComponent implements OnInit {

  users: User[] = [];
  newUser: User;
  btnStatusSuccess: string = "btn btn-success";
  btnStatusFailure: string = "btn btn-danger";
  btnStatusReady: string = "btn btn-secondary";
  btnInsert: string = this.btnStatusReady;
  btnUpdate: string = this.btnStatusReady;
  btnDelete: string = this.btnStatusReady;
  btnList: string = this.btnStatusReady;
  btnGet: string = this.btnStatusReady;
  btnLogin: string = this.btnStatusReady;

  constructor(
    private sys: SystemService,
    private usr: UserService
  ) { }

  testLogin(): void {
    this.usr.login(this.newUser.username, this.newUser.password).subscribe(
      res => { console.debug("Login:", res); this.btnInsert = this.btnStatusSuccess; }
      ,err => { console.error(err); this.btnInsert = this.btnStatusFailure;}
    );
  }
  testInsert(): void {
    this.newUser = new User();
    this.newUser.username = "TEST" + Math.floor(Math.random() * 10000);
    this.usr.create(this.newUser).subscribe(
      res => { this.newUser = res; console.debug("Insert:", res); this.btnInsert = this.btnStatusSuccess; }
      ,err => { console.error(err); this.btnInsert = this.btnStatusFailure; }
    );
  }
  testUpdate(): void {
    this.newUser.username = "TEST" + Math.floor(Math.random() * 10000);
    this.usr.change(this.newUser).subscribe(
      res => { console.debug("Update:", res); this.btnUpdate = this.btnStatusSuccess;}
      ,err => { console.error(err); this.btnUpdate = this.btnStatusFailure; }
    );
  }
  testDelete(): void {
    this.newUser.username = "TEST" + Math.floor(Math.random() * 10000);
    this.usr.remove(this.newUser.id).subscribe(
      res => { this.newUser = null; console.debug("Delete:", res); this.btnDelete = this.btnStatusSuccess;}
      ,err => { console.error(err); this.btnDelete = this.btnStatusFailure; }
    );
  }
  testList(): void {
    this.usr.list().subscribe(
      res => { this.users = res; console.debug("List:", res); this.btnList = this.btnStatusSuccess; }
      ,err => { console.error(err); this.btnList = this.btnStatusFailure; }
    );
  }
  testGet(): void {
    this.usr.get(this.newUser.id).subscribe(
      res => { console.debug("Get:", res); this.btnGet = this.btnStatusSuccess;}
      ,err => { console.error(err); this.btnGet = this.btnStatusFailure; }
    );
  }

  ngOnInit(): void {
  }

}
