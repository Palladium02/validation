export interface B {
    true: () => B;
    false: () => B;
    final: () => boolean;
}
declare function vBoolean(value: any): B;
export default vBoolean;
