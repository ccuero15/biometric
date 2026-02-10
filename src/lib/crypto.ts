import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const SECRET_KEY = process.env.ENCRYPTION_KEY || 'default_secret_key_32_characters_';

export function encrypt(data: Buffer): { encryptedData: string; iv: string } {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(SECRET_KEY), iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([ encrypted, cipher.final() ]);
    return {
        encryptedData: encrypted.toString('hex'),
        iv: iv.toString('hex')
    };
}

export function decrypt(encryptedData: string, iv: string): Buffer {
    const decipher = crypto.createDecipheriv(
        ALGORITHM,
        Buffer.from(SECRET_KEY),
        Buffer.from(iv, 'hex')
    );
    let decrypted = decipher.update(Buffer.from(encryptedData, 'hex'));
    decrypted = Buffer.concat([ decrypted, decipher.final() ]);
    return decrypted;
}
