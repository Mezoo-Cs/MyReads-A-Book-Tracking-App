import React from 'react'

export const BookSkeleton = () => {
  return (
    <div className="border shadow rounded overflow-hidden w-[150px] h-[250px]">
        <div className="animate-pulse">
            <div className="bg-slate-700 w-[150px] h-[160px]"></div>
            <div className="p-2">
            <div className="h-2 bg-slate-700 rounded my-2"></div>
            <div className="space-y-3">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
