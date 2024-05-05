/* tslint:disable */
/* eslint-disable */
import { AutowireCapableBeanFactory } from '../models/autowire-capable-bean-factory';
import { BeanFactory } from '../models/bean-factory';
import { Environment } from '../models/environment';
export interface ApplicationContext {
  applicationName?: string;
  autowireCapableBeanFactory?: AutowireCapableBeanFactory;
  beanDefinitionCount?: number;
  beanDefinitionNames?: Array<string>;
  classLoader?: {
'name'?: string;
'registeredAsParallelCapable'?: boolean;
'parent'?: {
'name'?: string;
'registeredAsParallelCapable'?: boolean;
'unnamedModule'?: {
'name'?: string;
'classLoader'?: {
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
'descriptor'?: {
'open'?: boolean;
'automatic'?: boolean;
};
'named'?: boolean;
'annotations'?: Array<{
}>;
'declaredAnnotations'?: Array<{
}>;
'packages'?: Array<string>;
'nativeAccessEnabled'?: boolean;
'layer'?: {
};
};
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
'unnamedModule'?: {
'name'?: string;
'classLoader'?: {
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
'descriptor'?: {
'open'?: boolean;
'automatic'?: boolean;
};
'named'?: boolean;
'annotations'?: Array<{
}>;
'declaredAnnotations'?: Array<{
}>;
'packages'?: Array<string>;
'nativeAccessEnabled'?: boolean;
'layer'?: {
};
};
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
  displayName?: string;
  environment?: Environment;
  id?: string;
  parent?: ApplicationContext;
  parentBeanFactory?: BeanFactory;
  startupDate?: number;
}
