import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableData, dataset } from '../data-source';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { ViewChild} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppComponent,
    AppModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    TranslateModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

  displayedColumns: string[] = ['country', 
                                'company', 
                                'emissionThisYear', 
                                'emissionLastYear',
                                'tendency',
                                'emissionInTotal' 
                              ];

  dataSource: MatTableDataSource<TableData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Zuweisung der Daten für die zu rendernde Tabelle
    this.dataSource = new MatTableDataSource(dataset);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


