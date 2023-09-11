import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";


@Injectable({ providedIn: "root" })
export class MainService {


    constructor(private router: Router, private http: HttpClient) {
    }

    // deleteParent(primaryKey) {
    //     return this.http.delete(
    //         `${environment.apiUrl}/v1/admin/parent/${primaryKey}`
    //     );
    // }

    submitQuestion(data): Observable<any> {
        return this.http.post(`${environment.apiUrl}/v1/admin/question`, data);
    }
    // getCoursesById(primaryKey): Observable<any> {
    //     return this.http.get(`${environment.apiUrl}/v1/admin/CoursesOfsubject/${primaryKey}`);
    // }
    getQuestionList() {
        return this.http.get(`${environment.apiUrl}/v1/admin/question`);
    }
    getAnswerList(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/v1/admin/answers`);
    }
}
