import { Component, OnInit } from '@angular/core';
import { ApicallservService } from "src/app/API_SERV/apicallserv.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private apiurl: ApicallservService) {
    this.displayedColumns = Object.keys(this.tableItems[0]);
  }

  ngOnInit(): void {
    this.fn_productList() //this.fn_chech();
    console.log(this.datalistobj)
  }
  datalistobj = []
  displayedColumns = [];

  fn_productList() { 
    let param = {
    }

    this.apiurl.fn_postMe('product/get_product', param).subscribe(res => {
      console.log("res", res['arrList'][0]);
      (res['arrList'])
      this.datalistobj = res.arrList ? res.arrList : [];

    });


  }
  tableItems: any[] = [{
    position:'',
    strName: '',
    strProductId: "",
    dblMRP: "",
    dblSellingPrice: "",
    dblRetailerPrice: "",
    strImageUrl: '',
  }]
}
