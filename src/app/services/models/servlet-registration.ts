/* tslint:disable */
/* eslint-disable */
export interface ServletRegistration {
  className?: string;
  initParameters?: {
[key: string]: string;
};
  mappings?: Array<string>;
  name?: string;
  runAsRole?: string;
}
