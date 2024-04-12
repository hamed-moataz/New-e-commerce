
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Search = ({products , gridList}) => {
    const [searchTerm ,setSearchTerm] = useState("")
    const filteredProducts = products.filter((prod) => prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className='widget widget-search'>
      <form className='search-wrapper mb-3' >
        <input type="text" name='search' id="search" placeholder='search...' defaultValue={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
        <button type='submit'>
            <i className='icofont-search-2'></i>
        </button>
      </form>

      <div>
        {
            searchTerm && filteredProducts.map((prod) => (
                <Link key={prod.id} to={`/shop/${prod.id}`}>
                    <div className="d-flex g-3 p-2">
                        <div>
                            <div className="pro-thumb h-25">
                                <img src={prod.img} alt="img" width={70} className='flex-{grow|shrink}-0' />
                            </div>
                        </div>
                        <div className="product-content">
                            <p>
                                <Link to={`/shop/${prod.id}`}>{prod.name}</Link>
                            </p>
                            <h6>{prod.price}</h6>
                        </div>
                    </div>
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Search
