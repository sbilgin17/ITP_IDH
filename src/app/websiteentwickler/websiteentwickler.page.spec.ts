import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebsiteentwicklerPage } from './websiteentwickler.page';

describe('WebsiteentwicklerPage', () => {
  let component: WebsiteentwicklerPage;
  let fixture: ComponentFixture<WebsiteentwicklerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteentwicklerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteentwicklerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
