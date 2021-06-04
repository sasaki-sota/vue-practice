# Vue.js

## data属性
体感だとreactでの**useState**のようなものな気がする

## method属性
言葉の通りだが関数(function)を記述する  


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


### v-for
```
index.html

    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    <div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
```

```
main.js

            details: ["1 list", "2 list", "3 list"],
            variants: [
                {
                    id: 2234,
                    color: "red"
                },
                {
                    id: 2235,
                    color: "yellow"
                },
            ]
```
とリスト形式で表示する。  
**オブジェクト指向**で平気そう  

### v-on
主にクリックアクションに利用  
reactでの**onClick属性のような働き**  
実際の処理はjsファイルのmethodsの中に記述するようになっている  
`    <button class="button" v-on:click="addToCart">Add to Cart</button>
`  
