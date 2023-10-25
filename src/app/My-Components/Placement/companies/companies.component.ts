import { Component } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {

  companies = [
    "AKA Logistics Pvt. Ltd.",
    "Qdegree",
    "HabileLabs",
    "Byju's",
    "Infosys",
    "Impetus Technology",
    "Secure Learning",
    "Samyak Infotech",
    "Wonder Cement",
    "Streebo",
    "IBM",
    "Capegemini",
    "TCS",
    "Motherson Sumi",
    "MetaCube",
    "Vodafone Idea",
    "Himile Molds India Pvt. Ltd.",
    "Meditab Group",
    "Appcino a Xebia",
    "Solulabs Inc.",
    "Siyana Info Solutions Pvt. Ltd.",
    "HCL Technologies",
    "Genius Power Infrastructure",
    "Stratosphere IT Solutions Ltd.",
    "Acxioms Consulting Pvt. Ltd.",
    "Saint Gobain India",
    "Sasken Technologies Limited",
    "Ericson Pvt. Ltd.",
    "Acty System India Pvt. Ltd.",
    "Yazaki India Pvt. Ltd.",
    "AptClouds Softwware Solutions Pvt. Ltd.",
    "Rucha Group",
    "Exafluence Pvt. LTd.",
    "A-1 Fench Products Company Pvt. Ltd.",
    "NR Switch N Radio Services",
    "Exicom Tele-System Ltd, Gurgaon",
    "Aloha Technology Pvt. LTd, Pune",
    "Siemens India",
    "Uttam Galva",
    "Square Yards, Gurugram",
    "DotSquare Academy",
    "Codetantra, Hydrabad",
    "Intellipaat",
    "wipro",
    "Accenture",
    "Primenumbers Technology, Bangalore",
    "Eleation",
    "Allwin Capital",
    "KPIT",
    "Ranker Point Jhalawar",
    "IMG Global",
    "CedCoss Technology Pvt. Ltd.",
    "Visudh Ajivam Pvt. Ltd.",
    "Teska Technology Pvt. Ltd.",
    "BriskMinds Software Solutions Pvt. Ltd.",
    "Vishal Bearings Limited",
    "ACC Cement",
    "Tempsens",
    "UnSchool",
    "Pin Click",
    "Kellton Tech",
    "iOPEX Technology Private Limited",
    "Schneider Electric Pvt. Ltd.",
    "Sandhar Technology Limited",
    "Fexle Service Pvt. Ltd.",
    "Aaklen IT Solutions Pvt. Ltd.",
    "Rinex Technology Pvt. Ltd."
  ]

  
  displayedColumns: string[] = ['serial', 'name'];
  
}