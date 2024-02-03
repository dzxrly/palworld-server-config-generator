<template>
  <q-page class="row justify-evenly items-start q-pb-lg">
    <div
      class="q-py-md full-width"
      :class="{'q-px-xl': !isLtMd, 'q-px-md': isLtMd}"
    >
      <div class="top-tips q-pa-md">
        <span class="text-body1 text-primary">{{ t('topTips') }}</span>
      </div>
    </div>
    <div
      class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      :class="{ 'q-px-lg': isLtMd }"
    >
      <q-card class="bg-secondary full-width q-pa-md">
        <div
          class="rule-settings-card-title row justify-center items-center q-mb-lg"
          v-intersection="SettingCardTitleIntersection">
          <span class="text-subtitle1 text-bold">{{ t('settingTitle') }}</span>
        </div>
        <selector-setting-item
          :selector-options="difficultyOptions"
          setting-name="settingDifficulty"
          v-model="settingDifficulty">
        </selector-setting-item>
        <selector-setting-item
          :selector-options="deathPenaltyOptions"
          setting-name="settingDeathPenalty"
          v-model="settingDeathPenalty">
        </selector-setting-item>
        <number-setting-item
          v-model="settingDayTimeSpeedRate"
          setting-name="settingDayTimeSpeedRate"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingNightTimeSpeedRate"
          setting-name="settingNightTimeSpeedRate"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingExpRate"
          setting-name="settingExpRate"
          :max-value="20"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPalCaptureRate"
          setting-name="settingPalCaptureRate"
          :max-value="2"
          :min-value="0.5">
        </number-setting-item>
        <number-setting-item
          v-model="settingPalSpawnNumRate"
          setting-name="settingPalSpawnNumRate"
          :max-value="3"
          :min-value="0.5">
        </number-setting-item>
        <number-setting-item
          v-model="settingPalDamageRateAttack"
          setting-name="settingPalDamageRateAttack"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPalDamageRateDefense"
          setting-name="settingPalDamageRateDefense"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPlayerDamageRateAttack"
          setting-name="settingPlayerDamageRateAttack"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPlayerDamageRateDefense"
          setting-name="settingPlayerDamageRateDefense"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPlayerStomachDecreaceRate"
          setting-name="settingPlayerStomachDecreaceRate"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPlayerStaminaDecreaceRate"
          setting-name="settingPlayerStaminaDecreaceRate"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPlayerAutoHPRegeneRate"
          setting-name="settingPlayerAutoHPRegeneRate"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPlayerAutoHpRegeneRateInSleep"
          setting-name="settingPlayerAutoHpRegeneRateInSleep"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPalStomachDecreaceRate"
          setting-name="settingPalStomachDecreaceRate"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPalStaminaDecreaceRate"
          setting-name="settingPalStaminaDecreaceRate"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPalAutoHPRegeneRate"
          setting-name="settingPalAutoHPRegeneRate"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPalAutoHpRegeneRateInSleep"
          setting-name="settingPalAutoHpRegeneRateInSleep"
          :max-value="5"
          :min-value="0.1">
        </number-setting-item>
        <number-setting-item
          v-model="settingBuildObjectDamageRate"
          setting-name="settingBuildObjectDamageRate"
          :max-value="3"
          :min-value="0.5">
        </number-setting-item>
        <number-setting-item
          v-model="settingBuildObjectDeteriorationDamageRate"
          setting-name="settingBuildObjectDeteriorationDamageRate"
          :max-value="10"
          :min-value="0">
        </number-setting-item>
        <number-setting-item
          v-model="settingCollectionDropRate"
          setting-name="settingCollectionDropRate"
          :max-value="3"
          :min-value="0.5">
        </number-setting-item>
        <number-setting-item
          v-model="settingCollectionObjectHpRate"
          setting-name="settingCollectionObjectHpRate"
          :max-value="3"
          :min-value="0.5">
        </number-setting-item>
        <number-setting-item
          v-model="settingCollectionObjectRespawnSpeedRate"
          setting-name="settingCollectionObjectRespawnSpeedRate"
          :max-value="3"
          :min-value="0.5">
        </number-setting-item>
        <number-setting-item
          v-model="settingEnemyDropItemRate"
          setting-name="settingEnemyDropItemRate"
          :max-value="3"
          :min-value="0.5">
        </number-setting-item>
        <number-setting-item
          v-model="settingGuildPlayerMaxNum"
          setting-name="settingGuildPlayerMaxNum"
          :fixed-digits="0"
          :step="1"
          :max-value="100"
          :min-value="1">
        </number-setting-item>
        <number-setting-item
          v-model="settingPalEggDefaultHatchingTime"
          setting-name="settingPalEggDefaultHatchingTime"
          :max-value="240"
          :min-value="0">
        </number-setting-item>
        <number-setting-item
          v-model="settingDropItemMaxNum"
          setting-name="settingDropItemMaxNum"
          :fixed-digits="0"
          :step="1"
          :min-value="0">
        </number-setting-item>
        <number-setting-item
          v-model="settingDropItemMaxNumUNKO"
          setting-name="settingDropItemMaxNumUNKO"
          :fixed-digits="0"
          :step="1"
          :min-value="0">
        </number-setting-item>
        <number-setting-item
          v-model="settingBaseCampMaxNum"
          setting-name="settingBaseCampMaxNum"
          :fixed-digits="0"
          :step="1"
          :min-value="0">
        </number-setting-item>
        <number-setting-item
          v-model="settingBaseCampWorkerMaxNum"
          setting-name="settingBaseCampWorkerMaxNum"
          :fixed-digits="0"
          :step="1"
          :min-value="0">
        </number-setting-item>
        <number-setting-item
          v-model="settingDropItemAliveMaxHours"
          setting-name="settingDropItemAliveMaxHours"
          :min-value="0">
        </number-setting-item>
        <number-setting-item
          v-model="settingAutoResetGuildTimeNoOnlinePlayers"
          setting-name="settingAutoResetGuildTimeNoOnlinePlayers"
          :min-value="0">
        </number-setting-item>
        <number-setting-item
          v-model="settingCoopPlayerMaxNum"
          setting-name="settingCoopPlayerMaxNum"
          :fixed-digits="0"
          :step="1"
          :min-value="0">
        </number-setting-item>
        <number-setting-item
          v-model="settingServerPlayerMaxNum"
          setting-name="settingServerPlayerMaxNum"
          :fixed-digits="0"
          :step="1"
          :max-value="32"
          :min-value="1">
        </number-setting-item>
        <string-setting-item
          setting-name="settingServerName"
          v-model="settingServerName">
        </string-setting-item>
        <string-setting-item
          setting-name="settingServerDescription"
          v-model="settingServerDescription">
        </string-setting-item>
        <string-setting-item
          setting-name="settingAdminPassword"
          v-model="settingAdminPassword">
        </string-setting-item>
        <string-setting-item
          setting-name="settingServerPassword"
          v-model="settingServerPassword">
        </string-setting-item>
        <string-setting-item
          setting-name="settingPublicPort"
          v-model="settingPublicPort">
        </string-setting-item>
        <string-setting-item
          setting-name="settingPublicIP"
          v-model="settingPublicIP">
        </string-setting-item>
        <string-setting-item
          setting-name="settingRCONPort"
          v-model="settingRCONPort">
        </string-setting-item>
        <string-setting-item
          setting-name="settingRegion"
          v-model="settingRegion">
        </string-setting-item>
        <string-setting-item
          setting-name="settingBanListURL"
          v-model="settingBanListURL">
        </string-setting-item>
        <bool-setting-item
          setting-name="settingbEnableFriendlyFire"
          v-model="settingbEnableFriendlyFire">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbEnableInvaderEnemy"
          v-model="settingbEnableInvaderEnemy">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbActiveUNKO"
          v-model="settingbActiveUNKO">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbEnableAimAssistPad"
          v-model="settingbEnableAimAssistPad">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbEnableAimAssistKeyboard"
          v-model="settingbEnableAimAssistKeyboard">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbAutoResetGuildNoOnlinePlayers"
          v-model="settingbAutoResetGuildNoOnlinePlayers">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbIsMultiplay"
          v-model="settingbIsMultiplay"
        >
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbIsPvP"
          v-model="settingbIsPvP">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbCanPickupOtherGuildDeathPenaltyDrop"
          v-model="settingbCanPickupOtherGuildDeathPenaltyDrop">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbEnableNonLoginPenalty"
          v-model="settingbEnableNonLoginPenalty">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbEnableFastTravel"
          v-model="settingbEnableFastTravel">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbIsStartLocationSelectByMap"
          v-model="settingbIsStartLocationSelectByMap">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbExistPlayerAfterLogout"
          v-model="settingbExistPlayerAfterLogout">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbEnableDefenseOtherGuildPlayer"
          v-model="settingbEnableDefenseOtherGuildPlayer">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbEnablePlayerToPlayerDamage"
          v-model="settingbEnablePlayerToPlayerDamage">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingRCONEnabled"
          v-model="settingRCONEnabled">
        </bool-setting-item>
        <bool-setting-item
          setting-name="settingbUseAuth"
          v-model="settingbUseAuth">
        </bool-setting-item>
        <div
          class="btn-row q-mt-lg"
          :class="{ 'col justify-center items-center': isLtMd, 'row justify-between items-center': !isLtMd}"
        >
          <q-btn
            :class="{'full-width': isLtMd, 'col-8': !isLtMd}"
            icon="sim_card_download"
            color="dark"
            @click="generateConfig()"
            outline>{{ t('btnGenerate') }}
          </q-btn>
          <q-btn
            :class="{'full-width q-mt-md': isLtMd, 'col-3': !isLtMd}"
            icon="delete"
            color="negative"
            @click="showDefaultDialog = true"
            outline>{{ t('btnReset') }}
          </q-btn>
        </div>
      </q-card>
    </div>
    <div
      class="col justify-start items-center col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5"
      :class="{ 'q-px-lg q-mt-lg': isLtMd }"
    >
      <div class="row justify-center items-center full-width">
        <span class="text-subtitle1 text-bold q-mt-md q-mb-lg">{{ t('configTitle') }}</span>
      </div>
      <div v-if="!isLtMd" class="config-display-textarea full-width">
        <q-input color="dark"
                 v-model="configFileContent"
                 :readonly="!editMode"
                 :placeholder="t('configInitContent')"
                 outlined autogrow />
      </div>
      <div
        class="full-width"
        :class="{'col justify-start items-center': isLtMd, 'row justify-between items-center q-my-md': !isLtMd}"
      >
        <div>
          <q-btn
            class="download-btn"
            :class="{'full-width': isLtMd}"
            color="dark"
            icon="download"
            @click="downloadConfigFileAsIni()"
            outline>{{ t('btnDownload') }}
          </q-btn>
          <q-btn
            :class="{'full-width q-mt-md': isLtMd, 'q-ml-md': !isLtMd}"
            color="dark"
            icon="content_copy"
            @click="copyConfig()"
            outline>{{ t('btnCopy') }}
          </q-btn>
        </div>
        <div :class="{'row justify-center items-center q-my-md': isLtMd}">
          <label class="cursor-pointer">
            <span class="text-body1 non-selectable q-mr-md">{{ t('editMode') }}</span>
            <q-toggle v-model="editMode" color="dark" dense></q-toggle>
          </label>
        </div>
      </div>
      <div v-if="isLtMd" class="config-display-textarea full-width q-mb-md">
        <q-input color="dark"
                 v-model="configFileContent"
                 :readonly="!editMode"
                 :placeholder="t('configInitContent')"
                 outlined autogrow />
      </div>
      <q-separator />
      <div class="row justify-center items-center q-mt-md">
        <q-btn
          class="q-pa-sm"
          icon="fa-brands fa-github"
          color="grey-9"
          @click="openUrl('https://github.com/dzxrly/Palworld-Server-Config-Generator')"
          dense
          flat>Github
        </q-btn>
        <q-btn
          class="q-ml-md q-pa-sm"
          icon="volunteer_activism"
          color="negative"
          @click="openUrl('https://ko-fi.com/F1F0PZH7X')"
          dense
          flat>{{ t('btnDonate') }}
        </q-btn>
      </div>
      <div class="row justify-between items-center q-mt-md">
        <span class="text-body2 text-grey-8">{{ t('visitors') }}<span
          id="qiushaocloud_sitecounter_value_site_pv">n</span></span>
        <span class="text-body2 text-grey-8">By Egg Targaryen</span>
      </div>
    </div>

    <q-dialog v-model="showDefaultDialog" v-close-popup auto-close>
      <q-card class="bg-secondary">
        <q-card-section class="row justify-center items-center">
          <q-icon name="warning" size="lg" class="text-negative" />
          <span class="q-ml-md">{{ t('resetDialogContent') }}</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            color="negative"
            icon="check"
            flat
            :label="t('resetConfirm')"
            @click="setToDefault()"
          />
          <q-btn
            color="primary"
            icon="close"
            flat
            :label="t('resetCancel')"
            @click="showDefaultDialog = false"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-sticky
      class="up-btn-wrap"
      position="bottom-right"
      :offset="[30, 30]">
      <q-btn
        class="shadow-4"
        :class="{'no-pointer-events': settingCardTitleVisible}"
        color="dark"
        icon="arrow_upward"
        @click="scrollToTarget('.rule-settings-card-title')"
        size="md"
        round />
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import NumberSettingItem from 'components/numberSettingItem.vue';
import { computed, onMounted, ref } from 'vue';
import SelectorSettingItem from 'components/selectorSettingItem.vue';
import BoolSettingItem from 'components/boolSettingItem.vue';
import StringSettingItem from 'components/stringSettingItem.vue';
import { useI18n } from 'vue-i18n';
import { copyToClipboard, openURL, useQuasar } from 'quasar';

const settingDifficulty = ref<string>('None');
const settingDayTimeSpeedRate = ref<number>(1.0);
const settingNightTimeSpeedRate = ref<number>(1.0);
const settingExpRate = ref<number>(1.0);
const settingPalCaptureRate = ref<number>(1.0);
const settingPalSpawnNumRate = ref<number>(1.0);
const settingPalDamageRateAttack = ref<number>(1.0);
const settingPalDamageRateDefense = ref<number>(1.0);
const settingPlayerDamageRateAttack = ref<number>(1.0);
const settingPlayerDamageRateDefense = ref<number>(1.0);
const settingPlayerStomachDecreaceRate = ref<number>(1.0);
const settingPlayerStaminaDecreaceRate = ref<number>(1.0);
const settingPlayerAutoHPRegeneRate = ref<number>(1.0);
const settingPlayerAutoHpRegeneRateInSleep = ref<number>(1.0);
const settingPalStomachDecreaceRate = ref<number>(1.0);
const settingPalStaminaDecreaceRate = ref<number>(1.0);
const settingPalAutoHPRegeneRate = ref<number>(1.0);
const settingPalAutoHpRegeneRateInSleep = ref<number>(1.0);
const settingBuildObjectDamageRate = ref<number>(1.0);
const settingBuildObjectDeteriorationDamageRate = ref<number>(1.0);
const settingCollectionDropRate = ref<number>(1.0);
const settingCollectionObjectHpRate = ref<number>(1.0);
const settingCollectionObjectRespawnSpeedRate = ref<number>(1.0);
const settingEnemyDropItemRate = ref<number>(1.0);
const settingDeathPenalty = ref<string>('All');
const settingGuildPlayerMaxNum = ref<number>(20);
const settingPalEggDefaultHatchingTime = ref<number>(1.0);
const settingbEnableFriendlyFire = ref<boolean>(false);
const settingbEnableInvaderEnemy = ref<boolean>(true);
const settingbActiveUNKO = ref<boolean>(false);
const settingbEnableAimAssistPad = ref<boolean>(true);
const settingbEnableAimAssistKeyboard = ref<boolean>(false);
const settingDropItemMaxNum = ref<number>(3000);
const settingDropItemMaxNumUNKO = ref<number>(100);
const settingBaseCampMaxNum = ref<number>(128);
const settingBaseCampWorkerMaxNum = ref<number>(15);
const settingDropItemAliveMaxHours = ref<number>(1.0);
const settingbAutoResetGuildNoOnlinePlayers = ref<boolean>(false);
const settingAutoResetGuildTimeNoOnlinePlayers = ref<number>(72.0);
const settingbIsMultiplay = ref<boolean>(false);
const settingbIsPvP = ref<boolean>(false);
const settingbCanPickupOtherGuildDeathPenaltyDrop = ref<boolean>(false);
const settingbEnableNonLoginPenalty = ref<boolean>(false);
const settingbEnableFastTravel = ref<boolean>(true);
const settingbIsStartLocationSelectByMap = ref<boolean>(true);
const settingbExistPlayerAfterLogout = ref<boolean>(false);
const settingbEnableDefenseOtherGuildPlayer = ref<boolean>(false);
const settingCoopPlayerMaxNum = ref<number>(4);
const settingbEnablePlayerToPlayerDamage = ref<boolean>(false);
const settingServerPlayerMaxNum = ref<number>(32);
const settingServerName = ref<string>('Default Server Name');
const settingServerDescription = ref<string>('');
const settingAdminPassword = ref<string>('');
const settingServerPassword = ref<string>('');
const settingPublicPort = ref<string>('8211');
const settingPublicIP = ref<string>('');
const settingRCONEnabled = ref<boolean>(false);
const settingRCONPort = ref<string>('');
const settingRegion = ref<string>('');
const settingbUseAuth = ref<boolean>(true);
const settingBanListURL = ref<string>('https://api.palworldgame.com/api/banlist.txt');

const difficultyOptions = [
  { label: 'difficultyOptionsNone', value: 'None' },
  { label: 'difficultyOptionsHard', value: 'Hard' }
];
const deathPenaltyOptions = [
  { label: 'deathPenaltyOptionsNone', value: 'None' },
  { label: 'deathPenaltyOptionsItem', value: 'Item' },
  { label: 'deathPenaltyOptionsItemAndEquipment', value: 'ItemAndEquipment' },
  { label: 'deathPenaltyOptionsAll', value: 'All' }
];

const { t } = useI18n();

const showDefaultDialog = ref(false);
const configFileContent = ref<string>('');
const editMode = ref(false);
const $q = useQuasar();
const settingCardTitleVisible = ref(true);
const settingCardTitlOpacity = computed(() => settingCardTitleVisible.value ? 0 : 1);
const isLtMd = computed(() => $q.screen.lt.md);

function setToDefault() {
  // set all settings to default
  settingDifficulty.value = 'None';
  settingDayTimeSpeedRate.value = 1.0;
  settingNightTimeSpeedRate.value = 1.0;
  settingExpRate.value = 1.0;
  settingPalCaptureRate.value = 1.0;
  settingPalSpawnNumRate.value = 1.0;
  settingPalDamageRateAttack.value = 1.0;
  settingPalDamageRateDefense.value = 1.0;
  settingPlayerDamageRateAttack.value = 1.0;
  settingPlayerDamageRateDefense.value = 1.0;
  settingPlayerStomachDecreaceRate.value = 1.0;
  settingPlayerStaminaDecreaceRate.value = 1.0;
  settingPlayerAutoHPRegeneRate.value = 1.0;
  settingPlayerAutoHpRegeneRateInSleep.value = 1.0;
  settingPalStomachDecreaceRate.value = 1.0;
  settingPalStaminaDecreaceRate.value = 1.0;
  settingPalAutoHPRegeneRate.value = 1.0;
  settingPalAutoHpRegeneRateInSleep.value = 1.0;
  settingBuildObjectDamageRate.value = 1.0;
  settingBuildObjectDeteriorationDamageRate.value = 1.0;
  settingCollectionDropRate.value = 1.0;
  settingCollectionObjectHpRate.value = 1.0;
  settingCollectionObjectRespawnSpeedRate.value = 1.0;
  settingEnemyDropItemRate.value = 1.0;
  settingDeathPenalty.value = 'All';
  settingGuildPlayerMaxNum.value = 20;
  settingPalEggDefaultHatchingTime.value = 1.0;
  settingbEnableFriendlyFire.value = false;
  settingbEnableInvaderEnemy.value = true;
  settingbActiveUNKO.value = false;
  settingbEnableAimAssistPad.value = true;
  settingbEnableAimAssistKeyboard.value = false;
  settingDropItemMaxNum.value = 3000;
  settingDropItemMaxNumUNKO.value = 100;
  settingBaseCampMaxNum.value = 128;
  settingBaseCampWorkerMaxNum.value = 15;
  settingDropItemAliveMaxHours.value = 1.0;
  settingbAutoResetGuildNoOnlinePlayers.value = false;
  settingAutoResetGuildTimeNoOnlinePlayers.value = 72.0;
  settingbIsMultiplay.value = false;
  settingbIsPvP.value = false;
  settingbCanPickupOtherGuildDeathPenaltyDrop.value = false;
  settingbEnableNonLoginPenalty.value = false;
  settingbEnableFastTravel.value = true;
  settingbIsStartLocationSelectByMap.value = true;
  settingbExistPlayerAfterLogout.value = false;
  settingbEnableDefenseOtherGuildPlayer.value = false;
  settingCoopPlayerMaxNum.value = 4;
  settingbEnablePlayerToPlayerDamage.value = false;
  settingServerPlayerMaxNum.value = 32;
  settingServerName.value = 'Default Server Name';
  settingServerDescription.value = '';
  settingAdminPassword.value = '';
  settingServerPassword.value = '';
  settingPublicPort.value = '8211';
  settingPublicIP.value = '';
  settingRCONEnabled.value = false;
  settingRCONPort.value = '';
  settingRegion.value = '';
  settingbUseAuth.value = true;
  settingBanListURL.value = 'https://api.palworldgame.com/api/banlist.txt';

  configFileContent.value = t('configInitContent');
}

function jsBoolToPythonBool(value: boolean) {
  return value ? 'True' : 'False';
}

function asString(value: string) {
  return `"${value}"`;
}

function scrollToTarget(id: string) {
  const target = document.querySelector(id) as HTMLElement;
  if (target) {
    // scroll to target, duration ease-in-out .3s, and move more 1px
    window.scrollTo({ top: target.offsetTop + 1, behavior: 'smooth' });
  } else console.log(`target ${id} not found`);
}

function generateConfig() {
  // generate config file
  configFileContent.value = '[/Script/Pal.PalGameWorldSettings]\nOptionSettings=(' +
    `Difficulty=${settingDifficulty.value},` +
    `DayTimeSpeedRate=${settingDayTimeSpeedRate.value},` +
    `NightTimeSpeedRate=${settingNightTimeSpeedRate.value},` +
    `ExpRate=${settingExpRate.value},` +
    `PalCaptureRate=${settingPalCaptureRate.value},` +
    `PalSpawnNumRate=${settingPalSpawnNumRate.value},` +
    `PalDamageRateAttack=${settingPalDamageRateAttack.value},` +
    `PalDamageRateDefense=${settingPalDamageRateDefense.value},` +
    `PlayerDamageRateAttack=${settingPlayerDamageRateAttack.value},` +
    `PlayerDamageRateDefense=${settingPlayerDamageRateDefense.value},` +
    `PlayerStomachDecreaceRate=${settingPlayerStomachDecreaceRate.value},` +
    `PlayerStaminaDecreaceRate=${settingPlayerStaminaDecreaceRate.value},` +
    `PlayerAutoHPRegeneRate=${settingPlayerAutoHPRegeneRate.value},` +
    `PlayerAutoHpRegeneRateInSleep=${settingPlayerAutoHpRegeneRateInSleep.value},` +
    `PalStomachDecreaceRate=${settingPalStomachDecreaceRate.value},` +
    `PalStaminaDecreaceRate=${settingPalStaminaDecreaceRate.value},` +
    `PalAutoHPRegeneRate=${settingPalAutoHPRegeneRate.value},` +
    `PalAutoHpRegeneRateInSleep=${settingPalAutoHpRegeneRateInSleep.value},` +
    `BuildObjectDamageRate=${settingBuildObjectDamageRate.value},` +
    `BuildObjectDeteriorationDamageRate=${settingBuildObjectDeteriorationDamageRate.value},` +
    `CollectionDropRate=${settingCollectionDropRate.value},` +
    `CollectionObjectHpRate=${settingCollectionObjectHpRate.value},` +
    `CollectionObjectRespawnSpeedRate=${settingCollectionObjectRespawnSpeedRate.value},` +
    `EnemyDropItemRate=${settingEnemyDropItemRate.value},` +
    `DeathPenalty=${settingDeathPenalty.value},` +
    `GuildPlayerMaxNum=${settingGuildPlayerMaxNum.value},` +
    `PalEggDefaultHatchingTime=${settingPalEggDefaultHatchingTime.value},` +
    `bEnableFriendlyFire=${jsBoolToPythonBool(settingbEnableFriendlyFire.value)},` +
    `bEnableInvaderEnemy=${jsBoolToPythonBool(settingbEnableInvaderEnemy.value)},` +
    `bActiveUNKO=${jsBoolToPythonBool(settingbActiveUNKO.value)},` +
    `bEnableAimAssistPad=${jsBoolToPythonBool(settingbEnableAimAssistPad.value)},` +
    `bEnableAimAssistKeyboard=${jsBoolToPythonBool(settingbEnableAimAssistKeyboard.value)},` +
    `DropItemMaxNum=${settingDropItemMaxNum.value},` +
    `DropItemMaxNum_UNKO=${settingDropItemMaxNumUNKO.value},` +
    `BaseCampMaxNum=${settingBaseCampMaxNum.value},` +
    `BaseCampWorkerMaxNum=${settingBaseCampWorkerMaxNum.value},` +
    `DropItemAliveMaxHours=${settingDropItemAliveMaxHours.value},` +
    `bAutoResetGuildNoOnlinePlayers=${jsBoolToPythonBool(settingbAutoResetGuildNoOnlinePlayers.value)},` +
    `AutoResetGuildTimeNoOnlinePlayers=${settingAutoResetGuildTimeNoOnlinePlayers.value},` +
    `bIsMultiplay=${jsBoolToPythonBool(settingbIsMultiplay.value)},` +
    `bIsPvP=${jsBoolToPythonBool(settingbIsPvP.value)},` +
    `bCanPickupOtherGuildDeathPenaltyDrop=${jsBoolToPythonBool(settingbCanPickupOtherGuildDeathPenaltyDrop.value)},` +
    `bEnableNonLoginPenalty=${jsBoolToPythonBool(settingbEnableNonLoginPenalty.value)},` +
    `bEnableFastTravel=${jsBoolToPythonBool(settingbEnableFastTravel.value)},` +
    `bIsStartLocationSelectByMap=${jsBoolToPythonBool(settingbIsStartLocationSelectByMap.value)},` +
    `bExistPlayerAfterLogout=${jsBoolToPythonBool(settingbExistPlayerAfterLogout.value)},` +
    `bEnableDefenseOtherGuildPlayer=${jsBoolToPythonBool(settingbEnableDefenseOtherGuildPlayer.value)},` +
    `CoopPlayerMaxNum=${settingCoopPlayerMaxNum.value},` +
    `bEnablePlayerToPlayerDamage=${jsBoolToPythonBool(settingbEnablePlayerToPlayerDamage.value)},` +
    `ServerPlayerMaxNum=${settingServerPlayerMaxNum.value},` +
    `ServerName=${asString(settingServerName.value)},` +
    `ServerDescription=${asString(settingServerDescription.value)},` +
    `AdminPassword=${asString(settingAdminPassword.value)},` +
    `ServerPassword=${asString(settingServerPassword.value)},` +
    `PublicPort=${settingPublicPort.value},` +
    `PublicIP=${asString(settingPublicIP.value)},` +
    `RCONEnabled=${jsBoolToPythonBool(settingRCONEnabled.value)},` +
    `RCONPort=${settingRCONPort.value},` +
    `Region=${asString(settingRegion.value)},` +
    `bUseAuth=${jsBoolToPythonBool(settingbUseAuth.value)},` +
    `BanListURL=${asString(settingBanListURL.value)})`;

  // scroll to configDisplayTextarea
  scrollToTarget(isLtMd.value ? '.download-btn' : '.config-display-textarea');
}

function copyConfig() {
  if (configFileContent.value) {
    copyToClipboard(configFileContent.value).then(() => {
      $q.notify({
        message: t('copySuccess'),
        color: 'positive',
        textColor: 'primary',
        icon: 'done',
        position: 'top'
      });
    }).catch((reason) => {
      $q.notify({
        message: `${t('copyFailed')}${reason}}`,
        color: 'negative',
        textColor: 'accent',
        icon: 'error',
        position: 'top'
      });
    });
  } else $q.notify({
    message: t('copyEmptyFailed'),
    color: 'negative',
    textColor: 'accent',
    icon: 'error',
    position: 'top'
  });
}

function SettingCardTitleIntersection(entry: { isIntersecting: boolean }) {
  settingCardTitleVisible.value = entry.isIntersecting;
}

function downloadConfigFileAsIni() {
  if (configFileContent.value) {
    const blob = new Blob([configFileContent.value], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'PalGameWorldSettings.ini';
    link.click();
  } else $q.notify({
    message: t('downloadEmptyFailed'),
    color: 'negative',
    textColor: 'accent',
    icon: 'error',
    position: 'top'
  });
}

function openUrl(url: string) {
  openURL(url);
}

onMounted(() => {
  const script = document.createElement('script');
  script.src = '//githubcdn.qiushaocloud.top/gh/qiushaocloud/site-counter@master/dist/qiushaocloud_site_counter.min.js';
  script.async = true;
  document.body.appendChild(script);
});
</script>

<style lang="sass" scoped>
.q-page
  .top-tips
    background: $info
    border-radius: 4px
    border-left: solid 5px $warning

  .up-btn-wrap
    opacity: v-bind(settingCardTitlOpacity)
    transition: opacity .3s ease-in-out
</style>
