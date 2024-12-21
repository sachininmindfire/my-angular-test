import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  data : any[] = []; 
  
  myObservable = new Observable(function(observer){
    setTimeout(() => {observer.next("Say 1")}, 1000);
    setTimeout(() => {observer.next("Say 2")}, 2000);
    setTimeout(() => {observer.next("Say 3")}, 3000);
    setTimeout(() => {observer.next("Say 4")}, 4000);
    setTimeout(() => {observer.next("Say 5")}, 5000);
  });

  ngOnInit()
  {
    const that=this;
    // this.myObservable.subscribe(function(val: any){
    //     that.data.push(val); 
    //   },
    //   function(err)
    //   {

    //   },
    //   function()
    //   {

    //   }
    // );


    this.myObservable.subscribe({
      next: (val: any) => 
      {
        this.data.push(val); 
      },
      error: (err: any) => 
      {
        alert(err);
      },
      complete: () =>
      {
        alert("Complted");
      }
    });

  }

 
}