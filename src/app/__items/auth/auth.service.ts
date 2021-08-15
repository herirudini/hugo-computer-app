import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { AuthInterface } from './auth-interface';

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient) { }

    signIn(data: Observable<AuthInterface>): Promise<any> {
        console.log('run signIn service..', data)
        return new Promise((resolve, reject) => {
            this.http.post(`${env.customerAPI}/auth/signIn`, data)
                .subscribe(
                    (res: any) => {
                        resolve(res)
                    },
                    (err) => {
                        reject(err)
                    }
                )
        })
    }

    signUp(data: Observable<AuthInterface>): Promise<any> {
        console.log('run signUp service..', data)
        return new Promise((resolve, reject) => {
            this.http.post(`${env.customerAPI}/auth/signUp`, data)
                .subscribe(
                    (res: any) => {
                        resolve(res)
                    },
                    (err) => {
                        reject(err)
                    }
                )
        })
    }
}