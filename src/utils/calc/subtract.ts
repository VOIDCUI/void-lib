/*
 * @Author       : cuiguiming
 * @Date         : 2023-03-15 17:44:51
 * @LastEditors  : 崔桂铭
 * @LastEditTime : 2023-03-15 17:44:52
 * @Description  : Description
 */
function subtract(...args: number[]) {
	return args.reduce((ac, cur) => ac - cur)
  }
  
export default subtract;