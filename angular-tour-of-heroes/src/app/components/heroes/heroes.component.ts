import { Component, OnInit, TypeProvider } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { heroTypeNames } from '../../constants/hero.constants';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;
  users: User[];
  heroTypeNames = heroTypeNames;

  constructor(
    private userService: UserService, 
    private heroService: HeroService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    // this.getUsers();
    // this.getUsersPromise();
    this.getUsersPromiseAsync();
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => 
    this.heroes = heroes);
  }

  // getUsers(): void {
  //   this.userService.getUsers().subscribe(data => {
  //     this.users = data;
  //   });
  // }

  // getUsersPromise(): void {
  //   this.userService.getUsersPromise().then(data => {
  //     this.users = data;
  //   });
  // }

  async getUsersPromiseAsync(): Promise<void> {
    this.users = await this.userService.getUsersPromiseAsync();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
