<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { computed } from 'vue';

const { t } = useI18n();
const $q = useQuasar();

const props = defineProps({
  settingName: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    default: 'bg-secondary',
  },
  enable: {
    type: Boolean,
    default: true,
  },
});

const defaultValue = defineModel({
  type: String,
  default: '',
  required: true,
});
const isLtMd = computed(() => $q.screen.lt.md);
const label = computed(() => ($q.screen.lt.md ? t(props.settingName) : ''));
</script>
<template>
  <div
    class="string-setting-item row justify-between items-center full-width q-py-sm"
    :class="[props.backgroundColor]"
  >
    <div v-if="!isLtMd" class="col-7">
      <span class="label-text text-subtitle1">{{ t(props.settingName) }}</span>
    </div>
    <div :class="{ 'full-width': isLtMd, 'col-5': !isLtMd }">
      <q-input
        v-if="!isLtMd"
        v-model="defaultValue"
        color="dark"
        :readonly="!props.enable"
        dense
        outlined
      >
        <template #append v-if="defaultValue != ''">
          <q-btn
            icon="clear"
            @click="defaultValue = ''"
            :dense="!isLtMd"
            flat
            round
          />
        </template>
      </q-input>
      <q-input
        v-else
        v-model="defaultValue"
        color="dark"
        :label="label"
        :readonly="!props.enable"
        outlined
      >
        <template #append v-if="defaultValue != ''">
          <q-btn
            icon="clear"
            @click="defaultValue = ''"
            :dense="!isLtMd"
            flat
            round
          />
        </template>
      </q-input>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.label-text
  font-weight: 400
  color: #1d1b16

.string-setting-item:hover, .string-setting-item:focus
  content: ""

  .label-text
    font-weight: 600
    color: #6d5e00
</style>
