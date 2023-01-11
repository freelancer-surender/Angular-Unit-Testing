import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, flush, flushMicrotasks } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppComponent } from './app.component';
import { GradePipe } from './grade.pipe';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, GradePipe
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      el = fixture.debugElement;
      component = fixture.componentInstance;
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-testing');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('unit-testing app is running!');
  // });

  it('should render a button with text subscribe', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    const btnElements = el.queryAll(By.css('.subscribe'));
    // component.btnText = "Subscribe";
    expect(btnElements[0].nativeElement.textContent).toBe("Subscribe");
    expect(btnElements[0].nativeElement.disabled).toBeFalse();
  });

  // it('should render a button with text subscribed and the button should be disabled after clicked', (done: DoneFn) => {
  //   component.isSubscribed = false;
  //   fixture.detectChanges();
  //   let btnElements = el.queryAll(By.css('.subscribe'));
  //   console.log(btnElements);
  //   // component.btnText = "Subscribe";
  //   btnElements[0].nativeElement.click();
  //   setTimeout(() => {
  //     console.log("Some other test cases");
  //     done();
  //   }, 8000);
  //   setTimeout(() => {
  //     fixture.detectChanges();
  //     btnElements = el.queryAll(By.css('.subscribe'));
  //     expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
  //     expect(btnElements[0].nativeElement.disabled).toBeTrue();
  //     // done();
  //   }, 3000)
  // });

  it('should render a button with text subscribed and the button should be disabled after clicked', fakeAsync(() => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));
    console.log(btnElements);
    // component.btnText = "Subscribe";
    btnElements[0].nativeElement.click();
    setTimeout(() => {
      console.log("Some other test cases");
    }, 8000);
    setTimeout(() => {
      fixture.detectChanges();
      btnElements = el.queryAll(By.css('.subscribe'));
    }, 3000);

    flush();

    // tick(3000);
    expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
    expect(btnElements[0].nativeElement.disabled).toBeTrue();
    // tick(5000);

  }));

  it("should test the promise", fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      console.log("First Set Timeout");
      counter = counter + 2;
    }, 2000);

    setTimeout(() => {
      console.log("Second Set Timeout");
      counter = counter + 3;
    }, 3000);

    Promise.resolve().then(() => {
      console.log("Promise");
      counter = counter + 1;
    });

    // flush();
    // tick(1000);

    flushMicrotasks();
    expect(counter).toBe(1);

    tick(2000);
    expect(counter).toBe(3);
    tick(3000);
    expect(counter).toBe(6);

  }));

  it("should test the observable", fakeAsync(() => {
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(delay(1000));
    myObs.subscribe(() => {
      isSubscribed = true;
    });
    tick(1000);
    expect(isSubscribed).toBeTrue();
  }));

});
