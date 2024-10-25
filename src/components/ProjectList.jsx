export default function ProjectList({projectList, selectCurrentProject}) {

  return (
    <div className=" mt-32">
      {
        projectList && 
        projectList?.map(({title, id}, index) => (
          <p 
            key={index} 
            className="text-gray-50 text-lg text-left p-2 cursor-pointer hover:bg-gray-700 rounded mr-10"
            onClick={() => {
              selectCurrentProject(id)
            }}
          >
            {title}
          </p>
        ))
      } 
    </div>
  )
}