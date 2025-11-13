import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password).subscribe(isValid => {
        if (isValid) {
          console.log('login réussi');
          //alert('Connexion réussie. Bienvenue !');
          this.router.navigate(['/dashboard']).then(()=>{window.location.reload();});
        } else {
          console.log('invalide');
          alert('Identifiants incorrects. Veuillez réessayer.');
        }
      }, error => {
        console.error('Error during login', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
