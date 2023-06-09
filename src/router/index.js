/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';

// Admin pages
const AdminLogin = () => import('@/pages/admin/AdminLogin');
const AdminDashboard = () => import('@/pages/admin/AdminDashboard');
const AdminProperties = () => import('@/pages/admin/AdminProperties');
const AdminCreateProperty = () => import('@/pages/admin/AdminCreateProperty');
const EditProperty = () => import('@/pages/admin/EditProperty');
const AssignProperty = () => import('@/pages/admin/AssignProperty');
const AssignProperties = () => import('@/pages/admin/AssignProperties');
const CreateUser = () => import('@/pages/admin/CreateUser');
const ManageUsers = () => import('@/pages/admin/ManageUsers');
const EditUser = () => import('@/pages/admin/EditUser');
const Managers = () => import('@/pages/admin/Managers');
const CreateManager = () => import('@/pages/admin/CreateManager');
const EditManager = () => import('@/pages/admin/EditManager');
const ManageTenants = () => import('@/pages/admin/Tenants');
const CreateTenants = () => import('@/pages/admin/CreateTenant');
const EditTenant = () => import('@/pages/admin/EditTenant');
const Bedrooms = () => import('@/pages/admin/Bedrooms');
const EditBedroom = () => import('@/pages/admin/EditBedroom');
const CreateBedrooms = () => import('@/pages/admin/CreateBedrooms');
const Currencies = () => import('@/pages/admin/Currencies');
const CreateCurrency = () => import('@/pages/admin/CreateCurrency');
const EditCurrency = () => import('@/pages/admin/EditCurrency');
const Projects = () => import('@/pages/admin/Projects');
const CreateProject = () => import('@/pages/admin/CreateProject');
const EditProject = () => import('@/pages/admin/EditProject');
const AdminSetting = () => import('@/pages/admin/AdminSettings');
const AdminLogout = () => import('@/pages/admin/Logout');


// Manager pages
const ManagerLogin = () => import('@/pages/manager/ManagerLogin');
const ManagerProperties = () => import('@/pages/manager/ManagerProperties');
const ManagerEditProperty = () => import('@/pages/manager/EditProperty');
const ManagerSettings = () => import('@/pages/manager/ManagerSettings');
const ManagerLogout = () => import('@/pages/manager/Logout');


// Owner pages
const UserLogin = () => import('@/pages/user/UserLogin');
const UserProperties = () => import('@/pages/user/UserProperties');
const UserEditProperty = () => import('@/pages/user/EditProperty');
const UserSettings = () => import('@/pages/user/UserSettings');
const UserLogout = () => import('@/pages/user/Logout');

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
  {
    path: '/user/login',
    name: 'UserLogin',
    component: UserLogin
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
        path: 'assign-property',
        name: 'Assign Properties',
        component: AssignProperties
      },
      {
        path: 'assign-property/create',
        name: 'Assign Property',
        component: AssignProperty
      },
      // {
      //   path: ':id/edit-property/',
      //   name: 'EditProperty',
      //   component: EditProperty
      // },
      {
        path: 'tenants',
        name: 'Manage Tenants',
        component: ManageTenants
      },
      {
        path: ':id/edit-tenant/',
        name: 'EditTenant',
        component: EditTenant
      },
      {
        path: 'tenant/create',
        name: 'Create Tenants',
        component: CreateTenants
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
      {
        path: 'settings',
        name: 'AdminSetting',
        component: AdminSetting
      },
      {
        path: 'logout',
        name: 'AdminLogout',
        component: AdminLogout
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
      },
      {
        path: ':id/edit-property',
        name: 'ManagerEditProperty',
        component: ManagerEditProperty
      },
      {
        path: 'settings',
        name: 'ManagerSettings',
        component: ManagerSettings
      },
      {
        path: 'logout',
        name: 'ManagerLogout',
        component: ManagerLogout
      },
    ]
  },
  {
    path: '/user',
    name: 'UserRoutes',
    beforeEnter: (to, from, next) =>{
      if(!localStorage.token)
      {
          window.location.href='/user/login';
      }
      if(!localStorage.user)
      {
          window.location.href='/user/login';
      }
      if(!localStorage.role)
      {
          window.location.href='/user/login';
      }
      next();
    },
    children: 
    [
      {
        path: 'properties',
        name: 'User Properties',
        component: UserProperties
      },
      {
        path: ':id/edit-property',
        name: 'UserEditProperty',
        component: UserEditProperty
      },
      {
        path: 'settings',
        name: 'UserSettings',
        component: UserSettings
      },
      {
        path: 'logout',
        name: 'UserLogout',
        component: UserLogout
      },
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
