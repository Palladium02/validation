interface Operations {
    string?: () => Operations;
    number?: () => Operations;
    boolean?: () => Operations;
    final?: () => boolean;
}
declare function v(value: any): Operations;
export default v;
