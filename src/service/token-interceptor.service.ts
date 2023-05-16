import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhhNDc0M2EzZDYzODc0ZjM5OTAzYWRjYTIwMDQwOThiMTkyMTI3Yjg2YTFlZTgxMzRlOWNjNGQ1ZTUwZDJlY2E4NDljYTlmYmM0NTJjYjI0In0.eyJhdWQiOiIzIiwianRpIjoiOGE0NzQzYTNkNjM4NzRmMzk5MDNhZGNhMjAwNDA5OGIxOTIxMjdiODZhMWVlODEzNGU5Y2M0ZDVlNTBkMmVjYTg0OWNhOWZiYzQ1MmNiMjQiLCJpYXQiOjE2ODQxMjczMjksIm5iZiI6MTY4NDEyNzMyOSwiZXhwIjoxNzE1NzQ5NzI5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.j_0sFOfFGA2Owxupyf4bp5vjUSzW2BLUwjX37Wsb6sO2N0gNp4sCF9pXgr-FGMLU5JqegsVgTOIZFJ-MYAicSjdW_BZG7grEXW5I3aWAgdFblWo3usQrUDj4jgfXAd_PA1VkSzLjw_UfeW0C6zu4HZyxO9o0Hil2bYgsYjS05su6FfmfPhAbhVryx0dHfv64Xu3Coz_iOTIi9mI8G7KHvXPhxr4XH8KIen9XQy9Yh-8FnS0bKlv9gpCCwrxcxHNSiHX2CLiDBl3ogp6BT4qsXuOXu4Hy0tHyMmkDg8pFcRmPH--PyuFImgbTWbbaNc-Dq3UeKkSF2rIsiHM2xcavbHkOiSlFciJYqGKRLh9cxpl_3ys6QxX7yNwk2AzljApTk2FyPt4ef08BeKPdkR9zcXmUuvk2WjbDWPOpwg4p5b6z7HJ3dwv8q3C4QHW2A1TM-oPThIKApYfQtYyFwjIX5p4-0rrMXf2vU-6HMzQYjGhnw7TRB69EoXGNZpV4l-eOqD87AJ0ImmukME0M9vE3U8XAwGoThqfFcXmyDF8PCLlV50MPNTsUS3-8nv6epGZB1f24YwoRQkUsqpPr0DN3y7nyyfg2TVvZCLwsN-ryFS8ig3mIevPkw1PTFxzbWjPeB2CFWOUnD96QuC7c9szLIHyPODXEzUQ1yi5gaBUDxRQ";

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let tokenHeader = req.clone({
      setHeaders: {
        Authorization : `Bearer ${this.authToken}`
      }
    })
    return next.handle(tokenHeader);
  }
}
