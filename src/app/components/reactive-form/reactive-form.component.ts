import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona.model';
import { PersonService } from 'src/app/services/person.service';
import { PersonaListComponent } from '../persona-list/persona-list.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, AfterViewInit {

  personas: Persona[] = [];

  personaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl(''),
    edad: new FormControl('')
  });

  nombreControl = this.personaForm.controls['nombre'];
  selectedPersona: Persona = { nombre: '', apellido: '' };

  @ViewChild(PersonaListComponent) personaList: any;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getList()
      .subscribe(
        personas => this.personas = personas
      );

    //this.personaForm.valueChanges.subscribe(values => console.log('value changes', values));
    this.personaForm.controls['nombre'].valueChanges.subscribe(values => console.log('value changes', values));
  }

  ngAfterViewInit() {
    setTimeout(() => this.personaList.selectedPersona = this.personas[1], 0);
  }

  guardar() {
    console.log(this.personaForm.value);
    this.selectedPersona = this.personaForm.value;
  }

  personaSelected(persona: Persona) {
    this.selectedPersona = persona;
    this.personaForm.setValue(persona);
  }
}
