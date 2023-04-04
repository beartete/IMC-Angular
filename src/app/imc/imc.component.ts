import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  altura: number = 0;
  peso: number = 0;
  imc: number | undefined;
  situacao: string | undefined;

  calcularIMC() {
    if (this.altura <= 0 || this.peso <= 0) {
      this.imc = undefined;
      this.situacao = undefined;
      return;
    }

    this.imc = this.peso / (this.altura * this.altura);
    if (this.imc < 18.5) {
      this.situacao = 'Abaixo do peso';
    } else if (this.imc < 25) {
      this.situacao = 'Peso normal';
    } else if (this.imc < 30) {
      this.situacao = 'Acima do peso';
    } else {
      this.situacao = 'Obeso';
    }
  }

  limparInputs() {
    this.altura = 0;
    this.peso = 0;
    this.imc = undefined;
    this.situacao = undefined;
  }
}

