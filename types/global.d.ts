export { };

declare global {
  interface NavItems {
    title: string;
    image: string;
    link: string;
    type: string;
    svg: object;
  }
  interface CustomChart {
    label: string;
    size: number;
    value: number;
  }
  interface DeleteContent {
    title: string;
    subText: string;
    deleteType: string;
    deleteObject: any;
    modalType?: string;
  }
  interface FilesPreview {
    id?: number;
    name: any;
    size: string | number;
    val: any;
    title?: string;
  }
  interface EventData {
    prop: any;
    header?: string;
  }
  interface ImageSelectProps {
    multiple?: boolean;
    maxSize?: number;
    width?: number;
    height?: number;
  }
  interface StatusToast {
    id: number;
    duration?: number;
    height: number | string;
    isActive: boolean;
    show: boolean;
    timeoutId: any;
    absolute: boolean;
    svg: boolean;
    border: boolean;
    fixed: boolean;
    right: number;
    scale: number;
    opacity: number;
    bottom: number;
    index: number;
    color: string;
    header: string;
    headerColor: string;
    subtext: string;
    subtextColor: string;
    borderColor: string;
    svgStroke: string;
    svgColor: string;
    svgType: string;
  }
}
