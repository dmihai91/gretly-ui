import { AccountType } from './AccountType';

interface Education {
  type: string;
  domain: string;
  institution: string;
}

interface CompanyInfo {
  country: string;
  vatNumber: string;
  address: string;
}

interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

interface Permission {
  type: string;
  resource: string;
  value: number;
}

interface RoleRef {
  value: Value;
  id: string;
}

interface Value {
  id: string;
}

export interface User {
  id: string;
  roleRef: RoleRef;
  fBaseUserId: string;
  fbUserId: string;
  googleUserId: string;
  username: string;
  email: string;
  name: string;
  profilePicture: string;
  phoneNumber: string;
  country: string;
  createdAt: string;
  modifiedAt: string;
  lastLoggedIn: string;
  role: Role;
  verified: boolean;
  locked: boolean;
  companyInfo: CompanyInfo;
  education: Education;
  businessAccount: boolean;
  externalLink: string;
  isEnrolled: boolean;
  accountType: AccountType;
}
