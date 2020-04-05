export class PrimeFactors {
    public static factorsOf(n: number) {
        var factors: Array<number> = [];
        if (n > 1){
            while(n%2 === 0) {
                factors.push(2);
                n /= 2;
            }
            if (n>1) {
                factors.push(n);
            }
        }
        return factors;
    }
}
