<template>
  <div class="align_auto gap-[20px!important] align-start">
    <div class="transInBasic imageSection relative flex_center" @click="chooseImgFile">
      <img v-if="preview" :src="preview" alt="" />
      <span v-else>{{ label }}</span>
    </div>
    <div
      class="h-[12.6rem] border-[1px] border-bc-5 rounded-[12px] px-[24px] py-[16px] flex_center flex-col text-center cursor-pointer hover:border-main-6 relative overflow-hidden bg-font dragNdrop"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
      @click="chooseImgFile"
      :class="{ isDragging, previewText }"
    >
      <template v-if="!previewText">
        <div
          style="
            box-shadow: 0px 0px 0px 1px rgba(16, 24, 40, 0.18),
              0px -2px 0px 0px rgba(16, 24, 40, 0.05),
              0px 1px 2px 0px rgba(16, 24, 40, 0.05);
          "
          class="w-[4rem] h-[4rem] rounded-[8px] border-[1px] border-bc-5 flex_center mb-[12px]"
        >
          <SvgUpload />
        </div>
        <span class="font-Inter text-sm text-font-2"
          ><span class="text-font-3 font-semibold">Click to upload </span>or drag and
          drop</span
        >
        <span class="font-Inter text-sm text-font-2"
          >SVG, PNG, JPG or GIF (max. 800x400px)</span
        >
      </template>
      <h3 v-else class="mb-0 text-Lora text-p text-main-6">
        {{ previewText }}
      </h3>
    </div>
    <input
      :disabled="loading"
      :id="inputLabel"
      style="display: none"
      type="file"
      ref="inputImg"
      :accept="allowedValues"
      :multiple="false"
      @input="selectImgFile"
    />
  </div>
</template>

<script lang="ts" setup>
import useImageSelect from "~/composables/ImageSelect";
defineProps({
  label: {
    type: String,
    default: "KO",
  },
  inputLabel: {
    type: String,
    default: "KO-input",
  },
});
const {
  loading,
  filesPreview,
  preview,
  previewText,
  previewSize,
  isDragging,
  allowedValues,
  dragover,
  dragleave,
  drop,
  selectImgFile,
  chooseImgFile,
  resetData,
} = useImageSelect();
defineExpose({ filesPreview, preview, previewText, previewSize, resetData });
</script>

<style></style>
