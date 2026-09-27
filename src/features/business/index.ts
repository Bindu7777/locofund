/**
 * Business Domain Module
 * Manages business profiles, pitch decks, talent needs, and collaboration listings.
 */

export interface BusinessProfile {
  id: string;
  name: string;
  tagline: string;
  city: string;
  category: string;
}
