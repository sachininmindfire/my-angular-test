import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs'
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs-obvls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-obvls.component.html',
  styleUrl: './rxjs-obvls.component.scss'
})

export class RxjsObvlsComponent {
  data : GitHubUser[]  = []; 
  ngOnInit()
  {
    const users = ajax<GitHubUser[]>('https://api.github.com/users?per_page=5').pipe(
      map(response => response.response), 
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    );

    users.subscribe({
      next: (users: GitHubUser[]) => {
        this.data = users;
        console.log(users);
      },
      error: err => console.log(err)
    });

    // const myObservable = new Observable((observer) => 
    // {
      
    //   observer.next(data);
    // });d

    // users.subscribe((d) => {
    //   console.log(d);
    //   //this.data = d.response;
    // })

    // users.subscribe((d) => {
    //   console.log(d);
    // })

    
  }

  trackByFn(index: number, item: any): string {
    return item.login; // assuming login is unique
  }

}

interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
