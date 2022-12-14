import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'You received a test notification',
      category: 'test',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
