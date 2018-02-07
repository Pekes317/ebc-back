import { ReflectMetadata } from '@nestjs/common';

export const Auth = (protect: boolean) => ReflectMetadata('protect', protect);