/*
 * @Author       : cuiguiming
 * @Date         : 2023-03-15 18:00:04
 * @LastEditors  : 崔桂铭
 * @LastEditTime : 2023-03-15 18:00:05
 * @Description  : Description
 */

import { add, subtract } from './index'

test('add test', () => {
  expect(add(1, 2)).toBe(3)
})

test('subtract test', () => {
  expect(subtract(1, 2)).toBe(-1)
})
