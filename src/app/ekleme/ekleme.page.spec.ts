import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EklemePage } from './ekleme.page';

describe('EklemePage', () => {
  let component: EklemePage;
  let fixture: ComponentFixture<EklemePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EklemePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EklemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
