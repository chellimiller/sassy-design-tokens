export type SassdocItemType = 'function' | 'variable' | 'mixin' | 'placeholder';

export type SassdocItemLines = {
  start: number;
  end: number;
};

export type SassdocItemContext<T extends SassdocItemType = SassdocItemType> = {
  name: string;
  type: T;
  code: string;
  line: SassdocItemLines;
};

export type SassdocItemAccess = 'public' | 'private';

export type SassdocItemParameter = {
  type: string;
  name: string;
  default: string;
  description: string;
};
export type SassdocItemFile = {
  path: string;
  name: string;
};

export type SassdocItemRequire<T extends SassdocItemType = SassdocItemType> = {
  type: T;
  name: string;
};

export type SassdocItem<T extends SassdocItemType = SassdocItemType> = {
  description: string;
  commentRange: SassdocItemLines;
  context: SassdocItemContext<T>;
  access: SassdocItemAccess;
  group: string[];
  parameter: SassdocItemParameter[];
  file: SassdocItemFile;
  see: unknown[];
  require: SassdocItemRequire;
} & (T extends 'mixin' ? { returns?: undefined; output?: string } : never) &
  (T extends 'function' ? { returns?: string; output?: undefined } : never);
