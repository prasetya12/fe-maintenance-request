import { FormControl } from '../form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../select'

interface FormFieldSelectProps
    extends React.ComponentProps<typeof SelectTrigger> {
    items: {
        label: string
        value: string
    }[]
    placeholder?: string
    onValueChange?: (value: string) => void
    value?: string
    isLoading?: boolean
}

export function FormFieldSelect(props: FormFieldSelectProps) {
    const {
        items,
        onValueChange,
        value,
        placeholder,
        isLoading,
        disabled,
        ...rest
    } = props

    return (
        <Select onValueChange={onValueChange} value={value}>
            <FormControl>
                <SelectTrigger
                    className="data-[placeholder]:text-gray-300"
                    {...rest} disabled={isLoading || disabled}>
                    <SelectValue
                        placeholder={placeholder}
                    />
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {items.map((item) => {
                    return (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    )
                })}
            </SelectContent>
        </Select>
    )
}
