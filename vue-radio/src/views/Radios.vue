<!--
    Copyright 2020 Phil Schatzmann

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

<template>
    <v-container fluid>
            <v-row>
                <v-col  v-for="item in this.radios" :key="item.stationuuid" >
                    <v-hover  v-slot:default="{ hover }" close-delay="200">
                        <v-card outlined tiled class="mx-auto" v-bind:class="cardStyle(item)" max-width="200px" :elevation="hover ? 16 : 2" @click.native="play(item)">

                            <v-img 
                                :src="item.favicon"
                                height="200px"
                                width="200px">

                                <template v-slot:placeholder>
                                    <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                    >
                                    <v-img
                                        :src="require('@/assets/radio.svg')"
                                        height="200px"
                                        width="200px"/>

                                    </v-row>
                                </template>

                            </v-img>
                            <v-card-text v-text="item.name">
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>

    </v-container>
</template>

<script>
    import WebService from "@/services/WebService"

    export default {
        data: () => ({
            radios: [],
            hover: false,
        }),

        computed: {

        },

        methods: {
            // a computed getter
            cardStyle: function (item) {
            // `this` points to the vm instance
                var result = []
                if (this.isSelected(item.stationuuid))
                    result.push('selected')
                if (this.isPlaying(item.stationuuid))
                    result.push('pulsate')
                return result;
            },

            play: function (item) {
                var id =   item.stationuuid
                var url = item.url_resolved

                // set new radio
                var player = this.$store.state.musicPlayer;
                var result = this.$store.state.activeRadio
                if (this.isPlaying(id)) {
                    player.stop();
                    result.active = false;
                    result.error = false
                    this.$store.commit('setActiveRadio', result );
                } else {
                    result.active = false
                    result.id = id
                    result.url = url
                    result.name = item.name
                    result.error = false
                    this.$store.commit('setActiveRadio', result );
                    player.play(url).then(playResult => {
                        // we ignore old requsts
                        if (playResult.url == this.$store.state.activeRadio.url){
                            result.active = playResult.playing;
                            result.error = !playResult.playing
                            this.$store.commit('setActiveRadio', result );
                        }
                    }, error => {
                        result.active = false;
                        result.error = true
                        this.$store.commit('setActiveRadio', result );
                        console.error(error)
                    }).catch(e => {
                        result.active = false;
                        result.error = true
                        this.$store.commit('setActiveRadio', result );
                        console.log(e);
                    });
                }
            },

            getRadios(field, value){
                var temp = this.$store.state.radios[field+value]
                if (temp!=null){
                    this.radios = temp;
                    this.$store.commit('setLoading', false);

                } else {
                    this.$store.commit('setLoading', true);
                    const ws = new WebService()
                    ws.getRadios(field, value).then(result => {
                        this.radios = result.data
                            .filter(rec => rec.lastcheckok==1 && !this.$store.state.blacklist.includes(rec.stationuuid))
                            .sort((c1, c2) => c2.clickcount - c1.clickcount)

                        this.$store.commit('setRadios', {id:field+value, value:this.radios});
                        this.$store.commit('setLoading', false);

                    }).catch(error => {
                        console.error(error)
                        this.$store.commit('setLoading', false);
                    })
                }
            },

            isSelected(id){
                return this.$store.state.activeRadio.id==id
            },

            isPlaying(id){
                return this.$store.state.activeRadio.active && this.$store.state.activeRadio.id==id
            }
        },

        mounted() {
            this.$store.commit('setLoading', true);
            var searchTerm = this.$router.currentRoute.params['id']=== undefined ? "blues": this.$router.currentRoute.params.id;
            var field = this.$router.currentRoute.name == 'Genre' ? 'tag' : 'countrycode'
            this.getRadios(field, searchTerm);
        },
    }

</script>

<style>
    .v-card {
        cursor: pointer;
    }

    .selected {
        background-color: darkgrey;
    }

    .pulsate {
        animation: pulse 1s infinite;
    }

    @keyframes pulse {
        0% {
            background-color: lightgrey;
        }
        100% {
            background-color: black;
        }
    }

</style>