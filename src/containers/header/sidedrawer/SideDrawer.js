import React from 'react';
import './SideDrawer.css';
import Logo from '../../../components/logo/Logo';
import MenuItems from '../menuItems/MenuItems';
import Button from '../../../components/UI/button/button';
import BackDrop from '../../../components/UI/backdrop/BackDrop'

const SideDrawer = (props) => {
    let classes=['SideDrawer','Close'];

    if(props.show){
        classes=['SideDrawer','Open'];
    }
    return (
        <React.Fragment>
            <BackDrop show={props.show} modalCloseHandler={props.closeDrawerHandler} />
            <div className={classes.join(' ')}>
                <Logo height="10%"/>
                <nav>
                    <MenuItems/>
                </nav>

                <div className="boxButton">
                    <Button btnType="danger" clicked={() => alert('you clicked')}>
                        ورود و ثبت نام
                    </Button>
                </div>
            </div>
        </React.Fragment>


)
}
export default React.memo(SideDrawer)
