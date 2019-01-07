import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {


  @Input() images: any = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  noWrapSlides = true;

  constructor() {
  }

  ngOnInit() {
  }


}
