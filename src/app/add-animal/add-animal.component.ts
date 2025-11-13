import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  animalForm: FormGroup;
  refugeName: string | null = null;

  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.animalForm = this.fb.group({
      nom: ['', Validators.required],
      espece: ['', Validators.required],
      race: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      sexe: ['', Validators.required],
      description: ['', Validators.required],
      photo: ['', Validators.required]
    });
    this.refugeName = '';
  }

  ngOnInit(): void {
    this.refugeName = this.authService.getRefugeName();
  }

  onSubmit(): void {
    if (this.animalForm.valid) {
      const animalData = {
        ...this.animalForm.value,
        refugeName: this.refugeName  // Ajouter le nom du refuge connecté
      };

      this.animalService.addAnimal(animalData).subscribe(response => {
        console.log('animal added', response);
        alert('Animal ajouté avec succès.');
        this.animalForm.reset();
        this.router.navigate(['/adoptionplace']);
      }, error => {
        console.error('error adding animal', error);
        alert("Une erreur est survenue lors de l'ajout de l'animal. Veuillez réessayer.");
      });
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
