import {NgModule} from "@angular/core";
import {ShortenerToolComponent} from "./components/shortenerTool.component";
import {EffectsModule} from "@ngrx/effects";
import {ShortenerToolEffects} from "./store/effects/shortenerTool.effects";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./store/shortenerTool.reducer";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ShortenerToolComponent
  ],
  imports: [
    EffectsModule.forFeature([ShortenerToolEffects]),
    StoreModule.forFeature("shortenerTool", reducer),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ShortenerToolComponent
  ],
  providers: [],
})

export class ShortenerToolModule {}
