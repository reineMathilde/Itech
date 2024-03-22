import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { AnalysisServiceService } from 'src/app/services/analysis-service.service';

@Component({
  selector: 'app-analysis-component',
  templateUrl: './analysis-component.component.html',
  styleUrls: ['./analysis-component.component.css']
})
export class AnalysisComponentComponent {

  constructor(private analysisService: AnalysisServiceService) { }


  public chart: any;
  //stocker les données dans un tableau 
  public chartData: number[] = []; 


  ngOnInit(): void {
    this.analysisService.getAnalysisInferieurmill().subscribe(count => {
      this.chartData.push(count);
    });

    this.analysisService.getAnalysisInferieurll().subscribe(count => {
      this.chartData.push(count);
    });


    this.analysisService.getAnalysisSuperieuregal().subscribe(count => {
      this.chartData.push(count);
    });
 

    this.analysisService.getAnalysisViraleLoadInvalide().subscribe(count => {
      this.chartData.push(count);
    });


    this.RenderChart();
  }




  RenderChart(){

    
    const myChart = new Chart("barchart", {
      type: 'pie',
        data: {
           labels:['<1000 copies/ml', '<LL', '>=1000 copies/ml', 'Invalides'],
            datasets: [{
                label: '# of Votes',
                data: this.chartData,
                backgroundColor: [
                    'green',
                    'Yellow',
                    'blue',
                    'white',
                   
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
             
         }
     });

    }
   









  

}
