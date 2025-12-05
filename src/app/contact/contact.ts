import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContactForm } from "./contact-form/contact-form";
import { ManufacturerInfo } from "./manufacturer-info/manufacturer-info";
import { ContactInfo } from "./contact-info/contact-info";

@Component({
  selector: 'bulkly-contact',
  imports: [ContactForm, ManufacturerInfo, ContactInfo],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {

}
