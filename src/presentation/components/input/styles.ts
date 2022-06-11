export const checkboxStyles = `
  h-4 
  w-4 
  text-indigo-600 
  focus:ring-indigo-500 
  border-gray-300 
  rounded
`

export const handleInputStyles = (error: string) => `
  appearance-none 
  rounded-none 
  relative 
  block 
  w-full 
  px-3 
  py-2 
  border 
  ${error ? "border-red-300 " : "border-gray-300 "}
  placeholder-gray-500 
  text-gray-900 
  rounded-t-md 
  focus:outline-none 
  focus:ring-indigo-500 
  ${error ? "focus:border-red-300" : "focus:border-indigo-500"} 
  focus:z-10 
  sm:text-sm
`
