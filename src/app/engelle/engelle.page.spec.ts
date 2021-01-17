import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngellePage } from './engelle.page';

describe('EngellePage', () => {
  let component: EngellePage;
  let fixture: ComponentFixture<EngellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
