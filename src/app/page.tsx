'use client'
import Image from "next/image";
import CardStats from "@/components/ui/card/card-stats";
import CardRequest from "@/components/ui/card/card-request";
import { useGetRequests, useRequestStats } from "@/hook/request.hook";
import ButtonAction from "@/components/ui/button/button-action";
import Link from "next/link";
export default function Home() {
  const { data, isLoading, error } = useRequestStats();

  return (
    <div className="text-xl font-semibold pt-12">
      <div className="flex justify-center text-[20px]">Maintenance Request</div>
      <div className="flex justify-center mt-4 flex flex-col items-center">
        <div className="w-full md:w-[400px] justify-center flex flex-row gap-4">
          <CardStats
            label="Open Requests"
            total={data?.openRequests ?? 0}
          />
          <CardStats
            label="Urgent Requests"
            total={data?.urgentRequests ?? 0}
          />
          <CardStats
            label="Average time (days) to resolve"
            total={data?.averageResolutionTime ? (data.averageResolutionTime.toFixed(2) / 24) : 0}
          />
        </div>
        <div className="mt-6 w-full">
          <DisplayCard />
        </div>
      </div>
      <ButtonAction />
    </div>
  );
}

function DisplayCard() {
  const { data, isLoading, error } = useGetRequests();

  if (!data) return (<></>)
  if (isLoading) return (<div>Loading...</div>)
  if (data?.length == 0) return (<div>No Data</div>)
  return (
    <>
      <div className="flex gap-4 flex-col">
        {data.map((request, index) => (

          <CardRequest key={index}
            id={request.id}
            title={request.title}
            status={request.status}
            urgency={request.urgency}
            created_at={request.createdAt}
          />
        ))}
      </div>
    </>
  )
}
