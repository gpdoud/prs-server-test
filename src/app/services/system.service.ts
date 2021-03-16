import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SystemService {

    _baseurl: string = "http://localhost:5000";
    get baseurl(): string { return this._baseurl; }
    setBaseurl(port: number): void { this._baseurl = `http://localhost:${port}`; }

    constructor(
    ) {}
}