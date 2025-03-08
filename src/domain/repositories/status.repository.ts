
import Status from "../entities/Status"
export default interface StatusRepository {
    getStatus(): Promise<Status[]>
}