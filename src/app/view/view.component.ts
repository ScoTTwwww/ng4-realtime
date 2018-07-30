import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild('canvasElement') canvasElement: ElementRef;
  socket: any;
  xxxx: string = ''
  constructor() { 
    this.socket = io('https://5000-dot-4207567-dot-devshell.appspot.com');
  }

  ngOnInit() {
    const self = this;
    const cv = this.canvasElement.nativeElement
    this.socket.on('message', (image)=>{
      cv.src = image.text
      this.xxxx = '66666'
    })
  }

  ngAfterViewInit() {
    
}

}
