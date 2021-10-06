import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor(private http:HttpClient) { }

  calcular(a:number, b:number, o:number){
    // return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')

    let headers = new HttpHeaders();
    headers.set("Content-Type","application/x-www-form-urlencoded")

    return this.http.post(
      'https://localhost:8080/Calculadora/calcular',
      {},
      {headers: headers});
  }
}
