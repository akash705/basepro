import { Injectable , OnInit} from '@angular/core';
import {usermodel} from './user.model';
import {Router} from '@angular/router';


@Injectable()
export class DataService implements OnInit{

userarray:usermodel [] =[ new usermodel("sample_user",25,"Sample_occupation","SampleEmail","Sample_dob")];


  constructor( private router:Router ) { }

  ngOnInit()
  {
    console.log(this.userarray);
  }

  datadisplay()
  {
    console.log("data is \n");
    console.log(this.userarray);
  }
  datareturn()
  {
    return this.userarray.slice();
  }
  datainsert( recievedata :{name:string,age:number,occupation:string,email:string,dob:string} )
  {
      this.userarray.push(recievedata);
      console.log("wow shit happens");
      //console.log(this.userarray);
      this.router.navigate(['/']);
  }

}
