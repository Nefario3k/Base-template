import { ref, getCurrentInstance } from "vue";
import useEventBus from "~/composables/useEventBus";
export default function useImageSelect(imageProps?: ImageSelectProps) {
  const { emit } = useEventBus();
  const { $getType } = useNuxtApp();
  interface ResetObject {
    filesPreview?: FilesPreview;
    preview?: any;
    previewText?: any;
    previewSize?: any;
  }
  const instance = getCurrentInstance();
  const loading = ref(false);
  const imageLoading = ref(false);
  const filesPreview = ref<Array<FilesPreview> | FilesPreview | any>({});
  const preview = ref<any>(null);
  const previewText = ref<any>(null);
  const previewSize = ref<any>(null);
  const isDragging = ref<boolean>(false);
  const allowedValues = ref<string>(
    "image/x-png,image/gif,image/jpeg,image/jpg"
  );

  const dragover = (e: Event) => {
    if (loading.value) return;
    e.preventDefault();
    isDragging.value = true;
  };
  const dragleave = () => {
    if (loading.value) return;
    isDragging.value = false;
  };
  const drop = (e: InputEvent) => {
    if (loading.value) return;
    e.preventDefault();
    if (instance?.proxy?.$refs.inputImg) {
      const inputImg = instance.proxy.$refs.inputImg as HTMLInputElement
      inputImg.files = e?.dataTransfer?.files;
      onChange();
    }
    isDragging.value = false;
  };
  const onChange = () => {
    if (loading.value) return;
    const files = instance.proxy.$refs.inputImg.files as HTMLInputElement;
    modifyData(files);
  };
  const selectImgFile = (e: HTMLInputElement) => {
    if (loading.value) return;
    let fileInput = e.target;
    let imgFile = fileInput.files;
    if (imgFile && imgFile[0]) {
      modifyData(imgFile);
    }
  };
  const chooseImgFile = () => {
    if (loading.value) return;
    instance.proxy.$refs.inputImg.click();
  };
  const modifyData = (files: HTMLInputElement) => {
    imageLoading.value = true;
    Object.entries(files).forEach(([key, value]) => {
      if (
        allowedValues.value.includes(
          value.name.split(".")[value.name.split(".").length - 1]
        )
      ) {
        let sizeVal = Number(value.size / (1024 * 1024));
        const maxSize = imageProps?.maxSize || 1;
        if (sizeVal > maxSize) {
          emit("info", {
            prop: `Maximum file size of ${maxSize}mb exceeded`,
          });
          return;
        } else {
          let endTag = sizeVal >= 1 ? "Mb" : "Kb";
          previewSize.value = (value.size / 1024).toFixed(1) + endTag;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const img: any = new Image();
          img.src = reader.result;

          img.onload = function () {
            const width = img.width;
            const height = img.height;
            const maxWidth = imageProps?.width || 800;
            const maxheight = imageProps?.height || 400;
            if ((width && width > maxWidth) || (height && height > maxheight)) {
              emit("info", {
                prop: `Please select an image with a max resolution of ${maxWidth}x${maxheight}px`,
              });
              return;
            }
            if (imageProps && imageProps.multiple) {
              if ($getType(filesPreview.value) !== "array")
                filesPreview.value = [];
              filesPreview.value.unshift({
                id: Math.random(),
                name: e.target.result,
                size: Math.ceil(value.size / (1024 * 1024)),
                val: value,
                title: value.name,
              });
            } else {
              filesPreview.value = {
                name: e.target.result,
                size: Math.ceil(value.size / (1024 * 1024)),
                val: value,
                title: value.name,
              };
              preview.value = e.target.result;
              previewText.value = value.name;
            }
          };
        };
        reader.readAsDataURL(value);
      } else {
        emit("info", {
          prop: `Selected file is not of the format ${allowedValues.value
            .split(",")
            .join(", ")}`,
        });
      }
    });
    uploadNdClear();
    imageLoading.value = false;
  };
  const uploadNdClear = () => {
    if (loading.value) return;
    setTimeout(() => {
      if (instance.proxy.$refs.inputImg)
        instance.proxy.$refs.inputImg.value = "";
    }, 200);
  };
  const resetData = (obj?: ResetObject) => {
    if (!obj) {
      filesPreview.value = {};
      preview.value = null;
      previewText.value = null;
      previewSize.value = null;
    } else {
      if ("filesPreview" in obj) filesPreview.value = obj.filesPreview;
      if ("preview" in obj) preview.value = obj.preview;
      if ("previewText" in obj) previewText.value = obj.previewText;
      if ("previewSize" in obj) previewSize.value = obj.previewSize;
    }
  };

  return {
    instance,
    loading,
    previewSize,
    filesPreview,
    preview,
    previewText,
    isDragging,
    allowedValues,
    imageLoading,
    dragover,
    dragleave,
    drop,
    onChange,
    selectImgFile,
    chooseImgFile,
    modifyData,
    uploadNdClear,
    resetData,
  };
};
