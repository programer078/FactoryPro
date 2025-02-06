import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  public getprocess() {
    return[
   {
         digit: '01',
         tital: 'Understanding Your Needs',
         text: ' We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.'
       },
       {
         digit: '02',
         tital: 'Design and Planning',
         text: '  Our team collaborates to create detailed project plans, ensuring all aspects of the process.'
       },
       {
         digit: '03',
         tital: 'Implementation',
         text: 'Utilizing advanced technologies and skilled personnel, we execute the project.'
       }
    ]
   }
   public getabout() {
    return[
  {
        img: '../../../assets/imgs/seatingicon.svg',
        text: 'Advanced Manufacturing Solutions'
      },
      {
        img: '../../../assets/imgs/seatingicon.svg',
        text: 'Quality Assurance Systems'
      },
      {
        img: '../../../assets/imgs/seatingicon.svg',
        text: 'State-of-the-Art Technology'
      }
    ]
   }

   public getadvanced() {
    return[
   {
        img: '../../../assets/imgs/seatingicon.svg',
        text: 'Advanced Manufacturing Solutions'
      },
      {
        img: '../../../assets/imgs/seatingicon.svg',
        text: 'Quality Assurance Systems'
      },
      {
        img: '../../../assets/imgs/seatingicon.svg',
        text: 'State-of-the-Art Technology'
      }
    ]
   }

   public getrating() {
    return[
    {
         digit: '10k+',
         text: 'Completed Projects'
       },
       {
         digit: '15+',
         text: 'Satisfied Customers'
       },
       {
         digit: '10k+',
         text: 'Years of Mastery'
       },
    ]
   }
   public getimg() {
    return[
    {
         img: '../../../assets/imgs/Container (2).png'
       },
       {
         img: '../../../assets/imgs/Container.png'
       },
       {
         img: '../../../assets/imgs/Container (1).png'
       }
    ]
   }
   public getinitiatives() {
    return[
      {
        img: '../../../assets/imgs/automashine.png',
        tital: 'Development',
        text: '  Total Quality Management Implementation'
      },
      {
        img: '../../../assets/imgs/wokermashine.png',
        tital: 'Automation',
        text: '  Advanced Research In Material Science'
      },
      {
        img: '../../../assets/imgs/wokerworking.png',
        tital: 'Infrastructure',
        text: '  Workplace Safety Enhancement Initiative'
      },
      {
        img: '../../../assets/imgs/wokerworking.png',
        tital: 'Infrastructure',
        text: ' Robotic Process Automation Deployment '
      },
    ]
   }
  constructor() { }

}
