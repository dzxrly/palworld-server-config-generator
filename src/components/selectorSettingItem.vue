<script setup lang="ts">
import { computed, PropType } from 'vue';
import { SelectorOptionsItem } from 'src/interface/selectorOptions';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

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
  selectorOptions: {
    type: Array as PropType<SelectorOptionsItem<string>[]>,
    required: true,
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
    class="selector-setting-item row justify-between items-center full-width q-py-sm"
    :class="[props.backgroundColor]"
  >
    <div v-if="!isLtMd" class="col-7">
      <span class="label-text text-subtitle1">{{ t(props.settingName) }}</span>
    </div>
    <div :class="{ 'full-width': isLtMd, 'col-5': !isLtMd }">
      <q-select
        v-if="!isLtMd"
        class="full-width"
        v-model="defaultValue"
        :options="props.selectorOptions"
        color="dark"
        :readonly="!props.enable"
        :option-label="(item) => t(item.label)"
        dense
        outlined
        emit-value
        map-options
      >
      </q-select>
      <q-select
        v-else
        class="full-width"
        v-model="defaultValue"
        :options="props.selectorOptions"
        color="dark"
        :label="label"
        :readonly="!props.enable"
        :option-label="(item) => t(item.label)"
        outlined
        emit-value
        map-options
      >
      </q-select>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.label-text
  font-weight: 400
  color: #1d1b16

.selector-setting-item:hover, .selector-setting-item:focus
  content: ""

  .label-text
    font-weight: 600
    color: #6d5e00
</style>
