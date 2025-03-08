'use client'
import { FormField } from "@/components/ui/form"
import { FormFieldset } from "@/components/ui/form/form-field"
import { FormRequestDtoInterface, FormRequestDto } from "../(data)/FormRequestDto"
import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormFieldSelect } from "@/components/ui/form/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useGetStatus } from "@/hook/status.hook"
import { useGetUrgency } from "@/hook/urgency.hook"
import { useParams } from 'next/navigation'

export function FormRequest() {
    const params = useParams<{ id: string }>()
    const isCreate = !params.id
    const form = useFormContext<FormRequestDtoInterface>()
    const { data: listStatus } = useGetStatus()
    const { data: listUrgencies } = useGetUrgency()


    const STATUS_OPTIONS = listStatus ? listStatus.map((status) => ({ label: status.name, value: `${status.id}` })) : []
    const URGENCY_OPTIONS = listUrgencies ? listUrgencies.map((status) => ({ label: status.name, value: `${status.id}` })) : []

    return (
        <>
            <div className="px-4 w-full md:w-[420px] gap-6 flex flex-col">
                <FormField
                    control={form.control}
                    name="urgencyId"
                    render={(({ field }) => (
                        <FormFieldset
                            label="Urgency *"
                            className="w-full"
                        >
                            <FormFieldSelect
                                placeholder="Choose Urgency"
                                items={URGENCY_OPTIONS}
                                value={field.value}
                                onValueChange={field.onChange}

                            />


                        </FormFieldset>
                    ))}
                />

                <FormField
                    control={form.control}
                    name="statusId"
                    render={(({ field }) => (
                        <FormFieldset
                            label="Status *"
                            className="w-full"
                        >
                            <FormFieldSelect
                                placeholder="Choose Status"
                                items={STATUS_OPTIONS}
                                value={field.value}
                                onValueChange={field.onChange}
                                disabled={isCreate}
                            />


                        </FormFieldset>
                    ))}
                />

                <FormField
                    control={form.control}
                    name="title"
                    render={(({ field }) => (
                        <FormFieldset
                            label="Title *"
                            className="w-full"
                        >
                            <Input placeholder="Enter Title"
                                value={field.value}
                                onChange={field.onChange}
                            />


                        </FormFieldset>
                    ))}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={(({ field }) => (
                        <FormFieldset
                            label="Description"
                            className="w-full"
                        >
                            <Textarea
                                placeholder="Enter Description"
                                value={field.value}
                                onChange={field.onChange}
                            />


                        </FormFieldset>
                    ))}
                />

            </div>
        </>
    )
}
