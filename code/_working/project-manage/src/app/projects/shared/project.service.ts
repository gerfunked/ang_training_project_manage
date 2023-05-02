import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project.model';
import { MOCK_PROJECTS } from './mock-projects';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsUrl = environment.backendUrl + '/projects/';

  constructor(private http: HttpClient) {}

  list(): Observable<Project[]> {
    // return of(MOCK_PROJECTS);
    return this.http.get<Project[]>(this.projectsUrl);
  }
}
