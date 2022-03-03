import React from "react";


const HomeContext=React.createContext()

function HomeProvider(props){

    let [resultados,setResultados]=React.useState(false)
    let [homeVisible,setHomeVisible]=React.useState(true)
    let [catFilter,setcatFilter]=React.useState(0)
    let [favorite,setFavorite]=React.useState(false)
    let [history,setHistory]=React.useState(false)


    return (
        <HomeContext.Provider value={{
            resultados,
            setResultados,
            homeVisible,
            setHomeVisible,
            catFilter,
            setcatFilter,
            favorite,
            setFavorite,
            history,
            setHistory



        }}>
            {props.children}
        </HomeContext.Provider>
    )

}

export {HomeContext,HomeProvider}