import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";

function DeletarCategoria() {

    const [categorias, setCategorias] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

  
    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategorias);
      }
    

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categoria")
    }

    async function DeletarCategoria() {
        try {
            await deletar(`/categorias/${id}`)

            alert('Tema apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar o Tema')
        }

        retornar()
    }
    
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-teal-600 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categorias.tipo}</p>
      <div className="flex">
        <button className='text-slate-100 bg-purple-400 hover:bg-purple-600 w-full py-2' onClick={retornar} >Não</button>
        <button className='w-full text-slate-100 bg-teal-400 hover:bg-purple-600 flex items-center justify-center' onClick={DeletarCategoria} >
          Sim
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeletarCategoria;