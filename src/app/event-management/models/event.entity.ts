export class EventEntity {
  id: number;
  name: string;
  description: string;
  scheduledAt: string;
  checkedIndAttendees?: number;
  averageRating?: number;

  constructor(event: {
    id?: number,
    name?: string,
    description?: string,
    scheduledAt?: string,
    registeredAttendees?: number,
    attendeesPercentage?: number
  }) {
    this.id = event.id || 0;
    this.name = event.name || '';
    this.description = event.description || '';
    this.scheduledAt = event.scheduledAt || '';
    this.checkedIndAttendees = event.registeredAttendees || 0;
    this.averageRating = event.attendeesPercentage || 0;
  }
}

