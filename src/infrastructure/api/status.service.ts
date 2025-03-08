'use client'
import Status from "@/domain/entities/Status";
import graphqlClient from "./graphqlClient";
import StatusRepository from "@/domain/repositories/status.repository";

class StatusService implements StatusRepository {
    async getStatus(): Promise<Status[]> {
        const query = `
            query GetStatus {
                    getStatus {
                        id
                        name
                    }
                }
        `;
        const response = await graphqlClient.request<{ getStatus: Status[] }>(query);
        return response.getStatus

    }
}

export default new StatusService();