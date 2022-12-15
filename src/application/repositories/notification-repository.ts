import { Notification } from '../entities/notification';

/**
 * Abstract repository class to the Notification entity.
 *
 * A repository is a layer between application and database, bridging
 * both.
 */
export abstract class NotificationsRepository {
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract create(notification: Notification): Promise<void>;
  abstract save(notification: Notification): Promise<void>;
}
