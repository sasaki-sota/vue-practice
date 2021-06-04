## Vue.js

### v-bind

画像の表示が`{{}}`を利用してもすることができない とするときに  
`    <img v-bind:src="image">
`  
とすると画像を表示できるようになる。  
他にも**classなどでも利用できる**

### v-if v-else v-else-if

    <p v-if="inStock">In Stock</p> 
    or
    
    # ここに書くこともできる
    <div v-if="Math.random() > 0.5">

**true**の場合のみ出力する
> v-else 要素は、v-if または v-else-if 要素の直後になければなりません。

### v-show

v-ifとほぼ同じ
> とても頻繁に何かを切り替える必要があれば v-show を選び、条件が実行時に変更することがほとんどない場合は、v-if を選びます。  


