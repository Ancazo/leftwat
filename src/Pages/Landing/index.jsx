import React from "react";
import {TopNavBar,SplitPage,FormPage} from "../../Components";
import {buttonStyling} from './styles.module.scss'

const LandingPage = () => {
  return (
    <div className='page'>
        <TopNavBar />

        <SplitPage>
            <div id = 'split-left' className = 'row'>
                
            </div>

            <div id = 'split-right'>
                <FormPage buttonStyling = {buttonStyling}/>
            </div>
        </SplitPage>
    </div>
  )
};

export default LandingPage;
