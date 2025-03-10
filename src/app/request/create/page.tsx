'use client'
import { ArrowLeft } from "lucide-react"
import { useForm, useFormContext, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormRequest } from "../(components)/FormRequest"
import { Form } from "@/components/ui/form"
import { FormRequestDtoInterface, FormRequestDto } from "../(data)/FormRequestDto"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useCreateRequest } from "@/hook/request.hook"
import { toast } from "sonner"
export default function CreateRequest() {
    const { mutateAsync } = useCreateRequest();

    const form = useForm<FormRequestDtoInterface>({
        resolver: zodResolver(FormRequestDto),
        defaultValues: getDefaultValues(),
    })
    const router = useRouter()


    const handleSubmit = form.handleSubmit((data) => {
        const payload = {
            title: data.title,
            description: data.description,
            statusId: Number(data.statusId),
            urgencyId: Number(data.urgencyId)
        }
        toast.promise(mutateAsync(payload), {
            loading: 'Loading ...',
            success: 'Request successfully saved',
            error: 'Error ...',
        })

        router.push('/')
    }, console.error)
    return (
        <>
            <Form {...form}>
                <form onSubmit={handleSubmit}>
                    <div className="pt-6 md:pt-12">
                        <div className="flex  items-center justify-between md:justify-center gap-8">
                            <div className="cursor-pointer flex gap-2 " onClick={() => router.push('/')}>
                                <ArrowLeft className="h-6 w-6" />
                            </div>
                            <div className=" flex justify-center text-xl font-semibold text-[20px]">
                                Maintenance Request
                            </div>
                            <div></div>
                        </div>
                        <div className="flex justify-center mt-8 flex flex-col items-center w-full">
                            <FormRequest />
                        </div>
                        <div className="mt-8 flex justify-center">
                            <Button type="submit">Save</Button>
                        </div>
                    </div>
                </form>
            </Form>

        </>
    )
}



function getDefaultValues(initial?: any) {
    return {
        title: '',
        description: '',
        statusId: '1',
        urgencyId: '1'
    }
}