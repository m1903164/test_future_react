import React, { useState } from 'react';
import Card from '../Card/Card';
import './Main.css';
import axios from 'axios';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if(evt.key === "Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyD4SwDFDL6v4OuR1UU9amJgz0N9vKKg5ig'+'&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="header__container">
                    <h1 className='header__title'>Search for books</h1>
                    <div className="search">
                        <input className='search-input'
                            type={"text"} 
                            placeholder="Введите название книги"
                            value={search}
                            onChange={e=>setSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />
                    </div>
                    <div className="filters">
                        <ul className="filters-list">
                            <li className="list-items">
                                <label className='items__label'>Categories</label>
                                <select>
                                    <option>All</option>
                                    <option>Art</option>
                                    <option>Biography</option>
                                    <option>Computers</option>
                                    <option>History</option>
                                    <option>Medical</option>
                                    <option>Poetry</option>
                                </select>
                            </li>
                            <li className="list-items">
                                <label className='items__label'>Sorting by</label>
                                <select>
                                    <option>Relevance </option>
                                    <option>Newest </option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>  
            </div>
            <div className="container">
                    <Card book={bookData}/>
                    <LoadingIndicator></LoadingIndicator>
            </div>
        </>
    )
}
export default Main;