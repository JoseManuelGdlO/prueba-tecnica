import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomeRoutingModule } from "../modules/home/home-routing.module";
import { HeadlinesComponent } from "./components/headlines/headlines.component";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseConnectionService } from "./services/firebase-connection";

@NgModule({
    declarations: [
        HeadlinesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        AngularFirestoreModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        FirebaseConnectionService
    ],
    exports: [
        HeadlinesComponent,
    ]
  })
  export class SharedModule { } 