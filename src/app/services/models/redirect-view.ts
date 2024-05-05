/* tslint:disable */
/* eslint-disable */
import { ApplicationContext } from '../models/application-context';
import { HttpStatusCode } from '../models/http-status-code';
import { ServletContext } from '../models/servlet-context';
export interface RedirectView {
  applicationContext?: ApplicationContext;
  attributes?: {
[key: string]: string;
};
  attributesCSV?: string;
  attributesMap?: {
[key: string]: {
};
};
  beanName?: string;
  contentType?: string;
  contextRelative?: boolean;
  encodingScheme?: string;
  expandUriTemplateVariables?: boolean;
  exposeContextBeansAsAttributes?: boolean;
  exposeModelAttributes?: boolean;
  exposePathVariables?: boolean;
  exposedContextBeanNames?: Array<string>;
  hosts?: Array<string>;
  http10Compatible?: boolean;
  propagateQueryParams?: boolean;
  propagateQueryProperties?: boolean;
  redirectView?: boolean;
  requestContextAttribute?: string;
  servletContext?: ServletContext;
  staticAttributes?: {
[key: string]: {
};
};
  statusCode?: HttpStatusCode;
  url?: string;
}
