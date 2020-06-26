import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-ehsm-dashboard',
  templateUrl: './ehsm-dashboard.component.html',
  styleUrls: ['./ehsm-dashboard.component.css']
})
export class EhsmDashboardComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getIncidents();
  }
  getIncidents(){
    this.router.navigate(['incidents'], {relativeTo: this.route})
 }
 getRisks(){
   this.router.navigate(['risks'], {relativeTo: this.route})
}
}
