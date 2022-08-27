<template>
  <div class="music font-mono min-h-screen">
    <div class="ml-0 mb-24 w-full transform scale-100 opacity-75">
      <aplayer
        class="bg-gray-400"
        :music="{
          title: 'Cry Baby',
          artist: 'DevilMan Crybaby',
          src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_000.mp3',
          pic:
            'https://www.lemagducine.fr/wp-content/uploads/2018/01/critique-devilman-crybaby.jpg',
          theme: 'darkred'
        }"
        :list="[
          {
            title: 'Crybaby',
            artist: 'Devilman Crybaby',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_000.mp3',
            pic:
              'https://www.lemagducine.fr/wp-content/uploads/2018/01/critique-devilman-crybaby.jpg',
            theme: 'darkred'
          },
          {
            title: 'Coalescence',
            artist: 'Chris Christodoulou',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_001.mp3',
            pic:
              'https://www.journaldugeek.com/files/2013/12/Risk-of-Rain-Test-1.png',
            theme: 'darkred'
          },
          {
            title: 'Where the leviathans roam',
            artist: 'David Bergeaud',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_002.mp3',
            pic:
              'https://vignette4.wikia.nocookie.net/ratchet/images/0/0a/Leviathan.png/revision/latest?cb=20111204233332',
            theme: 'darkred'
          },
          {
            title: 'Road Rage (Ice Truck Edit)',
            artist: 'The Toxic Avenger',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_003.mp3',
            pic: 'https://i.ytimg.com/vi/1A6zPQwm5K4/maxresdefault.jpg',
            theme: 'darkred'
          },
          {
            title: 'Vordhosbn',
            artist: 'Aphex Twin',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_004.mp3',
            pic:
              'https://more-music-videos.icu/images/aphex-twin-vordhosbn_insel6lp/137.jpg',
            theme: 'darkred'
          },
          {
            title: 'Waltz of Loneliness',
            artist: 'Mori Hideharu',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_005.mp3',
            pic:
              'https://img.over-blog-kiwi.com/0/43/69/70/201305/ob_f365d4e8f86ebfa181926b7106d6e1a6_black-rock-shooter.jpg',
            theme: 'darkred'
          },
          {
            title: 'Making of Cyborg',
            artist: 'Kid Atari',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_006.mp3',
            pic:
              'https://fr.web.img2.acsta.net/pictures/17/02/13/16/43/144405.jpg',
            theme: 'darkred'
          },
          {
            title: 'Interlude',
            artist: 'Hugo Tsr',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_007.mp3',
            pic: 'https://cdn-www.konbini.com/fr/files/2020/04/hugo-tsr.jpg',
            theme: 'darkred'
          },
          {
            title: 'Caros',
            artist: 'Igorrr',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_008.mp3',
            pic:
              'https://www.coreandco.fr/upload/pics/albums2/big/igorrr-nostril-2408.jpg',
            theme: 'darkred'
          },
          {
            title: 'Distorted Town',
            artist: 'Black Rock Shooter',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_010.mp3',
            pic:
              'https://img.over-blog-kiwi.com/0/43/69/70/201305/ob_f365d4e8f86ebfa181926b7106d6e1a6_black-rock-shooter.jpg',
            theme: 'darkred'
          },
          {
            title: 'Aku no Hana',
            artist: 'Shinosaki Asako',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_011.mp3',
            pic: 'https://animablog.fr/images/Aku%20no%20hana%202.jpg',
            theme: 'darkred'
          },
          {
            title: 'Wasteland Nostalgia',
            artist: 'Ike Yoshihiro',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_012.mp3',
            pic:
              'https://vignette.wikia.nocookie.net/ergoproxy/images/8/80/Monad-proxy.jpg/revision/latest?cb=20100711185939',
            theme: 'darkred'
          },
          {
            title: 'Leah',
            artist: 'Russell Brower',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d1_014.mp3',
            pic:
              'https://cdnb.artstation.com/p/assets/images/images/001/726/139/large/andre-tomacheski-leah.jpg?1451837089',
            theme: 'darkred'
          },
          {
            title: 'Going To Zone',
            artist: 'Atsuki Kimura',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_000.mp3',
            pic:
              'https://images-na.ssl-images-amazon.com/images/I/51s4VbfTt5L._AC_SY445_.jpg',
            theme: 'darkred'
          },
          {
            title: 'Three-Faced of Zone',
            artist: 'Toshiyuki Honda',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_001.mp3',
            pic:
              'https://images-na.ssl-images-amazon.com/images/I/51s4VbfTt5L._AC_SY445_.jpg',
            theme: 'darkred'
          },
          {
            title: 'Zone Rhapsody',
            artist: 'Toshiyuki Honda',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_002.mp3',
            pic:
              'https://images-na.ssl-images-amazon.com/images/I/51s4VbfTt5L._AC_SY445_.jpg',
            theme: 'darkred'
          },
          {
            title: 'St. James Infirmary',
            artist: 'Atsuki Kimura',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_003.mp3',
            pic:
              'https://images-na.ssl-images-amazon.com/images/I/51s4VbfTt5L._AC_SY445_.jpg',
            theme: 'darkred'
          },
          {
            title: 'Sympathy',
            artist: 'Atsuki Kimura',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_004.mp3',
            pic:
              'https://images-na.ssl-images-amazon.com/images/I/51s4VbfTt5L._AC_SY445_.jpg',
            theme: 'darkred'
          },
          {
            title: 'Snow',
            artist: 'Toshiyuki Honda',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_005.mp3',
            pic:
              'https://images-na.ssl-images-amazon.com/images/I/51s4VbfTt5L._AC_SY445_.jpg',
            theme: 'darkred'
          },
          {
            title: 'Tears of a samurai',
            artist: 'RZA',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_006.mp3',
            pic:
              'https://media.senscritique.com/media/000006492156/source_big/Afro_Samurai.jpg',
            theme: 'darkred'
          },
          {
            title: 'Metropolis Kerwan',
            artist: 'David Bergeaud',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_007.mp3',
            pic:
              'https://i.pinimg.com/originals/b5/0f/cb/b50fcb14d0e0799cb7c24ddc5d3be4cc.jpg',
            theme: 'darkred'
          },
          {
            title: 'Memory',
            artist: 'Ib',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_008.mp3',
            pic:
              'https://i.skyrock.net/2377/83552377/pics/3156388344_1_4_8C139wYo.png',
            theme: 'darkred'
          },
          {
            title: 'Minor fantasy',
            artist: 'Chilly Gonzales',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_009.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'La pente',
            artist: 'Kéké Laglisse',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_010.mp3',
            pic:
              'https://static1.millenium.org/articles/3/36/22/23/@/1315992-kk-amp_main_img-1.JPG',
            theme: 'darkred'
          },
          {
            title: 'デス・パレード',
            artist: 'Death Parade',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_011.mp3',
            pic:
              'https://image.animedigitalnetwork.fr/license/deathparade/tv/web/affiche_370x0.jpg',
            theme: 'darkred'
          },
          {
            title: 'ゲームA',
            artist: 'Death Parade',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_012.mp3',
            pic:
              'https://image.animedigitalnetwork.fr/license/deathparade/tv/web/affiche_370x0.jpg',
            theme: 'darkred'
          },
          {
            title: 'Only You',
            artist: 'Portishead',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_013.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Piano Concerto No 4 in G KV 41 - Andante',
            artist: 'Mozart',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_014.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Fly Me to the Moon',
            artist: 'Piano de Bossa',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_015.mp3',
            pic:
              'https://i.pinimg.com/originals/48/d0/3c/48d03c99d2b294c121f1c232b435d0c0.jpg',
            theme: 'darkred'
          },
          {
            title: 'bloom',
            artist: 'j^p^n',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_016.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: '左手指月',
            artist: '古琴Guqin',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_017.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Dertli Dolap',
            artist: 'Özgür Baba',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_018.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'JSB - RPG',
            artist: 'Johann Sebastian Bach',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_019.mp3',
            pic:
              'https://www.telerama.fr/sites/tr_master/files/styles/simplecrop455/public/medias/2008/07/media_30989/M10318.jpg?itok=KYIa8PFB',
            theme: 'darkred'
          },
          {
            title: 'whatsyourask.m4p',
            artist: 'Mac Quayle',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_020.mp3',
            pic:
              'https://heavyeditorial.files.wordpress.com/2017/10/img_6544.jpg?quality=65&strip=all&strip=all',
            theme: 'darkred'
          },
          {
            title: 'Where is my mind',
            artist: 'Maxence Cyrin',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_021.mp3',
            pic:
              'https://heavyeditorial.files.wordpress.com/2017/10/img_6544.jpg?quality=65&strip=all&strip=all',
            theme: 'darkred'
          },
          {
            title: 'humanpunchingbag.aiff',
            artist: 'Mac Quayle',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_022.mp3',
            pic:
              'https://heavyeditorial.files.wordpress.com/2017/10/img_6544.jpg?quality=65&strip=all&strip=all',
            theme: 'darkred'
          },
          {
            title: 's4ve-the-w0rld.act',
            artist: 'Mac Quayle',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_023.mp3',
            pic:
              'https://heavyeditorial.files.wordpress.com/2017/10/img_6544.jpg?quality=65&strip=all&strip=all',
            theme: 'darkred'
          },
          {
            title: 'root@kali.0cc',
            artist: 'Mac Quayle',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_024.mp3',
            pic:
              'https://heavyeditorial.files.wordpress.com/2017/10/img_6544.jpg?quality=65&strip=all&strip=all',
            theme: 'darkred'
          },
          {
            title: 'metadata.paf',
            artist: 'Mac Quayle',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d2_025.mp3',
            pic:
              'https://heavyeditorial.files.wordpress.com/2017/10/img_6544.jpg?quality=65&strip=all&strip=all',
            theme: 'darkred'
          },
          {
            title: 'Problème d émotion',
            artist: 'Igorrr',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_000.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Dentist',
            artist: 'Igorrr',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_001.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Fryzuka Konika',
            artist: 'Igorrr',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_002.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Akira Senju',
            artist: 'Fullmetal Alchemist Brotherhood',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_003.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Frantic',
            artist: 'Cho Young Wuk',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_004.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Somewhere In The Night',
            artist: 'Cho Young Wuk',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_005.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'In a Lonely Place',
            artist: 'Cho Young Wuk',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_006.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Look Back In Anger',
            artist: 'Cho Young Wuk',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_007.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Cries and Whispers',
            artist: 'Lee Ji-Soo',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_008.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Freedom',
            artist: 'Anthony Hamilton',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_009.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Prelude in E-Minor op.28 no. 4',
            artist: 'Frédéric Chopin',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_010.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Nocturne op.9 No.1',
            artist: 'Frédéric Chopin',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_011.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Black Stones',
            artist: 'Hasegawa Tomoki',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_012.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Cruel Angel s Thesis',
            artist: 'Anime That Jazz',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_013.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Venice Theme',
            artist: 'Sly',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_014.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Walt',
            artist: 'Zankyou no Terror',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_015.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'WombSys',
            artist: 'Ike Yoshihiro',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_016.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'New Amsterdam',
            artist: 'Moondog',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_017.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Main Theme',
            artist: 'LA Noire',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_018.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Out to space',
            artist: 'Bob Marley',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_019.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Aki ni Somaru',
            artist: 'Yasuharu Takanashi',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_020.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Retrospective',
            artist: 'Ga-Rei Zero',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_021.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Öngyilkos Vasárnap',
            artist: 'Venetian Snares',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_022.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'The Last Sun',
            artist: 'Chris Allen',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_023.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Ephemeral Faze',
            artist: 'PRS',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_024.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Around',
            artist: 'Noir & Haze',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_025.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'For the Damaged Coda',
            artist: 'Blonde Redhead',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_026.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Playmobil Knight',
            artist: 'Tetra Hydro K',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_027.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Into The Deep',
            artist: 'Epidemie',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_028.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Radio Protector',
            artist: '65daysofstatic',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_029.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Me!Me!Me! Part.2',
            artist: 'Teddyloid',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_030.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Rakatakatikatong',
            artist: 'E-Coli',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_031.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Amen Gypsy',
            artist: 'E-coli',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_032.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Snakecharmer',
            artist: 'Jahba',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_033.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Sous les draps',
            artist: 'Mr Nobody',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_034.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Du bout des doigts',
            artist: 'Mr Nobody',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_035.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'La nature des peurs',
            artist: 'Mr Nobody',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_036.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Paradise',
            artist: 'Satanicpornocultshop',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_037.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Porque te vas',
            artist: 'Satanicpornocultshop',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_038.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Find Candace',
            artist: 'Venetian Snares',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_039.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Comment te dire adieu',
            artist: 'Satanicpornocultshop',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_040.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Cancel',
            artist: 'Venetian Snares',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_041.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Vache',
            artist: 'Venetian Snares',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_042.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'My So-Called Life',
            artist: 'Venetian Snares',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_043.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Shoot Myself',
            artist: 'Venetian Snares',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_044.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Light s Theme',
            artist: 'Death Note',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_045.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Nocturne no. 19 op 72 no 1 E Minor',
            artist: 'Frederic Chopin',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_046.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Duffy',
            artist: 'Venetian Snares',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_047.mp3',
            pic: '',
            theme: 'darkred'
          },
          {
            title: 'Hiszekeny',
            artist: 'Venetian Snares',
            src: 'https://www.luxminima.com/alpha/shell/MUSIC/d3_048.mp3',
            pic: '',
            theme: 'darkred'
          }
        ]"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Aplayer from "vue-aplayer";

export default {
  name: "music",
  components: {
    //HelloWorld
    Aplayer
  }
};

/*
{
  title: 'Stand by Me',
  artist: 'Otis Redding',
  src: '',
  pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Otis_Redding_%282%29.png/1200px-Otis_Redding_%282%29.png',
  theme:'darkred'
},
{
  title: 'It s A Man s Man s Man s World',
  artist: 'James Brown',
  src: '',
  pic: '',
  theme:'darkred'
},
*/
</script>
<style lang="scss"></style>
