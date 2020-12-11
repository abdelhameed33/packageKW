import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-customization',
  templateUrl: './business-customization.component.html',
  styleUrls: ['./business-customization.component.scss'],
})
export class BusinessCustomizationComponent implements OnInit {
  uploadedFile: any;
  public fileData: any = null;
  uploadedFile2: any;
  public fileData2: any = null;
  constructor(
    private sanitizer: DomSanitizer,
    public translate: TranslateService
  ) { }

  ngOnInit(): void { }
  // upload
  uploadFile($event): void {
    console.log($event);
    this.fileData = $event.target.files[0];
    this.uploadedFile = this.sanitizer.bypassSecurityTrustUrl(
      URL.createObjectURL(this.fileData)
    );
  }

  clearFile(): void {
    this.fileData = null;
    this.uploadedFile = null;
  }
  uploadFile2($event): void {
    console.log($event);
    this.fileData2 = $event.target.files[0];
    this.uploadedFile2 = this.sanitizer.bypassSecurityTrustUrl(
      URL.createObjectURL(this.fileData2)
    );
  }

  clearFile2(): void {
    this.fileData2 = null;
    this.uploadedFile2 = null;
  }
}
