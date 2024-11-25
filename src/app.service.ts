import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `G2O! env: ${process.env.ENV}; node name: ${process.env.NODE_NAME}; pod ip: ${process.env.POD_IP}; time: ${new Date()}`;
  }
}
