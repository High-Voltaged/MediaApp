import { API_URLS } from "./api_urls";
// import IUser from '../interfaces/unknown';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export namespace API_UTILS {

   export async function getUserInfo(user_id: number): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.get_user_info_url, JSON.stringify({ user_id: user_id }));

      return result;
   
   }

   export async function processLogin(username: string, password: string): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.login_url, JSON.stringify({ username: username, password: password }));

      return result;

   }

   export async function processLogout(): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.logout_url);

      return result;

   }

   export async function processRegister(username: string, email: string, password: string, gender: string, age: number, biography: string): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.register_url, JSON.stringify({
         username: username,
         email: email,
         password: password,
         gender: gender,
         age: age,
         biography: biography,
      }));

      return result;

   }

   export async function processRecovery(email: string): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.request_recovery_url, JSON.stringify({ email: email }));

      return result;

   }

   export async function processUsernameChange(username: string): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.change_username_url, JSON.stringify({ username: username })); 

      return result;

   }

   export async function processEmailChange(email: string): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.change_email_url, JSON.stringify({ email: email })); 

      return result;

   }

   export async function processPasswordChange(password: string): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.change_password_url, JSON.stringify({ password: password })); 

      return result;

   }

   export async function processAvatarChange(formData: FormData): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.change_avatar_url, formData); 

      return result;

   }

   export async function processSendLike(): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.send_like_url, JSON.stringify({ like: true })); // determine what object to send 

      return result; 

   }

   export async function processSendUnlike(): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.send_unlike_url, JSON.stringify({ unlike: true })); // determine what object to send 

      return result; 

   }

    // Checkers

   export async function isUsernameAvailable(username: string): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.is_username_available_url, JSON.stringify({ username: username }));

      return result;

   }

   export async function isEmailAvailable(email: string): Promise<AxiosResponse<String>> {

      let result = await axios.post(API_URLS.is_email_available_url, JSON.stringify({ email: email }));

      return result;

   }

}

export default API_UTILS;