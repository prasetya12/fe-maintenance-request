'use client'

import type * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={new QueryClient({})}>
            <Toaster position="top-center" />
            {children}
        </QueryClientProvider>
    )
}
