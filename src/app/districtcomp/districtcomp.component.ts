import { Component, OnInit} from '@angular/core';
import { DistrictServiceService } from '../services/districtService/district-service.service';
import { District, Region } from '../models/Models';
import  Chart  from 'chart.js/auto';


@Component({
  selector: 'app-districtcomp',
  templateUrl: './districtcomp.component.html',
  styleUrls: ['./districtcomp.component.css']
})
export class DistrictcompComponent implements OnInit {
  districtNames: Region[]=[];

  constructor(private districtService: DistrictServiceService) { }


  ngOnInit(): void {
    this.districtService.getDistrictNames().subscribe((data:any)=>
    {
      this.districtNames=data.datas;
    });
    
    this.RenderChart();

    this.RadaChart();



  }

   RenderChart(){ 


 const myChart = new Chart("piechart", {
   type: 'bar',
     data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
         datasets: [{
             label: '# of Votes',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
       options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

 
  }




  
  RadaChart(){ 


    const myChart = new Chart("barchart", {
      type: 'pie',
        data: {
           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                 borderColor: [
                     'rgba(255, 99, 132, 1)',
                     'rgba(54, 162, 235, 1)',
                     'rgba(255, 206, 86, 1)',
                     'rgba(75, 192, 192, 1)',
                     'rgba(153, 102, 255, 1)',
                     'rgba(255, 159, 64, 1)'
                 ],
                 borderWidth: 1
             }]
         },
          options: {
             scales: {
                 y: {
                     beginAtZero: true
                 }
             }
         }
     });

    }
   


}
