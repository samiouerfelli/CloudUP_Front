/* tslint:disable */
/* eslint-disable */
export interface FilterRegistration {
  className?: string;
  initParameters?: {
[key: string]: string;
};
  name?: string;
  servletNameMappings?: Array<string>;
  urlPatternMappings?: Array<string>;
}
