import * as React from "react";
import Svg, {
  G,
  Circle,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ChatButton = (props) => (
  <Svg
    width={70}
    height={70}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_6_381)">
      <Circle cx={35} cy={35} r={25} fill="#30303B" />
      <Mask id="path-2-inside-1_6_381" fill="white">
        <Path d="M36.9181 47.0097L37.5185 45.9956L36.0889 45.1494L35.4886 46.1637L36.9181 47.0097ZM32.4815 45.9956L33.0818 47.0097L34.5113 46.1637L33.9109 45.1494L32.4815 45.9956ZM35.4886 46.1637C35.2752 46.5242 34.7248 46.5242 34.5113 46.1637L33.0818 47.0097C33.9385 48.4571 36.0614 48.4571 36.9181 47.0097L35.4886 46.1637ZM33.3388 25.9469H36.6611V24.2858H33.3388V25.9469ZM45.2436 34.5294V35.6368H46.9047V34.5294H45.2436ZM24.7563 35.6368V34.5294H23.0952V35.6368H24.7563ZM23.0952 35.6368C23.0952 36.9155 23.0948 37.916 23.1498 38.723C23.2054 39.5375 23.3203 40.2154 23.5799 40.8422L25.1146 40.2065C24.9528 39.8158 24.8569 39.3398 24.8071 38.6099C24.7568 37.8726 24.7563 36.9382 24.7563 35.6368H23.0952ZM30.3516 43.1026C28.9613 43.0786 28.2328 42.9902 27.6618 42.7537L27.0261 44.2884C27.9175 44.6576 28.9328 44.7395 30.323 44.7634L30.3516 43.1026ZM23.5799 40.8422C24.2262 42.4024 25.4658 43.6421 27.0261 44.2884L27.6618 42.7537C26.5085 42.276 25.5923 41.3598 25.1146 40.2065L23.5799 40.8422ZM45.2436 35.6368C45.2436 36.9382 45.2432 37.8726 45.1929 38.6099C45.1431 39.3398 45.0472 39.8158 44.8854 40.2065L46.42 40.8422C46.6797 40.2154 46.7946 39.5375 46.8501 38.723C46.9052 37.916 46.9047 36.9155 46.9047 35.6368H45.2436ZM39.6769 44.7634C41.0671 44.7395 42.0825 44.6576 42.9738 44.2884L42.3382 42.7537C41.7672 42.9902 41.0386 43.0786 39.6484 43.1026L39.6769 44.7634ZM44.8854 40.2065C44.4076 41.3598 43.4914 42.276 42.3382 42.7537L42.9738 44.2884C44.5341 43.6421 45.7737 42.4024 46.42 40.8422L44.8854 40.2065ZM36.6611 25.9469C38.4897 25.9469 39.8029 25.9478 40.8271 26.0452C41.8391 26.1414 42.4829 26.3259 42.9962 26.6405L43.8642 25.2241C43.0459 24.7227 42.1178 24.4993 40.9844 24.3915C39.8632 24.2849 38.4576 24.2858 36.6611 24.2858V25.9469ZM46.9047 34.5294C46.9047 32.733 46.9056 31.3273 46.799 30.2062C46.6912 29.0727 46.4678 28.1445 45.9664 27.3263L44.55 28.1943C44.8646 28.7076 45.0491 29.3515 45.1454 30.3634C45.2427 31.3877 45.2436 32.7008 45.2436 34.5294H46.9047ZM42.9962 26.6405C43.6295 27.0285 44.162 27.561 44.55 28.1943L45.9664 27.3263C45.4414 26.4695 44.721 25.7492 43.8642 25.2241L42.9962 26.6405ZM33.3388 24.2858C31.5424 24.2858 30.1367 24.2849 29.0156 24.3915C27.8821 24.4993 26.954 24.7227 26.1358 25.2241L27.0037 26.6405C27.517 26.3259 28.1609 26.1414 29.1728 26.0452C30.1971 25.9478 31.5102 25.9469 33.3388 25.9469V24.2858ZM24.7563 34.5294C24.7563 32.7008 24.7572 31.3877 24.8546 30.3634C24.9508 29.3515 25.1353 28.7076 25.4499 28.1943L24.0336 27.3263C23.5322 28.1445 23.3087 29.0727 23.2009 30.2062C23.0943 31.3273 23.0952 32.733 23.0952 34.5294H24.7563ZM26.1358 25.2241C25.279 25.7492 24.5586 26.4695 24.0336 27.3263L25.4499 28.1943C25.838 27.561 26.3704 27.0285 27.0037 26.6405L26.1358 25.2241ZM33.9109 45.1494C33.6861 44.7695 33.4888 44.4343 33.2969 44.171C33.0947 43.8937 32.8629 43.644 32.5413 43.4569L31.7062 44.8929C31.7587 44.9234 31.8302 44.9791 31.9544 45.1494C32.0888 45.3339 32.2407 45.5887 32.4815 45.9956L33.9109 45.1494ZM30.323 44.7634C30.8092 44.7719 31.1172 44.7781 31.352 44.804C31.5714 44.8283 31.6564 44.8639 31.7062 44.8929L32.5413 43.4569C32.2171 43.2683 31.8798 43.1911 31.5348 43.1529C31.2053 43.1165 30.807 43.1105 30.3516 43.1026L30.323 44.7634ZM37.5185 45.9956C37.7592 45.5887 37.9111 45.3339 38.0455 45.1494C38.1696 44.9791 38.2412 44.9234 38.2937 44.8929L37.4586 43.4569C37.1371 43.644 36.9052 43.8937 36.7031 44.171C36.5112 44.4343 36.3138 44.7695 36.0889 45.1494L37.5185 45.9956ZM39.6484 43.1026C39.1929 43.1105 38.7947 43.1165 38.4651 43.1529C38.1201 43.1911 37.7828 43.2683 37.4586 43.4569L38.2937 44.8929C38.3435 44.8639 38.4285 44.8283 38.6479 44.804C38.8827 44.7781 39.1907 44.7719 39.6769 44.7634L39.6484 43.1026Z" />
      </Mask>
      <Path
        d="M36.9181 47.0097L37.5185 45.9956L36.0889 45.1494L35.4886 46.1637L36.9181 47.0097ZM32.4815 45.9956L33.0818 47.0097L34.5113 46.1637L33.9109 45.1494L32.4815 45.9956ZM35.4886 46.1637C35.2752 46.5242 34.7248 46.5242 34.5113 46.1637L33.0818 47.0097C33.9385 48.4571 36.0614 48.4571 36.9181 47.0097L35.4886 46.1637ZM33.3388 25.9469H36.6611V24.2858H33.3388V25.9469ZM45.2436 34.5294V35.6368H46.9047V34.5294H45.2436ZM24.7563 35.6368V34.5294H23.0952V35.6368H24.7563ZM23.0952 35.6368C23.0952 36.9155 23.0948 37.916 23.1498 38.723C23.2054 39.5375 23.3203 40.2154 23.5799 40.8422L25.1146 40.2065C24.9528 39.8158 24.8569 39.3398 24.8071 38.6099C24.7568 37.8726 24.7563 36.9382 24.7563 35.6368H23.0952ZM30.3516 43.1026C28.9613 43.0786 28.2328 42.9902 27.6618 42.7537L27.0261 44.2884C27.9175 44.6576 28.9328 44.7395 30.323 44.7634L30.3516 43.1026ZM23.5799 40.8422C24.2262 42.4024 25.4658 43.6421 27.0261 44.2884L27.6618 42.7537C26.5085 42.276 25.5923 41.3598 25.1146 40.2065L23.5799 40.8422ZM45.2436 35.6368C45.2436 36.9382 45.2432 37.8726 45.1929 38.6099C45.1431 39.3398 45.0472 39.8158 44.8854 40.2065L46.42 40.8422C46.6797 40.2154 46.7946 39.5375 46.8501 38.723C46.9052 37.916 46.9047 36.9155 46.9047 35.6368H45.2436ZM39.6769 44.7634C41.0671 44.7395 42.0825 44.6576 42.9738 44.2884L42.3382 42.7537C41.7672 42.9902 41.0386 43.0786 39.6484 43.1026L39.6769 44.7634ZM44.8854 40.2065C44.4076 41.3598 43.4914 42.276 42.3382 42.7537L42.9738 44.2884C44.5341 43.6421 45.7737 42.4024 46.42 40.8422L44.8854 40.2065ZM36.6611 25.9469C38.4897 25.9469 39.8029 25.9478 40.8271 26.0452C41.8391 26.1414 42.4829 26.3259 42.9962 26.6405L43.8642 25.2241C43.0459 24.7227 42.1178 24.4993 40.9844 24.3915C39.8632 24.2849 38.4576 24.2858 36.6611 24.2858V25.9469ZM46.9047 34.5294C46.9047 32.733 46.9056 31.3273 46.799 30.2062C46.6912 29.0727 46.4678 28.1445 45.9664 27.3263L44.55 28.1943C44.8646 28.7076 45.0491 29.3515 45.1454 30.3634C45.2427 31.3877 45.2436 32.7008 45.2436 34.5294H46.9047ZM42.9962 26.6405C43.6295 27.0285 44.162 27.561 44.55 28.1943L45.9664 27.3263C45.4414 26.4695 44.721 25.7492 43.8642 25.2241L42.9962 26.6405ZM33.3388 24.2858C31.5424 24.2858 30.1367 24.2849 29.0156 24.3915C27.8821 24.4993 26.954 24.7227 26.1358 25.2241L27.0037 26.6405C27.517 26.3259 28.1609 26.1414 29.1728 26.0452C30.1971 25.9478 31.5102 25.9469 33.3388 25.9469V24.2858ZM24.7563 34.5294C24.7563 32.7008 24.7572 31.3877 24.8546 30.3634C24.9508 29.3515 25.1353 28.7076 25.4499 28.1943L24.0336 27.3263C23.5322 28.1445 23.3087 29.0727 23.2009 30.2062C23.0943 31.3273 23.0952 32.733 23.0952 34.5294H24.7563ZM26.1358 25.2241C25.279 25.7492 24.5586 26.4695 24.0336 27.3263L25.4499 28.1943C25.838 27.561 26.3704 27.0285 27.0037 26.6405L26.1358 25.2241ZM33.9109 45.1494C33.6861 44.7695 33.4888 44.4343 33.2969 44.171C33.0947 43.8937 32.8629 43.644 32.5413 43.4569L31.7062 44.8929C31.7587 44.9234 31.8302 44.9791 31.9544 45.1494C32.0888 45.3339 32.2407 45.5887 32.4815 45.9956L33.9109 45.1494ZM30.323 44.7634C30.8092 44.7719 31.1172 44.7781 31.352 44.804C31.5714 44.8283 31.6564 44.8639 31.7062 44.8929L32.5413 43.4569C32.2171 43.2683 31.8798 43.1911 31.5348 43.1529C31.2053 43.1165 30.807 43.1105 30.3516 43.1026L30.323 44.7634ZM37.5185 45.9956C37.7592 45.5887 37.9111 45.3339 38.0455 45.1494C38.1696 44.9791 38.2412 44.9234 38.2937 44.8929L37.4586 43.4569C37.1371 43.644 36.9052 43.8937 36.7031 44.171C36.5112 44.4343 36.3138 44.7695 36.0889 45.1494L37.5185 45.9956ZM39.6484 43.1026C39.1929 43.1105 38.7947 43.1165 38.4651 43.1529C38.1201 43.1911 37.7828 43.2683 37.4586 43.4569L38.2937 44.8929C38.3435 44.8639 38.4285 44.8283 38.6479 44.804C38.8827 44.7781 39.1907 44.7719 39.6769 44.7634L39.6484 43.1026Z"
        fill="url(#paint0_linear_6_381)"
      />
      <Path
        d="M36.9181 47.0097L36.2815 48.0855L37.5548 45.934L36.9181 47.0097ZM36.0889 45.1494L36.7255 44.0736L35.4522 46.2251L36.0889 45.1494ZM32.4815 45.9956L31.8447 44.9199L33.1182 47.0712L32.4815 45.9956ZM32.5413 43.4569L33.6219 44.0853L31.4608 42.8284L32.5413 43.4569ZM35.5667 47.6624L36.2815 48.0854L37.5548 45.934L36.8401 45.511L35.5667 47.6624ZM37.4404 44.4967L36.7255 44.0736L35.4523 46.2251L36.1671 46.6482L37.4404 44.4967ZM32.5594 44.4968L31.8447 44.9199L33.1183 47.0712L33.833 46.648L32.5594 44.4968ZM34.4332 47.6624L35.148 47.2394L33.8746 45.088L33.1599 45.511L34.4332 47.6624ZM24.8256 41.6792L25.5929 41.3614L24.6363 39.0517L23.8689 39.3695L24.8256 41.6792ZM29.0875 43.9116L29.0732 44.7419L31.5728 44.785L31.5871 43.9546L29.0875 43.9116ZM26.1891 43.0427L25.8712 43.81L28.1809 44.7667L28.4988 43.9994L26.1891 43.0427ZM45.1743 41.6792L45.9417 41.997L46.8984 39.6873L46.131 39.3695L45.1743 41.6792ZM40.9125 43.9116L40.8982 43.0811L38.3986 43.1241L38.4128 43.9546L40.9125 43.9116ZM41.5012 43.9994L41.819 44.7667L44.1287 43.81L43.8109 43.0427L41.5012 43.9994ZM42.3644 25.2791L41.9304 25.9873L44.062 27.2936L44.496 26.5854L42.3644 25.2791ZM45.9113 28.8261L46.6195 28.3921L45.3133 26.2605L44.6051 26.6945L45.9113 28.8261ZM27.6356 25.2792L27.2016 24.571L25.07 25.8772L25.504 26.5854L27.6356 25.2792ZM25.3949 26.6945L24.6867 26.2605L23.3804 28.3921L24.0886 28.8261L25.3949 26.6945ZM33.2043 44.8033L33.6219 44.0854L31.4608 42.8284L31.0433 43.5464L33.2043 44.8033ZM38.1552 44.9199L36.7256 44.0737L35.4522 46.2251L36.8818 47.0712L38.1552 44.9199ZM34.8519 47.2394L36.2815 48.0855L37.5548 45.934L36.1252 45.0879L34.8519 47.2394ZM33.7185 48.0854L35.148 47.2394L33.8746 45.088L32.4451 45.934L33.7185 48.0854ZM33.2742 44.0737L31.8447 44.9199L33.1182 47.0712L34.5477 46.225L33.2742 44.0737ZM37.9111 25.9469V24.2858H35.4111V25.9469H37.9111ZM32.0888 24.2858V25.9469H34.5888V24.2858H32.0888ZM45.2436 36.8868H46.9047V34.3868H45.2436V36.8868ZM46.9047 33.2794H45.2436V35.7794H46.9047V33.2794ZM24.7563 33.2794H23.0952V35.7794H24.7563V33.2794ZM23.0952 36.8868H24.7563V34.3868H23.0952V36.8868ZM24.0583 41.997L25.5929 41.3614L24.6363 39.0517L23.1016 39.6873L24.0583 41.997ZM26.5069 42.2753L25.8712 43.81L28.1809 44.7667L28.8166 43.2321L26.5069 42.2753ZM31.5728 44.785L31.6014 43.1242L29.1018 43.0811L29.0732 44.7419L31.5728 44.785ZM44.407 41.3614L45.9417 41.997L46.8984 39.6873L45.3637 39.0517L44.407 41.3614ZM44.1287 43.81L43.493 42.2754L41.1833 43.232L41.819 44.7667L44.1287 43.81ZM38.3986 43.1241L38.4271 44.7849L40.9268 44.7419L40.8982 43.0811L38.3986 43.1241ZM44.062 27.2936L44.93 25.8773L42.7984 24.571L41.9304 25.9873L44.062 27.2936ZM45.3133 26.2605L43.8969 27.1285L45.2031 29.2601L46.6195 28.3921L45.3133 26.2605ZM25.07 25.8772L25.9379 27.2936L28.0695 25.9873L27.2016 24.571L25.07 25.8772ZM26.103 27.1285L24.6867 26.2605L23.3804 28.3921L24.7968 29.2601L26.103 27.1285ZM31.4608 42.8285L30.6257 44.2645L32.7867 45.5213L33.6219 44.0853L31.4608 42.8285ZM39.3742 44.2645L38.5391 42.8285L36.378 44.0853L37.2131 45.5213L39.3742 44.2645ZM36.9181 47.0097L34.7668 45.7363L34.7667 45.7364L36.9181 47.0097ZM36.0889 45.1494L33.9377 43.8756L33.9375 43.876L36.0889 45.1494ZM32.4815 45.9956L30.33 47.2689L30.3301 47.2691L32.4815 45.9956ZM34.5113 46.1637L32.3599 47.437L32.3601 47.4374L34.5113 46.1637ZM25.1146 40.2065L27.4243 39.2498L27.4243 39.2498L25.1146 40.2065ZM30.323 44.7634L30.3662 42.2638L30.366 42.2638L30.323 44.7634ZM27.0261 44.2884L26.0694 46.5981L26.0694 46.5981L27.0261 44.2884ZM46.42 40.8422L44.1104 39.8853L44.1103 39.8854L46.42 40.8422ZM39.6484 43.1026L39.6915 45.6023L39.6916 45.6023L39.6484 43.1026ZM42.9738 44.2884L43.9306 46.5981L43.9306 46.5981L42.9738 44.2884ZM42.9962 26.6405L41.6899 28.772L41.69 28.7721L42.9962 26.6405ZM45.9664 27.3263L48.0981 26.0202L48.098 26.0201L45.9664 27.3263ZM26.1358 25.2241L24.8295 23.0925L24.8295 23.0925L26.1358 25.2241ZM24.0336 27.3263L21.902 26.0201L21.902 26.0201L24.0336 27.3263ZM32.5413 43.4569L33.7984 41.296L33.7984 41.2959L32.5413 43.4569ZM37.5185 45.9956L39.6698 47.269L39.67 47.2687L37.5185 45.9956ZM35.4886 46.1637L33.3372 44.8903L33.3371 44.8904L35.4886 46.1637ZM33.0818 47.0097L35.2332 45.7364L35.2331 45.7363L33.0818 47.0097ZM33.9109 45.1494L31.7595 46.4227L31.7595 46.4227L33.9109 45.1494ZM23.1498 38.723L20.6556 38.8932L20.6556 38.8932L23.1498 38.723ZM23.5799 40.8422L25.8896 39.8855L25.8896 39.8854L23.5799 40.8422ZM24.8071 38.6099L27.3013 38.4398L27.3013 38.4398L24.8071 38.6099ZM30.3516 43.1026L30.3084 45.6023L30.3084 45.6023L30.3516 43.1026ZM27.6618 42.7537L26.705 45.0634L26.705 45.0634L27.6618 42.7537ZM45.1929 38.6099L47.6871 38.7802L47.6871 38.78L45.1929 38.6099ZM44.8854 40.2065L47.195 41.1633L47.1951 41.163L44.8854 40.2065ZM46.8501 38.723L49.3443 38.8932L49.3443 38.8931L46.8501 38.723ZM39.6769 44.7634L39.6339 42.2638L39.6337 42.2638L39.6769 44.7634ZM42.3382 42.7537L41.3814 40.444L41.3814 40.444L42.3382 42.7537ZM40.8271 26.0452L40.5905 28.5339L40.5905 28.5339L40.8271 26.0452ZM43.8642 25.2241L45.1704 23.0925L45.1704 23.0924L43.8642 25.2241ZM40.9844 24.3915L41.221 21.9027L41.221 21.9027L40.9844 24.3915ZM46.799 30.2062L44.3102 30.4428L44.3102 30.4429L46.799 30.2062ZM44.55 28.1943L42.4184 29.5004L42.4185 29.5007L44.55 28.1943ZM45.1454 30.3634L47.6342 30.1269L47.6342 30.1267L45.1454 30.3634ZM29.0156 24.3915L29.2522 26.8803L29.2522 26.8803L29.0156 24.3915ZM27.0037 26.6405L25.6975 24.5089L25.6975 24.5089L27.0037 26.6405ZM29.1728 26.0452L28.9362 23.5564L28.9362 23.5564L29.1728 26.0452ZM24.8546 30.3634L22.3658 30.1268L22.3658 30.1268L24.8546 30.3634ZM25.4499 28.1943L23.3183 26.888L23.3183 26.888L25.4499 28.1943ZM23.2009 30.2062L25.6897 30.4428L25.6897 30.4428L23.2009 30.2062ZM33.2969 44.171L35.3173 42.6986L35.3168 42.698L33.2969 44.171ZM31.7062 44.8929L30.4471 47.0527L30.4518 47.0554L31.7062 44.8929ZM31.9544 45.1494L33.9751 43.6773L33.9745 43.6766L31.9544 45.1494ZM31.352 44.804L31.6279 42.3193L31.6263 42.3191L31.352 44.804ZM31.5348 43.1529L31.81 40.6681L31.8096 40.6681L31.5348 43.1529ZM38.0455 45.1494L36.0252 43.6768L36.025 43.6771L38.0455 45.1494ZM38.2937 44.8929L39.5482 47.0553L39.5516 47.0534L38.2937 44.8929ZM37.4586 43.4569L36.2016 41.2959L36.2013 41.296L37.4586 43.4569ZM36.7031 44.171L34.6827 42.6985L34.6827 42.6986L36.7031 44.171ZM38.4651 43.1529L38.1904 40.6681L38.1899 40.6681L38.4651 43.1529ZM38.6479 44.804L38.3736 42.3191L38.372 42.3193L38.6479 44.804ZM39.0695 48.2832L39.6698 47.269L35.3671 44.7221L34.7668 45.7363L39.0695 48.2832ZM33.9375 43.876L33.3372 44.8903L37.64 47.437L38.2403 46.4227L33.9375 43.876ZM30.3301 47.2691L30.9305 48.2832L35.2331 45.7363L34.6328 44.7221L30.3301 47.2691ZM36.6627 44.8903L36.0623 43.876L31.7595 46.4227L32.3599 47.437L36.6627 44.8903ZM33.3371 44.8904C33.7382 44.2127 34.427 43.9341 35 43.9341C35.5729 43.9341 36.2614 44.2127 36.6624 44.8899L32.3601 47.4374C33.5415 49.4326 36.4584 49.4336 37.64 47.437L33.3371 44.8904ZM30.9304 48.2831C32.7551 51.366 37.2448 51.366 39.0695 48.2831L34.7667 45.7364C34.7885 45.6996 34.8305 45.6564 34.8839 45.6274C34.9306 45.602 34.9707 45.5953 35 45.5953C35.0293 45.5953 35.0693 45.602 35.116 45.6274C35.1695 45.6564 35.2115 45.6996 35.2332 45.7364L30.9304 48.2831ZM33.3388 28.4469H36.6611V23.4469H33.3388V28.4469ZM36.6611 21.7858H33.3388V26.7858H36.6611V21.7858ZM42.7436 34.5294V35.6368H47.7436V34.5294H42.7436ZM49.4047 35.6368V34.5294H44.4047V35.6368H49.4047ZM27.2563 35.6368V34.5294H22.2563V35.6368H27.2563ZM20.5952 34.5294V35.6368H25.5952V34.5294H20.5952ZM20.5952 35.6368C20.5952 36.8816 20.5934 37.9815 20.6556 38.8932L25.644 38.5528C25.5961 37.8506 25.5952 36.9493 25.5952 35.6368H20.5952ZM20.6556 38.8932C20.7199 39.8353 20.8634 40.8169 21.2702 41.7989L25.8896 39.8854C25.7771 39.6138 25.6909 39.2397 25.644 38.5528L20.6556 38.8932ZM27.4243 39.2498C27.4098 39.2148 27.3425 39.0429 27.3013 38.4398L22.3129 38.7801C22.3714 39.6368 22.4957 40.4168 22.8049 41.1632L27.4243 39.2498ZM27.3013 38.4398C27.2582 37.8074 27.2563 36.9728 27.2563 35.6368H22.2563C22.2563 36.9036 22.2554 37.9379 22.3129 38.7801L27.3013 38.4398ZM30.3948 40.603C29.0007 40.5789 28.706 40.4803 28.6185 40.444L26.705 45.0634C27.7596 45.5002 28.9218 45.5783 30.3084 45.6023L30.3948 40.603ZM26.0694 46.5981C27.4421 47.1666 28.8874 47.2391 30.28 47.2631L30.366 42.2638C28.9783 42.2399 28.393 42.1486 27.9827 41.9786L26.0694 46.5981ZM21.2702 41.7989C22.1702 43.9717 23.8965 45.698 26.0694 46.5981L27.9828 41.9787C27.0351 41.5861 26.2822 40.8332 25.8896 39.8855L21.2702 41.7989ZM28.6186 40.444C28.0778 40.22 27.6482 39.7904 27.4243 39.2498L22.8049 41.1632C23.5363 42.9291 24.9393 44.3319 26.705 45.0634L28.6186 40.444ZM42.7436 35.6368C42.7436 36.9728 42.7418 37.8074 42.6987 38.4399L47.6871 38.78C47.7445 37.9378 47.7436 36.9036 47.7436 35.6368H42.7436ZM42.6987 38.4397C42.6575 39.0427 42.5902 39.2148 42.5756 39.25L47.1951 41.163C47.5041 40.4169 47.6286 39.637 47.6871 38.7802L42.6987 38.4397ZM48.7296 41.7991C49.1366 40.8169 49.2801 39.8352 49.3443 38.8932L44.3559 38.5528C44.3091 39.2398 44.2229 39.6138 44.1104 39.8853L48.7296 41.7991ZM49.3443 38.8931C49.4065 37.9814 49.4047 36.8817 49.4047 35.6368H44.4047C44.4047 36.9493 44.4038 37.8506 44.3559 38.5529L49.3443 38.8931ZM39.72 47.2631C41.1124 47.2391 42.5579 47.1666 43.9306 46.5981L42.0171 41.9787C41.607 42.1485 41.0217 42.2399 39.6339 42.2638L39.72 47.2631ZM41.3814 40.444C41.294 40.4803 40.9992 40.5789 39.6052 40.603L39.6916 45.6023C41.078 45.5783 42.2404 45.5002 43.295 45.0633L41.3814 40.444ZM42.5757 39.2497C42.3517 39.7905 41.9222 40.22 41.3814 40.444L43.295 45.0634C45.0607 44.3319 46.4636 42.9291 47.195 41.1633L42.5757 39.2497ZM43.9306 46.5981C46.1034 45.698 47.8297 43.9717 48.7297 41.7989L44.1103 39.8854C43.7178 40.8331 42.9648 41.5861 42.0171 41.9787L43.9306 46.5981ZM36.6611 28.4469C38.5387 28.4469 39.7121 28.4504 40.5905 28.5339L41.0637 23.5564C39.8936 23.4451 38.4407 23.4469 36.6611 23.4469V28.4469ZM40.5905 28.5339C41.4197 28.6128 41.6356 28.7387 41.6899 28.772L44.3025 24.5089C43.3302 23.913 42.2584 23.67 41.0637 23.5564L40.5905 28.5339ZM45.1704 23.0924C43.8934 22.31 42.5377 22.0279 41.221 21.9027L40.7477 26.8803C41.6979 26.9706 42.1984 27.1354 42.5581 27.3558L45.1704 23.0924ZM41.221 21.9027C39.9542 21.7823 38.4097 21.7858 36.6611 21.7858V26.7858C38.5054 26.7858 39.7722 26.7875 40.7477 26.8803L41.221 21.9027ZM49.4047 34.5294C49.4047 32.7809 49.4083 31.2363 49.2877 29.9694L44.3102 30.4429C44.403 31.4183 44.4047 32.6851 44.4047 34.5294H49.4047ZM49.2878 29.9696C49.1626 28.6528 48.8805 27.297 48.0981 26.0202L43.8348 28.6325C44.0551 28.992 44.2199 29.4925 44.3102 30.4428L49.2878 29.9696ZM42.4185 29.5007C42.4518 29.5549 42.5777 29.7708 42.6566 30.6001L47.6342 30.1267C47.5205 28.9322 47.2775 27.8603 46.6815 26.8879L42.4185 29.5007ZM42.6566 30.5999C42.7401 31.4783 42.7436 32.6519 42.7436 34.5294H47.7436C47.7436 32.7497 47.7454 31.297 47.6342 30.1269L42.6566 30.5999ZM41.69 28.7721C41.9869 28.954 42.2365 29.2036 42.4184 29.5004L46.6817 26.8881C46.0875 25.9184 45.2722 25.1031 44.3024 24.5088L41.69 28.7721ZM48.098 26.0201C47.3669 24.8269 46.3636 23.8237 45.1704 23.0925L42.558 27.3557C43.0784 27.6746 43.5159 28.1122 43.8348 28.6325L48.098 26.0201ZM33.3388 21.7858C31.5903 21.7858 30.0458 21.7823 28.779 21.9027L29.2522 26.8803C30.2277 26.7875 31.4945 26.7858 33.3388 26.7858V21.7858ZM28.779 21.9027C27.4623 22.0279 26.1064 22.31 24.8295 23.0925L27.442 27.3557C27.8015 27.1354 28.3019 26.9706 29.2522 26.8803L28.779 21.9027ZM28.31 28.7721C28.3643 28.7387 28.5803 28.6128 29.4095 28.5339L28.9362 23.5564C27.7416 23.67 26.6698 23.913 25.6975 24.5089L28.31 28.7721ZM29.4095 28.5339C30.2878 28.4504 31.4613 28.4469 33.3388 28.4469V23.4469C31.5592 23.4469 30.1064 23.4451 28.9362 23.5564L29.4095 28.5339ZM27.2563 34.5294C27.2563 32.6518 27.2599 31.4784 27.3434 30.6L22.3658 30.1268C22.2546 31.297 22.2563 32.7498 22.2563 34.5294H27.2563ZM27.3434 30.6C27.4222 29.7709 27.5482 29.5549 27.5815 29.5005L23.3183 26.888C22.7225 27.8603 22.4794 28.9321 22.3658 30.1268L27.3434 30.6ZM21.902 26.0201C21.1195 27.297 20.8374 28.6529 20.7122 29.9695L25.6897 30.4428C25.7801 29.4925 25.9449 28.992 26.1652 28.6326L21.902 26.0201ZM20.7122 29.9695C20.5917 31.2363 20.5952 32.7808 20.5952 34.5294H25.5952C25.5952 32.6851 25.597 31.4183 25.6897 30.4428L20.7122 29.9695ZM24.8295 23.0925C23.6363 23.8237 22.6331 24.8269 21.902 26.0201L26.1652 28.6326C26.4841 28.1122 26.9216 27.6746 27.442 27.3557L24.8295 23.0925ZM27.5815 29.5005C27.7634 29.2036 28.0131 28.954 28.31 28.772L25.6975 24.5089C24.7278 25.1031 23.9125 25.9184 23.3183 26.888L27.5815 29.5005ZM36.0624 43.8761C35.8607 43.5353 35.5955 43.0804 35.3173 42.6986L31.2765 45.6434C31.3821 45.7883 31.5116 46.0038 31.7595 46.4227L36.0624 43.8761ZM35.3168 42.698C34.9975 42.2601 34.5246 41.7184 33.7984 41.296L31.2843 45.6179C31.2679 45.6083 31.2529 45.5981 31.2402 45.5883C31.2276 45.5786 31.22 45.5715 31.2175 45.569C31.2153 45.5668 31.219 45.5702 31.229 45.5821C31.2392 45.5941 31.2548 45.6137 31.2769 45.644L35.3168 42.698ZM30.4518 47.0554C30.387 47.0178 30.314 46.9707 30.2382 46.9132C30.1648 46.8575 30.1045 46.8039 30.0569 46.7575C29.9676 46.6702 29.926 46.6108 29.9343 46.6222L33.9745 43.6766C33.7342 43.3469 33.4206 42.9972 32.9606 42.7304L30.4518 47.0554ZM29.9338 46.6214C29.9815 46.6869 30.0642 46.8197 30.33 47.2689L34.6329 44.7223C34.4172 44.3577 34.1962 43.9808 33.9751 43.6773L29.9338 46.6214ZM30.2797 47.2631C30.814 47.2723 30.9854 47.2787 31.0777 47.2889L31.6263 42.3191C31.2491 42.2774 30.8044 42.2714 30.3662 42.2638L30.2797 47.2631ZM31.0761 47.2887C31.0961 47.2909 31.0282 47.2852 30.9111 47.252C30.8486 47.2343 30.7719 47.2087 30.6856 47.1722C30.5961 47.1343 30.516 47.0929 30.4471 47.0527L32.9653 42.7331C32.5003 42.462 32.0335 42.3643 31.6279 42.3193L31.0761 47.2887ZM33.7984 41.2959C33.0612 40.8671 32.3441 40.7273 31.81 40.6681L31.2596 45.6377C31.2991 45.6421 31.3257 45.6462 31.343 45.6494C31.36 45.6525 31.366 45.6543 31.3637 45.6536C31.3611 45.6529 31.3511 45.6499 31.3359 45.6436C31.3204 45.6371 31.3027 45.6286 31.2843 45.6179L33.7984 41.2959ZM31.8096 40.6681C31.338 40.6159 30.8053 40.6101 30.3947 40.603L30.3084 45.6023C30.8087 45.6109 31.0725 45.617 31.2601 45.6378L31.8096 40.6681ZM39.67 47.2687C39.9359 46.8194 40.0184 46.6869 40.066 46.6217L36.025 43.6771C35.8037 43.9808 35.5826 44.358 35.3669 44.7224L39.67 47.2687ZM40.0658 46.6219C40.074 46.6106 40.0324 46.6701 39.943 46.7574C39.8955 46.8038 39.8351 46.8575 39.7617 46.9132C39.686 46.9707 39.613 47.0177 39.5482 47.0553L37.0391 42.7305C36.5792 42.9973 36.2657 43.3469 36.0252 43.6768L40.0658 46.6219ZM36.2013 41.296C35.4756 41.7183 35.0025 42.2598 34.6827 42.6985L38.7234 45.6435C38.7453 45.6134 38.7609 45.5939 38.771 45.582C38.7809 45.5702 38.7846 45.5669 38.7823 45.5691C38.7798 45.5715 38.7722 45.5787 38.7597 45.5883C38.747 45.5981 38.7321 45.6083 38.7158 45.6178L36.2013 41.296ZM34.6827 42.6986C34.4046 43.0802 34.1393 43.5352 33.9377 43.8756L38.2401 46.4231C38.4884 46.0038 38.6178 45.7884 38.7235 45.6434L34.6827 42.6986ZM39.6052 40.603C39.1946 40.6101 38.6619 40.6159 38.1904 40.6681L38.7398 45.6378C38.9274 45.617 39.1912 45.6109 39.6915 45.6023L39.6052 40.603ZM38.1899 40.6681C37.6557 40.7273 36.9388 40.8671 36.2016 41.2959L38.7155 45.618C38.6972 45.6286 38.6795 45.6372 38.6641 45.6436C38.6489 45.6499 38.6388 45.6529 38.6363 45.6536C38.634 45.6543 38.64 45.6525 38.6569 45.6494C38.6742 45.6462 38.7008 45.6421 38.7403 45.6377L38.1899 40.6681ZM39.5516 47.0534C39.483 47.0933 39.4031 47.1346 39.3138 47.1724C39.2277 47.2088 39.1511 47.2343 39.0887 47.252C38.9717 47.2852 38.9039 47.2909 38.9239 47.2887L38.372 42.3193C37.9659 42.3643 37.5 42.4621 37.0358 42.7324L39.5516 47.0534ZM38.9222 47.2889C39.0146 47.2787 39.1859 47.2723 39.7202 47.2631L39.6337 42.2638C39.1955 42.2714 38.7508 42.2774 38.3736 42.3191L38.9222 47.2889Z"
        fill="url(#paint1_linear_6_381)"
        mask="url(#path-2-inside-1_6_381)"
      />
      <Path
        d="M30.238 32.619H39.7618H30.238Z"
        fill="url(#paint2_linear_6_381)"
      />
      <Path
        d="M30.238 32.619H39.7618"
        stroke="url(#paint3_linear_6_381)"
        strokeLinecap="round"
      />
      <Path
        d="M30.238 37.381H37.3809H30.238Z"
        fill="url(#paint4_linear_6_381)"
      />
      <Path
        d="M30.238 37.381H37.3809"
        stroke="url(#paint5_linear_6_381)"
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_6_381"
        x1={46.9047}
        y1={36.1905}
        x2={23.0952}
        y2={36.1905}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_6_381"
        x1={46.9047}
        y1={36.1905}
        x2={23.0952}
        y2={36.1905}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_6_381"
        x1={39.7618}
        y1={33.119}
        x2={30.238}
        y2={33.119}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_6_381"
        x1={39.7618}
        y1={33.119}
        x2={30.238}
        y2={33.119}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_6_381"
        x1={37.3809}
        y1={37.881}
        x2={30.238}
        y2={37.881}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_6_381"
        x1={37.3809}
        y1={37.881}
        x2={30.238}
        y2={37.881}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ChatButton;
