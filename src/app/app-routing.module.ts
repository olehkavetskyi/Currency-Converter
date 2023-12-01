import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  getCurrencyOptions = async () => {
    const response = await fetch('https://api.exchangerate.host/symbols')
    const json: any = response.json();

    return json.symbols;
  }
}
