'use client'
import graphqlClient from "./graphqlClient";
import RequestRepository from "@/domain/repositories/request.repository";
import Request from "../../domain/entities/Request";

class RequestService implements RequestRepository {
  async getRequestStats() {
    const query = `
     query GetStats {
    getStats {
        openRequests
        averageResolutionTime
        urgentRequests
    }
}
    `;
    const response = await graphqlClient.request<{ getStats: any }>(query);
    return response.getStats;
  }

  async createRequest(data: { title: string; description?: string; statusId: number; urgencyId: number }): Promise<any> {
    const mutation = `
      mutation($input: CreateRequestInput!) {
        createRequest(input: $input) {
          id
          title
          description
          statusId
          urgencyId
          createdAt
          updatedAt
          resolvedAt
        }
      }
    `;
    const response = await graphqlClient.request<{ createRequest: any }>(mutation, { input: data });
    return response;
  }

  async updateRequestStatus(data: { id: string; statusId: number }): Promise<any> {
    const mutation = `
      mutation($input: UpdateRequestStatusInput!) {
        updateRequestStatus(input: $input) {
          id
          statusId
          updatedAt
        }
      }
    `;
    const response = await graphqlClient.request<{ updateRequestStatus: any }>(mutation, { input: data });
    return response;
  }

  async markAsResolved(data: { id: string; statusId: number }): Promise<any> {
    const mutation = `
      mutation($input: MarkAsResolvedInput!) {
        markAsResolved(input: $input) {
          id
          statusId
          resolvedAt
          updatedAt
        }
      }
    `;
    const response = await graphqlClient.request<{ markAsResolved: any }>(mutation, { input: data });
    return response;
  }
}

export default new RequestService();