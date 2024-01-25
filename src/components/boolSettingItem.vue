<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { computed } from 'vue';

const { t } = useI18n();
const $q = useQuasar();

const props = defineProps({
  settingName: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    default: 'bg-secondary'
  },
  enable: {
    type: Boolean,
    default: true
  }
});

const defaultValue = defineModel({
  type: Boolean,
  required: true
});
const isLtMd = computed(() => $q.screen.lt.md);
</script>

<template>
  <div class="row justify-between items-center full-width q-py-sm" :class="[props.backgroundColor]">
    <div class="col-7">
      <span class="text-subtitle1">{{ t(props.settingName) }}</span>
    </div>
    <div class="col-5 row justify-end items-center">
      <q-toggle v-model="defaultValue" color="dark" :disable="!props.enable" :dense="!isLtMd" />
    </div>
  </div>
</template>
