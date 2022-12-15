import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'test',
    content: new Content('You got a new test notification.'),
    recipientId: 'recipient-2',
    ...override,
  });
}
