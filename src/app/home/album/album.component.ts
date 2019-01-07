import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { group } from '../../group';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public items: group[];
  public selectedItemImages: any;

  constructor(private itemService: ItemService) { 
    
  }

  ngOnInit() {
     this.itemService.getItems().subscribe( groups => {
       this.items = groups;
       console.log(this.items);
     })

      this.bindEvents();
    }
    
    showOverlay(item: group) {
      console.log("clicked");
      document.getElementById("Overlay").style.display = "block";
      this.selectedItemImages = item.images.map(image => { console.log(image.href); return image.href; });
      ///init
    }


    private bindEvents() {
    var _Overlay = document.getElementById("Overlay");

    document.getElementById("overlay-close").addEventListener("click", function(e) {
      e.preventDefault();
      _Overlay.style.display = "none";
    });


    // Consider more features may be added
 

    // document.body.addEventListener("click", function (e) {
    //   e.preventDefault();
    // _Overlay.style.display = "none";
    // });

  };
  hideOverlay() {
    document.getElementById("Overlay").style.display = "none";

  }
}
