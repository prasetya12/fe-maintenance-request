import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import requestService from "@/infrastructure/api/request.service";

export const useRequestStats = () => {
    return useQuery({
        queryKey: ["getStats"],
        queryFn: () => requestService.getRequestStats(),
        staleTime: Infinity
    });
};

export const useGetRequests = () => {
    return useQuery({
        queryKey: ["getRequests"],
        queryFn: () => requestService.getRequest(),

    });
};

export const useGetDetailRequest = (id: string) => {
    return useQuery({
        queryKey: [`getRequests-${id}`],
        queryFn: () => requestService.getDetailRequest(id),
    });
};

export function useCreateRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: { title: string; description?: string; statusId: number; urgencyId: number }) =>
            requestService.createRequest(data),
        onSuccess: (newRequest) => {
            queryClient.invalidateQueries({ queryKey: ['getRequests'] });
            queryClient.invalidateQueries({ queryKey: ['getStats'] });

            console.log('Request created successfully:', newRequest);
        },
        onError: (error) => {
            console.error('Error creating request:', error);
        },
    });
}

export function useUpdateRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: { id: string, title: string; description?: string; statusId: number; urgencyId: number }) =>
            requestService.updateRequestStatus(data),
        onSuccess: (newRequest) => {
            queryClient.invalidateQueries({ queryKey: ['getRequests'] });
            queryClient.invalidateQueries({ queryKey: ['getStats'] });

            console.log('Request update successfully:', newRequest);
        },
        onError: (error) => {
            console.error('Error creating request:', error);
        },
    });
}

export function useMarkAsResolveRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            requestService.markAsResolved(id),
        onSuccess: (newRequest) => {
            queryClient.invalidateQueries({ queryKey: ['getRequests'] });
            queryClient.invalidateQueries({ queryKey: ['getStats'] });

        },
        onError: (error) => {
            console.error('Error creating request:', error);
        },
    });
}