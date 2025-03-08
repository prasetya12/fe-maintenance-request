import Request from "../entities/Request";

export default interface RequestRepository {
    getRequestStats(): Promise<{ openRequests: number; averageResolutionTime: number; urgentRequests: number }>;
    createRequest(data: { title: string; description?: string; statusId: number; urgencyId: number }): Promise<any>;
    updateRequestStatus(data: { id: string; statusId: number }): Promise<Request>;
    markAsResolved(id: string): Promise<Request>;
    getRequest(): Promise<Request[]>;

}