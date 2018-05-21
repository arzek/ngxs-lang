import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { LoadLang, ChangeLang } from './store/action/LangAction';
import { LangState, LangModel } from './store/state/LangState';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  @Select(LangState) lang$: Observable<LangModel>;
  storeSub: Subscription;
  
  constructor(private store: Store) {
    this.store.dispatch(new LoadLang());
  }
  ngOnInit() {
    this.storeSub = this.lang$.subscribe( (state: LangModel) => {
      console.log('Change State');
    });
  }
  changeLang(event: Event) {
    this.store.dispatch(new ChangeLang(event.target['value']))
  }
}
