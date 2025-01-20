import { Component, OnInit, Input, signal, } from '@angular/core';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  standalone:true,
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent  implements OnInit {
  
  private _imgPath = signal<string>(''); 

  @Input()
  set imgPath(value: string) {
    this._imgPath.set(value); 
  }

  get imgPath() {
    return this._imgPath();
  }

  public ngOnInit():void {}
}

