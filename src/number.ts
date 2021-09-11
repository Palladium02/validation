export interface N {
  min: (n: number) => N;
  max: (n: number) => N;
  even: () => N;
  odd: () => N;
  final: () => boolean;
}

function vNumber(value: any): N {
  let isMatch: boolean = true;
  if (typeof value !== "number") isMatch = false;
  let v = value;
  let operations = {
    min: (n: number) => {
      if (typeof v !== "number") return operations;
      if (v < n) isMatch = false;
      return operations;
    },
    max: (n: number) => {
      if (typeof v !== "number") return operations;
      if (v > n) isMatch = false;
      return operations;
    },
    even: () => {
      if (typeof v !== "number") return operations;
      if (v % 2 !== 0) isMatch = false;
      return operations;
    },
    odd: () => {
      if (typeof v !== "number") return operations;
      if (v % 2 === 0) isMatch = false;
      return operations;
    },
    final: () => {
      return isMatch;
    },
  };

  return operations;
}

export default vNumber;
