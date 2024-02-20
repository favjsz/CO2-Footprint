import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableData, dataset } from '../data-source';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
emissionData: Array<TableData> = dataset;

}
