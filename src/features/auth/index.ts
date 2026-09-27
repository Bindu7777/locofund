/**
 * Authentication Module
 * Handles login, registration, OTP verification, and role selection state.
 */

export type UserRole = 'business' | 'investor' | 'contributor' | null;

export interface AuthState {
  userRole: UserRole;
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  userRole: null,
  isLoggedIn: false,
};
