export interface B {
  true: () => B;
  false: () => B;
  final: () => boolean;
}

function vBoolean(value: any): B {
  let isMatch: boolean = true;
  if (typeof value !== "boolean") isMatch = false;
  let v = value;
  let operations = {
    true: () => {
      if (typeof v !== "boolean") return operations;
      if (!v) isMatch = false;
      return operations;
    },
    false: () => {
      if (typeof v !== "boolean") return operations;
      if (v) isMatch = false;
      return operations;
    },
    final: () => {
      return isMatch;
    },
  };

  return operations;
}

export default vBoolean;
