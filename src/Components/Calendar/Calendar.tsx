import React from 'react'

import SearchAppBar from "../SearchBar/SearchAppBar"
import { connect } from 'react-redux'
import SimpleBottomNavigation  from "../BottomNavigation/BottomNavigation"

import MyBookingCalendar from "./Calend-Component"


const Calendar = ( props: any ) => {
    return (
      <div>
        <SearchAppBar userData={props.userData} />
        <MyBookingCalendar />
        <footer>
          <SimpleBottomNavigation />
        </footer>
      </div>
    );
}

const mapStateToProps = ( state:any ) => {
    return {
      userData: state.LoginData
    }
  }
  
const mapDispanchToProps = ( dispatch:any ) => {
    return {} 
}
export default connect( mapStateToProps, mapDispanchToProps )(Calendar)