
import React from "react";
import { ThemeToggleService } from "../../services";
import {
    PageContainer,
    FridgeContainer
} from "../../Components";


export const InventoryPage = () => {
    // set themeState
    ThemeToggleService('yellow')
    
    return (
        <PageContainer navlink ='/logout' name='Logout'>
            <FridgeContainer/>
        </PageContainer>
    )
};
