
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
describe('AppComponent', () => {
  let app:AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatIconModule,
        MatListModule,
        MatToolbarModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents().then(() => { 
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });

  }));

 
  it('if status is equal to alarm, setAlarm becomes true', async(() => {
    let status = 'alarm';
    expect(app.setAlarm(status)).toBeTruthy();
  }));
  it('if status is not equal to alarm, setAlarm becomes flase', async(() => {
    let status = 'other';
    expect(app.setAlarm(status)).toBeFalsy();
  }));
  
});








