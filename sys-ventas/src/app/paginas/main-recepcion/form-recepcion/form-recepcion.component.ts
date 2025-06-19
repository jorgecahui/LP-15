import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recepcion } from '../../../modelo/Recepcion';
import { RecepcionService } from '../../../servicio/recepcion.service';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../material/material.module';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';

@Component({
  selector: 'app-form-recepcion',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker
  ],
  templateUrl: './form-recepcion.component.html',
  styleUrls: ['./form-recepcion.component.css']
})
export class FormRecepcionComponent implements OnInit {
  form!: FormGroup;
  isEdit: boolean = false;
  id!: number;

  constructor(
    private recepcionService: RecepcionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      repuesto: new FormControl('', [Validators.required]),
      cantidadRecibida: new FormControl(0, [Validators.required]),
      proveedor: new FormControl('', [Validators.required]),
      codigo: new FormControl('', [Validators.required]),
      fechaRecepcion: new FormControl(new Date(), [Validators.required]),
      estado: new FormControl('', [Validators.required])
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
    this.recepcionService.findById(this.id).subscribe((data: Recepcion) => {
      this.form.setValue({
        id: data.id,
        repuesto: data.repuesto,
        cantidadRecibida: data.cantidadRecibida,
        proveedor: data.proveedor,
        codigo: data.codigo,
        fechaRecepcion: new Date(data.fechaRecepcion),
        estado: data.estado
      });
    });
  }

  operate() {
    const recepcion: Recepcion = this.form.value;

    if (this.isEdit) {
      this.recepcionService.update(this.id, recepcion).pipe(
        switchMap(() => this.recepcionService.findAll())
      ).subscribe((data: Recepcion[]) => {
        this.recepcionService.setEntidadChange(data);
        this.recepcionService.setMessageChange('Actualizado correctamente');
      });
    } else {
      this.recepcionService.save(recepcion).pipe(
        switchMap(() => this.recepcionService.findAll())
      ).subscribe((data: Recepcion[]) => {
        this.recepcionService.setEntidadChange(data);
        this.recepcionService.setMessageChange('Creado correctamente');
      });
    }

    this.router.navigate(['/pages/recepcion']);
  }

  get f() {
    return this.form.controls;
  }
}
