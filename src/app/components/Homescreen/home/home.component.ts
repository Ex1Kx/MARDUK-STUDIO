// Angular Imports //
import { Component, OnInit } from '@angular/core';
// Services Imports //
import { JSLOADERService } from 'src/app/Services/JSLOADER/jsloader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // Services //
    private JSLOAD:JSLOADERService
  ) {
    JSLOAD.Charge(["home"]);
    JSLOAD.Charge(["scroll"]);
   }

  ngOnInit(): void {

  }

}
