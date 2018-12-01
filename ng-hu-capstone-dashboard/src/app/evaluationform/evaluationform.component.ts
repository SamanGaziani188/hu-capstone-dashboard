import { Component, OnInit } from '@angular/core';
import {EvalFormService} from '../Services/evalForm_service/eval-form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-evaluationform',
  templateUrl: './evaluationform.component.html',
  styleUrls: ['./evaluationform.component.scss']
})
export class EvaluationformComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private evalformService: EvalFormService,
    private formBuilder: FormBuilder,
    // public snackBar: MatSnackBar
    ) {
      this.createForm = this.formBuilder.group({
        evaluatorName: ['', Validators.required],
        projectName: ['', Validators.required],
        document_wellexplained_Rating: ['0', Validators.required],
        workload_justified_Rating: ['0', Validators.required],
        quantitative_specs_Rating: ['0', Validators.required],
        proofOfConcept_Rating: ['0', Validators.required],
        potential_contribution_Rating: ['0', Validators.required],
        suggestions: ''
      });
     }

  ngOnInit() {

  }

  Submit(evaluatorName, projectName, document_wellexplained_Rating, workload_justified_Rating, quantitative_specs_Rating,
     proofOfConcept_Rating, potential_contribution_Rating, suggestions) {
      this.evalformService.addResult(evaluatorName, projectName, document_wellexplained_Rating,
      workload_justified_Rating, quantitative_specs_Rating, proofOfConcept_Rating, potential_contribution_Rating,
      suggestions).subscribe(() => {
        console.log('Done');
      });
      // console.log(evaluatorName);
    }

  Reveal() {
    this.evalformService.getResults().subscribe((result) => {
        console.log(result);
      });
    }
}
