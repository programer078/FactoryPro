import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InnovativesolutioncardComponent } from './innovativesolutioncard.component';

describe('InnovativesolutioncardComponent', () => {
  let component: InnovativesolutioncardComponent;
  let fixture: ComponentFixture<InnovativesolutioncardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovativesolutioncardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InnovativesolutioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
