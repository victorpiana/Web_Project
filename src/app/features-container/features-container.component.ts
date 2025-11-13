import { Component } from '@angular/core';

@Component({
  selector: 'app-features-container',
  templateUrl: './features-container.component.html',
  styleUrls: ['./features-container.component.css']
})
export class FeaturesContainerComponent {
  animauxmenu = [
    {
      especes: 'Chat',
      name: 'chats',
      description: 'Grand classique des animaux de compagnie, autonomes et indépendants mais aussi joueur.',
      image: "https://ohbellachat.com/wp-content/uploads/2022/10/cat-pet-animals-6463284-1024x686.jpg.webp"
    },
    {
      especes: 'Chien',
      name: 'Chiens',
      description: 'Le meilleur ami de l\'homme, fidèle et protecteur.',
      image: "https://img.20mn.fr/2c2xoZqdQhu84Dmhb8ci9Sk/1444x920_le-berger-australien-est-le-chien-prefere-des-francais"
    },
    {
      especes: 'Furet',
      name: 'Furets',
      description: 'Petit animal de compagnie très joueur et curieux.',
      image: "https://www.club-furet.fr/wp-content/uploads/2021/05/mustelides.jpg"
    },
    {
      
      name: 'Lapins',
      description: 'Animal de compagnie très doux et affectueux.',
      image: "https://www.zooplus.fr/magazine/wp-content/uploads/2021/10/AdobeStock_158340480-768x549-1.jpeg"
    },
    {
      name: 'Oiseaux',
      description: 'Animal de compagnie très agréable à regarder et à écouter.',
      image: "https://jardinage.lemonde.fr/images/dossiers/2019-10/mini/cacatoes-1-094128-650-325.jpg"
    },
    {
      name: 'Poissons',
      description: 'Animal de compagnie très relaxant et apaisant.',
      image: "https://www.oobaooba.fr/img/post/22.jpg"
    },
    {
      name: 'Reptiles',
      description: 'Animal de compagnie très calme et discret. ne convient pas à tout le monde.',
      image: "https://lemagdesanimaux.ouest-france.fr/images/dossiers/2019-02/mini/dragon-barbu-110546-650-400.jpg"
    }
    
  ];

  // currentSlide = 0;

  // prevSlide() {
  //   this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.animals.length - 1;
  //   this.updateSlidePosition();
  // }

  // nextSlide() {
  //   this.currentSlide = (this.currentSlide < this.animals.length - 1) ? this.currentSlide + 1 : 0;
  //   this.updateSlidePosition();
  // }

  // updateSlidePosition() {
  //   const slides = document.querySelector('.animal-slides') as HTMLElement;
  //   slides.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  // }
}