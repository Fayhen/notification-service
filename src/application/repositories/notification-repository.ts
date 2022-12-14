import { Notification } from '../entities/notification';

/**
 * Abstract repository class to the Notification entity.
 *
 * A repository is a layer between application and database, bridging
 * both.
 */
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
