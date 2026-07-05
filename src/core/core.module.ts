import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { AppExceptionFilter } from './errors/app-exception.filter';
import { HealthModule } from './health/health.module';
import { RateLimitModule } from './rate-limit/rate-limit.module';

/**
 * Cross-cutting wiring: the global exception filter, the rate-limit module
 * (which applies its own global guard), and the health endpoint.
 */
@Module({
  imports: [HealthModule, RateLimitModule],
  providers: [{ provide: APP_FILTER, useClass: AppExceptionFilter }],
})
export class CoreModule {}
