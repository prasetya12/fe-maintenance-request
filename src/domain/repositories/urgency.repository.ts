
import Urgency from "../entities/Urgency"
export default interface UrgencyRepository {
    getUrgencies(): Promise<Urgency[]>
}