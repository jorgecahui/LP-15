import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Salida } from '../../../modelo/Salida';
import { SalidaService } from '../../../servicio/salida.service';
import { switchMap } from 'rxjs';

// Angular Material Módulos
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MaterialModule} from '../../../material/material.module';

@Component({
  selector: 'app-form-salida',
  standalone: true,
  templateUrl: './form-salida.component.html',
  styleUrls: ['./form-salida.component.css'],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class FormSalidaComponent implements OnInit {
  form!: FormGroup;
  isEdit: boolean = false;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private salidaService: SalidaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      repuesto: [''],
      cantidadSalida: [0],
      responsable: [''],
      codigo: [''],
      fechaSalida: [new Date()],
      estado: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.isEdit = !!this.id;

      if (this.isEdit) {
        this.initForm();
      }
    });
  }

  initForm() {
    this.salidaService.findById(this.id).subscribe(data => {
      this.form.setValue({
        id: data.id,
        repuesto: data.repuesto,
        cantidadSalida: data.cantidadSalida,
        responsable: data.responsable,
        codigo: data.codigo,
        fechaSalida: new Date(data.fechaSalida),
        estado: data.estado
      });
    });
  }

  guardar() {
    const salida: Salida = this.form.value;

    if (this.isEdit) {
      this.salidaService.update(this.id, salida).subscribe(() => {
        this.salidaService.findAll().subscribe(data => {
          this.salidaService.setEntidadChange(data);
          this.salidaService.setMessageChange('Actualizado correctamente');
        });
      });
    } else {
      this.salidaService.save(salida)
        .pipe(switchMap(() => this.salidaService.findAll()))
        .subscribe(data => {
          this.salidaService.setEntidadChange(data);
          this.salidaService.setMessageChange('Creado correctamente');
        });
    }

    this.router.navigate(['/pages/salida']);
  }
}



