import {
  Controller, Get, Param, Body,
} from '@nestjs/common';
import { AppService } from './app.service';

class Test {
  public test(
  @Body()
    tests: string,
    bbb: string,
  ) {
    return tests + bbb;
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(
  @Body()
    body: any,
    @Param()
    test: any,
    @Param()
    test2: any,
    @Param()
    test3: any,
  ) {
    return this
      .appService
      .getHello();
  }
}
