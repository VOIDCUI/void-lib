/*
 * @Author       : cuiguiming
 * @Date         : 2023-03-20 14:40:44
 * @LastEditors  : 崔桂铭
 * @LastEditTime : 2023-03-20 19:03:27
 * @Description  : Description
 */
/**
 * 添加一个网页前后台状态变化的事件
 * - 最低兼容至 Android 4.4 和 iOS 8
 * 使用场景：
 * - 页面退到后台，暂停视频或者音乐，页面重回前台，重新播放；
 **/
import { isFunction } from './vertify-types'

type VisibilityState = 'visible' | 'hidden' | 'prerender'

interface addVisibilityChangeHandlerProp {
	onChange?: (visibleChange: VisibilityState) => void;
	onHide?: () => void;
	onShow?: () => void;
}

export function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
    return key in object;
}

function addVisibilityChangeHandler(options?: addVisibilityChangeHandlerProp) {
  if (!options) return undefined;
  let onChange: any;
  let onHide: any;
  let onShow: any;
  if (isFunction(options)) onChange = options;
  else {
    ({ onChange, onHide, onShow } = options);
  }

  // 对document.hidden做前缀处理
  const prefixes = ['webkit', 'moz', 'ms', 'o'];
  const VISIBLE = 'visible';
  const HIDDEN = 'hidden';
  function getHiddenProp() {
    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return 'hidden';

    // otherwise loop over all the known prefixes until we find one
    for (let i = 0; i < prefixes.length; i++) {
      if (`${prefixes[i]}Hidden` in document) return `${prefixes[i]}Hidden`;
    }

    // otherwise it's not supported
    return null;
  }

  // 获取document.visibilityState属性
  function getVisibilityState() {
    if ('visibilityState' in document) return 'visibilityState';
    for (let i = 0; i < prefixes.length; i++) {
      if (`${prefixes[i]}VisibilityState` in document)
        return `${prefixes[i]}VisibilityState`;
    }
    return '';
  }
  let handler: EventListenerOrEventListenerObject | null = null;
  // 给document添加事件
  const visProp = getHiddenProp();
  let evtname = '';
  if (visProp) {
    evtname = `${visProp.replace(/[H|h]idden/, '')}visibilitychange`;
    handler = () => {
      const visibilityState: any = (document as any)[getVisibilityState()]
      if (visibilityState === VISIBLE) {
        onShow?.();
      } else if (visibilityState === HIDDEN) {
        onHide?.();
      }
      onChange?.(visibilityState)
}
    document.addEventListener(evtname, handler, false);
	
  }
  return () => {
    handler && document.removeEventListener(evtname, handler);
  };
}


export default addVisibilityChangeHandler;