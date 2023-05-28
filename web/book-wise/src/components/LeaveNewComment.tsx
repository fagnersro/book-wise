import Avatar from './Avatar'
import BigStar from './BigStar'

export default function LeaveNewComment() {
  return (
    <div className="flex h-[20.5rem] w-[35rem] flex-col items-center justify-center gap-6 rounded-lg bg-gray-700">
      <div className="flex h-10 w-[32.25rem] items-center border-[0px] border-gray-50">
        <Avatar
          width={40}
          height={40}
          source="https://github.com/fagnersro.png"
        />
        <span className="ml-4 w-[18.25rem] text-base font-bold text-gray-100">
          Fagner Henrique
        </span>

        <div className="h-full w-[10.5rem]">
          <BigStar />
        </div>
      </div>

      <div className="h-[13.5rem] w-[32.25rem] border-[0px] border-gray-50"></div>
    </div>
  )
}
