import React from 'react'

import { FormControl, FormItem, FormLabel, FormMessage } from '../form'
import { cn } from '@/lib/cn'

interface FormFieldsetProps
    extends Omit<React.ComponentProps<typeof FormItem>, 'label'> {
    hideLabel?: boolean
    hideFormMessage?: boolean
    label: string
    noFormControl?: boolean
}

export function FormFieldset(props: FormFieldsetProps) {
    const {
        className,
        hideLabel,

        hideFormMessage,
        noFormControl,
        label,
        children,
        ...rest
    } = props
    const Wrap = noFormControl ? React.Fragment : FormControl

    return (
        <FormItem
            {...rest}
            className={cn(className, 'flex flex-col gap-2 space-y-0')}
        >
            <FormLabel
                className={cn(
                    'w-fit text-sm font-normal text-[#A1AFC3]',
                    hideLabel ? 'sr-only' : '',
                    className
                )}
            >
                {label}
            </FormLabel>
            <Wrap>{children}</Wrap>
            {!hideFormMessage && <FormMessage className="text-xs" />}
        </FormItem>
    )
}
