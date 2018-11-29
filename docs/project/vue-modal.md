* 自己写的，一是 show 要绑定一个开关属性，二是可选的 close 方法，点击空白处时关闭
* TODO: 默认 slot 只放了个 body，可以充实一些骨架，标题，关闭按钮，取消确认，允许传样式来定制，供参考用也行
* 发布了插件，npm 包名还是取个不一样的，可以换下单词顺序
* npm 发布简单，npm login => npm publish

```
button(@click="toggleModal") toggle modal
modal(:show="showModal" @close="toggleModal")
</template>
<script>
import Modal from 'Modal'

export default {
components: {
	Modal
},
```
