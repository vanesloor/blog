import { Component } from '@angular/core';

export class Skill {
    public name: string = "";
    public level: string = ""; 
    public image?: string = ""; 
}
@Component({
  selector: 'resume',
  standalone: false,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

    skills: Skill[] =[];
    skills2: Skill[] =[];
    responsiveOptions: any[] = [];
    
    ngOnInit(): void {
       this.skills = [
            { 
                name: 'Angular', 
                level: 'Expert',
                image: "https://dac.digital/wp-content/uploads/2023/05/angular-logo-1-optimized.png" 
            },
            { 
                name: 'C#', 
                level: 'Expert',
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1200px-C_Sharp_Logo_2023.svg.png"
            },
            {
                name:"SQL Server",
                level: 'Expert',
                image:"https://brandlogos.net/wp-content/uploads/2025/03/microsoft_sql_server-logo_brandlogos.net_wykhq.png"
            },
            {
                name:"Cosmos DB",
                level: 'Intermediate',
                image:"https://avatars.githubusercontent.com/u/33746873?s=280&v=4"
            },
            { 
                name: 'TypeScript', 
                level: 'Expert',
                image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ECIB6yKLHi2pzmAPtrB_e_hQv2WuPbez3g&s"
            },
            {
               name: '.NET Core',
               level:"Expert",
               image:"https://aps.autodesk.com/sites/default/files/2019-04/1200px-.net_core_logo.svg.png"
            },
            {
                name: 'Azure DevOps',
                level:"Expert",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIoJW54jx4oPR7Y5N7Gd9lI7EXlnR0JqI-w&s"
             },
            { 
                name: 'JavaScript', 
                level: 'Expert',
                image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},
            { 
                name: 'HTML', 
                level: 'Expert',
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png"},
            { 
                name: 'CSS', 
                level: 'Expert', 
                image:"https://pngdownload.io/wp-content/uploads/2023/12/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg.webp"
            },
            { 
                name: 'Git', 
                level: 'Expert',
                image:"https://miro.medium.com/v2/resize:fit:383/0*5g3mp6zgIoqprOgV.png"
            },
       ];

       this.skills2 =[
        { name: 'RESTful APIs', level: 'Intermediate' },
        { name: 'Agile Methodologies', level: 'Intermediate' },
        { name: 'Responsive Design', level: 'Expert' } 
       ];

       this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ]
    }
   
}