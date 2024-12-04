<template>
      <var-tabs
        class="tabs-example-vertical"
        elevation
        layout-direction="vertical"
        color="var(--color-primary)"
        active-color="var(--color-on-primary)"
        inactive-color="var(--color-on-info)"
        v-model:active="active"
        indicator-size="0"
        item-direction="vertical"
    >
        <var-tab>
            <var-icon class="tabs-example-icon" name="information" />
            <div>账本</div>
        </var-tab>
        <var-tab>
            <var-icon class="tabs-example-icon" name="information" />
            <div>资产</div>
        </var-tab>
        <var-tab>
            <var-icon class="tabs-example-icon" name="information" />
            <div>统计</div>
        </var-tab>
    </var-tabs>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const active = ref(0)

</script>

<style scoped>

.tabs-example-vertical {
  width: 80px !important;
  min-height: 300px !important;
}

</style>