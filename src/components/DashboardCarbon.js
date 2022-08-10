import React from 'react'
import TopBarLogged from './TopBarLogged'
import { Footer } from './Footer'
import {MetaDataDashboad} from './MetaDataDashboard'
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { CarbonChart } from './CarbonChart';

import '../css/components/dashboardCarbon.css'
import { useLocation } from 'react-router-dom';
import { BoxLineBarCarbon } from './BoxLineBarCarbon';
import {BarSimpleDC} from './BarSimple'
import {LinesResultForescast} from './LinesResForescast'
import {FormGroup,RadioButtonGroup,RadioButton,Toggle} from 'carbon-components-react'

function DashboardCarbon(){

	let state = {
		data: [
	{
		"group": "Ventas Ropa",
		"date": "2019-01-01T07:00:00.000Z",
		"value": -10000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-01T12:00:00.000Z",
		"value": -12000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-01T17:00:00.000Z",
		"value": -14000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-02T07:00:00.000Z",
		"value": -25000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-02T09:00:00.000Z",
		"value": -26000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-03T07:00:00.000Z",
		"value": -10000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-03T12:00:00.000Z",
		"value": 10000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-03T17:00:00.000Z",
		"value": 12000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-05T07:00:00.000Z",
		"value": 45000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-07T07:00:00.000Z",
		"value": 49000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-07T22:00:00.000Z",
		"value": 45000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-09T07:00:00.000Z",
		"value": 50000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-09T12:00:00.000Z",
		"value": 52000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-09T22:00:00.000Z",
		"value": 55000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-10T07:00:00.000Z",
		"value": 50000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-12T07:00:00.000Z",
		"value": 65000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-13T07:00:00.000Z",
		"value": 80000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-14T17:00:00.000Z",
		"value": 85000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-15T14:00:00.000Z",
		"value": 90000
	},
	{
		"group": "Ventas Ropa",
		"date": "2019-01-16T01:00:00.000Z",
		"value": 70000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-01T07:00:00.000Z",
		"value": 20000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-01T10:00:00.000Z",
		"value": 22000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-01T23:00:00.000Z",
		"value": 24000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-02T07:00:00.000Z",
		"value": 35000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-02T14:00:00.000Z",
		"value": 36000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-03T07:00:00.000Z",
		"value": 20000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-03T13:00:00.000Z",
		"value": 20000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-04T01:00:00.000Z",
		"value": 22000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-05T07:00:00.000Z",
		"value": 62000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-06T07:00:00.000Z",
		"value": 52000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-07T07:00:00.000Z",
		"value": 52000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-07T22:00:00.000Z",
		"value": 52000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-09T07:00:00.000Z",
		"value": 60000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-09T12:00:00.000Z",
		"value": 62000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-09T17:00:00.000Z",
		"value": 62000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-12T07:00:00.000Z",
		"value": 65000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-14T07:00:00.000Z",
		"value": 40000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-15T12:00:00.000Z",
		"value": 45000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-15T17:00:00.000Z",
		"value": 35000
	},
	{
		"group": "Ventas Ropa MMAA",
		"date": "2019-01-16T01:00:00.000Z",
		"value": 30000
	}
],
		options: {
	"title": "Ventas Ropa Coppel MX",
	"axes": {
		"bottom": {
			"title": "2019 Ventas de Ropa ultimos 12 meses",
			"mapsTo": "date",
			"scaleType": "time"
		},
		"left": {
			"mapsTo": "value",
			"title": "Vtas Ropa en Millones",
			"scaleType": "linear"
		}
	},
	"curve": "curveMonotoneX",
	"height": "400px"
}
	};

	//console.log(useLocation().state)
	state.idIndicador=useLocation().state.idIndicador
	const [forecastChart,setPronostico]=React.useState("opt-1")
	const [meta,setMeta]=React.useState({loaded:false,show:false,loading:false})


	
    return (
        <React.Fragment>
            <section id="topBarLooged-container_home">
                <TopBarLogged />
            </section>
            <MetaDataDashboad></MetaDataDashboad>
            <div className='aboutDCarbon'>
                <h3>Acerca de</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor, sit amet, molestie egestas ac sagittis, aliquet. Diam scelerisque tempus bibendum convallis nunc. Ullamcorper dui maecenas ac ultricies. Porta ac id purus sit in duis mi turpis. Quam quis vitae habitasse id urna et. Tempus pharetra urna, quis ut elit vulputate. Quis eu tempor et, ac dictum dolor. Pharetra ac eu id nulla libero sit. Risus vulputate eget vitae consequat mauris, non. Habitant egestas feugiat libero, ornare lectus tincidunt lorem magnis tempus. Dictum placerat senectus eget ultrices fusce penatibus dignissim volutpat. Felis, odio vitae quam tincidunt sit viverra pharetra maecenas faucibus.</p>
            </div>
            {/*Example
            <div className='lineChart-container'>
			<LineChart
                data={state.data}
                options={state.options}>
            </LineChart>
			</div>
			*/}

			{state.idIndicador!=0 && (
				<React.Fragment>

					<FormGroup 					onChange={e=>{
						let value=e.target.value
						switch(value){
							case 'opt-1':
							case 'opt-2':
								setPronostico(e.target.value)
								break;
							case 'opt-3':
							break;
							default:
							console.log("opt-invalid")
						}
					}}
					legendText='Selección de tipo de gráfico para Pronostico'
					>
						<RadioButtonGroup
						defaultSelected="default-selected"
						legend="Group Legend"
						name="forecast-radio-button-group"
						valueSelected="default-selected"
						>
							<RadioButton
							id="radio-1"
							labelText="Lineas"
							value="opt-1"
							/>

							<RadioButton
							id="radio-2"
							labelText="Barras-Lineas"
							value="opt-2"
							/>

							<RadioButton
							id="radio-3"
							labelText="Meta"
							value="opt-3"
							/>

							
						</RadioButtonGroup>
					</FormGroup>
					<Toggle
						id="toggle-meta"
						labelText="Meta"
						onToggle={(toggled)=>{
							
							console.log("Toggled:")
							console.log(toggled)
							
							setMeta(({...meta,show:toggled,}))

						}}
					/>	
					<div className="principalChart">
					{forecastChart=='opt-1' && (
						<CarbonChart idIndicador={state.idIndicador} meta={meta} setMeta={setMeta}></CarbonChart>
						
					)}
					{forecastChart=='opt-2' && (
						<BarSimpleDC idIndicador={state.idIndicador}></BarSimpleDC>
						
					)}
					</div>
					<div className="miniChartsContainer">						
						<BoxLineBarCarbon idIndicador={state.idIndicador}></BoxLineBarCarbon>
						<LineChart data={state.data} options={state.options}> </LineChart>
						<LinesResultForescast idIndicador={state.idIndicador}></LinesResultForescast>
			
									
					</div>
					</React.Fragment>	
				)
			}
                        
            <Footer></Footer>
        </React.Fragment>
    )
}

export {DashboardCarbon}