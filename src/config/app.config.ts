interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Web Developer'],
  customerRoles: [],
  tenantRoles: ['Web Developer'],
  tenantName: 'Organization',
  applicationName: 'Design Cubicles',
  addOns: [],
};
