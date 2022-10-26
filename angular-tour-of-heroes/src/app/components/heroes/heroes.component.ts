import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
    // this.getUsersPromise();
    this.getUsersPromiseAsync();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
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

}
