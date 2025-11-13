import { Component, OnInit } from '@angular/core';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-refuge-list',
  templateUrl: './refuge-list.component.html',
  styleUrls: ['./refuge-list.component.css']
})
export class RefugeListComponent implements OnInit {
  refuges: any[] = [];

  constructor(private refugeService: RefugeService) { }

  ngOnInit(): void {
    this.refugeService.getRefuges().subscribe((data: any[]) => {
      this.refuges = data;
    });
  }
}
