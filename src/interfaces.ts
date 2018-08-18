
export type KawkahParserType = keyof IKawkahParserToTypes;
export type KawkahParserTypeHandler<T> = (val: any) => T;

export interface IKawkahParserToTypes {
  string: KawkahParserTypeHandler<string>;
  boolean: KawkahParserTypeHandler<boolean>;
  number: KawkahParserTypeHandler<number>;
  array: KawkahParserTypeHandler<any[]>;
}

export interface IKawkahParserIsType {
  string: KawkahParserTypeHandler<boolean>;
  boolean: KawkahParserTypeHandler<boolean>;
  number: KawkahParserTypeHandler<boolean>;
  array: KawkahParserTypeHandler<boolean>;
}

export interface IKawkahParserOption {
  readonly anon?: boolean; // used internally.
  readonly name?: string; // used internally.
  index?: number; // positional option.
  type?: KawkahParserType;
  alias?: string | string[];
  variadic?: number | boolean;
  default?: any;
}

export interface IKawkahParserOptions {
  [key: string]: IKawkahParserOption | KawkahParserType;
}

// MAIN INTERFACES //

export interface IKawkahParsedArg {

  index?: number;
  key?: string | number;
  value?: any;

  isFlag?: boolean;
  isFlagNegate?: boolean;
  isFlagBool?: boolean;
  isFlagWithValue?: boolean;
  isVariadic?: number | boolean;

  ingest?: boolean;
  ingestable?: boolean;

  config?: IKawkahParserOption;

}

export interface IKawhakParserBaseOptions {

  charVariadic?: string;
  charAbort?: string;
  charNegate?: string;
  allowParseBooleans?: boolean;
  allowParseNumbers?: boolean;
  allowCamelcase?: boolean;
  allowShortExpand?: boolean;
  allowShortValues?: boolean;
  allowDuplicateOptions?: boolean;
  allowDotNotation?: boolean;
  allowBoolNegation?: boolean;
  allowVariadics?: boolean;
  allowCountOptions?: boolean;
  allowAnonymous?: boolean;

  allowAliases?: boolean;
  allowPlaceholderArgs?: boolean;
  allowPlaceholderOptions?: boolean;
  allowExtendArgs?: boolean;

}

export interface IKawhakParserOptions extends IKawhakParserBaseOptions {
  options?: IKawkahParserOptions;
  onParserError?: (err: Error, template?: string, args?: any[]) => void;
}

export interface IKawkahParserResult {
  _?: any[];
  __?: any[];
  [option: string]: any;
}