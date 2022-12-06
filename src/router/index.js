import { createWebHistory, createRouter } from "vue-router"

const routes = [
    { path : '/', name: "home", 
        component : () => import("@/views/Home.vue") 
    },
    

    { path : '/eventos', name: "pro2",
    component : () => import("@/views/eventos/Index.vue") 
  },
  { path : '/eventos/create', name : "pro-create2", 
    component : () => import("@/views/eventos/Create.vue") 
  },
  {
    path: '/eventos/edit/:id', name: "pro-edit2",
    component: () => import("@/views/eventos/Edit.vue")
  },
  
  { path : '/categories', name: "pro",
      component : () => import("@/views/categories/Index.vue") 
    },
    { path : '/categories/create', name : "pro-create", 
      component : () => import("@/views/categories/Create.vue") 
    },
    {
      path: '/categories/edit/:id', name: "pro-edit",
      component: () => import("@/views/categories/Edit.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;