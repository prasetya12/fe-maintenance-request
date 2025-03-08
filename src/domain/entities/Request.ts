export default class Request {
    constructor(
        public id: string,
        public title: string,
        public description: string | null,
        public statusId: number,
        public urgencyId: number,
        public createdAt: string,
        public updatedAt: string,
        public resolvedAt?: string
    ) { }
}