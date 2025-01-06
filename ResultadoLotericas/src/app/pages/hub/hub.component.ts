import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
@Component({
  selector: 'app-hub',
  standalone: false,
  
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.scss'
})
export class HubComponent {
  selectedValue: string = 'megasena';
  selectName: string = 'megasena';
  concurso: string = '';
  data: string = '';
  dezenasOrdemSorteio: string[] = [];
  premicoes: any[] = [];
  acumulou: boolean = false;
  proximoConcurso: number = 0;
  dataProximoConcurso: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  updateSelectName() {
    this.selectName = this.selectedValue;
    this.fetchData();
  }

  fetchData() {
    const apiUrl = `https://loteriascaixa-api.herokuapp.com/api/${this.selectedValue}/latest`;
    this.http.get<any>(apiUrl).subscribe(
      (data) => {
        this.concurso = data.concurso;
        this.data = data.data;
        this.dezenasOrdemSorteio = data.dezenasOrdemSorteio;
        this.premicoes = data.premiacoes;
        this.acumulou = data.acumulou;
        this.proximoConcurso = data.proximoConcurso;
        this.dataProximoConcurso = data.dataProximoConcurso;
      },
      (error) => {
        console.error('Erro ao buscar dados da API:', error);
      }
    );
  }
}