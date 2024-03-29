//Here you can register all routes
export const routes = {
    home:'/',
    cart:'/cart',
    login:'/login',
    register:'/register',
    stores:'/stores',
    profiles: (id?:number) => id ? `/profiles/${id}` : '/profiles/:id',
    products: {
        home: '/products',
        byId: (id?:number) => id ? `/products/${id}` : '/products/:id'
    },
    profile:{
        edit:'/profile/edit',
        details: '/profile-details'
    },
    seller:{
        add: '/seller/add'
    },
    admin:{
        requests:{
            sellers:{
                getAll:'/admin/requests/sellers',
                byId: (id?:number) => id ? `/admin/requests/sellers/${id}` : '/admin/requests/sellers/:id',
            }
        },
        product:{
            add: '/admin/product/add'
        }
    }
}