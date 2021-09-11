export interface A {
  min: (n: number) => A;
  max: (n: number) => A;
  noDuplicates: () => A;
  final: () => boolean;
}

function vArray(value: any): A {
  let isMatch: boolean = true;
  if (!Array.isArray(value)) isMatch = false;
  let v = value;
  let operations = {
    min: (n: number) => {
      if (!Array.isArray(v)) return operations;
      if(v.length < n) isMatch = false;
      return operations;
    },
    max: (n: number) => {
      if (!Array.isArray(v)) return operations;
      if(v.length > n) isMatch = false;
      return operations;
    },
    noDuplicates: () => {
      if(!Array.isArray(v)) return operations;
      let filteredArray = [...new Set(v)];
      if(v.length !== filteredArray.length) isMatch = false;
      return operations;
    },
    final: () => {
      return isMatch;
    },
  };

  return operations;
}

export default vArray;