import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

/**
 * Mock implementation of a database.
 */
const notifications: Notification[] = [];

/**
 * Mock implementation of the NotificationRepository abstract class.
 */
const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'You received a test notification',
      category: 'test',
      recipientId: 'example-recipient-id',
    });

    expect(notifications).toHaveLength(1);
  });
});
