import { Har } from "har-format";
export type SanitizeOptions = {
    scrubAllRequestHeaders?: boolean;
    scrubAllCookies?: boolean;
    scrubSpecificHeader?: string[];
    scrubSpecificCookie?: string[];
    scrubAllQueryParams?: boolean;
    scrubSpecificQueryParam?: string[];
    scrubAllPostParams?: boolean;
    scrubSpecificPostParam?: string[];
    scrubAllResponseHeaders?: boolean;
    scrubSpecificResponseHeader?: string[];
    scrubAllBodyContents?: boolean;
    scrubSpecificMimeTypes?: string[];
};
export declare const defaultMimeTypesList: string[];
export declare const defaultWordList: string[];
export declare function sanitizeHar(har: Har, options?: SanitizeOptions): Har;
