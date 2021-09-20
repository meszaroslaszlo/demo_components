import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { ThirdComponent } from './third/third.component';
import { VievChildExampleComponent } from './viev-child-example/viev-child-example.component';
import { FormWithModelComponent } from './form-with-model/form-with-model.component';
import { FormWithReactFormComponent } from './form-with-react-form/form-with-react-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent,
    ThirdComponent,
    VievChildExampleComponent,
    FormWithModelComponent,
    FormWithReactFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
