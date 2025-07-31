import { faFacebook,faSquarespace,faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faMap, faSocks, faTree, faWallet } from "@fortawesome/free-solid-svg-icons"
import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'


export const pageLinks = [
    {id:1,href:'#home',text:'home'},
    {id:1,href:'#about',text:'about'},
    {id:1,href:'#services',text:'services'},
    {id:1,href:'#tour',text:'tours'}
]

export const socialLinks = [
    { id:1,href : 'https://www.facebook.com',icon : faFacebook},
    { id:1,href : 'https://www.twitter.com',icon : faTwitter},
    { id:1,href : 'https://www.squarespace.com',icon : faSquarespace},

]


export const services = [
    {
        id :1,
        icon : faWallet,
        title:'saving money',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
    {
        id :1,
        icon : faTree,
        title:'endless hiking',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
     {
        id :1,
        icon : faSocks,
        title:'amazing comfort',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    }
    

]


export const tours = [
    {
        id : 1,
        image : tour1 , 
        date : 'auguest 26th,2020',
        title : 'Tibet Adventure',
        info : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        icon : faMap,
        location : 'china',
        duration : 6,
        cost : 2100
    },
    {
        id : 2,
        image : tour2 , 
        date : 'october 1th,2020',
        title : 'best of java',
        info : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        icon : faMap,
        location : 'indonesia',
        duration : 11,
        cost : 1400
    },
    {
        id : 3,
        image : tour3 , 
        date : 'september 15th,2020',
        title : 'explore hong kong',
        info : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        icon : faMap,
        location : 'hong kong',
        duration : 8,
        cost : 5000
    },
    {
        id : 4,
        image : tour4 , 
        date : 'december 5th,2019',
        title : 'kenya highlights',
        info : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        icon : faMap,
        location : 'china',
        duration : 6,
        cost : 2100
    }
]









