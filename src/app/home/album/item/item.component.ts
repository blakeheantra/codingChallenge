import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { group } from 'src/app/group';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: group;
  @Output() onClickItem = new EventEmitter();

  constructor() {
    
   }

  ngOnInit() {
  }

}
