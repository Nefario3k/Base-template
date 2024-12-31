import { ref, onMounted } from 'vue'

export function useDeviceInfo() {
  const deviceInfo = ref({
    deviceType: '',
    os: '',
    browser: ''
  })

  onMounted(() => {
    // if (!process.client) return
    // Detect device type
    deviceInfo.value.deviceType = detectDeviceType()

    // Detect operating system
    deviceInfo.value.os = detectOS()

    // Detect browser
    deviceInfo.value.browser = detectBrowser()
  })

  function detectDeviceType() {
    const width = window.innerWidth
    if (width < 600) return 'mobile'
    if (width < 1024) return 'tablet'
    return 'web'
  }

  function detectOS() {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.includes('win')) return 'windows'
    if (userAgent.includes('mac')) return 'macos'
    if (userAgent.includes('linux')) return 'linux'
    if (userAgent.includes('android')) return 'android'
    if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'ios'
    return 'unknown'
  }

  function detectBrowser() {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.includes('edg/')) return 'edge'
    if (userAgent.includes('opr/')) return 'opera'
    if (userAgent.includes('chrome/')) return 'chrome'
    if (userAgent.includes('firefox')) return 'firefox'
    if (userAgent.includes('safari/')) return 'safari'
    if (userAgent.includes('trident') || userAgent.includes('msie')) return 'internet explorer'
    return 'unknown'
  }

  return { deviceInfo }
}