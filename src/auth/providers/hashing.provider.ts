import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingProvider {
   abstract hashPasswords(data: string | Buffer): Promise<string>;
   abstract comparePasswords(
    data: string | Buffer,
    encrypted: string
   ): Promise<boolean>;
}
