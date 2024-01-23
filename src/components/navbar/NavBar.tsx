import { Link } from "react-router-dom"

function Navbar() {
 
  

    return (
      <>
       <div className='w-full bg-teal-900 text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
              <div className='text-2xl font-bold uppercase'>🍇Amora's Game</div>
  
              <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/categoria' className='hover:underline'>Categoria</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  export default Navbar