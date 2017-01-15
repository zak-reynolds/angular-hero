import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

const AllHeroes: Hero[] = [
  { id: 0, name: 'Zeron' },
  { id: 1, name: 'Mondyte' },
  { id: 2, name: 'Binsect' },
  { id: 3, name: 'Triyon' },
  { id: 4, name: 'Qualice' },
  { id: 5, name: 'Pentrak' },
  { id: 6, name: 'Heksnight' },
  { id: 7, name: 'Sepentire' },
  { id: 8, name: 'Octron' },
  { id: 9, name: 'Noin' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Active Heroes</h2>
    <ul class="heroes">
      <li
        *ngFor="let hero of heroes"
        (click)="onSelect(hero)"
        [class.selected] = "hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>Details of {{selectedHero.name}}</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent  {
  title = 'Angular Heroes';
  selectedHero: Hero;
  heroes = AllHeroes;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
