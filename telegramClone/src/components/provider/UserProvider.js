import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { UserContext } from '../context/user'

const UserProvider = ({children}) => {
    const [userState, setUserState] = useState(UserContext);
  return (
    <UserContext.Provider 
        value={{
        user: {
            user1:{
                name: "Phil Dunphy",
                lastSeen: "Yesterday",
                imageUrl: "https://openpsychometrics.org/tests/characters/test-resources/pics/MF/4.jpg",
                id: 1,
            },
            user2:{
                name: "Claire Dunphy",
                lastSeen: "Yesterday",
                imageUrl: "https://openpsychometrics.org/tests/characters/test-resources/pics/MF/3.jpg",
                id: 2,
            },
            user3:{
                name: "Haley Dunphy",
                lastSeen: "Yesterday",
                imageUrl: "https://media1.popsugar-assets.com/files/thumbor/Tw7ACQHswBP0fF5irnl3UJ6v-zU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/20/879/n/1922283/tmp_CX9kjN_72d0862c9e24309a_154981_0306.jpg",
                id: 3,
            },
            user4:{
                name: "Alex Dunphy",
                lastSeen: "Yesterday",
                imageUrl: "https://pbs.twimg.com/profile_images/1790540609/image_400x400.jpg",
                id: 4,
            },
            user5:{
                name: "Luke Dunphy",
                lastSeen: "Yesterday",
                imageUrl: "https://openpsychometrics.org/tests/characters/test-resources/pics/MF/7.jpg",
                id: 5,
            },
            user6:{
                name: "Mitchell Pritchett",
                lastSeen: "Yesterday",
                imageUrl: "https://cdn1.edgedatg.com/aws/v2/abc/ModernFamily/person/737883/25d08a16ce1d411c5cc9fdaaff1ddb46/320x180-Q90_25d08a16ce1d411c5cc9fdaaff1ddb46.jpg",
                id: 6,
            },
            user7:{
                name: "Cameron Tucker",
                lastSeen: "Yesterday",
                imageUrl: "https://tvovermind.com/wp-content/uploads/2022/01/Cam-Tucker-750x402.jpg",
                id: 7,
            },
            user8:{
                name: "Gloria Delgado Pritchett",
                lastSeen: "Yesterday",
                imageUrl: "https://tv-fanatic-res.cloudinary.com/iu/s--z-pfm8Qz--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1586373086/gloria-in-finale-modern-family-s11e17.jpg",
                id: 8,
            },
            user9:{
                name: "Jay Pritchett",
                lastSeen: "Yesterday",
                imageUrl: "https://www.tvyayinakisi.com/wp-content/uploads/2021/01/CVS4Y2Zk8Q8BbUloZWgHeyVJttriWGnyHMYebj3Z.jpeg",
                id: 9,
            },
            user10:{
                name: "Manyy Delgado",
                lastSeen: "Yesterday",
                imageUrl: "https://www.looper.com/img/gallery/the-reason-so-many-fans-hate-manny-in-modern-family-season-11/intro-1583864971.jpg",
                id: 10,
            },
            user11:{
                name: "Javier Delgado",
                lastSeen: "Yesterday",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN4SQeFUlV2XC2RQntvEJhVN4BwHjc_FW3ux5Pd0SqSv0FFMkl7cTSeE247KYhWrTOo8&usqp=CAU",
                id: 11,
            },
            user12:{
                name: "Pepper Saltzman",
                lastSeen: "Yesterday",
                imageUrl: "https://topicimages.mrowl.com/large/gracie/modernfamily/characters/peppersaltzman_1.jpg",
                id: 12,
            },
            
        },
        setUser: setUserState,
    }}>
        {children}
    </UserContext.Provider>
  );
};

export default UserProvider;