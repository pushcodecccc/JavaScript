<template>
  <div>
    <h2>名字是：{{ name }}</h2>
    <h2>性别是：{{ sex }}</h2>
    <h2>学生年龄{{ age + 1 }}</h2>
    <button @click="updataAge">修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    console.log(this);
    return {
      myage: this.age,
    };
  },
  methods: {
    updataAge() {
      this.myage++;
    },
  },
  //简单声明接受
  props: ["name", "sex", "age"],

  // 接受的同时对数据进行类型限制
  // props: { name: String, age: Number, sex: String },

  // 接受的同时对数据：进行类型限制+默认值的指定+必要性的限制
  // props: {
  //   name: {
  //     type: String, //name的类型是字符串
  //     required: true, //名字必须要传
  //   },
  //   age: {
  //     type: Number,
  //     default: 99, //默认值
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>