import { useState } from 'react'
import NotificationsItem from '../NotificationsItem/NotificationsItem'
import './Notificationsbox.css'



function Notificationsbox() {

    const [ArrayOfObject,setArrayOfObject] =useState(
        [
            {
                id: 1,
                img: "/assets/images/avatar-mark-webber.webp",
                Username: ' Mark Webber ',
                text: 'reacted to your recent post',
                text3: 'My first tournament today!',
                time: '1m ago',
                status: 'Notification',
                read:false,
          
    
    
    
            },
            {
                id: 2,
                img: "/assets/images/avatar-angela-gray.webp",
                Username: 'Angela Gray ',
                text: 'followed you',
                time: '5m ago',
                status: 'Notification',
                read:false,
              
    
    
            },
            {
                id: 3,
                img: "/assets/images/avatar-jacob-thompson.webp",
                Username: ' Jacob Thompson  ',
                text: 'has joined your group',
                text2: 'Chess Club',
                time: '1 day ago',
                status: 'Notification',
                read:false,
            
    
            },
            {
                id: 4,
                img: "/assets/images/avatar-rizky-hasanuddin.webp",
                Username: '  Rizky Hasanuddin ',
                text: 'sent you a private message',
                time: '5 days ago',
               
    
    
            },
            {
                id: 5,
                img: "/assets/images/avatar-kimberly-smith.webp",
                Username: 'Kimberly Smith',
                text: ' commented on your picture',
                time: '1 week ago',
                imgchess:"/assets/images/image-chess.webp",
                move:'chess',
                
    
    
    
            },
    
            {
                id: 6,
                img: "/assets/images/avatar-nathan-peterson.webp",
                Username: 'Nathan Peterson',
                text: 'reacted to your recent post',
                text3: '5 end-game strategies to increase your win rate',
                time: '2 weeks ago',
    
    
            },
    
            {
                id: 7,
                img: "/assets/images/avatar-anna-kim.webp",
                Username: ' Anna Kim ',
                text: 'left the group ',
                text2: 'Chess Club',
                time: '2 weeks ago',
    
    
            },
        ]
    
    )


 
function unreadCount(){
    let unreadnot = ArrayOfObject.filter((item)=> 
        { return item.read == false }).length
 
    return unreadnot
}

function Markallasread(){

    let newnot = ArrayOfObject.map((item) => {
        item.read = true;
        return item
    })
    setArrayOfObject(newnot)
}







    return (
        <div className='notPage'>
            <div className='header' >
             
                <h2 >Notifications <span id='num'>{unreadCount()}</span></h2>
                <a href="#" id='mark'  onClick={Markallasread} > Mark all as read</a>
            </div>

            <div>
                {ArrayOfObject.map((item) => {
                    return (

            

                        <NotificationsItem
                            key={item.id}
                            img={item.img}
                            Username={item.Username}
                            text={item.text}
                            time={item.time}
                            status={item.status}
                            text2={item.text2}
                            text3={item.text3}
                            imgchess={item.imgchess}
                            move={item.move}
                        
                        >

                        </NotificationsItem>


                    );
                })}

            </div>




        </div>

    )


}

export default Notificationsbox