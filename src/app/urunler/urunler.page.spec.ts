import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrunlerPage } from './urunler.page';

describe('UrunlerPage', () => {
  let component: UrunlerPage;
  let fixture: ComponentFixture<UrunlerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunlerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrunlerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
