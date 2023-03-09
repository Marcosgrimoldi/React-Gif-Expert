
import React from 'react';
import {useState} from 'react';
import { AddCategory,GifGrid } from './components';



export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'dragon ball' ]);


    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory) ) 
        return;
        setCategories([newCategory,...categories]);
        console.log(categories);
    }
    
    

return (
    <>
    {/* titulo */}
    <h1>Gif Expert APP</h1>

    {/* <input/> */}
    <AddCategory
    // setCategories={setCategories}
    onNewCategory ={newValue=> onAddCategory(newValue)}
    />


    
    {
        categories.map ( ( category ) => (
            <GifGrid key ={ category } category ={ category }/>
            ))
    }


    </>
)
}
