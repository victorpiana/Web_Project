import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
  animal: any = null;
  refuge: any = null;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private refugeService : RefugeService
  ) { }

  ngOnInit(): void {
    const animalId = this.route.snapshot.paramMap.get('id');
    if (animalId !== null) {
      this.animalService.getAnimalById(+animalId).subscribe(data => {
        this.animal = data;
        if(this.animal && this.animal.refugeName) {
          this.refugeService.getRefugeByName(this.animal.refugeName).subscribe((refugeData: any[]) => {
            this.refuge = refugeData[0];
            if (this.refuge && this.refuge.address) {
              this.refuge.addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.refuge.address)}`;
            }
          });
        }
      });
    } else {
      console.error('id null');
    }
  }
}
