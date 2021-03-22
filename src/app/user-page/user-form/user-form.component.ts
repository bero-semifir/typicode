import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  truc: string = '';

  users: any[] = [];

  form: FormGroup = this.formBuilder.group(
    {
      nom: ['trdfghg'],
      prenom: ['', [Validators.required]],
    }
  );

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.form);
  }

  ajouterUtilisateur(){
    this.users.push(this.form.value);
    console.log(this.users);
    console.log(this.form);
  }

  changeTruc(){
    this.truc = "Poulet";
  }

}
