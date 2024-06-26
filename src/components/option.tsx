import { useContext } from 'react'
import { CountryContext } from '@/contexts/country.context'
import { OptionProps } from '@/interfaces'

export const Option = ({ option }: OptionProps) => {
  const { setOption, setCloseSelect, handleSelect } = useContext(CountryContext)

  return (
    <li
      className="rounded-md p-2 text-center hover:bg-gray-100"
      onClick={() => {
        setOption(option)
        setCloseSelect(false)
        handleSelect(option)
      }}
    >
      {option}
    </li>
  )
}
