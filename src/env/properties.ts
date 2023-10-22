import { HttpHeaders } from "@angular/common/http";

export const environment = {
  bedroomApiUrl: "http://localhost:8080/api/bedroom",
  tenantApiUrl: "http://localhost:8080/api/tenant"
};

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
};
