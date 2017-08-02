import { Component, OnInit ,ViewChild } from '@angular/core';
import {DataService} from '../../data.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') userform:NgForm;
  



  constructor(private dataservice : DataService) { }

  ngOnInit() {
  }
  
  onsubmit()
  {
    //console.log(data);
    //console.log("this.user");
    //console.log( typeof this.userform.value.dob  );
    //this.dataservice.datadisplay();

    this.dataservice.datainsert({
      name:this.userform.value.name,
      age:this.userform.value.age,
      occupation:this.userform.value.occupation,
      email:this.userform.value.email,
      dob:this.userform.value.dob
    });

  
  }

}
