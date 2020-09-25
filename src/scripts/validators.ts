import { Lengths } from "./lengths";

export function isUsernameLengthValid(username: string): boolean {
    return ((username.length >= Lengths.minUsernameLength) && (username.length <= Lengths.maxUsernameLength));
}

export function isUsernameFormatValid(username: string): boolean {
    return (/^[a-zA-Z_-][a-zA-Z0-9_-]+$/.test(username));
}

export function isEmailValid(email: string): boolean {
    return ((email.length <= Lengths.maxEmailLength) && (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)));
}

export function isPasswordLengthValid(password: string): boolean {
    return ((password.length >= Lengths.minPasswordLength) && (password.length <= Lengths.maxPasswordLength));
}

export function isPasswordFormatValid(password: string): boolean {
    return (/^[a-zA-Z0-9!@#$%^&*()=|\/\\,.?<>;:"'[\]{}~ _-]+$/.test(password));
}

export function isAgeRangeValid(age: number): boolean {
    return ((age >= Lengths.minAge) && (age <= Lengths.maxAge));
}

export function isBioLengthValid(bio: string): boolean {
    return ((bio.length >= Lengths.minBioLength) && (bio.length <= Lengths.maxBioLength));
}
