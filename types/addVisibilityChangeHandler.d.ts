type VisibilityState = 'visible' | 'hidden' | 'prerender';
interface addVisibilityChangeHandlerProp {
    onChange?: (visibleChange: VisibilityState) => void;
    onHide?: () => void;
    onShow?: () => void;
}
declare function addVisibilityChangeHandler(options?: addVisibilityChangeHandlerProp & Function): (() => void) | undefined;
export default addVisibilityChangeHandler;
