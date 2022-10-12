import React from 'react'
const Context = React.createContext()
import {useState, useEffect} from 'react'

function ContextProvider({children}){
const [allPhotos, setAllPhotos] = useState([])
const [isFavorite, setIsFavorite] = useState(false)

const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data => setAllPhotos(data))
    
},[])

//setting up func to make if an image is selected according to _id is added to favorite
function toggleFavorite(id) {
    const updatedArr = allPhotos.map( photo =>{
         if(photo.id === id){
            console.log(id)
            console.log(photo.id)
            return {
                ...photo, isFavorite: !isFavorite
            }
        }
        return photo

     } )
     setAllPhotos(updatedArr)
}

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}