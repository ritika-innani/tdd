export class PrimeFactors {
    public static factorsOf(n: number) {
        var factors: Array<number> = [], quotient: number = n, divisor: number = 2;
        while (quotient > 1){
            while(quotient % divisor === 0) {
                factors.push(divisor);
                quotient /= divisor;
            }
            divisor++;
        }
        return factors;
    }
}
