import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Router, RouterModule} from '@angular/router';
import { Recepcion } from '../../modelo/Recepcion';
import { RecepcionService } from '../../servicio/recepcion.service';
import {DatePipe} from '@angular/common';
import {MatFormField} from '@angular/material/input';
import {MaterialModule} from '../../material/material.module';

@Component({
  selector: 'app-main-recepcion',
  templateUrl: './main-recepcion.component.html',
  imports: [
    MatFormField,
    RouterModule,
    MaterialModule,
    DatePipe
  ],
  styleUrls: ['./main-recepcion.component.css']
})
export class MainRecepcionComponent implements OnInit {

  displayedColumns: string[] = ['id', 'repuesto', 'cantidadRecibida', 'proveedor', 'codigo', 'fechaRecepcion', 'estado', 'accion'];
  dataSource!: MatTableDataSource<Recepcion>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private recepcionService: RecepcionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recepcionService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getDisplayedColumns() {
    return this.displayedColumns;
  }

  delete(id: number) {
    this.recepcionService.delete(id).subscribe(() => {
      this.recepcionService.findAll().subscribe(data => {
        this.dataSource.data = data;
      });
    });
  }
}


