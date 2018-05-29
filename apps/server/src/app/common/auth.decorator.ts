import { ReflectMetadata } from '@nestjs/common';

export const NoAuth = (exposed: boolean) => ReflectMetadata('exposed', exposed);