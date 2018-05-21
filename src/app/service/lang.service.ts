import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private http: HttpClient) { }

  load(): Observable<any> {
    return this.http.get('/assets/lang.json');
  }
}
