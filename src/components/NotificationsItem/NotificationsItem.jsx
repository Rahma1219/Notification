
import Comment from '../Comment/Comment'
import './NotificationsItem.css'

function NotificationsItem(props) {


    return (
        <>

            <div className='boxs'>
                <img src={props.img} />

                <div id='info'>
                    <div id='title' className={props.move}>
                        <div>
                            <span id='name'>{props.Username}</span>
                            <span id='text'> {props.text} </span>
                            <span id='text2'>{props.text2} </span>
                            <span id='text3'>{props.text3}</span>
                            {props.status == "Notification" ? (
                                <span class='Notdot ' id='box1' ></span>
                            ) : (<span></span>)}

                        </div>

                        <span ></span>
                        {props.Username == 'Kimberly Smith' ? (
                            <img src={props.imgchess} id='imgchess' alt="" />

                        ) : null

                        }




                    </div>

                    <p id='time'>{props.time}</p>






                </div>
            </div>

            {props.Username == '  Rizky Hasanuddin ' ? (
                <div id='card'>
                    <Comment></Comment>
                </div>

            ) : null

            }



        </>


    )


}

export default NotificationsItem