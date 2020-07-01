import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `pod ip: ${process.env.POD_IP} time: ${new Date()}`;
  }
}
