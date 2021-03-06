const log = {}

/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
function typeColor(type = 'default') {
  let color = ''
  switch (type) {
    case 'default': color = '#35495E'; break
    case 'primary': color = '#3488FF'; break
    case 'success': color = '#43B883'; break
    case 'warning': color = '#E6A23C'; break
    case 'danger': color = '#F56C6C'; break
    default:
      break
  }
  return color
}

/**
 * @description 打印一个欢迎信息
 * @param {String} info info text
 */
log.welcome = (info) => {
  console.log(
    '%cCareyShop',
    'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 64px; color: #00bbee; -webkit-text-fill-color: #00bbee; -webkit-text-stroke: 1px #00bbee;'
  )

  console.log(
    `%cAdmin-${info} Copyright \xa9 宁波互明科技有限公司 All rights reserved.`,
    'color: #999999;'
  )

  console.log('Web https://www.careyshop.cn/')
  console.log('Doc https://doc.careyshop.cn/')
}

/**
 * @description 打印一个 [ title | text ] 样式的信息
 * @param {String} title title text
 * @param {String} info info text
 * @param {String} type style
 */
log.capsule = (title, info, type = 'primary') => {
  console.log(
    `%c ${title} %c ${info} %c`,
    'background: #35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #FFF;',
    `background: ${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFF;`,
    'background: transparent'
  )
}

/**
 * @description 打印彩色文字
 */
log.colorful = (textArr) => {
  console.log(
    `%c${textArr.map(t => t.text || '').join('%c')}`,
    ...textArr.map(t => `color: ${typeColor(t.type)};`)
  )
}

/**
 * @description 打印 default 样式的文字
 */
log.default = (text) => {
  log.colorful([{ text }])
}

/**
 * @description 打印 primary 样式的文字
 */
log.primary = (text) => {
  log.colorful([{ text, type: 'primary' }])
}

/**
 * @description 打印 success 样式的文字
 */
log.success = (text) => {
  log.colorful([{ text, type: 'success' }])
}

/**
 * @description 打印 warning 样式的文字
 */
log.warning = (text) => {
  log.colorful([{ text, type: 'warning' }])
}

/**
 * @description 打印 danger 样式的文字
 */
log.danger = (text) => {
  log.colorful([{ text, type: 'danger' }])
}

export default log
