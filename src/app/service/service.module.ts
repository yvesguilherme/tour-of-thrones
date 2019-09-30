import { NgModule } from '@angular/core';
import { IceAndFireService } from './ice-and-fire.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [IceAndFireService],
    };
  }
}

export { IceAndFireService }