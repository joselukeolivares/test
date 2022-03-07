import React from "react";
import Card from "./Card"
import '../css/components/categoriesContainer.css'
import { Category } from "./Category";

function Categories({categories}){

    return    (
                <React.Fragment>
                <div id="categoriesContainer">                    
                    <h3>Oferta de productos</h3>
                    <div className="categoryCards">
                        
                        <Category categories={categories}></Category>
                    </div>
                </div>
                </React.Fragment>
            )

    
}

export default Categories