import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app1';

  data: any[] = [];
  constructor(private http: HttpClient) {
    this.http.get('http://localhost/IT7131_Project/angular_app/app1/server.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);


    }, error => console.error(error));
  }
}
