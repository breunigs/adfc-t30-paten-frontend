import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
  baseUrl = environment.API_BASE_URL;
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.baseUrl + '/get_all_users.php');
    }

    getById(id: number) {
        return this.http.get(this.baseUrl + '/get_user.php?id=' + id);
    }

    getCurrentUser() {
      return this.http.get(this.baseUrl + '/get_current_user.php');
    }

    register(user: User) {
        return this.http.post(this.baseUrl + '/register_user.php', user);
    }

    update(user: User) {
        return this.http.put(this.baseUrl + '/change_user.php?id=' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl + '/delete_user.php?id=' + id);
    }
}
