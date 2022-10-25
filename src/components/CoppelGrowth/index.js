import React from 'react';
import { CoppelGrowthD3 } from './crecimiento';
import './map-styles.css';

export class CoppelGrowthMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        CoppelGrowthD3();
    }

    render() {
        return (
            <React.Fragment>
                <div className='map-container'>
                    <header className='map-header'>
                        <h1>Crecimiento de Coppel en México</h1>
                        <p>Esta animación muestra la expanción de <a href="https://es.wikipedia.org/wiki/Coppel" target="_blank">Coppel</a> durante los últimos sesenta años. El 1 de enero de 1956 en <a href="https://es.wikipedia.org/wiki/Culiac%C3%A1n" target="_blank">Culiacan, Sinaloa</a>, se abrió la primer tienda Coppel <svg width="8" height="16"><circle cx="4" cy="10" r="4" fill="blue"></circle></svg>. Este dataset incluye más de 1600 locaciones Coppel <svg width="8" height="16"><circle cx="4" cy="10" r="3.5" fill="none" stroke="black"></circle></svg> a lo largo del País de México.</p>
                    </header>
                </div>
            </React.Fragment>
        )
    }
}