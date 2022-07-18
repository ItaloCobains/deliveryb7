
export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
}

export const UseApi = () => ({


  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case 'b7burguer':
        return {
          name: 'B7burguer',
          mainColor: '#FF0000',
          secondColor: '#00ff00'
        }
        break;

      case 'b7pizza':
        return {
          name: 'B7pizza',
          mainColor: '#0000ff',
          secondColor: '#ff0000'
        }
        break;

      default: return false;
    }
  }

});
