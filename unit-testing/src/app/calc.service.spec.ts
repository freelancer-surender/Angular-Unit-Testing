import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service";

describe("CalcService", () => {

  let shared: SharedService;
  let calc: CalcService;

  beforeEach(() => {
    console.log("Before each is called");
    // shared = new SharedService();
    // calc = new CalcService(shared);
    shared = jasmine.createSpyObj("SharedService", ["mySharedFunction"]);
    TestBed.configureTestingModule({
      providers: [CalcService, {
        provide: SharedService, useValue: shared
      }]
    });
    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
  });

  it("should multiple two numbers", () => {
    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });

  it("should add two numbers", () => {
    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.add(3, 5);
    expect(result).toBe(8);
  });

  // it("should call the mySharedFunction func", () => {
  //   // const shared = new SharedService();
  //   const shared = jasmine.createSpyObj("SharedService", ["mySharedFunction"]);
  //   const calc = new CalcService(shared);
  //   // spyOn(shared, "mySharedFunction");
  //   // spyOn(shared, "mySharedFunction").and.callThrough();
  //   const result = calc.multiply(3, 5);
  //   // expect(shared.mySharedFunction).toHaveBeenCalled();
  //   expect(result).toBe(15);
  // });
});
