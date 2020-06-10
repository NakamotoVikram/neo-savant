<template>
  <div class="account-selector panel-content">
    <div class="header">
      <div class="title">Import account on {{ network.name }}</div>
      <img src="@/assets/close-color.svg" @click="handleClose" class="close-button-new" />
    </div>

    <div class="body p-4">
      <div class="type-selector d-flex justify-content-around">
        <div
          class="type-button"
          @click="handleTypeSelect('keystore')"
          :class="{'active': type === 'keystore'}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 22.604 29.134"
          >
            <g transform="translate(-6.5)">
              <path
                d="M31.515,45.553a1.055,1.055,0,0,0-.4-.337,1.107,1.107,0,0,0-.471-.1,1.241,1.241,0,0,0-.484.1,1.037,1.037,0,0,0-.412.326,1.684,1.684,0,0,0-.285.594,3.479,3.479,0,0,0-.11.893,3.549,3.549,0,0,0,.106.879,1.722,1.722,0,0,0,.275.594,1.1,1.1,0,0,0,.4.337,1.074,1.074,0,0,0,.471.106,1.209,1.209,0,0,0,.484-.1,1.079,1.079,0,0,0,.412-.326,1.646,1.646,0,0,0,.285-.594,3.546,3.546,0,0,0,.11-.9,3.5,3.5,0,0,0-.106-.876A1.762,1.762,0,0,0,31.515,45.553Z"
                transform="translate(-11.375 -22.453)"
              />
              <path
                d="M29.1,19.59V7.021a1.16,1.16,0,0,0-.276-.9L22.982.276A.95.95,0,0,0,22.315,0H7.737A1.3,1.3,0,0,0,6.5,1.47V19.59ZM18.053,16.576a.5.5,0,1,1-1,0V15.069a.5.5,0,1,1,1,0ZM22.071,1.7a.258.258,0,0,1,.441-.182l5.071,5.071a.258.258,0,0,1-.182.441H22.071Zm-.5,10.352V10.046a.5.5,0,0,0-.5-.5.5.5,0,0,1,0-1,1.509,1.509,0,0,1,1.507,1.507v2.009a1.006,1.006,0,0,0,1,1,.5.5,0,1,1,0,1,1.006,1.006,0,0,0-1,1v2.009a1.509,1.509,0,0,1-1.507,1.507.5.5,0,0,1,0-1,.5.5,0,0,0,.5-.5V15.069a2,2,0,0,1,.694-1.507A2,2,0,0,1,21.569,12.055Zm-4.018-1a.753.753,0,1,1-.753.753A.754.754,0,0,1,17.551,11.051ZM11.523,13.06a1.006,1.006,0,0,0,1-1V10.046a1.509,1.509,0,0,1,1.507-1.507.5.5,0,1,1,0,1,.5.5,0,0,0-.5.5v2.009a2,2,0,0,1-.694,1.507,2,2,0,0,1,.694,1.507v2.009a.5.5,0,0,0,.5.5.5.5,0,1,1,0,1,1.509,1.509,0,0,1-1.507-1.507V15.069a1.006,1.006,0,0,0-1-1,.5.5,0,1,1,0-1Z"
              />
              <path
                d="M6.5,41v7.535a1.218,1.218,0,0,0,1.237,1H27.867a1.218,1.218,0,0,0,1.237-1V41Zm5.787,5.307a1.26,1.26,0,0,1-.131.6,1.071,1.071,0,0,1-.35.391,1.4,1.4,0,0,1-.5.206,2.936,2.936,0,0,1-.587.058,2.387,2.387,0,0,1-.354-.031,3.021,3.021,0,0,1-.419-.1q-.216-.066-.415-.148A1.541,1.541,0,0,1,9.19,47.1l.35-.556a1.026,1.026,0,0,0,.2.1q.127.051.278.1t.316.079a1.5,1.5,0,0,0,.309.034,1.055,1.055,0,0,0,.58-.141.556.556,0,0,0,.23-.477V42.365h.838Zm3.987.368a1.381,1.381,0,0,1-.319.453,1.531,1.531,0,0,1-.508.312,1.894,1.894,0,0,1-.687.117c-.11,0-.223-.006-.34-.017a2.759,2.759,0,0,1-.354-.058,1.851,1.851,0,0,1-.34-.114,1.1,1.1,0,0,1-.278-.175l.144-.591a1.466,1.466,0,0,0,.244.106c.1.034.2.066.305.1s.21.054.316.072a1.7,1.7,0,0,0,.3.028.943.943,0,0,0,.642-.2.731.731,0,0,0,.223-.58.554.554,0,0,0-.158-.4,1.71,1.71,0,0,0-.395-.3q-.237-.134-.512-.268a3.122,3.122,0,0,1-.515-.316,1.648,1.648,0,0,1-.4-.429,1.124,1.124,0,0,1-.158-.618,1.38,1.38,0,0,1,.124-.6,1.336,1.336,0,0,1,.333-.443,1.474,1.474,0,0,1,.488-.278,1.779,1.779,0,0,1,.587-.1,3.6,3.6,0,0,1,.638.058,1.407,1.407,0,0,1,.522.189c-.028.059-.059.125-.1.2l-.1.2c-.032.062-.059.114-.082.155a.635.635,0,0,1-.041.069.83.83,0,0,1-.093-.055.7.7,0,0,0-.148-.069,1.054,1.054,0,0,0-.254-.048,2.4,2.4,0,0,0-.405.007.709.709,0,0,0-.261.079.9.9,0,0,0-.22.161.736.736,0,0,0-.151.216.554.554,0,0,0-.055.23.621.621,0,0,0,.158.443,1.548,1.548,0,0,0,.391.3q.233.127.508.247a2.756,2.756,0,0,1,.512.292,1.475,1.475,0,0,1,.395.429,1.248,1.248,0,0,1,.158.663A1.278,1.278,0,0,1,16.274,46.675ZM21.2,46.1a2.3,2.3,0,0,1-.447.81,1.874,1.874,0,0,1-.666.488,2.195,2.195,0,0,1-1.669,0,1.868,1.868,0,0,1-.666-.488,2.3,2.3,0,0,1-.447-.81,4,4,0,0,1,0-2.249,2.3,2.3,0,0,1,.447-.807,1.915,1.915,0,0,1,.666-.491,2.152,2.152,0,0,1,1.669,0,1.909,1.909,0,0,1,.666.491,2.306,2.306,0,0,1,.447.807,4,4,0,0,1,0,2.249ZM26.18,47.53h-.838l-1.985-3.489V47.53H22.52V42.469h.838l1.985,3.489V42.469h.838Z"
                transform="translate(0 -20.406)"
              />
            </g>
          </svg>
          Keystore
        </div>
        <div
          class="type-button"
          @click="handleTypeSelect('ledger')"
          :class="{'active': type === 'ledger'}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 28.075 28.167"
          >
            <path
              d="M23.64,0H10.683V17.387H28.07V4.522A4.51,4.51,0,0,0,23.64,0ZM6.7,0H4.533A4.544,4.544,0,0,0,0,4.533V6.7H6.7ZM0,10.775H6.7v6.7H0ZM21.371,28.162h2.171a4.544,4.544,0,0,0,4.533-4.533V21.463h-6.7v6.7Zm-10.688-6.7h6.7v6.7h-6.7ZM0,21.463v2.171a4.544,4.544,0,0,0,4.533,4.533H6.7v-6.7Z"
            />
          </svg>
          Ledger
        </div>
        <div
          class="type-button"
          @click="handleTypeSelect('zilpay')"
          :class="{'active': type === 'zilpay'}"
        >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <path d="M6.32792 13.1646C4.32771 12.9648 2.51437 11.911 1.53674 10.3802C1.13789 9.75563 0.829738 8.96695 0.732742 8.32242C0.689244 8.03337 0.659574 7.35988 0.67331 6.97335C0.723011 5.57476 1.04901 4.49007 1.70838 3.52939C1.93925 3.19303 2.09005 3.01664 2.4147 2.70322C2.93356 2.20229 3.45541 1.84856 4.19499 1.49647C4.85489 1.1823 5.39115 1.01847 6.08881 0.917878C6.44445 0.866602 7.25635 0.871656 7.62669 0.927436C8.8088 1.10554 9.84909 1.61228 10.8414 2.49339C11.9007 3.43392 12.603 4.53237 12.8593 5.6495C12.9556 6.06916 12.9728 6.23472 12.9739 6.75054C12.975 7.27344 12.9615 7.41699 12.8679 7.88393L12.8081 8.18186L12.5857 8.22506C11.9779 8.3431 11.1995 8.55442 10.7086 8.73464C10.3298 8.8737 10.2529 8.90514 9.70428 9.14537C9.17807 9.37578 8.9396 9.46688 8.65442 9.54643C8.05838 9.71269 7.42202 9.72679 6.99213 9.58324C6.41355 9.39004 5.98081 8.92826 5.88666 8.40357C5.85505 8.22737 5.87398 7.88402 5.9255 7.69946C6.04945 7.25538 6.3235 6.79789 6.74812 6.3262C6.82666 6.23894 6.89261 6.16922 6.89466 6.17127C6.89667 6.17322 6.92209 6.36298 6.95106 6.59273C6.98002 6.82249 7.00512 7.0125 7.00684 7.01498C7.00856 7.01748 7.08238 6.99384 7.1709 6.96249C7.68938 6.77885 8.22375 6.74511 8.76734 6.86168C9.03328 6.91871 9.52366 7.07371 10.0008 7.25155C10.1849 7.32017 10.3915 7.38784 10.4599 7.40194C10.7858 7.46908 11.3184 7.40278 11.6578 7.2529C11.7504 7.21204 11.7573 7.20405 11.782 7.11004C11.8154 6.98271 11.8158 6.62062 11.7825 6.46029L11.7571 6.33713L11.381 6.08636C9.11582 4.5758 7.21542 3.68076 5.60025 3.36375C5.16101 3.27754 4.39573 3.20359 4.39573 3.24735C4.39573 3.25785 4.39112 3.27808 4.38548 3.29232C4.37806 3.3111 4.59873 3.42503 5.18849 3.70692C5.63578 3.92072 6.00191 4.09981 6.0021 4.10492C6.00231 4.11003 5.84538 4.16728 5.65341 4.23215C5.10646 4.41697 4.73985 4.56303 4.36689 4.74472C4.05839 4.89501 3.61191 5.15445 3.61155 5.18365C3.61147 5.18981 3.77851 5.21007 3.98275 5.2287L4.3541 5.26257L4.14994 5.47743C3.87469 5.76712 3.71531 5.95259 3.32718 6.43492L2.9985 6.84337L3.28583 6.84848C3.44385 6.85129 3.57297 6.85965 3.57275 6.86705C3.57252 6.87444 3.43986 7.31911 3.27793 7.85519C3.11601 8.39128 2.98516 8.83152 2.98715 8.83351C2.98915 8.83545 3.12724 8.80753 3.29403 8.77137C3.49136 8.72858 3.60154 8.71229 3.60945 8.72471C3.61615 8.73522 3.65058 9.16838 3.68599 9.68729C3.7214 10.2062 3.75313 10.6339 3.75651 10.6376C3.7599 10.6414 3.88011 10.5474 4.02367 10.4288C4.16722 10.3101 4.29029 10.2131 4.29716 10.2132C4.30402 10.2132 4.54206 10.5638 4.82613 10.992C5.1102 11.4203 5.34883 11.7711 5.35641 11.7716C5.364 11.7722 5.47505 11.6509 5.60319 11.5022C5.78964 11.2858 5.84073 11.2367 5.8589 11.2562C5.87138 11.2696 5.96677 11.385 6.07086 11.5126C6.17496 11.6403 6.35928 11.8419 6.48047 11.9607L6.70082 12.1768L7.16949 12.1771C7.89772 12.1777 8.35944 12.2531 8.97276 12.472L9.15957 12.5387L9.0971 12.5843C8.72846 12.8533 8.26108 13.0313 7.66686 13.1292C7.47959 13.16 7.32613 13.1699 6.95907 13.1747C6.7013 13.1781 6.41722 13.1736 6.3278 13.1646L6.32792 13.1646V13.1646Z"/>
        </svg>
          ZilPay
        </div>
        <div
          class="type-button"
          @click="handleTypeSelect('torus')"
          :class="{'active': type === 'torus'}"
        >
          <svg
            height="10"
            viewBox="0 0 16 4"
          >
            <g clip-path="url(#clip0)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.04669 2.62815C7.13307 2.38229 7.17547 2.12293 7.17194 1.86215C7.17534 1.60221 7.13294 1.34373 7.04669 1.09873C6.96975 0.880579 6.84979 0.680362 6.69405 0.510132C6.54114 0.346307 6.35506 0.217539 6.14842 0.13256C5.92551 0.0421206 5.68701 -0.00288345 5.44673 0.000152279C5.20679 -0.00299136 4.96867 0.042567 4.74658 0.134113C4.54074 0.219795 4.35515 0.348278 4.20196 0.511166C4.04613 0.680928 3.92616 0.88083 3.84932 1.09873C3.76309 1.34373 3.72068 1.60221 3.72408 1.86215C3.72055 2.12293 3.76296 2.38229 3.84932 2.62815C3.92616 2.84605 4.04613 3.04595 4.20196 3.21571C4.35493 3.37861 4.54059 3.50679 4.74658 3.59173C5.19744 3.76827 5.69755 3.76827 6.14842 3.59173C6.35477 3.50694 6.5408 3.37874 6.69405 3.21571C6.84989 3.04595 6.96987 2.84605 7.04669 2.62815ZM6.79679 1.17684C6.86875 1.3979 6.90344 1.62954 6.89946 1.86216C6.90369 2.09513 6.86899 2.32714 6.79679 2.54851C6.73364 2.73839 6.63248 2.91319 6.49959 3.06211C6.37164 3.20319 6.21372 3.31334 6.03762 3.38434C5.65759 3.53128 5.23704 3.53128 4.85702 3.38434C4.68115 3.31291 4.52332 3.20282 4.39504 3.06211C4.26152 2.91331 4.15967 2.73851 4.09578 2.54851C4.02229 2.32739 3.98653 2.09532 3.99004 1.86216C3.98722 1.63018 4.02314 1.39939 4.0963 1.17942C4.15974 0.988143 4.26161 0.812073 4.39555 0.662204C4.52406 0.521508 4.68181 0.411128 4.85753 0.338941C5.23718 0.189963 5.65848 0.189963 6.03813 0.338941C6.21409 0.410686 6.37192 0.52113 6.50011 0.662204C6.63293 0.811465 6.73391 0.986629 6.79679 1.17684Z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.84777 3.72404H10.0692L8.83207 2.11235C8.80206 2.0712 8.76495 2.03613 8.72258 2.00891C8.86917 1.9927 9.01283 1.95472 9.14896 1.89616C9.26831 1.84436 9.37771 1.77078 9.4719 1.67892C9.56003 1.59125 9.62965 1.48557 9.67626 1.36858C9.72504 1.245 9.74935 1.11257 9.74779 0.979114C9.74675 0.658085 9.64314 0.414644 9.43687 0.248786C9.2306 0.0829288 8.92072 0 8.50715 0H7.58643V3.72404H7.84835V2.03995H8.32021C8.35046 2.03966 8.38069 2.04156 8.41068 2.04563C8.43255 2.04797 8.45396 2.05373 8.47416 2.0627C8.49262 2.0703 8.50956 2.08135 8.52415 2.09529C8.53959 2.11122 8.55363 2.12853 8.56613 2.14701L9.72081 3.65783C9.7343 3.67971 9.75307 3.69754 9.77529 3.70955C9.79804 3.71995 9.82286 3.7249 9.84777 3.72404ZM8.89797 1.78033C8.75881 1.82192 8.61447 1.84195 8.46962 1.83981H7.84831V0.213132H8.50761C8.82714 0.213477 9.07025 0.277614 9.23691 0.405541C9.40349 0.533469 9.48686 0.729842 9.48686 0.994664C9.48859 1.11512 9.46524 1.23457 9.41836 1.34482C9.37252 1.4483 9.30411 1.53933 9.2184 1.61068C9.12353 1.68861 9.01456 1.74628 8.89797 1.78033Z"/>
            <path d="M11.8619 3.4869C12.0236 3.48989 12.184 3.45854 12.3328 3.39491C12.4667 3.3362 12.5865 3.24893 12.6839 3.13909C12.7821 3.02653 12.8569 2.89526 12.9039 2.75303C12.9551 2.59867 12.9804 2.43674 12.9787 2.27395V0H13.2412V2.27395C13.2429 2.46763 13.2107 2.66008 13.146 2.84244C13.0858 3.01267 12.9926 3.16904 12.8717 3.3024C12.7502 3.43568 12.6022 3.54138 12.4372 3.61248C12.0679 3.76135 11.656 3.76135 11.2867 3.61248C11.1217 3.54152 10.9735 3.43581 10.8522 3.3024C10.7312 3.16918 10.6379 3.01277 10.5779 2.84244C10.5133 2.66008 10.481 2.46763 10.4827 2.27395V0H10.7463V2.27085C10.7448 2.43387 10.7704 2.59599 10.822 2.75045C10.8692 2.89245 10.9436 3.02365 11.0411 3.1365C11.1376 3.24726 11.2569 3.33544 11.3906 3.39491C11.5394 3.4591 11.7001 3.49046 11.8619 3.4869Z"/>
            <path d="M15.8387 0.483699C15.8275 0.510404 15.8016 0.527709 15.773 0.527657C15.7401 0.522102 15.7101 0.505316 15.688 0.480079C15.6437 0.442047 15.5967 0.407472 15.5473 0.376649C15.4776 0.332569 15.4031 0.296822 15.3253 0.270116C15.1063 0.201538 14.8719 0.203344 14.654 0.275287C14.5616 0.309203 14.477 0.362006 14.4054 0.430432C14.3393 0.494143 14.2872 0.571338 14.2526 0.656944C14.2184 0.742666 14.2011 0.83439 14.2017 0.926893C14.1974 1.03438 14.2241 1.1408 14.2786 1.23305C14.3317 1.31561 14.401 1.38605 14.4823 1.4399C14.5723 1.49901 14.6689 1.54693 14.7701 1.58264C14.8771 1.62091 14.9876 1.65918 15.1006 1.69693C15.2138 1.73469 15.3243 1.77657 15.4313 1.82156C15.5345 1.8648 15.6314 1.9224 15.719 1.99274C15.8035 2.0619 15.873 2.1482 15.9228 2.24614C15.9776 2.36288 16.004 2.49129 15.9997 2.62056C16.0009 2.7677 15.9753 2.9138 15.9237 3.05135C15.8739 3.18307 15.7974 3.30269 15.6991 3.40249C15.5964 3.50504 15.474 3.58512 15.3395 3.63779C15.1841 3.69757 15.0188 3.7267 14.8526 3.72364C14.642 3.72933 14.4329 3.68581 14.2414 3.59642C14.0707 3.51126 13.9184 3.39262 13.7932 3.24734L13.864 3.13461C13.8802 3.11098 13.9065 3.09659 13.9348 3.09582C13.9572 3.09927 13.9778 3.11018 13.9933 3.12685L14.0795 3.20235C14.113 3.23286 14.1538 3.26544 14.2012 3.30061C14.2528 3.33854 14.3079 3.37128 14.3657 3.39835C14.5199 3.47059 14.6879 3.50698 14.8577 3.50488C14.9874 3.50715 15.1165 3.48488 15.2382 3.4392C15.3432 3.39889 15.439 3.33731 15.5198 3.25821C15.5967 3.18241 15.6566 3.09069 15.6956 2.98928C15.7368 2.88328 15.7575 2.77021 15.7567 2.65624C15.761 2.54493 15.7341 2.43465 15.6793 2.3382C15.6269 2.25507 15.5574 2.18449 15.4755 2.13134C15.3857 2.07309 15.2893 2.02604 15.1882 1.99119C15.0808 1.95344 14.9708 1.91672 14.8572 1.88052C14.7436 1.84432 14.6341 1.8045 14.5266 1.75951C14.423 1.71726 14.3261 1.65975 14.2389 1.58884C14.1536 1.51839 14.0842 1.43023 14.0351 1.33027C13.9796 1.20826 13.953 1.07468 13.9577 0.940342C13.9577 0.81939 13.9809 0.699593 14.0259 0.587645C14.0716 0.474893 14.1398 0.372949 14.2262 0.288216C14.3203 0.19811 14.431 0.127808 14.5521 0.0813566C14.6932 0.0258809 14.8434 -0.00167856 14.9947 0.000164226C15.1658 -0.00253276 15.3357 0.0280107 15.4954 0.0901483C15.6472 0.15291 15.7847 0.246737 15.8993 0.365789L15.8387 0.483699Z"/>
            <path d="M2.06896 0H0V1.10345H2.06896V0Z"/>
            <path d="M2.06878 0H0.965332V3.72413H2.06878V0Z"/>
            <path d="M2.89645 1.10345C3.20116 1.10345 3.44817 0.856432 3.44817 0.551723C3.44817 0.247015 3.20116 0 2.89645 0C2.59174 0 2.34473 0.247015 2.34473 0.551723C2.34473 0.856432 2.59174 1.10345 2.89645 1.10345Z"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="16" height="3.80541"/>
            </clipPath>
            </defs>
          </svg>
          Torus
        </div>
      </div>

      <div class="import-form">
        <div class="mb-4" v-if="type === 'ledger'">
          <div class="account-selector">
            <p class="mb-4 text-dark">Select the Ledger Account you want to proceed with</p>
            <table class="table table-sm">
              <thead>
                <tr>
                  <td class="small">#</td>
                  <td class="small">Address</td>
                  <td class="small">Balance</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(account, index) in accounts"
                  class="ledger-account-item"
                  :key="index"
                  @click="useLedgerAccount(index)"
                >
                  <td class="small">{{ index }}</td>
                  <td class="small">{{ account.address }}</td>
                  <td class="small">{{ account.balance }} ZIL</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between">
              <button
                class="btn btn-secondary mr-4"
                @click="generateLedgerAccount"
              >Generate #{{ currentIndex + 1 }}</button>

              <button
                class="btn btn-success"
                @click="useLedgerAccount(0)"
                v-if="accounts.length >= 1"
              >Use #0</button>
            </div>
          </div>
        </div>

        <div class="mb-4" v-if="type === 'zilpay'">
          <button class="btn btn-primary btn-block" @click="handleConnectZilPay">
            connect
          </button>
        </div>

        <div class="mb-4" v-if="type === 'torus'">
          <button
            class="btn btn-primary btn-block"
            @click="handleConnectTorus"
          >
            connect
          </button>
        </div>

        <div class="mb-4" v-if="type === 'keystore'">
          <div class="mb-4">
            <label class="d-block">Select your keystore.json file</label>
            <div class="file-text">
              <button
                class="btn btn-secondary btn-block btn-outline text-secondary mb-2"
                @click="$refs.file.click()"
              >
                <i class="fas fa-file-upload"></i> Browse
              </button>
              <div
                class="selected-file"
                v-if="selected !== undefined && selected.name !== undefined"
              >{{ selected.name }}</div>
            </div>
            <input type="file" ref="file" @change="onFileChange" class="d-none" />
          </div>

          <div>
            <label>Enter your passphrase</label>
            <input
              type="password"
              class="form-control"
              v-model="passphrase"
              placeholder="Passprase"
            />
          </div>
        </div>

        <div class="loading my-4" v-if="loading">
          <div class="icon text-center">
            <i class="fas fa-spinner fa-spin"></i>
            {{ loading }}
          </div>
        </div>

        <div class="buttons d-flex" v-if="type !== 'zilpay' && type !== 'torus'">
          <button class="btn btn-light text-danger text-small mr-2" @click="handleClose">
            <small>Cancel</small>
          </button>
          <button class="btn btn-primary btn-block" @click="handleImport">
            <i class="fas fa-user-plus"></i>
            Import account
          </button>
        </div>

        <div class="alert alert-danger my-2" v-if="error">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { BN, units } from "@zilliqa-js/util";
import LedgerInterface from "@/utils/ledger-interface";
import TransportU2F from "@ledgerhq/hw-transport-u2f";
import { Zilliqa } from "@zilliqa-js/zilliqa";
import { mapGetters } from "vuex";
import { fromBech32Address } from "@zilliqa-js/crypto";
import ZilPayMixin from '@/mixins/zilpay'
import TorusMixin from '@/mixins/torus'

export default {
  data() {
    return {
      type: "keystore",
      file: null,
      selected: undefined,
      passphrase: "",
      error: false,
      loading: false,
      zilliqa: undefined,
      currentIndex: -1,
      accounts: []
    };
  },
  mixins: [ZilPayMixin, TorusMixin],
  computed: {
    ...mapGetters("networks", { network: "selected" }),
    ...mapGetters("networks", ["list"]),
    ...mapGetters("accounts", { acountsList: "list" }),
  },
  methods: {
    handleClose() {
      window.EventBus.$emit("close-right-panel");
    },
    handleTypeSelect(type) {
      this.type = type;
    },
    readUploadedFileAsText(inputFile) {
      const temporaryFileReader = new FileReader();

      return new Promise((resolve, reject) => {
        temporaryFileReader.onerror = () => {
          temporaryFileReader.abort();
          reject(new Error("Problem parsing input file."));
        };

        temporaryFileReader.onload = () => {
          resolve(temporaryFileReader.result);
        };
        temporaryFileReader.readAsText(inputFile);
      });
    },
    onFileChange() {
      this.selected = this.$refs.file.files[0];
    },
    async handleImport() {
      if (this.type === "keystore") {
        await this.tryKeystoreLogin();
      }
    },
    async handleConnectZilPay() {
      this.error = null;
      this.loading = 'Waiting for access ZilPay...';

      try {
        await this.getZilPayNetwork()
        await this.getZilPayAccount()

        this.runZilPayObservable()
      } catch (err) {
        this.error = err.message;
      }

      this.loading = false;
      this.importAccount = false;
      window.EventBus.$emit("close-right-panel");
    },
    async generateLedgerAccount() {
      this.loading = "Trying to create U2F transport.";
      const transport = await TransportU2F.create();
      this.loading = "Trying to initialize Ledger Transport";
      const zil = new LedgerInterface(transport);
      this.loading = "Please confirm action on Ledger Device";
      const address = await zil.getPublicAddress(this.currentIndex + 1);
      if (this.zilliqa === undefined) {
        this.zilliqa = new Zilliqa(this.network.url);
      }
      let balance = await this.zilliqa.blockchain.getBalance(address.pubAddr);
      if (balance.error && balance.error.code === -5) {
        this.accounts.push({
          index: this.currentIndex + 1,
          address: fromBech32Address(address.pubAddr),
          balance: 0
        });
      } else {
        const zils = units.fromQa(
          new BN(balance.result.balance),
          units.Units.Zil
        );
        this.accounts.push({
          index: this.currentIndex + 1,
          address: fromBech32Address(address.pubAddr),
          balance: zils
        });
      }
      this.currentIndex = this.currentIndex + 1;
      transport.close();
      this.loading = false;
    },
    async useLedgerAccount(index) {
      const account = this.accounts[index];
      await this.$store
          .dispatch("accounts/AddAccount", {
            address: account.address,
            keystore: account.index,
            type: "ledger"
          })
          .then(() => {
            window.EventBus.$emit("refresh-balance");
            window.EventBus.$emit("close-right-panel");
            this.$notify({
              group: "scilla",
              type: "success",
              position: "bottom right",
              title: "Accounts",
              text: "Account successfully imported"
            });
            this.importAccount = false;
            this.loading = false;
          });
      window.EventBus.$emit("login-success", {
        keystore: account.index,
        address: account.address
      });
      if (this.address !== null) {
        this.$emit("close-login");
      }
    },
    async tryKeystoreLogin() {
      this.error = false;
      this.login = false;

      try {
        this.loading = "Trying to decrypt keystore file and access wallet...";
        if (this.zilliqa === undefined) {
          this.zilliqa = new Zilliqa(this.network.url);
        }
        if (this.selected === "" || this.selected === undefined) {
          throw new Error("Please select your keystore file.");
        }
        if (this.passphrase === "" || this.passphrase === undefined) {
          throw new Error("Please enter passphrase.");
        }
        this.file = await this.readUploadedFileAsText(this.selected);
        const address = await this.zilliqa.wallet.addByKeystore(
          this.file,
          this.passphrase
        );
        await this.$store
          .dispatch("accounts/AddAccount", {
            address: address,
            keystore: this.file,
            type: "keystore"
          })
          .then(() => {
            window.EventBus.$emit("refresh-balance");
            window.EventBus.$emit("close-right-panel");
            this.$notify({
              group: "scilla",
              type: "success",
              position: "bottom right",
              title: "Accounts",
              text: "Account successfully imported"
            });
            this.importAccount = false;
            this.loading = false;
          });

        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = error.message;
      }
    },
    async handleConnectTorus() {
      this.error = null;
      this.loading = 'Waiting for access torus...';

      if (!this.network.url) {
        this.error = 'Please select the network.';
        this.loading = false;
        return null;
      }

      if (this.zilliqa === undefined) {
        this.zilliqa = new Zilliqa(this.network.url);
      }

      try {
        const privateKey = await this.connectTorus();
        const address = this.zilliqa.wallet.addByPrivateKey(privateKey);
        let balance = await this.zilliqa.blockchain.getBalance(address);

        if (balance.error && balance.error.code === -5) {
          balance = 0;
        } else {
          const zils = units.fromQa(
            new BN(balance.result.balance),
            units.Units.Zil
          );
          balance = zils;
        }

        await this.$store.dispatch("accounts/AddAccount", {
          address,
          keystore: privateKey,
          type: "torus"
        });
        this.$notify({
          group: "scilla",
          type: "success",
          position: "bottom right",
          title: "Accounts",
          text: "Account successfully imported"
        });
        window.EventBus.$emit("refresh-balance");
      } catch (err) {
        this.error = err.message;
      }

      window.EventBus.$emit("close-right-panel");
      this.importAccount = false;
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.type-selector {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px dashed transparentize($color: $primary, $amount: 0.85);

  .type-button {
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 120px;
    height: 80px;
    border: 2px solid $primary;
    background-color: transparent;
    color: $primary;
    font-weight: bold;

    svg {
      fill: $primary;
    }

    &:hover,
    &.active {
      border: 2px solid $primary;
      background-color: $primary;
      color: #fff;
      cursor: pointer;
      svg {
        fill: #fff;
      }
    }
  }
}

.account-selector {
  .ledger-account-item {
    &:hover {
      cursor: pointer;
      background-color: transparentize($color: $primary, $amount: 0.7);
    }
  }
}

.import-form {
  .selected-file {
    font-size: 0.85rem;
    font-family: "Courier New", Courier, monospace;
  }
}
</style>