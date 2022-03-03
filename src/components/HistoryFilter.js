import React from "react";
import {TrashCan32} from '@carbon/icons-react'
import Search from 'carbon-components-react/lib/components/Search'
import '../css/components/historyFilter.css'

function HistoryFilter(){



    return (
        <div className="historyFilter actives">
            <div id="Search_container">
                        <Search
                            id="search-1"
                            labelText=""
                        placeholder="Search" />
            </div>
            <div  className="delete-section">
                <TrashCan32 className="trashIcon" />
                <label className='trashText' >Borrar el historial</label>
            </div>
        </div>
    )
}

export default HistoryFilter