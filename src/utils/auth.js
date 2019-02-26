import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getLocalStoragePcode () {
  return localStorage.pcode
}

export function setLocalStoragePcode (pcode) {
  return (localStorage.pcode = pcode)
}

export function getLocalStorageTcode () {
  return localStorage.tcode
}

export function setLocalStorageTcode (tcode) {
  return (localStorage.tcode = tcode)
}
