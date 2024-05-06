/* tslint:disable */
/* eslint-disable */
import { JspPropertyGroupDescriptor } from '../models/jsp-property-group-descriptor';
import { TaglibDescriptor } from '../models/taglib-descriptor';
export interface JspConfigDescriptor {
  jspPropertyGroups?: Array<JspPropertyGroupDescriptor>;
  taglibs?: Array<TaglibDescriptor>;
}
