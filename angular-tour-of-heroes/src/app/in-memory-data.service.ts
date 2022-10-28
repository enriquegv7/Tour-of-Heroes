import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const heroes = [
      { id: 12, name: 'Dr. Nice', typeId: 1 },
      { id: 13, name: 'Bombasto' , typeId: 1},
      { id: 14, name: 'Celeritas', typeId: 1 },
      { id: 15, name: 'Magneta', typeId: 1 },
      { id: 16, name: 'RubberMan', typeId: 1 },
      { id: 17, name: 'Dynama', typeId: 1 },
      { id: 18, name: 'Dr. IQ', typeId: 1 },
      { id: 19, name: 'Magma', typeId: 1 },
      { id: 20, name: 'Tornado', typeId: 1 }
    ];
    return {
      users,
      heroes
    };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}