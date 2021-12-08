import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Prompt } from "src/models/prompt.class";



@Injectable()
export class PromptService {
    
    constructor(public http: HttpClient){
        

        this.getPrompt().subscribe(data => {
            console.log(data);
        });
    }
    public getPrompt():Observable<Prompt> {
        
        
        
        console.log("inside getprompt")
        return (this.http.get<Prompt>("http://localhost:3000/prompts"));
    }
    
    }
