const  MenuConfig = 
    [
        {
            title:'首页',
            key : '/admin/home'
        },
        {
            title:'UI',
            key : '/admin/ui',
            children:[
                {
                    title:'按钮',
                    key:'/admin/ui/buttons'
                },
                {
                    title:'modal',
                    key:'/admin/ui/modal'
                },
                {
                    title:'selector',
                    key:'/admin/ui/selector'
                },
                {
                    title:'timePicker',
                    key:'/admin/ui/timePicker'
                },
            ]
        },
        {
            'title':'员工管理',
            key:'/admin/user'
        },
        {
            'title':'客户管理',
            key:'/admin/customer'
        },{
            'title':'商品管理',
            key:'/admin/goods',
            children:[
                {
                    title:'食品',
                    key:'/admin/goods/food'
                },
                {
                    title:'药品',
                    key:'/admin/goods/medicine'
                },
                {
                    title:'服装',
                    key:'/admin/goods/clouth'
                }
                 
            ]
        },
        {
            'title':'业务管理',
            key:'/admin/task'
        }
    ]
export default MenuConfig;

