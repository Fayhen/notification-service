import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('You received a test notification'),
      category: 'test',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});