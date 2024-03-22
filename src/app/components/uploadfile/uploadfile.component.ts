import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {
  private SERVER_URL = environment.serverUrl;



  
    constructor(private http: HttpClient) { }
  
    fileSelection(event: any):void {
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      this.http.post(`${this.SERVER_URL}/api/uploadfichier`,formData).subscribe(result=>{

        console.log(result);


      }
        
        );
  
    }







    
  

}
