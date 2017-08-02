import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {usermodel} from '../../user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userarray:usermodel[];

  constructor(private dataservice : DataService) { }
 
  ngOnInit() {
    this.userarray=this.dataservice.datareturn();
  }

}
