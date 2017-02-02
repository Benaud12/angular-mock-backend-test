/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Http, Response, ResponseOptions } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>,
    component: AppComponent,
    mockHttp: any,
    mockObservable: any,
    mockResponse: Response,
    mockResponseOptions: ResponseOptions;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get'])
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: Http,
          useFactory: () => { return mockHttp; }
        }
      ]
    });
    TestBed.compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', async(() => {
    // Assert
    expect(component).toBeTruthy();
  }));

  it(`should have the expected title`, async(() => {
    // Assert
    expect(component.title).toEqual('It\'s my stuff!');
  }));

  it(`should have url set to default value`, async(() => {
    // Assert
    expect(component.url).toEqual('public/stuff.json');
  }));

  describe(`ngOnInit`, () => {
    it(`should call getStuff`, async(() => {
      // Arrange
      spyOn(component, 'getStuff');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.getStuff).toHaveBeenCalledWith();
    }));
  });

  describe(`getStuff`, () => {
    let mockHttpGet: jasmine.Spy;

    beforeEach(() => {
      mockObservable = {
        subscribe: jasmine.createSpy('subscribe')
      }
      mockHttpGet = spyOn(component, 'httpGet');
    });

    it(`should call httpGet with the url`, async(() => {
      // Arrange
      mockHttpGet.and.returnValue(mockObservable);;
      component.url = 'blah'

      // Act
      component.getStuff();

      // Assert
      expect(component.httpGet).toHaveBeenCalledWith('blah');
    }));

    it(`should subscribe to httpGet response`, async(() => {
      // Arrange
      mockObservable.subscribe.and.returnValue('subscription');
      mockHttpGet.and.returnValue(mockObservable);

      // Act
      component.getStuff();

      // Assert
      expect(mockObservable.subscribe).toHaveBeenCalled();
      expect(component.subscription).toEqual('subscription');
    }));

    it(`should set stuff on successful request`, async(() => {
      // Arrange
      mockResponseOptions = new ResponseOptions({
        body: {
          stuff: 'boop'
        },
        status: 200
      });
      mockResponse = new Response(mockResponseOptions);
      mockHttpGet.and.returnValue(Observable.of(mockResponse));

      // Act
      component.getStuff();

      // Assert
      expect(component.stuff).toEqual('boop');
    }));

    it(`should set error to true when observable fails`, async(() => {
      // Arrange
      mockHttpGet.and.returnValue(Observable.throw(new Error('Error'));

      // Act
      component.getStuff();

      // Assert
      expect(component.error).toBe(true);
    }));

    it(`should call finishGet on subscription complete`, async(() => {
      // Arrange
      mockResponseOptions = new ResponseOptions({
        body: {
          stuff: 'something'
        },
        status: 200
      });
      mockResponse = new Response(mockResponseOptions);
      mockHttpGet.and.returnValue(Observable.of(mockResponse));
      spyOn(component, 'finishGet');

      // Act
      component.getStuff();

      // Assert
      expect(component.finishGet).toHaveBeenCalledWith();
    }));
  });

  describe(`httpGet`, () => {
    it(`should call get on http service with given url and return the response`,
      async(() => {
        // Arrange
        mockHttp.get.and.returnValue('bee');

        // Act
        let result = component.httpGet('some/url');

        // Assert
        expect(mockHttp.get).toHaveBeenCalledWith('some/url');
        expect(result).toEqual('bee');
      }));
  });

  describe(`finishGet`, () => {
    describe(`subscription closed`, () => {
      it(`should not call unsubscribe on the subscription`, async(() => {
        // Arrange
        component.subscription = new Subscription();
        component.subscription.closed = true;
        component.subscription.unsubscribe = jasmine.createSpy('unsubscribe');

        // Act
        component.finishGet();

        // Assert
        expect(component.subscription.unsubscribe).not.toHaveBeenCalled();
      }));
    })

    describe(`subscription not closed`, () => {
      it(`should call unsubscribe on the subscription`, async(() => {
        // Arrange
        component.subscription = new Subscription();
        component.subscription.closed = false;
        component.subscription.unsubscribe = jasmine.createSpy('unsubscribe');

        // Act
        component.finishGet();

        // Assert
        expect(component.subscription.unsubscribe).toHaveBeenCalled();
      }));
    })
  });
});
