/**
 * LocoFund Local Database & Persistence Abstraction Layer
 */

export interface UserSession {
  role: 'business' | 'investor' | null;
  isAuthenticated: boolean;
}

export const storage = {
  getItem: async (key: string): Promise<string | null> => {
    return null;
  },
  setItem: async (key: string, value: string): Promise<void> => {},
  removeItem: async (key: string): Promise<void> => {},
};
