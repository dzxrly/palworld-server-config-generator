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
  fixedDigits: {
    type: Number,
    default: 6,
  },
  backgroundColor: {
    type: String,
    default: 'bg-secondary',
  },
  minValue: {
    type: Number,
  },
  maxValue: {
    type: Number,
  },
  step: {
    type: Number,
    default: 0.1,
  },
  enable: {
    type: Boolean,
    default: true,
  },
});

const defaultValue = defineModel({
  type: Number,
  default: 1.0,
  required: true,
});
const isLtMd = computed(() => $q.screen.lt.md);
const label = computed(() => ($q.screen.lt.md ? t(props.settingName) : ''));

function toDigitsFloat(num: number) {
  return Number(parseFloat(num.toString()).toFixed(props.fixedDigits));
}

function onInput(input: string) {
  // check if input is a valid float number
  const reg = /^-?\d+(\.\d+)?$/;
  if (reg.test(input)) {
    const inputNum = parseFloat(input);
    if (props.maxValue != undefined && inputNum > props.maxValue) {
      defaultValue.value = props.maxValue;
    } else if (props.minValue != undefined && inputNum < props.minValue) {
      defaultValue.value = props.minValue;
    } else {
      defaultValue.value = toDigitsFloat(inputNum);
    }
  } else {
    defaultValue.value = toDigitsFloat(defaultValue.value);
  }
}

function add() {
  if (props.maxValue != undefined) {
    defaultValue.value = toDigitsFloat(
      defaultValue.value + props.step > props.maxValue
        ? props.maxValue
        : defaultValue.value + props.step
    );
  } else defaultValue.value = toDigitsFloat(defaultValue.value + props.step);
}

function subtract() {
  if (props.minValue != undefined) {
    defaultValue.value = toDigitsFloat(
      defaultValue.value - props.step < props.minValue
        ? props.minValue
        : defaultValue.value - props.step
    );
  } else defaultValue.value = toDigitsFloat(defaultValue.value - props.step);
}
</script>

<template>
  <div
    class="number-setting-item row justify-between items-center full-width q-my-sm q-pa-xs"
    :class="[props.backgroundColor]"
  >
    <div v-if="!isLtMd" class="col-7">
      <span class="label-text text-subtitle1">{{ t(props.settingName) }}</span>
    </div>
    <div :class="{ 'full-width': isLtMd, 'col-5': !isLtMd }">
      <q-input
        v-if="!isLtMd"
        class="full-width"
        v-model="defaultValue"
        color="dark"
        :readonly="!props.enable"
        dense
        outlined
        @update:model-value="onInput($event)"
      >
        <template #prepend>
          <q-btn
            icon="remove"
            @click="subtract"
            :disable="!props.enable"
            :dense="!isLtMd"
            round
            flat
          />
        </template>
        <template #append>
          <q-btn
            icon="add"
            @click="add"
            :disable="!props.enable"
            :dense="!isLtMd"
            round
            flat
          />
        </template>
      </q-input>
      <q-input
        v-else
        class="full-width"
        v-model="defaultValue"
        color="dark"
        :label="label"
        :readonly="!props.enable"
        outlined
        @update:model-value="onInput($event)"
      >
        <template #prepend>
          <q-btn
            icon="remove"
            @click="subtract"
            :disable="!props.enable"
            :dense="!isLtMd"
            round
            flat
          />
        </template>
        <template #append>
          <q-btn
            icon="add"
            @click="add"
            :disable="!props.enable"
            :dense="!isLtMd"
            round
            flat
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

.number-setting-item:hover, .number-setting-item:focus
  content: ""

  .label-text
    font-weight: 600
    color: #6d5e00
</style>
