export default function Page() {
  const categories = [
    {
      name: "Proyectos"
    },
    {
      name: "Cursos"
    },
    {
      name: "Entrevistas"
    }
  ]
    return (
      <div className="min-w-full min-h-full">
        <h1 className="text-2xl">Categories</h1>
        <div className="flex justify-around">
          {categories.map((category) => <ul><li className="flex items-center justify-center rounded-full w-24 h-24 bg-red-300 p-2 ">{category.name}</li></ul>)}
        </div>
      </div>
       );
  }
  