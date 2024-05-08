/* tslint:disable */
/* eslint-disable */
import { UpdatePasswordRequest } from '../models/update-password-request';
import { UserUpdatePwdRequest } from '../models/user-update-pwd-request';
export interface CombinedPasswordUpdateDto {
  updatePasswordRequest?: UpdatePasswordRequest;
  userUpdatePasswordRequest?: UserUpdatePwdRequest;
}
