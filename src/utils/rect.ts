/*
 * @Author       : cuiguiming
 * @Date         : 2023-03-20 16:24:15
 * @LastEditors  : 崔桂铭
 * @LastEditTime : 2023-03-20 16:24:16
 * @Description  : Description
 */
const getScrollTop = (el: Document | Element) => {
	if (el === document || el === document.body) {
	  return Math.max(
		window.pageYOffset,
		document.documentElement.scrollTop,
		document.body.scrollTop,
	  );
	}
	return (el as Element).scrollTop;
  };
  
  const getScrollHeight = (el: Document | Element) => {
	return (
	  (el as Element).scrollHeight ||
	  Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
	);
  };
  
  const getClientHeight = (el: Document | Element) => {
	return (
	  (el as Element).clientHeight ||
	  Math.max(document.documentElement.clientHeight, document.body.clientHeight)
	);
  };
  
  export { getScrollTop, getScrollHeight, getClientHeight };
  