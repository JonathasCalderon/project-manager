export default function Button(props) {

  const {children, isInverse, className, ...rest} = props;

  const colorClasses = 
    isInverse 
    ? 
      "text-gray-700 bg-transparent hover:bg-gray-700 hover:text-gray-300" 
    : 
      "text-gray-300 bg-gray-700 hover:text-gray-100"

  const mergedClassName = `px-4 py-3 m-2 float-left rounded-lg text-xl ${colorClasses} ${className}`

  return (
    <button 
      className={mergedClassName}
      {...rest}
    >
        {children}
    </button>
  )
}