import { Drawer, styled } from "@mui/material";
import SideBarContent from "./SideBarContenet";

const StyledContent = styled(Drawer)({
    marginTop:'54px'
})

const SideBar = ({ toggleDrawer, openDrawer }) => {

    return (
        <StyledContent
            anchor='left'
            open={openDrawer}
            onClose={toggleDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
        variant="persistenet"
        sx={{
            '& .MuiDrawer-paper':{
                marginTop: '64px',
                width: 250,
                background: '#F5F5F5',
                borderRight:'none',
                height: 'calc(100vh, 64px)'
            }
        }}
        >
           <SideBarContent/> 
        </StyledContent>
    )
}

export default SideBar;