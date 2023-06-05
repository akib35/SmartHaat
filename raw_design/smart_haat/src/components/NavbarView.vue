<template>
    <v-app-bar app color ="#3853D8" dark>
<v-btn icon>
    <v-icon>mdi-magnify</v-icon>
</v-btn>
<v-divider vertical class="ml-1 mr-3"></v-divider> 
<v-btn icon>
<v-icon>mdi-menu</v-icon></v-btn>
<v-toolbar-title>
    <span class="caption">Category</span>
</v-toolbar-title>
<v-divider vertical class="ml-5"></v-divider>

<div style ="position: absolute; margin-left:auto; left:0; margin-right:auto; right:0; text-align:center;">
    <h4>SmartHaat</h4>
</div>
<v-spacer></v-spacer>
<v-divider vertical></v-divider>
<v-btn icon class="mx-1"><v-icon>mdi-account-outline</v-icon>
</v-btn>
<v-divider vertical></v-divider>
<v-btn icon class="mx-1">
  <v-badge color="#94D0EF" content="2">
    <v-icon>mdi-cart-outline</v-icon>
    </v-badge>  
</v-btn>
</v-app-bar>
</template>
<script>
export default{

}
</script>
<style>
.v-toolbar_title{
    font-size: 1 rem !important;
}
.v-badge_badge {
    font-size: 10px !important;
    height :18px  !important;
    min-width: 18px;
}
</style>