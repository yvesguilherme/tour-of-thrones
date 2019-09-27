import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/type/Houses';
import { IceAndFireService } from 'src/app/service/service.module';

@Component({
  selector: 'tot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageNum = 1;
  houses: House[] = [];

  constructor(private service: IceAndFireService) { }

  ngOnInit() {
    this.getHouses();
  }

  getHouses(pageNum = 1) {
    this.service.fetchHouses(pageNum).subscribe(
      data => {
        this.houses = this.houses.concat(
          data.map(datum => {
            const urlSplit = datum.url.split('/');

            return {
              ...datum,
              id: Number(urlSplit[urlSplit.length - 1]),
              color: getColor(),
            };
          }),
        );
      },
      err => console.error(err),
    );
  }

  onScrollDown() {
    this.pageNum++;
    this.getHouses(this.pageNum);
  }
}

// utils
const getColor = () => `#${Math.random().toString(16).slice(-6)}66`;
