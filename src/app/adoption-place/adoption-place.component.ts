import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-adoption-place',
  templateUrl: './adoption-place.component.html',
  styleUrls: ['./adoption-place.component.css'],
  providers: [AnimalService]
})
export class AdoptionPlaceComponent implements OnInit {
  animals: any[] = [];
  speciesList: string[] = [];
  refugesList: string[] = [];
  filters: any = {
    species: '',
    refugeName: '',
    age: null,
    sex: ''
  };

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    this.speciesList = ['Furet', 'Perroquet', 'Chat', 'Lapin', 'Poisson Rouge', 'Chien']; // Ajoutez d'autres espèces ici
    this.refugesList = ['Le Havre de Paix', 'L\'Arche de Noé', 'Le Refuge des Animaux', 'Refuge de la Vallée', 'Le Petit Refuge', 'Refuge de la Mer', 'L\'Asile des Animaux', 'La Maison des Animaux', 'Le Refuge Ensoleillé', 'Refuge de la Forêt', 'L\'Étoile Animale']; // Ajoutez d'autres refuges ici

    // Récupérez les paramètres de l'URL et appliquez-les aux filtres par défaut
    this.route.paramMap.subscribe(params => {
      const species = params.get('espece');
      if (species) {
        this.filters.species = species;
      }
      this.loadAnimals();
    });
  }

  loadAnimals(): void {
    const filters = this.filters;
    this.animalService.getAnimalsWithFilters(filters).subscribe((data: any[]) => {
      this.animals = data;
    });
  }

  applyFilters(): void {
    this.loadAnimals();
  }
}