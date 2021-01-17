import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnaSayfaPage } from './ana-sayfa.page';

describe('AnaSayfaPage', () => {
  let component: AnaSayfaPage;
  let fixture: ComponentFixture<AnaSayfaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaSayfaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnaSayfaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
