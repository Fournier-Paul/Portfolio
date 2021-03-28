import Accueil from './components/A-propos'
import Portfolio from './components/Portfolio'
import Experience from './components/Experiences'
import Contact from './components/Contacts'
import Service from './components/Services'
import Diplomes from './components/Diplomes'
import Competences from './components/Competences'
import Interets from './components/Interets'


export default [
    {path: '/a-propos', component: Accueil},
    {path: '/portfolio', component: Portfolio},
    {path: '/experiences', component: Experience},
    {path: '/contacts', component: Contact},
    {path: '/services', component: Service},
    {path: '/diplomes', component: Diplomes},
    {path: '/competences', component: Competences},
    {path: '/interets', component: Interets},
    {path: '/a-propos',
    components: {
        default: Accueil //Vue component
    },
},
    { path: '/', redirect: '/a-propos' }
]