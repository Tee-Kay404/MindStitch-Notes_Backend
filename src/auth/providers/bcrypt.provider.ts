import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptProvider implements HashingProvider {
   async  hashPasswords(data: string | Buffer): Promise<string> {
        // Generate Salt
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(data, salt);
    }
    comparePasswords(data: string | Buffer, encrypted: string): Promise<boolean> {
        return bcrypt.compare(data, encrypted);
    }
     
}
