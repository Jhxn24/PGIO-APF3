import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-solicitudes',
  imports: [CommonModule],
  templateUrl: './lista-solicitudes.html',
  styleUrl: './lista-solicitudes.scss',
})
export class ListaSolicitudes implements OnInit {
  listaSolicitudes: any[] = [];

  ngOnInit() : void{
    this.listaSolicitudes = JSON.parse(localStorage.getItem('misSolicitudes') || '[]');
  }

}
