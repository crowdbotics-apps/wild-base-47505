import axios from "axios"
const wildbaseAPI = axios.create({
  baseURL: "https://worldstreamer-47505.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return wildbaseAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return wildbaseAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return wildbaseAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return wildbaseAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return wildbaseAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return wildbaseAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return wildbaseAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return wildbaseAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return wildbaseAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return wildbaseAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return wildbaseAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return wildbaseAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return wildbaseAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return wildbaseAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
