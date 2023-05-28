'use client'
import * as RadioGroup from '@radix-ui/react-radio-group'

export default function SearchCategory() {
  return (
    <form>
      <RadioGroup.Root className="flex gap-3">
        <RadioGroup.Item
          id="r1"
          value="Tudo"
          className="h-[2rem] w-[4.25rem] rounded-full border-[1px] border-purple-100 text-base font-bold text-purple-100 data-[state=checked]:bg-purple-200 data-[state=checked]:text-gray-100"
        >
          <span>Tudo</span>
        </RadioGroup.Item>

        <RadioGroup.Item
          id="r2"
          value="Computação"
          className="h-[2rem] w-[7.625rem] rounded-full border-[1px] border-purple-100 text-base font-bold text-purple-100 data-[state=checked]:bg-purple-200 data-[state=checked]:text-gray-100"
        >
          <span>Computação</span>
        </RadioGroup.Item>

        <RadioGroup.Item
          id="r3"
          value="Educação"
          className="h-[2rem] w-[6.313rem] rounded-full border-[1px] border-purple-100 text-base font-bold text-purple-100 data-[state=checked]:bg-purple-200 data-[state=checked]:text-gray-100"
        >
          <span>Educação</span>
        </RadioGroup.Item>

        <RadioGroup.Item
          id="r4"
          value="Fantasia"
          className="h-[2rem] w-[5.813rem] rounded-full border-[1px] border-purple-100 text-base font-bold text-purple-100 data-[state=checked]:bg-purple-200 data-[state=checked]:text-gray-100"
        >
          <span>Fantasia</span>
        </RadioGroup.Item>

        <RadioGroup.Item
          id="r5"
          value="Ficção científica"
          className="h-[2rem] w-[9rem] rounded-full border-[1px] border-purple-100 text-base font-bold text-purple-100 data-[state=checked]:bg-purple-200 data-[state=checked]:text-gray-100"
        >
          <span>Ficção científica</span>
        </RadioGroup.Item>

        <RadioGroup.Item
          id="r6"
          value="Horror"
          className="h-[2rem] w-[5rem] rounded-full border-[1px] border-purple-100 text-base font-bold text-purple-100 data-[state=checked]:bg-purple-200 data-[state=checked]:text-gray-100"
        >
          <span>Horror</span>
        </RadioGroup.Item>

        <RadioGroup.Item
          id="r7"
          value="HQs"
          className="h-[2rem] w-[5rem] rounded-full border-[1px] border-purple-100 text-base font-bold text-purple-100 data-[state=checked]:bg-purple-200 data-[state=checked]:text-gray-100"
        >
          <span>HQs</span>
        </RadioGroup.Item>

        <RadioGroup.Item
          id="r8"
          value="Suspense"
          className="h-[2rem] w-[6.375rem] rounded-full border-[1px] border-purple-100 text-base font-bold text-purple-100 data-[state=checked]:bg-purple-200 data-[state=checked]:text-gray-100"
        >
          <span>Suspense</span>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  )
}
