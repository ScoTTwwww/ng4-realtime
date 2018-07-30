import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-emit',
  templateUrl: './emit.component.html',
  styleUrls: ['./emit.component.css']
})
export class EmitComponent implements OnInit {
  @ViewChild('videoElement') videoElement: ElementRef;
  @ViewChild('canvasElement') canvasElement: ElementRef;
  socket: any;
  constructor() {
    this.socket = io('http://localhost:5000');
  }

  ngOnInit() {

    this.video()
  }

  viewVideo(video, context) {
    const canvas = this.canvasElement.nativeElement
    context.drawImage(video, 0, 0, context.width, context.height);
    //    canvas2[0].toDataURL
    this.socket.emit('message', canvas.toDataURL('image/webp'));

  }

  video() {
    const canvas = this.canvasElement.nativeElement
    var context = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;
    context['width'] = canvas.width;
    context['height'] = canvas.height;
    const video = this.videoElement.nativeElement
    var constraints = {
      audio: true,
      video: {
        facingMode: 'user'
      }
    }

    const self = this
    navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {

      video.src = window.URL.createObjectURL(stream);

    })

    setInterval(function () {
      self.viewVideo(video, context);
    }, 30);
  }
}
