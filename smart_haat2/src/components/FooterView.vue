<template>
    <v-footer dark padless class="text-center">
        
        <v-card flat tile color="black" class="text-white py-12 px-5 mt-n6" width="100%">
            <v-row justify="center">
                <v-col col="12" sm="4">
                    <v-card-text class="white--text pt-n3 mx-6" >
                    <h3>Smart_Haat</h3>
                    </v-card-text>
                    <v-card-text class=" grey--text pt-0 mx-6" align=" center " >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias doloribus vitae deleniti? Corporis, delectus quidem!</v-card-text>
                    <v-toolbar flat color=" transparent" justify="center ">
                        <h5 class=" ml-4 ">Terms And Conditions</h5>
                        <h5 class=" text-center ml-4">Privacy Policy</h5>
                        <h5 class=" text-center ml-4">About Us</h5>
                        <h5 class=" text-center ml-4">Contact Us</h5>
                    </v-toolbar>
                    <v-card-text class=" grey-text" justify="center" >&#169; 2023</v-card-text>
                </v-col>
            </v-row>
            <v-row justify="center">
            <v-col cols="12" sm="4">
                <v-card-text class="pt-0">
                    <v-btn v-for="icon in icons" :key="icon" class="mx-6, white--text" icon>
                        <v-icon size="24px" justify="center">{{icon}}</v-icon>
                    </v-btn>
                </v-card-text>
            </v-col>
            </v-row>
        </v-card>
    </v-footer>
</template>
<script>
export default{
    data:()  =>({
        icons :[
            'mdi-facebook',
            'mdi-twitter',
            'mdi-instagram',
            'mdi-youtube',
            'mdi-whatsapp',
            'mdi-snapchat'
        ],
    })
}
</script>
<style>
</style>