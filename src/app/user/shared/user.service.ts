import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Login} from "../login/service/login.model";


@Injectable()
export class UserService {

  constructor(protected http: HttpClient) {
  }


  save(user: any): Observable<any> {
    return this.http.post<any>(environment.USER_URL, user);
  }

  update(user: any): Observable<any> {
    return this.http.put<any>(environment.USER_URL, user);
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.USER_URL}/${id}`);
  }
  findAllUser(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${environment.USER_URL}?page=${page}&size=${size}`);
  }

  authenticate(user: Login): Observable<any> {
    return this.http.post<any>(`${environment.USER_URL}/authenticate`, user);
  }

}
