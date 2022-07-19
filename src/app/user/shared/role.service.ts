import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export  class RoleService {

  constructor(protected http: HttpClient) {
  }


  getAllRoles(size: number, page: number): Observable<any> {
    return this.http.get(`${environment.ROLE_URL}?page=${page}&size=${size}`)
  }

}
