import { Person } from '../Models/person';
import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

  jobTypeDriver: boolean = true;
  jobTypeOffice: boolean = false;
  companyDriver: boolean = false;
  ownerOperator: boolean = false;
  formValid: boolean = false;
  person: Person;
  additionalData: string;
  sendSuccess: boolean = false;
  sendFailed: boolean = false;
  countries = [
  "Alaska", 
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  " North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming"
];

  constructor() { }

  ngOnInit(): void {
  }

  submitButton() {
    setTimeout(function() { 
      const d = document.getElementsByTagName("a")[0];
      console.log(d.innerHTML);
    },
    2000);
    console.log("Slovca");
    //window.open('http://localhost:4200','_blank');
  }

  onSend(text: string, submitButton: HTMLButtonElement, message: HTMLTextAreaElement, from: HTMLInputElement, mail: string) {
    message.value = text;
    from.value = mail;
    submitButton.click();
  }

  selectDriver() {
    this.jobTypeDriver = true;
    this.jobTypeOffice = false;
  }

  selectOffice() {
    this.jobTypeDriver = false;
    this.jobTypeOffice = true;
  }

  selectCompanyDriver() {
    this.companyDriver = true;
    this.ownerOperator = false;
  }

  selectOwnerOperator() {
    this.companyDriver = false;
    this.ownerOperator = true;
  }

  validateForm(form): boolean {
    if(this.jobTypeDriver == true && (form.name == "" || form.lastname == "" || form.email == "" || form.cellphone == "" || form.dateofbirth == "" || form.jobtype == "" || form.ticket == "" || form.accident == "" || form.experience == "" || form.cdlnumber == "" || form.cdlstate == ""))
      return false;
    else if (this.jobTypeDriver == true && form.jobtype == "company-driver" && (form.name == "" || form.lastname == "" || form.email == "" || form.cellphone == "" || form.dateofbirth == "" || form.ticket == "" || form.accident == "" || form.experience == "" || form.cdlnumber == "" || form.cdlstate == "" || form.companyDriver == ""))
    {
      console.log("slovca");
      return false;
    }
    else if (this.jobTypeDriver == true && form.jobtype == "owner-operator" && (form.name == "" || form.lastname == "" || form.email == "" || form.cellphone == "" || form.dateofbirth == "" || form.ticket == "" || form.accident == "" || form.experience == "" || form.cdlnumber == "" || form.cdlstate == "" || form.insurance == "" || form.trailer == ""))
    {
      console.log("insurance-trailer");
      return false;
    }
    else if(this.jobTypeOffice == true && ((form.name == "" || form.lastname == "" || form.email == "" || form.cellphone == "" || form.dateofbirth == "") || (form.safety != true && form.dispatch != true && form.accounting != true)))
    {
      console.log("office");
      return false;
    }
    else return true; 
  }

  submitForm(form) {

    if(this.validateForm(form)) {

      this.person = new Person();

      this.person.to_name = "Aleksandar";
      this.person.from_name = form.name;
      this.person.lastName = form.lastname;
      this.person.dateOfBirth = form.dateofbirth;
      this.person.cellPhone = form.cellphone;
      this.person.email = form.email;

      if(this.jobTypeDriver == true) {

        this.person.appliesForJob = "Driver job";
        this.person.additionalData = 
        `Type of driver: ${form.jobtype} 
        /----- Drive (solo/team/both): ${form.companyDriver != null ? form.companyDriver : "Not for 'owner operator' type of driver"} 
        /----- Physical insurance: ${form.insurance != null ? form.insurance : "Not for 'company driver' type of driver"} 
        /----- Own a trailer: ${form.trailer != null ? form.trailer : "Not for 'company driver' type of driver"} 
        /----- Tickets past 1 year: ${form.ticket} 
        /----- Accidents past 1 year: ${form.accident} 
        /----- Driving experience: ${form.experience} 
        /----- CDL number: ${form.cdlnumber} 
        /----- CDL state: ${form.cdlstate} 
        /----- Additional message: ${form.additionalmessage}`;
            
      }
      else if (this.jobTypeOffice == true) {

        this.person.appliesForJob = "Office job";
        this.person.additionalData = `The types of jobs he is interested in: ${form.safety == true ? "Safety-" : ""} ${form.dispatch == true ? "Dispatch-" : ""} ${form.accounting == true ? "Accounting" : ""} / Additional message: ${form.additionalmessage}`;
            
      }

      emailjs.send('contact_service', 'template_oaku4z6', this.person, 'user_1w6837u38ydUDEqhG5z92')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        if(response.status == 200) {
          alert("Your Email has been sent successfully, the page will refresh itself.");
        }
      }, function(error) {
        console.log('FAILED...', error);
        alert("O,o there were some problems, please try again later, the page will refresh itself .");
      }); 

      this.sendSuccess = true;
      setTimeout(()=> {
        location.reload();
      }, 2000);

      console.log(this.person);
      this.formValid = false;
    }
    else {

      this.formValid = true;
      console.log("Nije validacija");
    }

    console.log(form);
  }

}
