<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      reveal
      class="page-header bg-accent text-primary row items-center justify-between q-px-md q-py-sm"
    >
      <span class="text-h6 text-bold">{{ t('title') }}</span>
      <q-btn-dropdown color="primary" icon="translate" flat auto-close>
        <q-list class="bg-secondary">
          <q-item v-for="option in languageDropdownMenuOptions" :key="option.value"
                  clickable v-ripple
                  @click="locale = option.value">
            <q-item-section>{{ option.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: 'global' });
const languageDropdownMenuOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '简体中文' }
];
</script>
