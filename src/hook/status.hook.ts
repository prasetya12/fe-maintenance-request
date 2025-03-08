import { useQuery } from "@tanstack/react-query";
import statusService from "@/infrastructure/api/status.service";

export const useGetStatus = () => {
    return useQuery({
        queryKey: ["getStatus"],
        queryFn: () => statusService.getStatus(),
    });
};