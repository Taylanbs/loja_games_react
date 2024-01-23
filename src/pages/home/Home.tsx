import homeLogo from '../../assets/player.svg'


function Home() {
    return (
        <>
        <div className="bg-teal-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bem-vindo ao lar, seja, jovem Padawan!</h2>
              <p className='text-xl'>Aqui, seus jogos favoritos encontrará, hmm</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-teal-800 py-2 px-4'>Ver Categorias</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3'/>
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;