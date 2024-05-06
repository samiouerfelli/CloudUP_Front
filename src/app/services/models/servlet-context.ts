/* tslint:disable */
/* eslint-disable */
import { FilterRegistration } from '../models/filter-registration';
import { JspConfigDescriptor } from '../models/jsp-config-descriptor';
import { ServletRegistration } from '../models/servlet-registration';
import { SessionCookieConfig } from '../models/session-cookie-config';
export interface ServletContext {
  attributeNames?: {
};
  classLoader?: {
'name'?: string;
'registeredAsParallelCapable'?: boolean;
'definedPackages'?: Array<{
'name'?: string;
'annotations'?: Array<{
}>;
'declaredAnnotations'?: Array<{
}>;
'sealed'?: boolean;
'specificationTitle'?: string;
'specificationVersion'?: string;
'specificationVendor'?: string;
'implementationTitle'?: string;
'implementationVersion'?: string;
'implementationVendor'?: string;
}>;
'defaultAssertionStatus'?: boolean;
};
  contextPath?: string;
  defaultSessionTrackingModes?: Array<'COOKIE' | 'URL' | 'SSL'>;
  effectiveMajorVersion?: number;
  effectiveMinorVersion?: number;
  effectiveSessionTrackingModes?: Array<'COOKIE' | 'URL' | 'SSL'>;
  filterRegistrations?: {
[key: string]: FilterRegistration;
};
  initParameterNames?: {
};
  jspConfigDescriptor?: JspConfigDescriptor;
  majorVersion?: number;
  minorVersion?: number;
  requestCharacterEncoding?: string;
  responseCharacterEncoding?: string;
  serverInfo?: string;
  servletContextName?: string;
  servletRegistrations?: {
[key: string]: ServletRegistration;
};
  sessionCookieConfig?: SessionCookieConfig;
  sessionTimeout?: number;
  sessionTrackingModes?: Array<'COOKIE' | 'URL' | 'SSL'>;
  virtualServerName?: string;
}
