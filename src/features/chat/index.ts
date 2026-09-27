/**
 * Real-time Messaging & Chat Module
 */
export interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: string;
}
