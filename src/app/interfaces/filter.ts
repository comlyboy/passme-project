export interface IParams {
    sidx?: string;
    sord?: string;
    rows?: number;
    page?: number;
    filters?: string;
    records?: string;
    search?: string;
}

export class IAppFilter implements IParams {
    sidx: string;
    sord?: string = "desc";
    rows?: number = 10;
    page: number = 1;
    filters?: string;
    records?: string;
    search?: string;
    constructor(instance?: IParams) {
        Object.assign(this, instance);
    }
}