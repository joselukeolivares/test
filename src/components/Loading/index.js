import React from 'react'
import './loading.css'
import '../../css/components/cardCategory.css'

function Loading(){
    return  (
        <React.Fragment>
            <div className="Card-container loading-container">
            <div className="lds-roller "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </React.Fragment>    

    )
}

export {Loading}