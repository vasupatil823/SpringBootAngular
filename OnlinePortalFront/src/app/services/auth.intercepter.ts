import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login : LoginService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add the JWT Token from local storage to every request
let authReq = req;
        const token = this.login.getToken();
        console.log(token);
if(token!=null){
    authReq=authReq.clone({setHeaders:{Authorization:`vasu ${token}`}});
    console.log(authReq);
}
return next.handle(authReq);
    }
    
}

//below are the configuration needs to be done in angular for using interceptor, this needs to be import in providers in app.module.ts file
export const authInterceptorProviders=[
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true,

}
]