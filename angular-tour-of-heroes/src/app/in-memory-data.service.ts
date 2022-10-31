import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', typeId: 1 },
      { id: 13, name: 'Bombasto' , typeId: 1 },
      { id: 14, name: 'Celeritas', typeId: 1 },
      { id: 15, name: 'Magneta', typeId: 1 },
      { id: 16, name: 'RubberMan', typeId: 1 },
      { id: 17, name: 'Dynama', typeId: 1 },
      { id: 18, name: 'Dr. IQ', typeId: 1 },
      { id: 19, name: 'Magma', typeId: 1 },
      { id: 20, name: 'Tornado', typeId: 1 }
    ];
    const toDos = [
      { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
      { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false },
      { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
      { userId: 2, id: 21, title: 'suscipit repellat esse quibusdam voluptatem incidunt', completed: false },
      { userId: 2, id: 22, title: 'distinctio vitae autem nihil ut molestias quo', completed: true },
      { userId: 2, id: 23, title: 'et itaque necessitatibus maxime molestiae qui quas velit', completed: false },
      { userId: 3, id: 41, title: 'aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit', completed: false },
      { userId: 3, id: 42, title: 'rerum perferendis error quia ut eveniet', completed: false },
      { userId: 3, id: 43, title: 'tempore ut sint quis recusandae', completed: true },
      { userId: 4, id: 61, title: 'odit optio omnis qui sunt', completed: true },
    ];
    const users = [
      { id: 1, name: 'Leanne Graham', username: 'Bret', phone: '1-770-736-8031 x56442' },
      { id: 2, name: 'Ervin Howell', username: 'Antonette', phone: '010-692-6593 x09125' },
      { id: 3, name: 'Clementine Bauch', username: 'Samantha', phone: '1-463-123-4447' },
      { id: 4, name: 'Patricia Lebsack', username: 'Karianne', phone: '493-170-9623 x156' },
      { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', phone: '(254)954-1289' },
    ];
    
    return {
      heroes,
      toDos,
      users
    };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}