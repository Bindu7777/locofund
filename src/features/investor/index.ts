/**
 * Investor & Contributor Domain Module
 * Handles investor preferences, skill contributions, and discovery feeds.
 */

export interface InvestorProfile {
  id: string;
  name: string;
  type: 'angel' | 'mentor' | 'collaborator' | 'contributor';
  interests: string[];
}
