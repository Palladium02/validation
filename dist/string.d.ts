export interface S {
    email: () => S;
    iban: () => S;
    min: (n: number) => S;
    max: (n: number) => S;
    final: () => boolean;
}
declare function vString(value: any): S;
export default vString;
