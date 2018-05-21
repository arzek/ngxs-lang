
export class LoadLang {
  static readonly type = 'LOAD_LANG';
}

export class ChangeLang {
  static readonly type = 'CHANGE_LANG'
  constructor (public payload: string) {}
}

export class SuccessLoadLang {
  static readonly type = '[LANG API] Success';
  constructor (public payload: SuccessLoadLangRes) {}
}

export interface SuccessLoadLangRes {
  langs: string[];
  texts: Object
}