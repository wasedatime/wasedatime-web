export declare const configAuth: () => void;
export declare const getIdToken: () => Promise<string | undefined>;
export declare const getAccessToken: () => Promise<string | undefined>;
export declare const getRefreshToken: () => Promise<string | undefined>;
export declare const getUserAttr: () => Promise<{
    id: any;
    name: any;
    picture: any;
} | null | undefined>;
export declare const signIn: () => void;
export declare const signOut: () => void;
