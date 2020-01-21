import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-pony-image',
  templateUrl: './pony-image.component.html',
  styleUrls: ['./pony-image.component.css']
})
export class PonyImageComponent implements OnInit {
@Input() src: string;

 
  constructor() { }

  ngOnInit() {
  }
 check() {
      console.log('pony image component view checked');
  }
}