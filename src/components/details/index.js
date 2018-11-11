import React from 'react';

// Components
import LoaderHOC from '../loader-hoc';
import {GridList, GridTile} from 'material-ui/GridList';

// Functions
import dateConverter from '../../utl/date-converter';

// Styles
import './styles.css';

const Details = (props) => {

    const style = {
        gridlist: {
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            marginTop: '10px',
            cursor: 'pointer'
        }
    }

    function handleImageClick(e) {
        props.selectImage(e.currentTarget.id);
    }

    return (
        <div className='details-container'>
            <div className='selected-container'> 
                <img className='large-image' src={`${props.selectedImage.img_src}`}/>
                <div className='image-content'>
                    <h2>{`${props.selectedImage.rover.name}`}</h2>
                    <hr />
                    <p>{`Camera: ${props.selectedImage.camera.full_name}`}</p>
                    <p>{`Earth Date: ${dateConverter(null, props.selectedImage.earth_date)}`}</p>
                    <p>{`Mars SOL Date: ${props.selectedImage.sol}`}</p>
                    <p>{`Launch Date: ${dateConverter(null, props.selectedImage.rover.launch_date)}`}</p>
                    <p>{`Landing Date: ${dateConverter(null, props.selectedImage.rover.landing_date)}`}</p>
                    <p>{`Status: ${props.selectedImage.rover.status}`}</p>
                </div>
            </div>
            <GridList style={style.gridlist} cols={2.2}>
                { props.images.map(image => (
                    <GridTile
                        onClick={handleImageClick}
                        id={image.id}
                        key={image.id}
                        title={`${dateConverter(null, image.earth_date)} - #${image.id}`}
                        titleStyle={{ color: 'rgb(0, 188, 212)' }}
                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        >
                        <img src={image.img_src} />
                    </GridTile>
                ))}
            </GridList>
        </div>
    )
}

export default (LoaderHOC(Details));