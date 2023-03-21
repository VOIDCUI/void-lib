import add from './add';
import subtract from './subtract';
declare const calc: {
    add: typeof add;
    subtract: typeof subtract;
};
export default calc;
export { add, subtract };
