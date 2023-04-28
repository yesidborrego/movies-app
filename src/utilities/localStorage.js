import { EncryptStorage } from "storage-encryption";

const key = process.env.VUE_APP_LOCAL_STORAGE_ENCRYPT_SECRET;

export const LocalStorageEncrypt = new EncryptStorage(key, "localStorage");
