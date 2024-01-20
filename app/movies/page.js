"use client"
import { useState, useEffect } from 'react'
import { getMovies } from "../service/getMovies"
import { Button } from '@/components/ui/button'

const Movies = () => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        // movies = getMovies(page)
        getMovies(page)
            .then(data => setMovies(data.results))
    }, [page])

    return (
        <article>
            <section className="flex flex-col items-center py-14 min-padding-x text-center">
                <h1 className='text-8xl my-6 font-bold'>Explore The Most Popular <span className="bgontext">Movies</span></h1>
                <p className="text-xl">If you are interesed by a movie just click on it and you have more information ;).</p>
            </section>
            
            <section className="flex justify-center gap-4 min-padding-x mb-8">
                <input type="search" placeholder='Fast and Furiuos, Spider Man, ...' className="w-full h-10 border pl-3" />
                <button>S</button>
            </section>

            <section className="flex justify-center items-center gap-4">
                <Button variant="outline" onClick={()=>setPage(page - 1)} disabled={page === 1}>Previous Page</Button>
                <p>{movies.length} Movies on page {page}</p>
                <Button variant="outline"  onClick={()=>setPage(page + 1)}>Next Page</Button>
            </section>
            
            <section>
                <ul className='grid grid-cols-4 gap-4'>
                    
                    {Array.isArray(movies)
                        ? 
                        movies.map(movie => (
                        <li key={movie.id}>
                            <div className='bg-white rounded shadow-md px-6 py-8 flex justify-between items-center relative overflow-hidden'>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            </div>
                        </li>
                    ))
                        : null}
                </ul>
            </section>
            
            <section>
                <Button variant="outline" onClick={()=>setPage(page - 1)} disabled={page === 1}>Previous Page</Button>
                <p>{movies.length} Movies on page {page}</p>
                <Button variant="outline"  onClick={()=>setPage(page + 1)}>Next Page</Button>
            </section>
        </article>
    )
}

export default Movies