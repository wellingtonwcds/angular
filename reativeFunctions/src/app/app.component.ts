import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';

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
    /*******************************/
    //forkJoin
  }
}
