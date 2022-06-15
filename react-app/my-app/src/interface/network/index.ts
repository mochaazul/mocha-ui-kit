export interface StatResponse {
    stat_code: number;
    stat_msg: string;
}
export interface ResponseType<T> extends StatResponse {
    data: T;
    pagination: Pagination;
}

export interface Pagination {
    count?: number;
    keyword?: string;
    limit?: number;
    offset?: number;
    order?: string;
    page?: number;
    post_type?: string;
    sort?: "DESC" | "ASC";
    status?: string;
    search?: string;
    tag?: string;
}

export enum StatCode {
    SUCCESS = 200,
    FAILED = 400,
}