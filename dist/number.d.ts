export interface N {
    min: (n: number) => N;
    max: (n: number) => N;
    even: () => N;
    odd: () => N;
    final: () => boolean;
}
declare function vNumber(value: any): N;
export default vNumber;
