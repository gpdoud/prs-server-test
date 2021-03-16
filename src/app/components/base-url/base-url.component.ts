import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-base-url',
  templateUrl: './base-url.component.html',
  styleUrls: ['./base-url.component.css']
})
export class BaseUrlComponent implements OnInit {

  baseurl: string;
  portNbr: number = 5000;

  constructor(
    private sys: SystemService
  ) {}

  save(): void {
    this.sys.setBaseurl(this.portNbr);
    this.baseurl = this.sys.baseurl;
    console.debug("Base url:", this.baseurl);
  }
  
  ngOnInit(): void {
  }

}
