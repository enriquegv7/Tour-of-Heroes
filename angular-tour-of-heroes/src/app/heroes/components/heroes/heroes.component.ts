import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from 'src/app/shared/services/hero.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { Hero } from '../../models/hero.model';
import { User } from '../../models/user.model';
import { UserService } from '../../../shared/services/user.service';
import { heroTypeNames } from '../../constants/hero.constants';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  @ViewChild('createHeroForm') createHeroForm: NgForm;

  heroes: Hero[] = [];
  name = 'hero';
  users: User[];
  newHero = new Hero();
  submitted = false;
  
  constructor(
    private userService: UserService, 
    private heroService: HeroService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    // this.getUsers();
    // this.getUsersPromise();
    this.getUsersPromiseAsync();
    this.getHeroes();
  }

  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => 
    this.heroes = heroes);
    console.log(this.heroes);
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

  onSubmitHero(): void{
    this.add(this.newHero.name);
    this.createHeroForm.resetForm();
  }

}
