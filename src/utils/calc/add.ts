/*
 * @Author       : cuiguiming
 * @Date         : 2023-03-15 17:44:04
 * @LastEditors  : 崔桂铭
 * @LastEditTime : 2023-03-15 17:44:05
 * @Description  : Description
 */

function add(...args: number[]) {
	return args.reduce((ac, cur) => ac + cur)
  }
  
  export default add;