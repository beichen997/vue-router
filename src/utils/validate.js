/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername (str) {
  const validmap = ['admin', 'editor', '18721638688']
  return validmap.indexOf(str.trim()) >= 0
}

/**
 * 检查是否是合法URL
 * @param {String} str 输入的URL
 * @returns {Boolean}
 */
export function validateURL (str) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(str)
}

// 计算中文和非中文的字符个数
export function count (str) {
  let len = 0
  if (str) {
    str.split('').forEach(item => {
      const reg = /[\u4e00-\u9fa5]+/
      if (reg.test(item)) {
        len += 3
      } else {
        len += 1
      }
    })
    return len
  }
}

/**
 * 检查是否是小写字母
 * @param {String} str 输入的文本内容
 * @returns {Boolean}
 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 检查用户名
 * @param {String} str 输入的文本内容
 * @returns {Boolean}
 */
export function validateUserName (str) {
  const reg = /^[a-zA-Z]\w{1,50}$/
  return reg.test(str)
}

/**
 * 检查是否是大写字母9
 * @param {String} str 输入的文本内容
 * @returns {Boolean}
 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 *  检查是否是大小写字母
 * @param {String} str 输入的文本内容
 * @returns {Boolean}
 */
export function validateAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 检查是否是Email
 * @param {String} str 输入的文本内容
 * @returns {boolean}
 */
export function validateEmail (str) {
  /* eslint-disable */
  const re = /^\w{2,32}@\w{2,14}\.(com|cn|net|com\.cn)$/
  return re.test(str)
}

/**
 * 检查手机号码
 * @param {String} str 输入的手机号
 * @returns {Boolean}
 */

export function validatePhoneUser(str) {
  const reg = /^[1][3,4,5,7,8][0-9]{9}$/
  return reg.test(str)
}

/**
 * 检查密码
 * @param {String} str 输入的密码
 * @returns {Boolean}
 */
export function validatePassword(str) {
  const reg = /^[a-zA-Z0-9]{8,20}$/
  return reg.test(str)
}

/**
 * 检查军官证
 * @param {String} str 输入的军官证
 * @returns {Boolean}
 */
export function validatecome(str) {
  const filter_jg = /^[a-zA-Z0-9]{7,21}$/
  return filter_jg.test(str)

}

/**
 * 检查护照
 * @param {String} str 输入的护照
 * @returns {Boolean}
 */
export function validatepassport(str) {
  const filter_hz = /^[a-zA-Z0-9]{3,21}$/
  return filter_hz.test(str)
}

/**
 * 检查身份证
 * @param {String} str 输入的身份证
 * @returns {Boolean}
 */
export function validateIdcard(str) { //
  var reg = /\d{6}(19|20)\d{2}((0[13578]|1[02])(0[1-9]|[12]\d{1}|3[01])|(0[469]|11)(0[1-9]|[12]\d{1}|30)|(02(0[1-9]|[12][0-9])))\d{3}[0-9Xx]/
  return reg.test(str)
}

/**
 * 检查港澳通行证
 * @param {String} str 输入的港澳通行证
 * @returns {Boolean}
 */
export function validateHkongMacao(str) { //
  var reg = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/
  return reg.test(str)
}

/**
 * 检查手机号码位数
 * @param {String} str 输入的用户账号
 * @returns {Boolean}
 */

export function validatePassUser(str) {
  const reg = /^[0-9]{11}$/
  return reg.test(str)
}

/**
 * 检查验证码
 * @param {String} str 输入的验证码
 * @returns {Boolean}
 */
export function validateAuthCode(str) {
  return str.length === 4
}

/**
 * 检查密码
 * @param {String} str 输入的密码
 * @returns {Boolean}
 */
export function validatePassLegal(str) {
  return str.length >= 8 && str.length <= 20
}

/**
 * 检查确认密码
 * @param {String} str 输入的确认密码
 * @returns {Boolean}
 */
export function validatePassCheckLegal(str, value) {
  // 确认密码再次验证
  return str === value
}

/**
 * 检查姓名
 * @param {String} str 输入的姓名
 * @returns {Boolean}
 */
export function userName(str) {
  const reg = /^[\u4e00-\u9fa5]{2,10}$/
  return reg.test(str)
}

/**
 * 检查人数
 * @param {String} str 输入的人数
 * @returns {Boolean}
 */
export function personNumber(str) {
  // 确认人数
  const reg = /^\+?[1-9][0-9]*$/
  return reg.test(str)
}

/**
 * 检查输入数字并且最多允许小数点两位
 * @param {String} str 输入的金额
 * @returns {Boolean}
 */
export function money(str) {
  const reg = /^[0-9]{1}[0-9]{0,11}(\.[0-9]{0,2}|)$/
  return reg.test(str)
}

/**
 * 检查输入邮政编码
 * @param {String} str 输入的邮政编码
 * @returns {Boolean}
 */
export function zipCode(str) {
  const reg = /^[0-9]{6}$/
  return reg.test(str)
}

/**
 * 检查输入固定电话
 * @param {String} str 输入的固定电话
 * @returns {Boolean}
 */
export function telPhone(str) {
  const reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
  return reg.test(str)
}
/**
 * 检查输入银行卡账号
 * @param {String} str 银行卡账号
 * @returns {Boolean}
 */
export function banknumber(str) {
  const reg = /^([1-9]{1})(\d{14}|\d{18})$/
  return reg.test(str)
}
/**
 * 检查输入传真号码
 * @param {String} str 传真
 * @returns {Boolean}
 */
export function fax(str) {
  const reg = /^([0-9]{2,3}-)?([0-9]{3,4}-)?([0-9]{7,8})$/
  return reg.test(str)
}
/**
 * 检查输入百分比
 * @param {String} str 百分比
 * @returns {Boolean}
 */
export function percentage(str) {
  const reg = /^(100|([1-9]?[0-9]{1}))(\.[0-9]{0,2})?$/
  return reg.test(str)
}
