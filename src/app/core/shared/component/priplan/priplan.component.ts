import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ImgComponent } from '../img/img.component';
import { HeaderComponent } from 'src/app/core/shared/component/header/header.component';
import { ParsingplanComponent } from '../parsingplan/parsingplan.component';
import { IndustryComponent } from '../industry/industry.component';
import { SatisfiedclientComponent } from '../satisfiedclient/satisfiedclient.component';
import { FoterComponent } from '../foter/foter.component';
@Component({
  selector: 'app-priplan',
  templateUrl: './priplan.component.html',
  styleUrls: ['./priplan.component.scss'],
  standalone: true,
    imports: [IonContent, CommonModule, FormsModule, ImgComponent, HeaderComponent, ParsingplanComponent, IndustryComponent, SatisfiedclientComponent, FoterComponent]
})
export class PriplanComponent  implements OnInit {
 public ngOnInit():void {}

}
