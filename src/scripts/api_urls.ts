export namespace API_URLS {

	let base_url: string = "http://18.232.165.125:80/";

	export let login_url: string = base_url + "login";

	export let logout_url: string = base_url + "logout";

	export let register_url: string = base_url + "register";

	export let send_like_url: string = base_url + "sendLike";

	export let send_unlike_url: string = base_url + "sendUnlike";

	export let get_user_info_url: string = base_url + "getUserInfo";

	export let unblock_user_url: string = base_url + "unblockUser";

	export let is_email_available_url: string = base_url + "isEmailAvailable";

	export let is_username_available_url: string = base_url + "isUsernameAvailable";

	export let request_recovery_url: string = base_url + "requestAccountRecovery";

	export let request_activation_url: string = base_url + "requestAccountActivation";

	export let change_username_url: string = base_url + "changeUsername";

	export let change_password_url: string = base_url + "changePassword";

	export let change_email_url: string = base_url + "changeEmail";

	export let change_avatar_url: string = base_url + "changeAvatar";

}