import React from 'react'

const App = () => {

  const data = [
   
    
    {
      "id": 3,
      "img": "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "kashish",
      "description": "finding myself",
      "button":"explore more"
    },
    
    
    {
      "id": 1,
      "img": "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "kashish",
      "description": "finding myself",
      "button":"explore more"
    },
    {
      "id": 1,
      "img": "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "kashis",
      "description": "finding myself",
      "button":"explore more"
    },
    {
      "id": 1,
      "img": "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "kashish",
      "description": "finding myself",
      "button":"explore more"
    },
  ]

   const Card = ({img, name, description,button}) =>(
      <>
      <div className='px-3 py-2 border border-black w-fit rounded-sm hover:bg-slate-500 h-[25rem] w-[20rem] cursor-pointer transition-all ease-out'>
      <img className='h-[15rem] w-full object-cover' src={img} alt="" />
      <h1 className='text-2xl font-mono'>{name}</h1>
      <p className='mb-4'>{description}</p>
      <button className='px-3 py-1 bg-black text-white rounded-full hover:bg-green-500 hover:text-black'>{button}</button>
      </div>
      </>
   )

  return (
    <div className='h-screen w-full bg-white flex flex-wrap gap-5 items-center justify-center'>
       {data.map(item=>(
        <Card key={item.id} img={item.img} name={item.name} description={item.description} button={item.button}/>
       ))}
    </div>
  )
}

export default App