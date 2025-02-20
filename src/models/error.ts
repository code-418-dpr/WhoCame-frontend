import { ErrorType } from "./error-type";

export interface Error {
    code: string;
    message: string;
    type: ErrorType;
    invalidField: string;
}
