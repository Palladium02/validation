import { S } from "./string";
import { N } from "./number";
import { B } from "./boolean";
import { A } from './array';
interface V {
    string: () => S;
    number: () => N;
    boolean: () => B;
    array: () => A;
}
declare function v(value: any): V;
export default v;
