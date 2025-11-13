import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.fb.group({
      refugeName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^(0)?[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      photo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.registerService.addRefuge(this.registerForm.value).subscribe(response => {
        console.log('Refuge added successfully', response);
        alert('Votre compte Refuge a bien été créé. Vous pouvez maintenant vous connecter.');
        this.registerForm.reset();
      }, error => {
        console.error('Error adding refuge', error);
        alert('Erreur lors de l\'ajout du refuge. Veuillez réessayer.');
      });
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
