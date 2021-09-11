export interface A {
    min: (n: number) => A;
    max: (n: number) => A;
    noDuplicates: () => A;
    final: () => boolean;
}
declare function vArray(value: any): A;
export default vArray;
