export const ValidateEmail = (validate : string) : boolean => {
    const RegularExpression : RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result : boolean = RegularExpression.test(validate);

    return result;
}