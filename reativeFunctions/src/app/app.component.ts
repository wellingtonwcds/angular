import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, of, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reativeFunctions';

  ngOnInit(){

    /*******************************/
    //forkJoin example
    let subjectA = new BehaviorSubject(2);
    let subjectB = new BehaviorSubject("A");

    forkJoin(subjectA,subjectB).subscribe((value)=>{
       console.log("Both subjectA and subjectB has been executed");
       value.forEach((element)=>{
         console.log(element);
       })
    })

    //It will be only executed when both subjectA and subjectB
    //call complete()
    subjectA.complete();
    subjectB.complete();
    //forkJoin
    /*******************************/


    /*******************************/
    //zip example
    let age$ = of(25,30,40);
    let name$ = of("Wellington","Cissa","Davi");
    let isDev$ = of(true,false,false);

    zip(age$,name$,isDev$).pipe(
      map(([age,name,isDev]) => ({ idade:age,nome:name,programador:isDev })),
    ).subscribe(element =>{
      console.log(element);
    })

    //zip
    /*******************************/

  }
}
