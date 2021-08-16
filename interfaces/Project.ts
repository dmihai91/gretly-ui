import { LambdaFunction } from './LambdaFunction';
import { Template } from './Template';

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  createdDate: Date;
  modifiedDate: Date;
  previewImg: string;
  template: Template;
  htmlContent: string;
  lambaFunctions: LambdaFunction[];
  isPrivate: boolean;
}
