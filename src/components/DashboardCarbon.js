import React from 'react'
import TopBarLogged from './TopBarLogged'
import { Footer } from './Footer'
import {MetaDataDashboad} from './MetaDataDashboard'
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { CarbonChart } from './CarbonChart';
import {getDataIndicador} from '../fetchHelper/getData'

import '../css/components/dashboardCarbon.css'
import { useLocation, useSearchParams, useParams } from 'react-router-dom';
import { BoxLineBarCarbon } from './BoxLineBarCarbon';
import {BarSimpleDC} from './BarSimple'
import {LinesResultForescast} from './LinesResForescast'
import {FormGroup,RadioButtonGroup,RadioButton,Toggle,SelectItem,ContentSwitcher,Switch} from 'carbon-components-react'
import { AddIndicador } from './AddIndicator/index';
import {HeatMapChartDC} from './HeatMap'
import {StackedAreaTS} from './StackedAreaTS'
import { LineChartDC } from './LineTest/index';
import {GroupedBarDC} from './GroupedBar'
import { Loading } from './Loading/index';

function DashboardCarbon(){
	
	const {indicator}=useLocation().state
	
	const [listIds,setListIds]=React.useState([])
	const [idSelected,setIdSelected]=React.useState()
	const [loadingData,setLoadingData]=React.useState(true)
	
	


	
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

	const [importId,setImportId]=React.useState(useLocation())
	const [searchParams,setSearchParams]=useSearchParams()
	//useLocation().state.idIndicador
		try{
			//
			state.idIndicador=searchParams.get("idIndicador")
			 if(state.idIndicador==undefined)
				 state.idIndicador=importId.state.idIndicador							
			
		}catch(err){
			console.log(err)
		}
	
	const [principalChart,setPrincipalChart]=React.useState("opt-0")
	const [meta,setMeta]=React.useState({loaded:false,show:false,loading:false,forecastShow:false,forecastLoaded:false})
	const [addedIds,setAddedIds]=React.useState([])
	const [idKpiData,setIdKpiData]=React.useState([])
	const [idKpiDataForecast,setidKpiDataForecast]=React.useState([])
	const [idKpiDataMeta,setIdKpiDataMeta]=React.useState([])
	//const [indicator,setIndicator]=React.useState({})
	

	React.useEffect(() => {
		
		
		let data=getDataIndicador([state.idIndicador],1)
		data.promiseData.then(data=>{
			//
			setIdKpiData(data)
			localStorage.setItem(`${state.idIndicador}d`,JSON.stringify(data))
			setLoadingData(!loadingData)
		}).catch(err=>{
			console.log(`Error al intentar obtener resultado del ${idSelected}. Intentando obtener datos de almacenamiento local`)
			let localData=localStorage.getItem(`${state.idIndicador}d`)
			let test=JSON.parse(localData)
			debugger
			setIdKpiData(test)
			setLoadingData(!loadingData)
		})

		if(indicator!=undefined){
			let hijos=indicator.Hijos
			hijos=hijos.replace("[","")
			hijos=hijos.replace("]","")
			let childs=hijos.split(",")
			
			let padres=indicator.Padres
			padres=padres.replace("[","")
			padres=padres.replace("]","")
			let father=padres.split(",")
			
			let indicatorsMetaData=localStorage.getItem('indicatorsMetaData')
			let listIndicators=JSON.parse(indicatorsMetaData)
			let relationFamily=[]//father and sons
			let relationType=[]//same type: $,%,unity,etc
			let optionIndex=1
			
			
			childs.forEach((element,i) => {
				let index=listIndicators.findIndex((row)=>row.idIndicador==element)
				if(index!=-1){
					let child=listIndicators[index]
					relationFamily.push(({...child,value:child.idIndicador,id:`option-${optionIndex+i}`,label:`${child.indicadorNC} (Alta realación)`}))
					optionIndex++
				}
			});
	
			for(var i=0;i<listIndicators.length;i++){
				if(listIndicators[i].idEtiqueta==indicator.idEtiqueta){
					let indicatorAux=listIndicators[i]
					relationType.push(({...indicatorAux,value:indicatorAux.idIndicador,id:`option-${optionIndex+i}`,label:`${indicatorAux.indicadorNC}. Etiqueta:${indicatorAux.Etiqueta}`}))
					optionIndex++
				}
			}
			//debugger
			let addIndicatorsList=relationFamily.concat(relationType)
			setListIds(addIndicatorsList)
			if(listIds.length>0)
			setIdSelected(listIds[0].label)
			//console.log(listIndicators.length)
			//console.log(relationFamily)
			//console.log(relationType)
			console.log(addIndicatorsList)
			
	
		}

		
		
		



	},[])

	function getData(){
		let result=getDataIndicador([idSelected],1)
		setLoadingData(true)
		result.promiseData.then(data=>{
			
				let otherIdData=data.map(row=>({...row,type:2,group:row.idIndicador}))
				let concatData=idKpiData.concat(otherIdData)
				debugger
				setIdKpiData(concatData)
				localStorage.setItem(`${idSelected}d`,JSON.stringify(otherIdData))
				setLoadingData(false)		
		})
		.catch(err=>{
			console.log(`Error al intentar obtener resultado del ${idSelected}. Intentando obtener datos de almacenamiento local`)
				let localData=localStorage.getItem(`${idSelected}d`)
				setIdKpiData(JSON.parse(localData))
				setLoadingData(false)
		})
		//console.log(result)

	}
/*	
	React.useEffect(()=>{
		console.log("DC Effect")
		console.log(idKpiData)
	},[idKpiData])
*/	
	function getForecast(idIndicador,toggled){
		//console.log("I got it: "+idSelected)
		setLoadingData(true)
		if(idKpiDataForecast.length==0){
			let result=getDataIndicador(idIndicador,2)
			result.promiseData.then(data=>{
				let addForecast=data.map(row=>({fechaCorte:row.fechaCorte,group:"pronostico",resultado:row.pronostico,type:3}))
				setidKpiDataForecast(addForecast)
				localStorage.setItem(`${idIndicador}f`,JSON.stringify(addForecast))
				updatedData(addForecast,toggled,3)
				console.log(`Pronostico :${addForecast.length}`)
				setLoadingData(false)
			}).catch(err=>{
				console.log(`Error al intentar obtener pronostico del ${idSelected}. Intentando obtener datos de almacenamiento local`)
				let addForecast=JSON.parse(localStorage.getItem(`${idIndicador}f`))
				setidKpiDataForecast(addForecast)
				updatedData(addForecast,toggled,3)
				setLoadingData(false)
		
			})
			//
			console.log("getForevast finalizado")
		}else{
			updatedData(idKpiDataForecast,toggled,3)
				
		}	
		//
        //return true
	}

	function getMeta(idIndicador,toggled){
		setLoadingData(true)
		if(idKpiDataMeta.length==0){
			let result=getDataIndicador(idIndicador,3)
			result.promiseData.then(data=>{
				let addMeta=data.map(row=>({fechaCorte:row.fechaCorte,group:"meta","resultado":row.metaAcumulado,type:2}))
				setIdKpiDataMeta(addMeta)
				localStorage.setItem(`${idIndicador}m`,JSON.stringify(addMeta))
				updatedData(addMeta,toggled,2)
				setLoadingData(false)
				//console.log(`Pronostico :${addForecast.length}`)
			}).catch(err=>{
				console.log(`Error al intentar obtener meta del ${idSelected}. Intentando obtener datos de almacenamiento local`)
				let addMeta=JSON.parse(localStorage.getItem(`${idIndicador}m`))
				setIdKpiDataMeta(addMeta)
				updatedData(addMeta,toggled,2)
				setLoadingData(false)
		
			})
			//
			console.log("getMeta finalizado")
		}else{
				updatedData(idKpiDataMeta,toggled,2)
		}
	}

	function updatedData(data,toggled,type){
		debugger
		let updatedData
		if(toggled){
			updatedData=idKpiData.concat(data)
		}else{
			updatedData=idKpiData.filter(row=>row.type!=type)
		}
		setIdKpiData(updatedData)
		console.log(`Updated Data: ${updatedData.length}`)
		console.log(updatedData)
		//
		
	}
	


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
            
			{state.idIndicador!=0 && (
				<React.Fragment>

					<ContentSwitcher onChange={(e)=>{
						console.log(e)
						setPrincipalChart(`opt-${e.index}`)

					}}>

						<Switch name={"line"} text={"Gráfico Linea y Puntos"} />
						<Switch name={"hetmap"} text={"Gráfico Heatmap"} />
						<Switch name={"Barras"} text={"Gráfico Barras"} />
						<Switch name={"stacked"} text={"Gráfico Area"} />
						<Switch name={"line_points"} text={"Gráfico Linea"} />
					</ContentSwitcher >

					<FormGroup 					onChange={e=>{
						let value=e.target.value
						switch(value){
							case 'opt-1':
							case 'opt-2':
								setPrincipalChart(e.target.value)
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
							getMeta([state.idIndicador],toggled)
							//setMeta(({...meta,show:toggled,}))

						}}
					/>	

					<Toggle 
						id="toggle-forecast"
						labelText='Pronostico'
						onToggle={toggled=>{							
								getForecast([state.idIndicador],toggled)
							
							//setMeta(({...meta,forecastShow:toggled}))	
						}}
					/>
					<AddIndicador   getData={getData} setIdSelected={setIdSelected} idSelected={idSelected}>
						{
							listIds.map((element,index) => {
								//
							return (                        
								<SelectItem
									key ={`SelectId${index}`}
									text={`${element.label}`}
									value={`${element.value}`}
								/> 
							)
						})
						}
					</AddIndicador >
					<div className="principalChart">
					{loadingData && (<div className="loadingData"> <Loading  /></div>
					)

					}
					{(principalChart=='opt-0')  && 
						<CarbonChart key="chart0" idIndicador={state.idIndicador} meta={meta} setMeta={setMeta} idKpiData={idKpiData} points={true}></CarbonChart>
						/*<LineChartDC points={principalChart=='opt-0'?true:false}/>*/
					}
					{principalChart=='opt-1' && (
						/*<BarSimpleDC idIndicador={state.idIndicador}></BarSimpleDC>*/
						
						<HeatMapChartDC idIndicador={state.idIndicador}  idKpiData={idKpiData}/>
						
						
					)}
					{principalChart=='opt-2' && (
						/*<BarSimpleDC idIndicador={state.idIndicador}></BarSimpleDC>
						<GroupedBarDC idIndicador={state.idIndicador}  idKpiData={idKpiData}/>
						*/
						
						<BarSimpleDC idIndicador={state.idIndicador}  idKpiData={idKpiData}/>

						
						
					)}
					{principalChart=='opt-3' && (
						/*<BarSimpleDC idIndicador={state.idIndicador}></BarSimpleDC>*/
						
						<StackedAreaTS idIndicador={state.idIndicador}  idKpiData={idKpiData}/>
						
						
					)}
					{principalChart=='opt-4' && (
						<CarbonChart  idIndicador={state.idIndicador} meta={meta} setMeta={setMeta} idKpiData={idKpiData} points={false}></CarbonChart>
						
												
						
					)}
			
					</div>
					<div className="miniChartsContainer">{
						false && (
						<React.Fragment>													
						<BoxLineBarCarbon idIndicador={state.idIndicador}></BoxLineBarCarbon>
						<LineChart data={state.data} options={state.options}> </LineChart>
						<LinesResultForescast idIndicador={state.idIndicador}></LinesResultForescast>
						</React.Fragment>
						)
					}
									
					</div>
					</React.Fragment>	
				)
			}
                        
            <Footer></Footer>
        </React.Fragment>
    )
}

export {DashboardCarbon}