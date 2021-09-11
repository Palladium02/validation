import vString, { S } from "./string";
import vNumber, { N } from "./number";
import vBoolean, { B } from "./boolean";
import vArray, { A } from './array';

interface V {
  string: () => S;
  number: () => N;
  boolean: () => B;
  array: () => A;
}

function v(value: any): V {
  let v: any = value;

  let operations: V = {
    string: () => {
      return vString(v);
    },
    number: () => {
      return vNumber(v);
    },
    boolean: () => {
      return vBoolean(v);
    },
    array: () => {
      return vArray(v);
    }
  };

  return operations;
}

export default v;
