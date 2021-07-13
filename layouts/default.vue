<template>
  <v-app>
    <v-navigation-drawer 
      v-model="drawer"
      fixed
      app
    >
      <v-list
       v-for="(item,item_id) in list"
       :key="item_id"
       >
       
       <div v-if=item.item class="pa-0 my-0">
        <v-list-item
        :to="item.to"
        exact
        >
       
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
       </div>
       
       <div v-if=item.group class="pa-0 my-0">
        <v-list-group
        :prepend-icon=item.icon
        no-action
        >
        
          <template v-slot:activator>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(listitem,listitem_id) in item.listitems"
            :key=listitem_id
            :to="listitem.to"
            link
            router
          >
            <v-list-item-action class="mx-2"><v-icon>{{ listitem.icon }}</v-icon></v-list-item-action>
            <v-list-item-content><v-list-item-title>{{ listitem.title }}</v-list-item-title></v-list-item-content>
          </v-list-item>

        </v-list-group>
       </div>

      </v-list>

    </v-navigation-drawer>
    <v-app-bar
      color="indigo"
      :clipped-left="clipped"
      :collapse="!collapse"
      :collapse-on-scroll="collapse"
      fixed
      app
      dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; 2021/7/21</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  mounted() {
    
  },
  data () {
    return {
      collapse:true,
      clipped: false,
      drawer: false,
      fixed: false,
      list:[
        {
          item:true,
          icon: 'mdi-home',
          title: 'HOME',
          to:"/"
        },
        {
          group:true,
          title:"Java",
          icon:"mdi-language-java",
          listitems:[
            {
              title:"意欲問題１",
              to:'/java/1'
            },
            {
              title:"意欲問題２",
              to:'/java/2'
            },
            {
              title:"意欲問題３",
              to:'/java/3'
            },
            {
              title:"意欲問題４",
              to:'/java/4'
            },
          ]
        },
        {
          group:true,
          title:"DBA章末問題",
          icon:"mdi-database",
          listitems:[{
          icon:'mdi-router-wireless',
          title:'1章',
          to:'/RDB_EXAM/1',
        },
        {
          icon:'mdi-router-wireless',
          title:'2章',
          to:'/RDB_EXAM/2',
        },
        {
          icon:'mdi-router-wireless',
          title:'5章',
          to:'/RDB_EXAM/5',
        },
        {
          icon:'mdi-router-wireless',
          title:'6章',
          to:'/RDB_EXAM/6',
        },
        {
          icon:'mdi-router-wireless',
          title:'7章',
          to:'/RDB_EXAM/7',
        },
        {
          icon:'mdi-router-wireless',
          title:'8章',
          to:'/RDB_EXAM/8',
        },
        {
          icon:'mdi-router-wireless',
          title:'10章',
          to:'/RDB_EXAM/10',
        }
        ],
        },
        {
          group:true,
          title:"七日でLinux",
          icon:"mdi-linux",
          listitems:[
            {
              title:"一日目",
              to:"/linux/1",
              icon:"mdi-lead-pencil"
            }
          ],
        },
        {
          group:true,
          title:"Linuxおさらい",
          icon:"mdi-linux",
          listitems:[
            {
              title:"1",
              to:"/linux_test/1",
              icon:"mdi-lead-pencil",
            }
          ]
        },

      ],
      Groups:[
        {
          icon:"mdi-account-circle"
        }
      ],
      databases:[
        {
          icon:'mdi-chat-outline',
          title: 'RDBの基礎知識',
          to:'/RDB_SQL/1'
        },
        {
          icon:'mdi-chat-outline',
          title:'SQLの概要',
          to:'/RDB_SQL/2'
        },
        {
          icon:'mdi-chat-outline',
          title:'21/05/27実習',
          to:'/RDB_SQL/3'
        },
      ],
      items: [

        {
          icon: 'mdi-router-wireless',
          title: 'Cisco_5/26_実技',
          to:'/cisco_5_26'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '徒然備忘録'
    }
  }
}
</script>
