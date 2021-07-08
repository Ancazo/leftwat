import React from "react";
import {TopNavBar,SplitPage} from "../../Components";

const LandingPage = () => {
  return (
    <div className='page'>
        <TopNavBar />
        <SplitPage>
            <div id ='split-left'>
                new
            </div>
            <div id = 'split-right'>
                hihi
            </div>
        </SplitPage>
    </div>
  )
};

export default LandingPage;
