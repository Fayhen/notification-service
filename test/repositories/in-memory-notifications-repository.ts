import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notification-repository';

/**
 * In-memory implementation of the NotificationsRepository class for
 * use in test suites.
 */
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  /**
   * Mock implementation of a database.
   */
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
