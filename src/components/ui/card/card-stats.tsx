import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { NumberTicker } from "@/components/ui/number-ticker"

interface CardStatsProps {
    total?: number,
    label: string
}

export default function CardStats({ total = 0, label }: CardStatsProps) {
    return (
        <Card className="w-[110px] h-[110px] py-6 px-2">
            <CardContent className="p-0 flex items-center justify-center flex-col gap-2">
                <NumberTicker className="!text-[#36A388] !text-4xl" value={total} />
                <div className="font-normal text-[10px] text-[#404040] text-center">{label}</div>
            </CardContent>
        </Card>
    )
}