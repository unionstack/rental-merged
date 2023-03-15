/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';

// Admin pages
const AdminLogin = () => import('@/pages/admin/AdminLogin');
const AdminDashboard = () => import('@/pages/admin/AdminDashboard');
const AdminProperties = () => import('@/pages/admin/AdminProperties');
const AdminCreateProperty = () => import('@/pages/admin/AdminCreateProperty');
const EditProperty = () => import('@/pages/admin/EditProperty');
const CreateUser = () => import('@/pages/admin/CreateUser');
const ManageUsers = () => import('@/pages/admin/ManageUsers');
const EditUser = () => import('@/pages/admin/EditUser');
const Managers = () => import('@/pages/admin/Managers');
const CreateManager = () => import('@/pages/admin/CreateManager');
const EditManager = () => import('@/pages/admin/EditManager');
const Bedrooms = () => import('@/pages/admin/Bedrooms');
const EditBedroom = () => import('@/pages/admin/EditBedroom');
const CreateBedrooms = () => import('@/pages/admin/CreateBedrooms');
const Currencies = () => import('@/pages/admin/Currencies');
const CreateCurrency = () => import('@/pages/admin/CreateCurrency');
const EditCurrency = () => import('@/pages/admin/EditCurrency');
const Projects = () => import('@/pages/admin/Projects');
const CreateProject = () => import('@/pages/admin/CreateProject');
const EditProject = () => import('@/pages/admin/EditProject');


// Manager pages
const ManagerLogin = () => import('@/pages/manager/ManagerLogin');
const ManagerProperties = () => import('@/pages/manager/ManagerProperties');


// Owner pages
const UserLogin = () => import('@/pages/user/UserLogin');
const UserProperties = () => import('@/pages/user/UserProperties');


const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/manager/login',
    name: 'ManagerLogin',
    component: ManagerLogin
  },

  // Auth Routes Below
  {
    path: '/admin',
    name: 'AdminRoutes',
    beforeEnter: (to, from, next) =>{
      if(!localStorage.token)
      {
          window.location.href='/admin/login';
      }
      if(!localStorage.user)
      {
          window.location.href='/admin/login';
      }
      if(!localStorage.role)
      {
          window.location.href='/admin/login';
      }
      next();
    },
    children: 
    [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard
      },
      {
        path: 'properties',
        name: 'Admin Properties',
        component: AdminProperties
      },
      {
        path: 'property/create',
        name: 'Create Property',
        component: AdminCreateProperty
      },
      {
        path: ':id/edit-property/',
        name: 'EditProperty',
        component: EditProperty
      },
      {
        path: 'users',
        name: 'Manage Users',
        component: ManageUsers
      },
      {
        path: 'user/create',
        name: 'Create User',
        component: CreateUser
      },
      {
        path: ':id/edit-user/',
        name: 'EditUser',
        component: EditUser
      },
      {
        path: 'managers',
        name: 'Managers',
        component: Managers
      },
      {
        path: 'manager/create',
        name: 'Create Manager',
        component: CreateManager
      },
      {
          path: ':id/edit-manager/',
          name: 'EditManager',
          component: EditManager
      },
      {
        path: 'bedrooms',
        name: 'Bedrooms',
        component: Bedrooms
      },
      {
        path: ':id/edit-bedroom/',
        name: 'EditBedroom',
        component: EditBedroom
      },
      {
        path: 'bedroom/create',
        name: 'Create Bedrooms',
        component: CreateBedrooms
      },
      {
        path: 'currencies',
        name: 'Currencies',
        component: Currencies
      },
      {
        path: 'currency/create',
        name: 'Create Currency',
        component: CreateCurrency
      },
      {
        path: ':id/edit-currency/',
        name: 'EditCurrency',
        component: EditCurrency
      },
      {
        path: 'projects',
        name: 'Projects',
        component: Projects
      },
      {
        path: 'project/create',
        name: 'Create Project',
        component: CreateProject
      },
      {
        path: ':id/edit-project/',
        name: 'EditProject',
        component: EditProject
      },


    ]
  },
  {
    path: '/manager',
    name: 'ManagerRoutes',
    beforeEnter: (to, from, next) =>{
      if(!localStorage.token)
      {
          window.location.href='/manager/login';
      }
      if(!localStorage.user)
      {
          window.location.href='/manager/login';
      }
      if(!localStorage.role)
      {
          window.location.href='/manager/login';
      }
      next();
    },
    children: 
    [
      {
        path: 'properties',
        name: 'Manager Properties',
        component: ManagerProperties
      }
    ]
  },
  {
    path: '/user',
    name: 'UserRoutes',
    children: 
    [
      {
        path: 'login',
        name: 'User Login',
        component: UserLogin
      },
      {
        path: 'properties',
        name: 'User Properties',
        component: UserProperties
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  }
});

export default router
