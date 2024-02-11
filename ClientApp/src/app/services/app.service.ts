import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuGroupItem } from '../interfaces/contentPageModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private readonly baseUrl = 'https://localhost:8081/';

    constructor(private readonly http: HttpClient) {}

    public searchCollection(): Observable<MenuGroupItem> {
        return this.http.get<MenuGroupItem>(this.baseUrl + `courses`);
    }
}
