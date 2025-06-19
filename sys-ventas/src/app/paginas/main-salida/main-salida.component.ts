import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SalidaService } from '../../servicio/salida.service';
import { Salida } from '../../modelo/Salida';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MaterialModule} from '../../material/material.module';

@Component({
  selector: 'app-main-salida',
  standalone: true,
  templateUrl: './main-salida.component.html',
  styleUrls: ['./main-salida.component.css'],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    DatePipe,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MaterialModule
  ]
})
export class MainSalidaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'repuesto', 'cantidadSalida', 'solicitante', 'codigo', 'fechaSalida', 'estado', 'accion'];
  dataSource!: MatTableDataSource<Salida>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private salidaService: SalidaService) {}

  ngOnInit(): void {
    this.salidaService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  delete(id: number) {
    this.salidaService.delete(id).subscribe(() => {
      this.salidaService.findAll().subscribe(data => {
        this.dataSource.data = data;
      });
    });
  }
}



