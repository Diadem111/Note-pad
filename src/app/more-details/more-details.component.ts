import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {
public indexInUrl : any = ""
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.indexInUrl= this.activatedRoute.snapshot.paramMap.get('id'), THIS does not update automatically when you change the value
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.indexInUrl = params.get("id");
    })
  }

}
