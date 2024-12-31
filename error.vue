<template>
  <VApp>
    <VMain>
      <div class="body-wrapper min-h-dvh">
        <div class="justify_auto min-h-[inherit] items-center text-center">
          <div
            class="transInBasic topErrorContainer w-full flex_center flex-col pt-[40px]"
          >
            <template v-if="error.statusCode === 500">
              <!-- svg -->
              <div class="w-full flex_center relative mb-[79px] px-[12px]">
                <div
                  class="relative md:max-w-[78.8rem] md:max-h-[32.1rem] max-w-[31.9rem] max-h-[13rem] w-full h-full mx-auto"
                >
                  <svg
                    class="w-full h-full"
                    width="734"
                    height="323"
                    viewBox="0 0 734 323"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M56.1072 315.83L56.1153 315.832C72.4419 320.283 88.6267 322.51 104.669 322.51C126.836 322.51 145.97 318.205 162.052 309.575C178.125 300.949 190.555 289.044 199.328 273.865L199.33 273.861C208.103 258.384 212.482 240.537 212.482 220.335C212.482 200.436 208.543 183.038 200.646 168.154C192.752 152.978 181.636 141.216 167.302 132.879C152.962 124.539 136.004 120.379 116.447 120.379C100.675 120.379 86.205 123.501 73.0454 129.752L73.0415 129.753C66.3597 132.999 60.3461 136.928 55.0019 141.541V44.1237H176.647C183.128 44.1237 188.21 42.4737 191.82 39.1054L191.828 39.098L191.836 39.0902C195.439 35.4228 197.214 30.4006 197.214 24.0878C197.214 17.7774 195.44 12.8913 191.82 9.51437C188.21 6.14606 183.128 4.49598 176.647 4.49598H30.509C24.0169 4.49598 18.9291 6.30062 15.3204 9.97353C11.713 13.6451 9.94229 18.8187 9.94229 25.4198V175.935C9.94229 181.658 11.573 186.235 14.8842 189.605C18.2057 192.986 23.0058 194.639 29.2003 194.639C33.347 194.639 37.0675 193.734 40.3489 191.912L40.3552 191.908L40.3614 191.905C43.8801 189.816 46.6865 187.566 48.7656 185.15C57.449 176.02 66.5493 169.558 76.0634 165.743L76.0635 165.743L76.0756 165.738C85.6066 161.623 95.8629 159.563 106.85 159.563C125.934 159.563 140.765 165.444 151.412 177.159C162.075 188.892 167.423 204.009 167.423 222.555C167.423 234.617 164.822 245.185 159.636 254.275L159.634 254.279C154.74 263.068 147.544 269.958 138.027 274.947C128.516 279.934 117.112 282.438 103.796 282.438C90.7593 282.438 78.1593 280.522 65.9946 276.689C54.1174 272.856 42.5254 267.253 31.2185 259.876L31.2136 259.872C26.5008 256.875 22.0242 255.637 17.8042 256.245C13.6323 256.552 10.041 258.075 7.05092 260.814L7.04122 260.823L7.032 260.832C4.33987 263.572 2.55514 267.065 1.66542 271.287C0.77085 275.236 1.07335 279.327 2.55452 283.548C4.05092 287.812 7.03867 291.298 11.4728 294.01C24.8943 303.807 39.7735 311.08 56.1072 315.83ZM279.012 280.996L279.016 281.001C298.02 308.676 325.518 322.51 361.44 322.51C385.378 322.51 405.557 316.269 421.944 303.76C438.324 291.256 450.733 272.962 459.192 248.916C467.65 224.872 471.871 195.508 471.871 160.839C471.871 108.402 462.559 68.6194 443.863 41.5635C425.148 14.1824 397.648 0.5 361.44 0.5C337.504 0.5 317.328 6.59201 300.941 18.803C284.559 31.0106 272.148 49.0091 263.689 72.7598C255.23 96.5103 251.009 126.023 251.009 161.283C251.009 213.131 260.322 253.057 279.012 280.996ZM410.293 253.843L410.292 253.845C405.093 263.694 398.426 271.058 390.3 275.961C382.175 280.865 372.561 283.326 361.44 283.326C350.466 283.326 340.924 280.865 332.798 275.961C324.671 271.057 317.931 263.692 312.586 253.842C301.885 233.824 296.505 202.846 296.505 160.839C296.505 118.531 301.886 87.8555 312.582 68.7316L312.584 68.7288C317.928 59.0257 324.668 51.7709 332.795 46.9395C340.922 42.1083 350.464 39.6838 361.44 39.6838C372.562 39.6838 382.177 42.1089 390.303 46.9395C398.429 51.77 405.095 59.023 410.294 68.7238L410.298 68.7316C420.994 87.8555 426.375 118.531 426.375 160.839C426.375 202.847 420.995 233.826 410.293 253.843ZM540.582 280.996L540.586 281.001C559.59 308.676 587.088 322.51 623.01 322.51C646.948 322.51 667.126 316.269 683.513 303.76C699.894 291.256 712.303 272.962 720.762 248.916C729.22 224.872 733.441 195.508 733.441 160.839C733.441 108.402 724.129 68.6194 705.433 41.5635C686.718 14.1824 659.218 0.5 623.01 0.5C599.074 0.5 578.898 6.59201 562.511 18.803C546.129 31.0106 533.718 49.0091 525.259 72.7598C516.8 96.5103 512.579 126.023 512.579 161.283C512.579 213.131 521.892 253.057 540.582 280.996ZM671.863 253.843L671.862 253.845C666.662 263.694 659.996 271.058 651.87 275.961C643.745 280.865 634.131 283.326 623.01 283.326C612.036 283.326 602.494 280.865 594.368 275.961C586.241 271.057 579.501 263.692 574.156 253.842C563.455 233.824 558.075 202.846 558.075 160.839C558.075 118.531 563.456 87.8555 574.152 68.7316L574.153 68.7288C579.498 59.0257 586.238 51.7709 594.365 46.9395C602.492 42.1083 612.034 39.6838 623.01 39.6838C634.132 39.6838 643.747 42.1089 651.873 46.9395C659.999 51.77 666.665 59.023 671.863 68.7238L671.868 68.7316C682.563 87.8555 687.945 118.531 687.945 160.839C687.945 202.847 682.565 233.826 671.863 253.843Z"
                      fill="url(#paint0_linear_2104_36524)"
                      stroke="#EAD682"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2104_36524"
                        x1="161.662"
                        y1="-36.9837"
                        x2="161.662"
                        y2="302.514"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F8E38E" />
                        <stop offset="1" stop-color="#FFF7D6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div
                    class="infoGraphicError absolute top-[32%] left-[7%] z-[3] text-center md:p-[9px] p-[3px] rounded-[8px] border-[1px] border-bc-8 bg-font max-w-[26.2rem] rotate-[-6.34deg] max-h-max min-h-max hidden_sm"
                  >
                    <span class="font-rhd text-font-2 md:text-sm text-[0.6rem]"
                      >Dear Visitor, something went wrong!. It's not you, it's us.
                    </span>
                  </div>
                </div>
                <div
                  class="frostedGlass absolute w-full h-full bottom-[-79px] left max-h-[20.5rem]"
                ></div>
              </div>
              <div class="w-full md:max-w-[78.8rem] max-w-[50.8rem] mx-auto px-[12px]">
                <h1
                  class="text-center md:text-[4.8rem] text-p text-font-2 font-rhd font-bold mb-[40px]"
                >
                  Oops! Page Is Not Working. We are now aware of the problem and will fix
                  it soon!
                </h1>
              </div>
            </template>
            <template v-else-if="error.statusCode === 419">
              <!-- svg -->
              <div class="w-full flex_center relative mb-[79px] px-[12px]">
                <div
                  class="relative md:max-w-[78.8rem] md:max-h-[32.1rem] max-w-[31.9rem] max-h-[13rem] w-full h-full mx-auto"
                >
                  <svg
                    class="w-full h-full"
                    width="744"
                    height="323"
                    viewBox="0 0 744 323"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M574.155 315.827L574.143 315.823C560.424 311.069 547.872 304.088 536.489 294.881C532.639 292.165 530.095 288.825 528.896 284.859L528.89 284.838L528.885 284.817C528 280.612 527.996 276.688 528.888 273.053C529.78 269.127 531.564 265.792 534.243 263.062C536.937 260.019 540.246 258.331 544.151 258.021C548.372 257.412 552.708 258.651 557.138 261.657L557.148 261.663L557.157 261.67C567.01 269.044 576.706 274.344 586.243 277.58C596.084 280.82 605.773 282.438 615.312 282.438C633.258 282.438 648.421 278.021 660.828 269.211C673.232 260.402 682.63 247.175 689.002 229.489C695.374 211.8 698.569 189.81 698.569 163.503V149.471C696.164 155.839 693.126 161.792 689.455 167.328C681.847 179.239 671.894 188.328 659.599 194.584C647.308 200.839 633.707 203.963 618.802 203.963C600.978 203.963 585.036 199.649 570.991 191.013C556.951 182.38 545.984 170.471 538.092 155.298C530.198 140.123 526.257 123.022 526.257 104.007C526.257 83.8082 530.49 65.9636 538.969 50.4879C538.969 50.4877 538.969 50.4876 538.969 50.4874L539.408 50.7277C547.842 35.0398 559.475 22.9039 574.307 14.3199L574.155 315.827ZM574.155 315.827C588.156 320.28 601.586 322.51 614.44 322.51M574.155 315.827L614.44 322.51M614.44 322.51C634.568 322.51 652.527 318.799 668.307 311.364C684.376 303.93 697.962 293.075 709.061 278.805C720.159 264.537 728.619 247.012 734.449 226.242C740.281 205.468 743.193 181.594 743.193 154.623C743.193 122.315 738.534 94.5731 729.198 71.4118C720.154 48.2498 707.011 30.6987 689.756 18.7924C672.499 6.58813 651.31 0.5 626.218 0.5C606.654 0.5 589.261 4.95887 574.053 13.8888L614.44 322.51ZM147.654 315.7L147.661 315.707L147.667 315.713C151.853 319.669 157.513 321.622 164.588 321.622C171.66 321.622 177.185 319.67 181.085 315.7C185.268 311.443 187.336 305.682 187.336 298.478V255.022H214.318C221.357 255.022 226.602 253.383 229.935 249.997C233.554 246.616 235.321 241.58 235.321 234.987C235.321 228.681 233.55 223.797 229.936 220.42C226.602 217.034 221.357 215.395 214.318 215.395H187.336V24.5319C187.336 16.7636 185.282 10.9783 181.072 7.29592C177.186 3.3484 172.111 1.38801 165.896 1.38801C160.577 1.38801 155.831 2.74189 151.674 5.4584C147.524 7.87519 143.84 11.6354 140.613 16.7098C140.612 16.7118 140.61 16.7137 140.609 16.7157L13.6766 204.509C13.676 204.51 13.6753 204.511 13.6746 204.512C8.72555 211.623 5.21673 217.423 3.1629 221.902L3.15712 221.915L3.15205 221.928C1.38952 226.412 0.5 230.619 0.5 234.543C0.5 241.464 2.72418 246.665 7.24443 250.039C11.7181 253.378 17.6504 255.022 24.9929 255.022H141.403V298.478C141.403 305.682 143.471 311.443 147.654 315.7ZM141.403 215.395H49.1315L141.403 78.3016V215.395ZM324.787 84.891L365.021 58.8064V278.886H312.3C306.103 278.886 301.17 280.54 297.564 283.905C293.944 287.282 292.17 292.168 292.17 298.478C292.17 304.503 293.949 309.374 297.548 313.036C301.152 316.705 306.091 318.514 312.3 318.514H459.311C465.792 318.514 470.874 316.864 474.484 313.496L474.492 313.488L474.5 313.48C478.103 309.813 479.878 304.791 479.878 298.478C479.878 292.168 478.104 287.282 474.484 283.905C470.874 280.536 465.792 278.886 459.311 278.886H410.953V20.0919C410.953 13.5136 409.193 8.74459 405.541 5.945C402.239 2.8986 398.047 1.38801 393.004 1.38801C388.849 1.38801 384.42 2.44454 379.721 4.53593C375.332 6.32303 370.659 8.70233 365.7 11.671L365.694 11.6749L365.687 11.6791L305.496 50.301C305.495 50.3019 305.493 50.3029 305.492 50.3038C301.055 53.0143 297.926 56.4936 296.135 60.7456L296.129 60.7597L296.124 60.7741C294.643 64.9964 294.34 69.0883 295.236 73.0381L295.24 73.0553L295.245 73.0722C296.43 76.9916 298.36 80.3199 301.038 83.0459L301.047 83.0553L301.057 83.0642C304.035 85.7925 307.47 87.4657 311.351 88.0735L311.356 88.0742C315.568 88.6866 320.043 87.608 324.763 84.9054L324.775 84.8985L324.787 84.891ZM680.738 68.7134L680.742 68.7215L680.746 68.7294C685.933 78.1153 688.536 89.1291 688.536 101.787C688.536 114.147 685.934 125.164 680.743 134.851L680.738 134.861C675.835 144.548 668.92 152.023 659.99 157.301C651.06 162.578 640.826 165.223 629.272 165.223C617.427 165.223 607.049 162.578 598.121 157.303C589.482 152.026 582.563 144.55 577.368 134.857C572.465 125.169 570.008 114.15 570.008 101.787C570.008 89.1254 572.467 78.1081 577.366 68.7204C582.562 59.0266 589.481 51.549 598.121 46.2719C607.049 40.997 617.427 38.3518 629.272 38.3518C640.826 38.3518 651.06 40.9966 659.99 46.2742C668.92 51.5513 675.835 59.0265 680.738 68.7134Z"
                      fill="url(#paint0_linear_2104_36586)"
                      stroke="#EAD682"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2104_36586"
                        x1="163.278"
                        y1="-36.9837"
                        x2="163.278"
                        y2="302.514"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F8E38E" />
                        <stop offset="1" stop-color="#FFF7D6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div
                    class="infoGraphicError absolute top-[32%] left-[7%] z-[3] text-center md:p-[9px] p-[3px] rounded-[8px] border-[1px] border-bc-8 bg-font max-w-[26.2rem] rotate-[-6.34deg] max-h-max min-h-max hidden_sm"
                  >
                    <span class="font-rhd text-font-2 md:text-sm text-[0.6rem]"
                      >Dear Visitor, you seem to be making some suspicious requests
                      there!</span
                    >
                  </div>
                </div>
                <div
                  class="frostedGlass absolute w-full h-full bottom-[-79px] left max-h-[20.5rem]"
                ></div>
              </div>
              <div class="w-full md:max-w-[78.8rem] max-w-[50.8rem] mx-auto px-[12px]">
                <h1
                  class="text-center md:text-[4.8rem] text-p text-font-2 font-rhd font-bold mb-[40px]"
                >
                  Sorry, the current page has expired or the request is taking too long to
                  get response! Try reloading!
                </h1>
              </div>
            </template>
            <template v-else>
              <!-- svg -->
              <div class="w-full flex_center relative mb-[79px] px-[12px]">
                <div
                  class="relative md:max-w-[78.8rem] md:max-h-[32.1rem] max-w-[31.9rem] max-h-[13rem] w-full h-full mx-auto"
                >
                  <svg
                    class="w-full h-full"
                    width="100%"
                    height="100%"
                    viewBox="0 0 791 324"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M150.479 315.706L150.485 315.712L150.492 315.718C154.75 319.673 160.508 321.624 167.704 321.624C174.899 321.624 180.518 319.673 184.486 315.706C188.743 311.449 190.848 305.687 190.848 298.48V255.024H218.32C225.481 255.024 230.816 253.386 234.206 250.001C237.888 246.621 239.688 241.584 239.688 234.988C239.688 228.679 237.884 223.795 234.206 220.419C230.816 217.034 225.481 215.396 218.32 215.396H190.848V24.532C190.848 16.761 188.757 10.9746 184.472 7.29288C180.519 3.34664 175.357 1.38802 169.036 1.38802C163.625 1.38802 158.797 2.74102 154.569 5.45644C150.346 7.87222 146.597 11.6316 143.312 16.7063C143.311 16.7083 143.31 16.7103 143.308 16.7124L14.1161 204.507C14.1154 204.508 14.1147 204.509 14.114 204.51C9.07689 211.621 5.50552 217.421 3.41501 221.901L3.40908 221.913L3.40386 221.926C1.60978 226.412 0.704102 230.619 0.704102 234.544C0.704102 241.469 2.96944 246.671 7.56842 250.043C12.1193 253.381 18.1539 255.024 25.6241 255.024H144.116V298.48C144.116 305.687 146.222 311.449 150.479 315.706ZM144.116 215.396H50.1851L144.116 78.2784V215.396ZM307.421 281.001L307.425 281.006C326.767 308.681 354.752 322.512 391.307 322.512C415.668 322.512 436.202 316.272 452.879 303.764C469.549 291.261 482.18 272.968 490.789 248.921C499.398 224.875 503.695 195.51 503.695 160.84C503.695 108.401 494.217 68.6174 475.188 41.5607C456.139 14.1796 428.153 0.5 391.307 0.5C366.948 0.5 346.416 6.59103 329.739 18.8006C313.067 31.0073 300.435 49.0056 291.825 72.7576C283.215 96.5093 278.919 126.023 278.919 161.284C278.919 213.134 288.398 253.061 307.421 281.001ZM441.039 253.841L441.038 253.843C435.746 263.692 428.961 271.056 420.689 275.961C412.416 280.866 402.629 283.328 391.307 283.328C380.134 283.328 370.42 280.866 362.147 275.961C353.874 271.056 347.014 263.691 341.574 253.841C330.683 233.825 325.207 202.847 325.207 160.84C325.207 118.533 330.684 87.8582 341.569 68.7354L341.571 68.7325C347.01 59.0299 353.87 51.7742 362.144 46.9418C370.418 42.1092 380.133 39.684 391.307 39.684C402.63 39.684 412.419 42.1098 420.691 46.9418C428.964 51.7733 435.749 59.0272 441.04 68.7275L441.044 68.7354C451.929 87.8582 457.407 118.533 457.407 160.84C457.407 202.847 451.931 233.825 441.039 253.841ZM700.692 315.706L700.698 315.712L700.705 315.718C704.964 319.673 710.721 321.624 717.917 321.624C725.112 321.624 730.731 319.673 734.699 315.706C738.956 311.449 741.061 305.687 741.061 298.48V255.024H768.533C775.694 255.024 781.029 253.386 784.419 250.001C788.102 246.621 789.901 241.584 789.901 234.988C789.901 228.679 788.097 223.795 784.419 220.419C781.029 217.034 775.694 215.396 768.533 215.396H741.061V24.532C741.061 16.7612 738.97 10.9749 734.685 7.29317C730.732 3.34674 725.57 1.38802 719.249 1.38802C713.838 1.38802 709.01 2.74104 704.782 5.45652C700.559 7.87242 696.81 11.632 693.525 16.707C693.524 16.7088 693.523 16.7106 693.521 16.7124L564.329 204.507C564.329 204.508 564.328 204.508 564.328 204.509C559.29 211.621 555.719 217.421 553.628 221.901L553.622 221.913L553.617 221.926C551.823 226.412 550.917 230.619 550.917 234.544C550.917 241.469 553.183 246.671 557.782 250.043C562.332 253.381 568.367 255.024 575.837 255.024H694.329V298.48C694.329 305.687 696.435 311.449 700.692 315.706ZM694.329 215.396H600.398L694.329 78.2784V215.396Z"
                      fill="url(#paint0_linear_2092_147062)"
                      stroke="#EAD682"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2092_147062"
                        x1="391"
                        y1="-36.9839"
                        x2="391"
                        y2="302.516"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F8E38E" />
                        <stop offset="1" stop-color="#FFF7D6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div
                    class="infoGraphicError absolute top-[32%] left-[7%] z-[3] text-center md:p-[9px] p-[3px] rounded-[8px] border-[1px] border-bc-8 bg-font max-w-[26.2rem] rotate-[-6.34deg] max-h-max min-h-max hidden_sm"
                  >
                    <span class="font-rhd text-font-2 md:text-sm text-[0.6rem]"
                      >Dear Visitor, there is no such page at the moment.</span
                    >
                  </div>
                </div>
                <div
                  class="frostedGlass absolute w-full h-full bottom-[-79px] left max-h-[20.5rem]"
                ></div>
              </div>
              <div class="w-full md:max-w-[78.8rem] max-w-[50.8rem] mx-auto px-[12px]">
                <h1
                  class="text-center md:text-[4.8rem] text-p text-font-2 font-rhd font-bold mb-[40px]"
                >
                  Sorry, the page you are looking for doesn't exist or has been moved.
                </h1>
              </div>
            </template>
            <div class="w-full md:max-w-[78.8rem] max-w-[50.8rem] mx-auto px-[12px]">
              <span class="font-rhd text-font-2 text-xl"
                >Try searching our site or use the “Home” button:</span
              >
              <div class="flex_center my-[36px] flex-wrap gap-[16px]">
                <VMenu
                  :open-on-hover="$getAppResource('viewportWidth') <= 958 ? false : true"
                  v-model="searchInputMenu"
                  location="bottom center"
                  :offset="5"
                  transition="slide-y-transition"
                >
                  <template v-slot:activator="{ props }">
                    <form
                      @submit.prevent="formAction"
                      @click="searchInputMenu = true"
                      v-bind="props"
                      class="inputArea relative sm:min-w-[42.6rem] sm:w-auto w-full"
                    >
                      <input
                        id="product_search"
                        class="bg_search bg_search_left bg-transparent"
                        type="text"
                        placeholder="Search our site"
                        v-model="searchInput"
                        required
                      />
                      <label
                        for="product_search"
                        class="absolute left-[16px] top-[50%] translate-y-[-50%] w-max h-max"
                      >
                        <SvgSearch
                          class="w-[2rem] h-[2rem]"
                          svg-stroke="var(--bg_color14)"
                        />
                      </label>
                    </form>
                  </template>
                  <VList
                    max-height="28.4rem"
                    class="search dropDownList"
                    :elevation="1"
                    min-width="150"
                  >
                    <template v-if="Object.keys(filteredRoutes).length">
                      <template
                        v-for="(value, key, index) in filteredRoutes"
                        :key="key + index + 221"
                      >
                        <VListItem
                          v-for="(items, id) in value"
                          :key="id + index + 32321"
                          :ripple="false"
                          :to="items.path"
                          class="noBefore"
                        >
                          <div class="flex_between gap-3">
                            <VListItemTitle class="flex items-center gap-1"
                              ><span class="elipsis max-w-[20rem]">{{
                                items.title
                              }}</span>
                              <span class="block min-w-max">
                                in <span class="text-main-4">{{ key }}</span>
                              </span></VListItemTitle
                            >
                            <SvgArrowRightBent
                              class="block angledBent w-[24px] min-w-[24px] h-[24px]"
                            />
                          </div>
                        </VListItem>
                      </template>
                    </template>
                  </VList>
                </VMenu>
              </div>
            </div>
          </div>
          <div style="flex: none !important" class="h-mc minh-mc flex_center pb-[43px]">
            <BaseButton
              to="/"
              variant="outlined"
              class="pill"
              height="3.2rem"
              width="auto"
              color="var(--text_dark3)"
              text="Home"
              :text-style="{
                fontSize: 'var(--text_md)',
                color: 'var(--text_dark3)',
              }"
            />
          </div>
        </div>
      </div>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object as () => NuxtError,
});
const { $deepClone } = useNuxtApp();
const headerTitle = ref(
  "Error: " +
    (props.error.statusCode ? props.error.statusCode : "An error occurred!") +
    " | " +
    (props.error.statusMessage ? props.error.statusMessage : props.error.message)
);
const searchInput = ref<string>("");
const searchInputMenu = ref<boolean>(false);
const activeRoutes = ref({
  Account: [
    { title: "Dashboard", path: "/" },
    { title: "Attributes", path: "/" },
  ],
});
const filteredRoutes = computed(() => {
  if (!searchInput.value) return activeRoutes.value;
  else {
    let FilteredObj = $deepClone(activeRoutes.value);
    Object.entries(FilteredObj).forEach(([key, value]: any) => {
      FilteredObj[key] = value.filter((element: any) => {
        return (
          element.title.toLowerCase().includes(searchInput.value) ||
          element.path.toLowerCase().includes(searchInput.value)
        );
      });
    });
    Object.entries(FilteredObj).forEach(([key, value]: any) => {
      if (!value.length) delete FilteredObj[key];
    });
    return FilteredObj;
  }
});
function formAction() {
  const filteredKeys = Object.keys(filteredRoutes.value);
  if (filteredKeys.length === 1 && filteredRoutes.value[filteredKeys[0]].length === 1) {
    navigateTo({
      path: filteredRoutes.value[filteredKeys[0]][0].path,
      replace: true,
    });
  } else if (!filteredKeys.length) {
  }
}
useHead({
  title: headerTitle,
});

const reload = () => window.location.reload();
</script>

<style scoped lang="scss">
body,
.v-application.v-theme--light {
  background-color: var(--text_light);
}
.frostedGlass {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  // background: url(/public/images/auth/blur.png);
  // background-repeat: no-repeat;
  // background-size: cover;
}
</style>
