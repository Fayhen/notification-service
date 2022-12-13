import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PostmarMailService implements MailService {
  sendEmail(): string {
    return 'Postmark Mail!';
  }
}
