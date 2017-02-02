import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'It\'s my stuff!';
  public url: string = 'public/stuff.json';
  public subscription: Subscription;
  public stuff: any;
  public error: boolean;

  constructor(private http: Http) {
  }

  public ngOnInit(): void {
    this.getStuff();
  }

  public getStuff(): void {
    this.subscription = this.httpGet(this.url).subscribe(
      (response: Response) => { this.stuff = response.json().stuff; },
      (error: any) => { this.error = true },
      () => { this.finishGet(); }
    );
  }

  public httpGet(url: string): Observable<Response> {
    return this.http.get(url);
  }

  public finishGet(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }
}
