<template>
  <div :class="{'message-container':true, 'right-side-message':mine}">
    <div class="rounded-message">
      <p>
        <slot></slot>
      </p>
      <span class="msg-time">{{time}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mine", "time"]
};
</script>

<style>
.rounded-message {
  border: 1px solid rgb(214, 214, 214);
  max-width: 80%;
  padding: 10px;
  border-radius: 15px;
  margin-top: 10px;
  line-height: 20px;
}
.msg-time {
  font-size: 12px;
  color: grey;
  float: right;
}
.message-container {
  width: 100%;
  display: flex;
}
.right-side-message {
  justify-content: flex-end;
}
</style>