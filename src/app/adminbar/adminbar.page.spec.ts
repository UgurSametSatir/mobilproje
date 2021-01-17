import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminbarPage } from './adminbar.page';

describe('AdminbarPage', () => {
  let component: AdminbarPage;
  let fixture: ComponentFixture<AdminbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
