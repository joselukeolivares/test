import React from "react";
import Card from "./Card"
import '../css/components/categoriesContainer.css'
import { Category } from "./Category";

function Categories({categories,indicatorsData}){

    return    (
                <React.Fragment>
                <div id="categoriesContainer">                    
                    <h3>Oferta de productos</h3>
                    <div className="categoryCards">
                        
                        <Category categories={categories} indicatorsData={indicatorsData}></Category>
                    </div>
                </div>
                </React.Fragment>
            )

    
}

export default Categories