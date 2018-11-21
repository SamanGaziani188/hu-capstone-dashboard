import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluationform',
  templateUrl: './evaluationform.component.html',
  styleUrls: ['./evaluationform.component.scss']
})
export class EvaluationformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAmount(newAmount) {
    console.log(newAmount);
    document.getElementById('amount').innerHTML = newAmount;
  }
}
