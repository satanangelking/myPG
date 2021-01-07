<template>
  <div class="fruits">
    <FTabbar>
      <div slot="tag" v-for="data in datalist" :key="data">{{ data }}</div>
    </FTabbar>
    <div class="content">
      <div class="left" ref="left">
        <ul>
          <li
            v-for="(item, index) in left"
            :key="index"
            :class="{ current: currentIndex === index }"
            @click="selectItem(index, $event)"
            ref="lItem"
          >
            <span class="left-item">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul>
          <li
            v-for="item in right"
            :key="item.name"
            class="right-item right-item-hook"
            ref="rItem"
          >
            <h1>{{ item.name }}</h1>
            <ul>
              <li v-for="(num, index) in item.content" :key="index">
                <div>{{ num }}</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FTabbar from "@/views/fruits/fruitsitem/tabbar";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      datalist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      left: ["a", "b", "c", "d", "e", "f"],
      right: [
        {
          name: "a",
          content: ["1", "2", "3", "4", "5"]
        },
        {
          name: "b",
          content: ["1", "2", "3", "4", "5"]
        },
        {
          name: "c",
          content: ["1", "2", "3", "4", "5"]
        },
        {
          name: "d",
          content: ["1", "2", "3", "4", "5"]
        },
        {
          name: "e",
          content: ["1", "2", "3", "4", "5"]
        },
        {
          name: "f",
          content: ["1", "2", "3", "4", "5"]
        }
      ],
      listHeight: [],
      scrollY: 0, //实时获取当前y轴的高度
      clickEvent: false
    };
  },
  components: {
    FTabbar
  },
  methods: {
    _initScroll() {
      this.lefts = new BScroll(this.$refs.left, {
        click: true
      });
      this.rights = new BScroll(this.$refs.right, {
        probeType: 3 //探针的效果，实时获取滚动高度
      });
      //rights这个对象监听事件，实时获取位置pos.y
      //不知道为什么better-scroll方法scroll的高比event.clientHeight 小1
      this.rights.on("scroll", pos => {
        // console.log(pos.y);
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _getHeight() {
      let rightItems = this.$refs.rItem;
      let height = 0;
      this.listHeight.push(height);
      for (let i in rightItems) {
        let item = rightItems[i];
        height += Math.floor(item.clientHeight);
        this.listHeight.push(height);
      }
    },
    selectItem(index, event) {
      if (!event._constructed) {
        return;
      } else {
        let rItems = this.$refs.rItem;
        let el = rItems[index];
        this.rights.scrollToElement(el, 1000);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
      this._getHeight();
    });
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let height2 = this.listHeight[i + 1];

        // console.log(height + " " + height2 + " " + this.scrollY);
        //当height2不存在的时候，或者落在height和height2之间的时候，直接返回当前索引
        //>=height，是因为一开始this.scrollY=0,height=0

        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          return i;
        }
        if (
          this.listHeight[this.listHeight.length - 1] -
            this.$refs.right.clientHeight <=
          this.scrollY
        ) {
          if (this.clickTrue) {
            return this.currentNum;
          } else {
            return this.listHeight.length - 1;
          }
        }
      }
      //如果this.listHeight没有的话，就返回0
      return 0;
    }
  }
};
</script>
<style scoped>
.content {
  display: flex;
  position: absolute;
  top: 100px;
  bottom: 100px;
  width: 100%;
  overflow: hidden;
  background: #eee;
}
.left {
  flex: 0 0 80px;
  width: 80px;
  background-color: #f3f5f7;
}
.left li {
  width: 100%;
  height: 100%;
}
.current {
  background-color: red;
}
.left-item {
  display: block;
  width: 100%;
  height: 100px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid yellow;
}
.right {
  flex: 1;
}
.right-item li {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-bottom: 1px solid yellow;
}
* {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
