interface Operations {
  string?: () => Operations;
  number?: () => Operations;
  boolean?: () => Operations;
  final?: () => boolean;
}

function v(value: any): Operations {
  let v: any = value;
  let isMatch: boolean = true;

  let operations: Operations = {
    string: () => {
      if(typeof v !== "string") isMatch = false;
      return operations;
    },
    number: () => {
      if(typeof v !== "number") isMatch = false;
      return operations;
    },
    boolean: () => {
      if(typeof v !== "boolean") isMatch = false;
      return operations;
    },
    final: () => {
      return isMatch;
    }
  }

  return operations;
}

export default v;