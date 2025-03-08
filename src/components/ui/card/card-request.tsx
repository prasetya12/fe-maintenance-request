import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Status from "@/domain/entities/Status"
import Urgency from "@/domain/entities/Urgency"
import { formatDate } from "@/lib/helper"
import { StatusEnum, UrgencyEnum } from "@/domain/constant"
import Link from "next/link";
import { useMarkAsResolveRequest } from "@/hook/request.hook"
import { toast } from "sonner"

interface CardRequestProps {
    id: string,
    title: string,
    status: Status,
    urgency: Urgency,
    created_at: string,
}

export default function CardRequest({ id, title, status, urgency, created_at }: CardRequestProps) {
    const { mutateAsync } = useMarkAsResolveRequest();

    const handleMarkAsResolved = () => {
        toast.promise(mutateAsync(id), {
            loading: 'Loading ...',
            success: 'Marked as resolved successfully.',
            error: 'Error ...',
        })
    }
    return (
        <Card className="w-full py-4 px-2 ">
            <CardContent className="p-0 flex  justify-center flex-col gap-2 px-4">
                <div className="flex justify-between items-center">
                    <Link href={`/request/${id}`} key={id}>
                        <div className="text-sm font-medium">
                            {title}
                        </div>
                    </Link>

                    <div className="text-xs text-[#A1AFC3] font-medium">
                        {formatDate(Number(created_at))}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <FlagUrgency urgency={urgency} />
                    <div className="text-xs text-[#A1AFC3] font-medium">
                        {/* <Badge>Mark as Resolve</Badge> */}
                        <FlagStatusBadge
                            status={status}
                            handleMarkResolved={handleMarkAsResolved}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

interface FlagStatusBadgePropos {
    status: Status,
    handleMarkResolved: () => void
}
function FlagStatusBadge({ status, handleMarkResolved }: FlagStatusBadgePropos) {

    switch (status.name) {
        case StatusEnum.OPEN:
            return (<Badge className="cursor-pointer" onClick={handleMarkResolved}>Mark as Resolve</Badge>)
        case StatusEnum.RESOLVED:
            return (<Badge variant={'secondary'}>Resolved</Badge>)
        default:
            return (<Badge className="cursor-pointer" onClick={handleMarkResolved}>Mark as Resolve</Badge>)
    }
}

interface FlagUrgencyProps {
    urgency: Urgency
}


function FlagUrgency({ urgency }: FlagUrgencyProps) {
    switch (urgency.name) {
        case UrgencyEnum.Urgent:
            return (<div className="text-sm font-medium text-[#E3903F]">
                ⚡ Urgent
            </div>)
        case UrgencyEnum.Emergency:
            return (<div className="text-sm font-medium text-[#D74B4B]">
                🔥 Emergency
            </div>)
        case UrgencyEnum.Less_Urgent:
            return (<div className="text-sm font-medium text-[#157AD8]">
                🔨 Less Urgent
            </div>)
        case UrgencyEnum.None_Urgent:
            return (<div className="text-sm font-medium text-[#157AD8]">
                🙂 Non Urgent
            </div>)
        default:
            return (<div className="text-sm font-medium text-[#157AD8]">
                🙂 Non Urgent
            </div>)
    }
}