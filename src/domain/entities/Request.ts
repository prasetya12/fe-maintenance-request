import Status from "./Status";
import Urgency from './Urgency'
export default class Request {
    constructor(
        public id: string,
        public title: string,
        public description: string | null,
        public status: Status,
        public urgency: Urgency,
        public createdAt: string,
        public updatedAt: string,
        public resolvedAt?: string
    ) { }
}