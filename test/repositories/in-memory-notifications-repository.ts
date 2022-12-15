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

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}
