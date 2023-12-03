import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/store/auth'
import { storeToRefs } from 'pinia'

import setActiveNav from '@/composables/setActiveNav'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/home',
    component: () => import('@/views/MainView.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: '/subjects',
        name: 'subjects',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/user/SubjectView'),
      },
      {
        path: '/schedule',
        name: 'schedule',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/user/ScheduleView'),
      },
      {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/auth/LoginView.vue'),
      },
      {
        path: '/register',
        name: 'register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/auth/RegisterView.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/user/ProfileView.vue'),
      },
      {
        path: '/application-step/:step',
        name: 'applicationStep',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/CompleteAccountView.vue'),
      },

    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/AdminView.vue'),
    beforeEnter: async (to, from, next) => {
      const authStore = useAuthStore()
      const { user, isAdmin } = storeToRefs(authStore)
      if (!user.value) {
        await authStore.getUser()
      }

      if (user.value && isAdmin.value[0]) {

        next();
      } else {

        next('/');
      }




    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { owner: 'dashboard' },
        component: () => import('@/views/admin/DashboardView.vue'),
        beforeEnter: setActiveNav
      },
      {
        path: '/subject',
        name: 'subject',
        meta: { owner: 'subject' },
        component: () => import('@/views/admin/SubjectView.vue'),
        beforeEnter: setActiveNav
      },
      {
        path: '/course',
        name: 'course',

        meta: { owner: 'course' },
        component: () => import('@/views/admin/CourseView.vue'),
        beforeEnter: setActiveNav
      },
      {
        path: '/department',
        name: 'department',
        meta: { owner: 'department' },
        component: () => import('@/views/admin/DepartmentView.vue'),
        beforeEnter: setActiveNav
      },
      {
        path: '/teacher',
        name: 'teacher',
        meta: { owner: 'teacher' },
        component: () => import('@/views/admin/TeacherView.vue'),
        beforeEnter: setActiveNav
      },
      {
        path: '/teacher/:id',
        name: 'teacherDetails',
        meta: { owner: 'teacher' },
        component: () => import('@/views/admin/TeacherDetails.vue'),
        beforeEnter: setActiveNav
      },
      {
        path: '/pending',
        name: 'pending',
        meta: { owner: 'pending' },
        component: () => import('@/views/admin/PendingView.vue'),
        beforeEnter: setActiveNav
      },
      {
        path: '/roles',
        name: 'roles',
        meta: { owner: 'roles' },
        component: () => import('@/views/admin/SubjectView.vue'),
        beforeEnter: setActiveNav
      },
      {
        path: '/settings',
        name: 'settings',
        meta: { owner: 'settings' },
        component: () => import('@/views/admin/SubjectView.vue'),
        beforeEnter: setActiveNav
      },

    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  const { user } = storeToRefs(authStore)




  
  
  if (!user.value || from.name == 'applicationStep') {

    

    await authStore.getUser((e) => {

      if (e.response.status === 401) {
        setTimeout(() => {
          router.push({ name: 'login' });
      },50);
        return

      }

      if (e.response.status === 403) {
        router.push({ name: 'applicationStep', params: { step: 2 } })
        return
      }

      if (e.response.status === 400) {
        router.push({ name: 'applicationStep', params: { step: 3 } })
        return
      }
      if (e.response.status === 399) {
        router.push({ name: 'applicationStep', params: { step: 4 } })
        return
      }



    });
   
  }

  if(to.name=='home'){

    const userStore = useUserStore()

    await userStore.index()

  }


  next()




})

export default router
