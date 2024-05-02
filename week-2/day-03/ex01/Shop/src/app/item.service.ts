import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ItemService {
	private apiUrl = 'https://fakestoreapi.com/products';

	constructor(private http: HttpClient) {}

	getItems(): Observable<any[]> {
		return this.http.get<any[]>(this.apiUrl).pipe(catchError(this.handleError));
	}

	addItem(item: any): Observable<any> {
		return this.http
			.post<any>(this.apiUrl, item)
			.pipe(catchError(this.handleError));
	}

	private handleError(error: any) {
		console.error('An error occurred:', error);
		return throwError(error);
	}
}
