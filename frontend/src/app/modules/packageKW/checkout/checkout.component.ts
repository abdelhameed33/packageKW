import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  modalRef: BsModalRef;
  active = true;

  ckeckoutObject = [
    {
      checked: true,
      cityName: 'Kuwait Cityg',
      addressDesc: 'P O Box: 24180 Safat, 13102 - P O Box: 24180 Safat, 13102',
      phoneNamber: '+965 22334133',
      stateArea: 'Kuwait City',
    },
    {
      checked: false,
      cityName: 'Kuwait Cityg',
      addressDesc: 'P O Box: 24180 Safat, 13102 - P O Box: 24180 Safat, 13102',
      phoneNamber: '+965 22334133',
      stateArea: 'Kuwait City',
    },
  ];

  payMethod = [
    {
      checked: true,
      name: 'Credit Card & Visa',
      img: '../../../assets/images/icons/visa.svg',
    },
    {
      checked: false,
      name: 'Paypal',
      img: '../../../assets/images/icons/paypal.svg',
    },
    {
      checked: false,
      name: 'Knet',
      img: '../../../assets/images/icons/knet.png',
    },
    {
      checked: false,
      name: 'Cash On Delivery',
      img: '../../../assets/images/icons/cash.svg',
    },
  ];
  constructor(
    private modalService: BsModalService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void { }

  toggle(index): void {
    this.ckeckoutObject.map((el) => {
      el.checked = false;
    });
    this.ckeckoutObject[index].checked = true;
  }
  togglePay(index): void {
    this.payMethod.map((el) => {
      el.checked = false;
    });
    this.payMethod[index].checked = true;
  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
}
