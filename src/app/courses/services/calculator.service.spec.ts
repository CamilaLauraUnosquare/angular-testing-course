import {CalculatorService} from './calculator.service';
import {LoggerService} from './logger.service';
import {TestBed} from '@angular/core/testing';


describe('CalculatorService', () => {

    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(()=> {
      console.log("Calling beforeEach");

      // jasmine.createSpyObj('service in ctor', ["fns"]);
      //fns: fns that the service use in the class
      loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

      //provide dependency and service instead calling ctors explicity
      TestBed.configureTestingModule({
        providers: [ //services
          CalculatorService,
          //to provide to de before service the injection of the other service
          { provide: LoggerService, useValue: loggerSpy },
        ],
      });

      //construct the service we want to
      calculator = TestBed.inject(CalculatorService);
    });

    it('should add two numbers', () => {

        console.log("add test");

        const result = calculator.add(2, 2);

        expect(result).toBe(4);

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });


    it('should subtract two numbers', () => {

        console.log("subtract test");

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, "unexpected subtraction result");

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });
//unit test != integration test
// unit test only test the class. Because of that, we inyect the logger service
// integration test, tests the relation between the two or more clasess
});
