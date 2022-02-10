<template>
    <v-container grid-list-xs>
        <div>
            <v-row>
                <v-col cols="12">
                    <div class="text-h3">
                        毎週木曜日は
                        <a class="colorful">
                            定休日
                        </a>

                        です。今日決めました。          
                    </div>
                </v-col>
                <div class=" scroll scroll-string">
                    <b><i>非同期処理ないから！！簡単だよ！！</i></b>
                </div>
            </v-row>
        </div>
    </v-container>
</template>
<style>
.colorful{
    animation:colorful-anime 0.5s linear infinite;
}
.scroll{
    animation: scroll-up-down 1s linear 0s infinite;
    -webkit-animation: scroll-up-down 1s linear 0s infinite;
}
.scroll-string{
    text-align: center;
    font-size: 30px;
    font-family:fantasy;
}
@keyframes scroll-up-down{
    0%{
        color:aqua;
        transform: translateY(-300px);
        /* visibility: visible; */
        opacity:0;
    }
    25%{
        opacity:1;
    }
    50%{
        color:darkgreen;
        opacity:1;
    }
    75%{
        opacity:1;
    }
    100%{
        color:brown;
        opacity:0;
        transform: translateY(800px);
    }
}
@keyframes colorful-anime{
    0%{
        color:rgb(255, 0, 0);
    }
    10%{
        color:rgb(127, 139, 19)
    }
    20%{
        color:rgb(23, 139, 19)
    }
    30%{
        color:rgb(19, 139, 113)
    }
    60%{
        color:rgb(19, 139, 103)
    }
    70%{
        color:rgb(19, 41, 139)
    }
    80%{
        color:rgb(151, 5, 255);
    }
    90%{
        color:rgb(255, 0, 234)
    }
    100%{
        color:rgb(255, 0, 0)
    }
}
</style>