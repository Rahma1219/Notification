
import Comment from '../Comment/Comment'
import './NotificationsItem.css'

function NotificationsItem(props) {


    return (
        <>
            {/* {props.read == false?(
                <NotificationsItem>

                </NotificationsItem>
            
            
        ):(<span></span>)} */}

            <div className='boxs'  >
                <img src={props.img} id='image' />

                <div id='info'>
                    <div id='title' className={props.move}>
                        <div>
                            <span id='name'>{props.Username}</span>
                            <span id='text'> {props.text} </span>
                            <span id='text2'>{props.text2} </span>
                            <span id='text3'>{props.text3}</span>
                            {props.read == false ? (
                                <>
                                    <span class='Notdot ' ></span>
                                </>

                            ) : (<span ></span>)}
                        </div>

                   
                        {props.Username == 'Kimberly Smith' ? (
                            <img src={props.imgchess} id='imgchess' alt="" />

                        ) : null

                        }
                        

                    </div>
                    <div>
                        < p id='time'>{props.time}</p>
                        </div>







                </div>

            </div>

            <div>
                {props.Username == '  Rizky Hasanuddin ' ? (
                    <div id='card'>
                        <Comment></Comment>
                    </div>

                ) : null

                }
            </div>





        </>


    )


}

export default NotificationsItem