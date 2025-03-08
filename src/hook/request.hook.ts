import { useQuery } from "@tanstack/react-query";
import requestService from "@/infrastructure/api/request.service";

export const useRequestStats = () => {
    return useQuery({
        queryKey: ["getStats"],
        queryFn: () => requestService.getRequestStats(),
    });
};