import Storage from '../storage';
import { DEFAULT_USERS, AUTH_STORAGE_KEY, USER_STORAGE_KEY } from '../constants';

export default function loginUser() {
  Storage.set(AUTH_STORAGE_KEY, true);
  Storage.set(USER_STORAGE_KEY, DEFAULT_USERS['wizeline']);
}