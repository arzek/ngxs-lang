import { State, Action, StateContext } from '@ngxs/store';
import { LoadLang, ChangeLang, SuccessLoadLang } from '../action/LangAction';
import { LangService } from '../../service/lang.service';

export class LangModel {
  currentLang: string = 'ua';
  private _langs: string[];
  private _texts: Object;
  
  set texts(value: Object) {
    this._texts = value;
  }
  
  get langs(): string[] {
    return this._langs;
  }

  set langs(value: string[]) {
    this._langs = value;
  }

  public getText(alias: string) {
    return alias;
  }

}

@State<LangModel>({
  name: 'lang',
  defaults: new LangModel()
})
export class LangState {

  constructor(private langService: LangService) {}

  @Action(LoadLang)
  load(store: StateContext<LangModel>, action: LoadLang) {
    this.langService.load().subscribe(data => {
      return store.dispatch(new SuccessLoadLang(data))
    })
  }

  @Action(SuccessLoadLang)
  succcessLoad(store: StateContext<LangModel>, action: SuccessLoadLang) {
    let state = store.getState();
    state.texts = action.payload.texts;
    state.langs = action.payload.langs;
    store.patchState(state);
  }

  @Action(ChangeLang)
  change(store: StateContext<LangModel>, action: ChangeLang) {
    let state = store.getState();
    state.currentLang  = action.payload;
    store.patchState(state);
  }

}