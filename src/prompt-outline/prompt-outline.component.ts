import { Component } from "@angular/core";
import { Prompt } from "src/models/prompt.class";
import { PromptService } from "src/service/prompt.service";
@Component({
    selector:'prompt-outline',
    templateUrl:'./prompt-outline.component.html',
    styleUrls: ['./prompt-outline.component.scss']
})

export class PromptOutlineComponent{
public promptArray:Prompt[] = new Array;
public pr:Prompt=new Prompt(0,'');
public arrLen:number = 0;
public randomNum:number = -1;

    constructor(public promptservice: PromptService){
        console.log("inside promptcomp constructor")
        this.getPrompt();
        }
        

    
    public getPrompt(){
        this.promptservice.getPrompt().subscribe((resp:Prompt)=>{
            
           
            this.promptArray=Object.values(resp);
            this.arrLen = this.promptArray.length;
            console.log(this.arrLen);
            this.randomNum = Math.floor(Math.random() * this.arrLen);
            console.log("randnum",this.randomNum)


            this.pr = this.promptArray[this.randomNum];
            
            
            
            

            
            console.log("hey",this.pr)
            

    });

   

    
}
}
