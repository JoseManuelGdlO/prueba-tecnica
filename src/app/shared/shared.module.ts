import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomeRoutingModule } from "../modules/home/home-routing.module";
import { HeadlinesComponent } from "./components/headlines/headlines.component";

@NgModule({
    declarations: [
        HeadlinesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        HeadlinesComponent,
    ]
  })
  export class SharedModule { } 