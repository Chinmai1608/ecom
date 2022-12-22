import { CopyrightSharp } from '@mui/icons-material'
import React from 'react'

const Copyright = () => {
  return (
    <div>
      <div class="">
        <label class="relative inline-block w-10 h-6 rounded-full m-4">
            <input 
            type="checkbox" class="peer opacity-0 w-0 h-0"
            />
            <span class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:bottom-1 before:left-1 before:rounded-full
                before:bg-white before:duration-300 peer-checked:before:translate-x-4 peer-checked:bg-teal-500"></span>
        </label>
      </div>
      <div class="flex justify-center p-2 bg-slate-200 text-sm">
        Copyright <CopyrightSharp class="h-4 w-4 m-1"/> LAMA.dev 2022
      </div>

    </div>
  )
}

export default Copyright
