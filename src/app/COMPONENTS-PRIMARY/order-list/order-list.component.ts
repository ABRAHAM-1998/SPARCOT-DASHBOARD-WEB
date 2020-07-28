import { Component, OnInit, ViewChild } from '@angular/core';
import { ApicallservService } from "src/app/API_SERV/apicallserv.service";


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  ngOnInit() {
    this.fn_getOrderList() //this.fn_chech();
    console.log(this.datalistobj)
  }
  datalistobj = []

  fn_getOrderList() {
    let param = {
    }

    this.apiurl.fn_postMe('order/get_order', param, '3001').subscribe(res => {
      console.log("res", res['arrList'][0]);
      (res['arrList'])
      this.datalistobj = res.arrList ? res.arrList : [];

    });


  }
  // ++++++++++++++++++++++insetring data into a table +++++++++++++++++++++++
  displayedColumns = [];

  tableItems: any[] = [{
    position: '',
    strOrderId: "",
    strUserType: "",
    strModePayment: "",
    strOrderStatus: "",
    dblTotalOrderAmount: '',
  }]

  constructor(private apiurl: ApicallservService) {
    this.displayedColumns = Object.keys(this.tableItems[0]);
  }
}
export interface tableItems {
  dblTotalOrderAmount: string,
  position: string
  strOrderId: string;
  strUserType: string,
  strModePayment: string;
  strOrderStatus: string;
}

