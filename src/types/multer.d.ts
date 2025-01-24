// src/types/multer.d.ts
declare namespace Express {
    export interface Request {
      file?: Express.Multer.File; // Adds the file property
    }
  }
  