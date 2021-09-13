import '../topbar/topbar.scss'
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
// import './topbar/topbar.scss';

export const TopBar = ({ open, setOpen}) => {
    return (
        <div className={'topbar ' + (open && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>
                        <LayersOutlinedIcon color='#311b92' style={{ fontSize:45 }} />
                    </a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> setOpen(!open)} >
                        <span className='line-1'></span>
                        <span className='line-2'></span>
                        <span className='line-3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
