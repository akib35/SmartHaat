<template>
    <v-app>
        <NavbarView class="index"/>
    <div>
    <v-container fluid>
        <v-card tile class="text-xs-center mt-n6 pb-4" color="white">
            <v-layout row wrap class="d-flex">
                <transition name="slide-y">
                <v-img src="Qurbani-1.avif" height="1487px" style="width: 1272px">
                    <div class="d-flex fill-height justify-center align-center">
                  <div class="text-h3 text-blue">
                   <p> Blog </p><br>
                   <div class="text-h6">
                   <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta illo, nisi ratione voluptatibus cumque debitis totam praesentium consectetur corporis. Laboriosam iure ipsam nobis sunt quibusdam, praesentium fugiat aspernatur ipsa suscipit at perferendis dolore excepturi consectetur perspiciatis est et aperiam vel harum porro voluptas asperiores! Veritatis laboriosam impedit harum facere repudiandae velit minus dolore minima alias enim architecto ipsum ullam reprehenderit molestiae quidem nesciunt debitis et eius sint, voluptatum ipsa fuga. Repellendus impedit, sit nihil sapiente voluptas harum amet recusandae suscipit, ex blanditiis dolorem quod, magnam laborum! Praesentium sunt quae doloribus, sit magni voluptate, ipsum cumque aperiam recusandae vel laudantium sed.</p>
                   </div>
                  </div>
                  </div>
                </v-img>
                </transition>
            </v-layout>
            <v-col cols="12" class="mt-0">
                <v-row class="fill-height" align="center" justify="center">
                    <v-col
                cols="12"
                sm="3"
                v-for="(blog, i) in blogs"
                :key="i"
                class="bg-grey-lighten-3"
              >
                <div>
                  <v-card>
                   <v-img :src="blog.image" width="auto" height="240" justify="top" cover>
                   </v-img>
                   <v-card-text class="mx-auto pt-4"><strong>{{ blog.heading }}</strong></v-card-text>
                   <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt id quae ipsum facilis porro necessitatibus rerum doloribus cumque illo?</v-card-text>
  <v-row justify="center">
  <v-col cols="auto">
    <v-dialog
      v-model="dialog"
      width="800"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="blue"
          v-bind="props"
          variant="plain"
        >
          Continue Reading
        </v-btn>
      </template>
      <v-card>
        <v-img :src="blog.image" width="auto" height="425" justify="top" cover>
                   </v-img>
        <v-card-title>
          <span class="text-h5">{{ blog.heading }}</span>
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
          Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
          Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.
          Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
          Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.
          Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
          Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.
          Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.
          Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.
          Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
          +
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-col>
  </v-row>
                  </v-card>
                </div>
              </v-col>
                </v-row>
            </v-col>
        </v-card>
    </v-container>
    </div>
    <FooterView/>
    </v-app>
</template>
<script>
import { defineComponent } from 'vue';
import NavbarView from '@/components/NavbarView.vue';
import FooterView from '@/components/FooterView.vue';
export default defineComponent({
    name: 'BlogPost',
    components: {
        NavbarView,
        FooterView,
    },
    data: () =>({
        dialog: false,
        blogs: [{
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"Is it beneficial to make a farm of brahama ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"How to naturally grow up your Cattle ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"Is it beneficial to make a farm of brahama ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"Is it beneficial to make a farm of brahama ?",
    },
    {
            image :"livestock-2.jpeg",
            heading:"Is it beneficial to make a farm of brahama ?",
    },
        ],
    }),
})
</script>
<style>
.slide-y-enter-active,
.slide-y-leave-active {
    transition: opacity 1s ease-out;
}

.slide-y-enter,
.slide-y-leave-from {
    opacity: 0;
}
</style>