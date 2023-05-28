'use client'
import { X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import BookDetailsCard from './BookDetailsCard'
import AllStart from './AllStar'
import LeaveNewComment from './LeaveNewComment'

export default function ExploreCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex h-[10.5rem] w-[17.875rem] items-center gap-4 rounded-md bg-gray-700">
          <div className="ml-4 h-[7.875rem] w-[5.75rem] rounded-[4px] bg-[url(../assets/books/arquitetura-limpa.png)] bg-cover"></div>

          <div className="flex h-[7.875rem] w-[9.5rem] flex-col justify-between">
            <div className="flex h-[2.75rem] flex-col">
              <div className="flex h-[2.75rem] w-full flex-col">
                <h3 className="text-left text-sm font-bold text-gray-100">
                  Arquitetura limpa
                </h3>
                <span className="text-left text-sm text-gray-400">
                  Robert C. Martin
                </span>
              </div>
            </div>

            <AllStart />
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-900" />
        <Dialog.Content className="roundend-md fixed right-0 top-0 h-[1000px] w-full  max-w-[41.25rem] overflow-scroll bg-gray-800 shadow-2xl">
          <div className="m-[0_auto] mb-4 mt-5 flex h-[40px] w-[35.25rem] items-center justify-end">
            <Dialog.Close>
              <X className="h-6 w-6" />
            </Dialog.Close>
          </div>
          <div className="m-[0_auto] h-[fit-content] w-[35.25rem] border-[0px] border-gray-50">
            <BookDetailsCard />

            <div className="mt-[2.5rem] flex h-[2.125rem] w-full items-center border-[0px] border-gray-50">
              <span className="text-sm text-gray-200">Avaliações</span>
            </div>

            <div className="mt-4 h-[53.375rem] w-full border-[0px] border-red-500">
              <LeaveNewComment />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
