import { Component, OnInit ,ViewChild } from '@angular/core';


import {DataService} from '../../data.service';
import {usermodel} from '../../user.model';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

userarray:usermodel[];

@ViewChild('selecteduser') userselected:ElementRef;
usertoshow:string;
flag:boolean=false;
seluser:string="Akash";

  constructor(private dataservice : DataService) {
    
   }

  ngOnInit() {
      this.userarray = this.dataservice.datareturn();

      //console.log(this.userarray[0].name);
  }

  changed()
  {
    //console.log(this.userselected.nativeElement.value);
    if(this.userselected.nativeElement.value=="select")
      {
        this.flag=false;
      }
      else
        {
          this.flag=true;
          console.log( typeof this.userselected.nativeElement.value);
          this.seluser=this.userselected.nativeElement.value;
          console.log(this.seluser);
          //this.selecteduser = this.userselected.nativeElement.value;
          //console.log("selected user"+this.selecteduser.nativeElement.value );
        }
        console.log(this.flag);

  }


}
