import { Component, OnInit } from '@angular/core';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dataProvider: DataproviderService) { }

  ngOnInit(): void {

  }

}
