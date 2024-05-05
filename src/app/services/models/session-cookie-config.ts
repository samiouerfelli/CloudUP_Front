/* tslint:disable */
/* eslint-disable */
export interface SessionCookieConfig {
  attributes?: {
[key: string]: string;
};
  /** @deprecated */comment?: string;
  domain?: string;
  httpOnly?: boolean;
  maxAge?: number;
  name?: string;
  path?: string;
  secure?: boolean;
}
