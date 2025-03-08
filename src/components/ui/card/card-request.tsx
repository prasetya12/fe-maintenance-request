import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/badge"

interface CardRequestProps {
    total?: number,
    label?: string
}

export default function CardRequest({ total = 0, label }: CardRequestProps) {
    return (
        <Card className="w-full py-4 px-2">
            <CardContent className="p-0 flex  justify-center flex-col gap-2 px-4">
                <div className="flex justify-between items-center">
                    <div className="text-sm font-medium">
                        Front Door Lock broken
                    </div>
                    <div className="text-xs text-[#A1AFC3] font-medium">
                        11 Dec 2024
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-sm font-medium text-[#E3903F]">
                        ⚡ Urgent
                    </div>
                    <div className="text-xs text-[#A1AFC3] font-medium">
                        <Badge>Mark as Resolve</Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}