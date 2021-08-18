import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-example-forms',
  templateUrl: './example-forms.page.html',
  styleUrls: ['./example-forms.page.scss'],
})
export class ExampleFormsPage implements OnInit {

  form: FormGroup;
  formValue = {};
  formResult = 'No se tiene resultado.'

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.form = this.fb.group({
      name: ['Roberto', Validators.required],
      lastName: ['Canudas', Validators.required]
    })
  }

  submit() {
    if (this.form.valid) {
      this.formValue = this.form.value
      this.formResult = 'Formulario válido';
    } else {
      this.formResult = 'Formulario inválido';
      this.formValue = this.form.value;
    }
  }

}
