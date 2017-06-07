import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Drama} from './auth';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  movie: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
    //return this.http.post('users/register', user,{headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
    //return this.http.post('users/authenticate', user,{headers: headers})
      .map(res => res.json());
  }

  addNewMovie(movie){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/movies/addmovie', movie,{headers: headers })
    //return this.http.post('movies/addmovie', movie,{headers: headers })
      .map(res => res.json());
  }

  gerDrama(){
    //return this.http.get('movies/viewdrama')
    return this.http.get('http://localhost:3000/movies/viewdrama')
      .map(res => res.json());
  }

  deleteDrama(id){
    return this.http.delete('http://localhost:3000/movies/movieremove/'+id)
    //return this.http.delete('movies/movieremove/'+id)
      .map(res => res.json());
  }

  getInfoDrama(id: string){
    return this.http.get('http://localhost:3000/movies/getmovie/'+id)
    //return this.http.get('movies/getmovie/'+id)
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
    //return this.http.get('users/profile', {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
