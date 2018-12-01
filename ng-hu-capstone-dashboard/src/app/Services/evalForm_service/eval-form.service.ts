import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvalFormService {
  url =  'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addResult(evaluatorName, projectName, document_wellexplained_Rating, workload_justified_Rating, quantitative_specs_Rating,
    proofOfConcept_Rating, potential_contribution_Rating, suggestions ) {
      const result = {
        evaluatorName: evaluatorName,
        projectName: projectName,
        document_wellexplained_Rating: document_wellexplained_Rating,
        workload_justified_Rating: workload_justified_Rating,
        quantitative_specs_Rating: quantitative_specs_Rating,
        proofOfConcept_Rating: proofOfConcept_Rating,
        potential_contribution_Rating: potential_contribution_Rating,
        suggestions: suggestions
      };
      console.log('Inside Service');

      return this.http.post(`${this.url}/evaluationform/submit`, result);
    }

    getResults() {
      return this.http.get(`${this.url}/evaluationform`);
    }


}

