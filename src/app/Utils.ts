export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo?: Record<string, unknown>;
};

export function getStringInfo(arg: string): StringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: arg.split(''),
    length: arg.length,
    extraInfo: {},
  };
}
