export const programmes = [
  { id: 'community', name: 'Community Day', durationDays: 1, prerequisite: null },
  { id: 'compact', name: 'Compact Workshop', durationDays: 2, prerequisite: null },
  { id: 'fundamental', name: 'Fundamental Movement', durationDays: 7, prerequisite: null },
  { id: 'structured', name: 'Structured Movement', durationDays: 7, prerequisite: 'fundamental' },
] as const
export type ProgrammeId = typeof programmes[number]['id']
export interface WorkshopEvent {
  id: string; programmeId: ProgrammeId; startsAt: string; endsAt: string;
  location: string; feeVnd: number | null; status: 'open' | 'full';
}
