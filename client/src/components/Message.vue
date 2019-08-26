<template>
  <div class="message-relative">
    <div :class="{'rounded-message':true, 'right-side-message':mine}">
      <slot></slot>
      <br />
      <span class="message-time">{{time}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mine", "time"]
};
</script>

<style>
.right-side-message {
  position: absolute;
  right: 0px;
}
.rounded-message {
  border: 1px solid rgb(231, 231, 231);
  border-radius: 10px;
  padding: 10px;
  line-height: 14px;
  font-size: 18px;
  width: 30%;
  overflow-x: static;
}
.message-time {
  color: grey;
  font-size: 11px;
  float: right;
}
.message-relative {
  position: relative;
  width: 100%;
}
</style>