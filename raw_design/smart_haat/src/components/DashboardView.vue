<template>
    <v-container fluid>
        <v-card color="#3853D8" height="150px" title flat class="d-flex align-center justify-center" dark>
         <v-row>
            <v-col cols="12" sm="12">
                <h4 class="text-center">Cattles</h4>
                <v-breadcrumbs :items="items" class="justify-center nt-n7" dark>
                <template v-slot:divider>
                    <v-icon color="#7C92FE">mdi-chevron-right</v-icon>  
                </template>
                </v-breadcrumbs>
            </v-col>   

            </v-row>
        </v-card>
        <v-card tile class="mx-16 mt-n10 card1" color="white">
          <v-row>
            <v-col cols="8" sm="8" class="pr-0">
                <v-card height="400px" tile flat color="#3890D8">
                    <v-row>
                        <v-col cols="12" sm="8" class="pl-8 pt-5">
                            <v-btn color="black" dark class="withoutupercase" small tile>New Arrival</v-btn>
                            <h6 class="white--text nt-8">Smart_Haat</h6>
                            <h3 class="white--text nt-5">Goat</h3>
                            <v-btn rounded color="#4C9CDB" dark class="withoutuppercasse px-8 mt-10">More Info</v-btn>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-img src="Goat.png" max-height="400" max-width="400"  contain class="mt-n6"></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="10" sm="8" class="pl-0">
                <v-card height="250px" tile flat color="#6857E1">
                    <v-row>
                        <v-col cols="12" sm="6" class="pl-8 pt-5">
                            <v-btn color="black" dark class="withoutupercase" small tile>New Arrival</v-btn>
                            <h6 class="white--text nt-8">Smart_Haat</h6>
                            <h3 class="white--text nt-5">Bull</h3>
                            <v-btn rounded color="#8375E7" dark class="withoutuppercasse px-8 mt-3">More Info</v-btn>
                        </v-col>
                        <v-col cols="7" sm="12">
                            <v-img src="Cow-2.jpg" max-height="400" max-width="420"  contain class="mt-n2"></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="3" class="mt-n6 pr-0">
                <v-toolbar flat outlined>
                    <v-toolbar-title>
                    <strong>Filter</strong></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-divider vertical></v-divider>
                    <v-btn icon class="ml-1">
                        <v-icon color="#3853D8">
                            mdi-sync
                        </v-icon>
                    </v-btn>
                </v-toolbar>
            </v-col>
            <v-col cols="12" sm="3" class="mt-n6 px-0">
                <v-toolbar flat outlined>
                    <v-toolbar-title>
                    Sort By:<span>Price $-$$</span></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon class="mr-4">
                        <v-icon color="black">
                            mdi-menu-down
                        </v-icon>
                    </v-btn>
                </v-toolbar>
            </v-col>
            <v-col cols="12" sm="3" class="mt-n6 px-0">
                <v-toolbar flat outlined class="">
                    <v-toolbar-title>
                    Show:<span>12</span></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon class="mr-4">
                        <v-icon color="black">
                            mdi-menu-down
                        </v-icon>
                    </v-btn>
                </v-toolbar>
            </v-col>
            <v-col cols="12" sm="3" class="mt-n6 pl-0">
                <v-toolbar flat outlined>
                    <v-toolbar-title>
                    Sort By:<span>Price $-$$</span></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon class="mr-1">
                        <v-icon color="#3853D8">
                            mdi-apps
                        </v-icon>
                    </v-btn>
                    <v-divider vertical></v-divider>
                    <v-btn icon class="mx-1">
                        <v-icon color="grey">mdi-format-list-bulleted</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-col>
          </v-row>
        </v-card>
    </v-container>
</template>
<script>
export default{
    data :()=>({
    items:[
    {
        text: "Home" ,
        disabled: false,
        href: "breadcrumbs_home"
    } ,
    {
        text: "Catalog" ,
        disabled: false,
        href: "breadcrumbs_catalog"
    },
    {
        text: "Cow" ,
        disabled: false,
        href: "breadcrumbs_cow"
    },
    {
        text: "Goats" ,
        disabled: false,
        href: "breadcrumbs_goats"
    }
    ] 
    })
}
</script>
<style>
.container{
    padding: 0px !important;
}
.v-btn.withoutuppercase{
    text-decoration: none;

}
.v-chip.v-size--default{
    border-radius: 50px !important;
    font-size: 14px !important;
    height: 40px !important;
    width: 40px !important;
}
.v-card--reveal{
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    widows: 100%;
}
.card1{
    z-index: 10;
}
.card2{
    z-index: 1;
}
</style>