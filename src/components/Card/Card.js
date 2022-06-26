import { render } from "@testing-library/react";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import './Card.css';

const Card = ({book}) => {
    console.log(book);
    const [show,setShow] = useState(false);
    const [bookItem,setItem] = useState();
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let categorie = item.volumeInfo.categories;
                    if(thumbnail != undefined) {
                        return(
                            <>
                                <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                    <img src={thumbnail}/>
                                    <div className="bottom">
                                        <a>{categorie}</a>
                                        <h3 className="title">
                                            {item.volumeInfo.title}
                                        </h3>
                                        <p className="author">
                                            {item.volumeInfo.authors}
                                        </p>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )                       
                    }
                })
            }
        </>
    )
}
export default Card;

