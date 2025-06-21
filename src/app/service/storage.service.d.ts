import { Injectable } from '@angular/core';


export class StorageService {

  
  get(key: string): any;
  set(key: string, value: any): void;
  remove(key: string): void;


  // get(key: string): string | null {
  //   return localStorage.getItem(key);
  // }

  // set(key: string, value: string): void {
  //   localStorage.setItem(key, value);
  // }

  // remove(key: string): void {
  //   localStorage.removeItem(key);
  // }
}
