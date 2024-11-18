export interface ApiResponse<T>{
    status:ApiResponseStatus,
    data?:T | T[],
    error?:ErrorMessage | ErrorMessage[],
    accessToken?: string;  
    statuscode  :number
}

export enum ApiResponseStatus{
    SUCCESS="Ok",
    ERROR="Error"
}
export enum ApiResponseStatusCode{
    SUCCESS=200,
    ERROR=201
}

export enum ErrorMessageType{
    INFO="info",
    WARN="warning",
    ERROR="error"
}

export interface ErrorMessage{
    type:ErrorMessageType,
    message:string
}