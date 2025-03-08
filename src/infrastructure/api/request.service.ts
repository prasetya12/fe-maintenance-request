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
        }
      }
    `;
    const response = await graphqlClient.request<{ createRequest: any }>(mutation, { input: data });
    return response;
  }

  async updateRequestStatus(data: { id: string; title: string; description?: string; statusId: number; urgencyId: number }): Promise<any> {
    const mutation = `
      mutation($input: UpdateRequestStatusInput!) {
        updateRequestStatus(input: $input) {
          id
        }
      }
    `;
    const response = await graphqlClient.request<{ updateRequestStatus: any }>(mutation, { input: data });
    return response;
  }

  async markAsResolved(id: string): Promise<any> {
    const mutation = `
      mutation($id: String!) {
        markAsResolved(id:$id) {
          id
         
        }
      }
    `;
    const response = await graphqlClient.request<{ markAsResolved: any }>(mutation, { id });
    return response;
  }

  async getRequest(): Promise<Request[]> {
    const query = `query GetRequests {
        getRequests {
            id
            title
            status {
                id
                name
            }
            urgency {
                id
                name
            }
            createdAt
        }
    }
    `
    const response = await graphqlClient.request<{ getRequests: Request[] }>(query);
    return response.getRequests
  }

  async getDetailRequest(id: string): Promise<Request> {
    const query = `query GetDetailRequest($id: String!) {
        getDetailRequest(id:$id) {
            id
            title
            createdAt
            status {
                id
                name
            }
            urgency {
                id
                name
            }
        }
    }
  `
    const variables = { id };
    const response = await graphqlClient.request<{ getDetailRequest: Request }>(
      query,
      variables
    );

    return response.getDetailRequest
  }
}

export default new RequestService();