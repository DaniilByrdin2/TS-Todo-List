import React from "react"
import { connect } from "react-redux"

import SearchAppBar from "../SearchBar/SearchAppBar"
import SimpleBottomNavigation from "../BottomNavigation/BottomNavigation"


const Setting = (props:any) => {
    return ( 
        <>
        <SearchAppBar userData={props.userData} />
        <div>Setting</div>
        <footer>
          <SimpleBottomNavigation />
        </footer>
      </>
    )
}

const mapStateToProps = ( state:any ) => {
    return {
      userData: state.LoginData
    }
  }
  
const mapDispanchToProps = ( dispatch:any ) => {
    return {} 
}

export default connect( mapStateToProps, mapDispanchToProps)(Setting)