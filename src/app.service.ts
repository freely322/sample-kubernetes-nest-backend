import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `G2O! env: ${process.env.ENV} pod ip: ${process.env.POD_IP}; time: ${new Date()}`;
  }
}
