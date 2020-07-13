import { Component } from '@angular/core';
import {  FormBuilder,Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
get userName()
{
  return this.registrationForm.get('userName');
}
  constructor(private fb:FormBuilder){}
  title = 'angularReactiveForm';
  // registrationForm=new FormGroup({
  //   userName:new FormControl('prapti'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     country:new FormControl('')
  //   })

  // });
  registrationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      country:['']
    })
  })
  loadAPIData()
  {
this.registrationForm.patchValue({
  userName:'bruce',
    password:'kjasd',
    confirmPassword:'kjasd',
    address:{
      city:'hs fd',
      state:'ksjhdfsd',
      country:'kjhad '

}




})
}
}