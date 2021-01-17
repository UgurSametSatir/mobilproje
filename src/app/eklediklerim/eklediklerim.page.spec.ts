import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EklediklerimPage } from './eklediklerim.page';

describe('EklediklerimPage', () => {
  let component: EklediklerimPage;
  let fixture: ComponentFixture<EklediklerimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EklediklerimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EklediklerimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
