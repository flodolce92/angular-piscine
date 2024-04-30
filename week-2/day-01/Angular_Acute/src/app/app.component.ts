import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Acute';

  catTitle = 'Felis catus';
  catSubtitle = 'Domestic Cat';
  catDescription = `
    The cat (Felis catus) is a domestic species of small carnivorous mammal.
    It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.
    A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.
    Domestic cats are valued by humans for companionship and their ability to hunt rodents.
    About 60 cat breeds are recognized by various cat registries.`
  catImage = 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg';

  dogTitle = 'Shiba Inu';
  dogSubtitle = 'Dog Breed';
  dogDescription = `
    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  dogImage = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  cardTitle = this.dogTitle;
  cardSubtitle = this.dogSubtitle;
  cardDescription = this.dogDescription;
  cardImage = this.dogImage;

  showCat() {
    this.cardTitle = this.catTitle;
    this.cardSubtitle = this.catSubtitle;
    this.cardDescription = this.catDescription;
    this.cardImage = this.catImage;
  }

  showDog() {
    this.cardTitle = this.dogTitle;
    this.cardSubtitle = this.dogSubtitle;
    this.cardDescription = this.dogDescription;
    this.cardImage = this.dogImage;
  }
}
