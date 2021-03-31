<template>
  <div class="downArrow bounce col-lg-12 d-flex flex-row justify-content-center justify-items-center text-center">
    <svg
      class="arrow"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 332 512"
    >
      <defs>
        <linearGradient
          id="a"
          x1="256.01758"
          y1="512"
          x2="256.01758"
          gradientTransform="matrix(1, 0, 0, -1, 0, 512)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stop-color="#7986CB"
          />
          <stop
            offset="1"
            stop-color="#3949AB"
          />
        </linearGradient>
      </defs>
      <path
        d="M256.25586,430.14453l-89.76953-94.89844,29.05859-27.48828,60.63281,64.09766,60.27344-64.05859L345.584,335.207ZM422.01758,392V120a120.13623,120.13623,0,0,0-120-120h-92a120.13623,120.13623,0,0,0-120,120V392a120.13623,120.13623,0,0,0,120,120h92A120.13623,120.13623,0,0,0,422.01758,392Zm-120-352a80.08915,80.08915,0,0,1,80,80V392a80.08915,80.08915,0,0,1-80,80h-92a80.08915,80.08915,0,0,1-80-80V120a80.08915,80.08915,0,0,1,80-80Zm-46,41a20,20,0,1,0,20,20A19.99848,19.99848,0,0,0,256.01758,81Zm0,80a20,20,0,1,0,20,20A19.99848,19.99848,0,0,0,256.01758,161Zm0,80a20,20,0,1,0,20,20A19.99848,19.99848,0,0,0,256.01758,241Z"
        transform="translate(-90.01758)"
        fill="url(#a)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Arrowdown',
  data () {
    return {
    }
  }

}
</script>

<style lang="scss">

.arrow{
  margin: 4em;
    width: 3em;
}

 .bounce {
   -moz-animation: bounce 3s infinite;
   -webkit-animation: bounce 3s infinite;
   animation: bounce 3s infinite;
 }
 @-moz-keyframes bounce {
   0%,
   20%,
   50%,
   80%,
   100% {
     -moz-transform: translateY(0);
     transform: translateY(0);
   }
   40% {
     -moz-transform: translateY(-30px);
     transform: translateY(-30px);
   }
   60% {
     -moz-transform: translateY(-15px);
     transform: translateY(-15px);
   }
 }
 @-webkit-keyframes bounce {
   0%,
   20%,
   50%,
   80%,
   100% {
     -webkit-transform: translateY(0);
     transform: translateY(0);
   }
   40% {
     -webkit-transform: translateY(-30px);
     transform: translateY(-30px);
   }
   60% {
     -webkit-transform: translateY(-15px);
     transform: translateY(-15px);
   }
 }
 @keyframes bounce {
   0%,
   20%,
   50%,
   80%,
   100% {
     -moz-transform: translateY(0);
     -ms-transform: translateY(0);
     -webkit-transform: translateY(0);
     transform: translateY(0);
   }
   40% {
     -moz-transform: translateY(-30px);
     -ms-transform: translateY(-30px);
     -webkit-transform: translateY(-30px);
     transform: translateY(-30px);
   }
   60% {
     -moz-transform: translateY(-15px);
     -ms-transform: translateY(-15px);
     -webkit-transform: translateY(-15px);
     transform: translateY(-15px);
   }
 }

@media (min-width: 768px) and (max-width: 991.98px) {

}

@media (min-width: 992px) and (max-width: 1199.98px) {

}

@media (min-width: 1200px) {

}
</style>
