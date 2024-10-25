import { forwardRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  const {name, label, className, isTextArea, ...res} = props

  const mergedClasses = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`

  return(
    <div className="my-10">
      {
        label &&
        <label htmlFor={name} className="uppercase block mb-2 text-md font-medium text-gray-700">{label}</label>
      }
      {
        isTextArea ?
        <textarea ref={ref} {...res} id={name} name={name} className={`${mergedClasses} h-28`}/>
        :
        <input ref={ref} {...res} id={name} name={name} className={mergedClasses}/>
      }
    </div>
  )
});

export default Input;