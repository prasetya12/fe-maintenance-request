'use client'
import Urgency from "@/domain/entities/Urgency"
import UrgencyRepository from "@/domain/repositories/urgency.repository"
import graphqlClient from "./graphqlClient"

class UrgencyService implements UrgencyRepository {
    async getUrgencies(): Promise<Urgency[]> {
        const query = `query GetUrgencies {
                getUrgencies {
                    id
                    name
                }
            }
            `
        const response = await graphqlClient.request<{ getUrgencies: Urgency[] }>(query)
        return response.getUrgencies
    }
}
export default new UrgencyService();
