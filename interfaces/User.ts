interface Value {
  id: string;
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

interface Education {
  type: string;
  domain: string;
  institution: string;
}

interface CompanyInfo {
  country: string;
  vatNumber: string;
}

interface Role {
  id: string;
  name: string;
  permissions: Permission[];
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
  type: number;
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
}
