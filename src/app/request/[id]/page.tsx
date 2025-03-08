
'use client'
import { useParams } from 'next/navigation'
import { FormRequest } from "../(components)/FormRequest"
import { Form } from "@/components/ui/form"
import { useForm, useFormContext, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FormRequestDtoInterface, FormRequestDto } from "../(data)/FormRequestDto"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useGetDetailRequest, useUpdateRequest } from '@/hook/request.hook'
import Request from '@/domain/entities/Request'
import { useEffect } from 'react'
import { toast } from "sonner"

export default function DetailPage() {
    const { mutateAsync } = useUpdateRequest();
    const params = useParams<{ id: string }>()
    const router = useRouter()

    const id = params.id

    const { data } = useGetDetailRequest(id)


    const form = useForm<FormRequestDtoInterface>({
        resolver: zodResolver(FormRequestDto),
        defaultValues: getDefaultValues(data as Request),
    })



    const handleSubmit = form.handleSubmit((data) => {
        const payload = {
            id,
            title: data.title,
            description: data.description,
            statusId: Number(data.statusId),
            urgencyId: Number(data.urgencyId)
        }
        toast.promise(mutateAsync(payload), {
            loading: 'Simpan informasi',
            success: 'Request successfully edited',
            error: 'Error ...',
        })
        router.push('/')
    }, console.error)

    useEffect(() => {
        if (data) {
            form.reset(getDefaultValues(data)); // Reset the form when data is available
        }
    }, [data, form]);
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

function getDefaultValues(initial?: Request) {
    return {
        title: initial?.title ?? '',
        description: initial?.description ?? '',
        statusId: String(initial?.status.id) ?? null,
        urgencyId: String(initial?.urgency.id) ?? null
    }
}