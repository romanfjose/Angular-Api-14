import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona.model';
import { PersonService } from 'src/app/services/person.service';


interface Test {
  nombre: string;
  direccion?: {
   calle: string;
   nro: number;
 }
}
@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit, OnDestroy, AfterViewInit {

  persons: Persona[] = [];


  test: Test = {
    nombre: '',
    direccion : {
      calle: 'aaa',
      nro: 111
    }
  }

  private subscription: Subscription | undefined;

  constructor(
    private personsService: PersonService
  ) {
    console.log('HOOKS - CONSTRUCTOR');
  }

  ngOnInit(): void {

    this.subscription = this.personsService.getList().subscribe(
      persons => persons = this.persons = persons
    );
    console.log('HOOKS - ON INIT');

    if (this.test.direccion) {
      const direccion = this.test.direccion;
      direccion.nro = 123;
    }
  }

  ngAfterViewInit() {
    // const lastElement: any = document.querySelector('.last-element');
    // lastElement.scrollIntoView();

    // console.log('HOOKS - AFTER VIEW INIT');
  }

  selectedPerson(person: Persona) {
    this.personsService.getById(String(person.id)).subscribe(
      data => console.log(data)
    );
  }

  ngOnDestroy(): void {

    this.subscription?.unsubscribe();

    console.log('HOOKS - ON DESTROY');
  }

}
