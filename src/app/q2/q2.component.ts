import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {
  datas : any = []
  datassearch: any = []
  myForm: FormGroup;
  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.datas = data;
      this.datassearch = data;
    })

  }

  search(message){
    // str.includes("world")
    let result = this.datas.filter(name => name.toUpperCase().includes(message.toUpperCase()))
    console.log(result.length);
    console.log(message);
    this.datassearch = result.length > 0 ? result : this.datas
    return 
  }
  


  
}
