import { Button } from "./button"
import { Plus } from 'lucide-react';
import Link from "next/link";
export default function ButtonAction() {
    return (
        <Link href={'/request/create'}>
            <div className="fixed bottom-6 md:bottom-10 flex items-center justify-center right-6 md:right-90 bg-[#36A388] text-white p-4 h-16 w-16 rounded-full shadow-lg hover:bg-[#36A388] transition">
                <Plus />
            </div></Link>
    )
}