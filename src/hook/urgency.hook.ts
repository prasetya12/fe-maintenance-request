import { useQuery } from "@tanstack/react-query";
import urgencyService from "@/infrastructure/api/urgency.service";

export const useGetUrgency = () => {
    return useQuery({
        queryKey: ["getUrgency"],
        queryFn: () => urgencyService.getUrgencies(),
    });
};