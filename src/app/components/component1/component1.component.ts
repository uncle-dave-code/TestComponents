import { Component, OnInit } from '@angular/core';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  constructor(private dataProvider: DataproviderService) { }

  ngOnInit(): void {

  }

  refreshReport() {
    this.dataProvider.refreshReport();
  }

}
