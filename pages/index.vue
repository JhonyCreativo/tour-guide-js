<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-sm-12 text-center mt-5">
                <h1>TourGuide Js</h1>
            </div>
            <div class="col-12 text-center">
                <button class="btn btn-primary mb-3" @click="Start">
                    START
                </button>
            </div>
       
            <div class="col-12 text-center" data-tg-tour="<span>Grupo de botones</span>" data-tg-title="Grupo de botones" >
                <div class="btn-group">
                    <button class="btn btn-success" data-tg-tour="<span>Boton 1</span>" data-tg-title="Boton 1">
                        FIRST BUTTON
                    </button>
                    <button class="btn btn-warning" data-tg-tour="<span>Boton 2</span>" data-tg-title="Boton 2">
                        SECOND BUTTON
                    </button>
                    <button class="btn btn-danger" data-tg-tour="<span>Boton 3</span>" data-tg-title="Boton 3">
                        THIRD BUTTON
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    export default {
        data(){
            
        },
        methods:{
            Start(){
                this.$tour.start()
            }
        }
    }
</script>