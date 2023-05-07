import { Observable } from 'rxjs';
import { SessionStore } from './session.store';
import { HttpClient } from '@angular/common/http';

export class SessionService {
  constructor(private sessionStore: SessionStore,
              private http: HttpClient) {}

  async updateUserName(newName: string) {
    this.sessionStore.setLoading(true);



    // list(): Observable<Project[]> {
    //   // return of(MOCK_PROJECTS);
    //   return this.http.get<Project[]>(this.projectsUrl).pipe(
    //     delay(20),
    //     catchError((error: HttpErrorResponse) => {
    //       console.log(error);
    //       return throwError(
    //         () => new Error('An error occurred loading the projects!!!')
    //       );
    //     })
    //   );
    // }

    getUser(): Observable<Users[]>
    {
      this.http.get<User[]>('http://127.0.0.1:13000/fruits/').pipe(delay(100));
    }


    // await this.http(...).toPromise();



    this.sessionStore.update({ name: newName});
    this.sessionStore.setLoading(false);
  }
}
