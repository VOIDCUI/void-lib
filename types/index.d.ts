import addVisibilityChangeHandler from './addVisibilityChangeHandler';
import rect from './rect';
declare const voidTools: {
    addVisibilityChangeHandler: typeof addVisibilityChangeHandler;
    rect: {
        getScrollTop: (el: Document | Element) => number;
        getScrollHeight: (el: Document | Element) => number;
        getClientHeight: (el: Document | Element) => number;
    };
};
export default voidTools;
export { addVisibilityChangeHandler, rect };
