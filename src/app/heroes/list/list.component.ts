import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'She Hulk', 'Thor'];
  deletedHero?: string;

  removeLastHero(): void {
    const deletedHero = this.heroNames.pop()
    this.deletedHero = deletedHero;
  }
}
