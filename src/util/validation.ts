export function isNotEmpty(value: string) {
    return value.trim() !== '';
}

export function hasMinLength(value: string, minLength: number) {
    return value.length >= minLength
}