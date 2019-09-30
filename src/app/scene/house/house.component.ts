import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IceAndFireService } from 'src/app/service/ice-and-fire.service';
import { House } from 'src/app/type/Houses';

@Component({
  selector: 'tot-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  house: House;

  constructor(
    private service: IceAndFireService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service
        .fetchHouse(+params['id'])
        .subscribe(data => (this.house = data), err => console.error(err));
    });
  }

  modalClose() {
    this.router.navigate([{ outlets: { modal: null } }]);
  }

}
