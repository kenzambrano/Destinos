<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-btn
        icon
        light
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        light
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        light
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        light
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">

          <v-layout row wrap align-center>

            <v-flex xs12>
              <v-card height="70px" style="overflow: hidden;">
                <v-bottom-nav absolute :value="e31" class="transparent">
                  <v-btn flat light class="teal--text" @click.native="e3 = 1" :value="e3 === 1">
                    <span>List Users</span>
                    <v-icon>toc</v-icon>
                  </v-btn>
                  <v-btn flat light class="teal--text" @click.native="e3 = 2" :value="e3 === 2">
                    <span>New Users</span>
                    <v-icon>playlist_add</v-icon>
                  </v-btn>
                </v-bottom-nav>
              </v-card>
            </v-flex>

            <v-data-table
                v-bind:headers="headers"
                :items="users"
                hide-actions
                class="elevation-5"
              >
              <template slot="items" scope="props">
                <td>{{ props.item.id }}</td>
                <td> {{ props.item.name }}</td>
              </template>
            </v-data-table>

          </v-layout>

        </v-slide-y-transition>
      </v-container>
    </main>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import {db} from './api/firebase';

  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'supervisor_account', title: 'Users' },
          { icon: 'explore', title: 'Destinations' },
          { icon: 'card_travel', title: 'Packages' },
          { icon: 'rate_review', title: 'Activities' },
          { icon: 'mms', title: 'Experiences' },
          { icon: 'work', title: 'Orders' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Destinos Magazines',

        // tabla

        headers: [
          {
            value: 'id',
            align: 'left',
            sortable: false,
            text: 'Code Identify:'
          },
          {
            value: 'name',
            align: 'left',
            text: 'Name:'
          }
        ],

        users: [],

        usuarios: [
          {
            id: 1,
            name: 'Frozen Yogurt'
          },
          {
            id: 1,
            name: 'Ice cream sandwich'
          },
        ],

        e3: 1,
        e31: true

      }
    },

    firebase: {
      users: {
        source: db.ref('users'),
        cancelCallback(err) {
          console.error(err);
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
