import { Component, OnInit } from '@angular/core';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  constructor(private dataProvider: DataproviderService) { }
  report: string ="";
  ngOnInit(): void {
    this.dataProvider.reportSubject.subscribe( data => {
      this.report += data + "\n";
      console.log(data)
    })
  };
}
