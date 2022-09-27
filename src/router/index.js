import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/accueilView.vue'
import Caisse from '../views/caisseView.vue'
import Patients from '../views/patientsView'
import Stocks from '../views/stocksView.vue'
import Configuration from '../views/ConfigurationView.vue'
import Utilisateur from '../views/utilisateurView.vue'

const routes = [        
  {
    path: '/',
    name: 'accueil',
    component: Accueil

  },       
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks

  },  
  {
    path: '/caisse',
    name: 'caisse',
    component: Caisse
  },
  {
    path: '/patients',
    name: 'patients',
    component: Patients
  },
  {
    path: '/configuration',
    name: 'configuration',
    component: Configuration
  },
  {
    path: '/utilisateur',
    name: 'utilisateur',
    component: Utilisateur
  },
  {
    path: '/:pathMatch(.*)*',
    component: Accueil
  }, 
  {
    path: '/:pathMatch(.*)*',
    component: Accueil
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
