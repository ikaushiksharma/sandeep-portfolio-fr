import React from 'react';
import HR from '../common/HR';
import AboutCard from './AboutCard';

type Props = {};

const About = (props: Props) => {
  return (
    <div className="lg:min-h-screen   h-full w-full 2xl:px-16 xl:px-16 md:px-12 sm:px-2 px-4">
      <div className="flex h-full flex-col">
        <div className="flex h-full py-6 lg:py-12  flex-col lg:flex-row max-lg:items-center justify-evenly">
          <div className="flex py-4 min-h-full px-4 flex-col">
            <h1 className="text-xl uppercase font-extrabold lg:text-2xl">
              About us
            </h1>
            <p className="text-base lg:text-xl">
              “Passion Unveiled, Creativity Explored.”
            </p>
            <div className="flex items-center justify-center">
              <svg
                width="150"
                height="100"
                viewBox="0 0 211 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.71509 85.0997C6.00178 74.2289 15.6909 66.4291 27.1917 64.5907C33.2714 63.178 39.5716 63.024 45.7069 64.1383C52.0839 64.7315 57.4299 69.2041 59.1559 75.3901C59.7598 78.0089 59.1307 80.7636 57.4495 82.8617C55.9009 84.511 53.7158 85.405 51.4622 85.3114C46.4971 85.322 42.2531 81.7451 41.4078 76.8376C40.6118 71.0669 42.9314 65.2995 47.4997 61.6912C52.6309 57.8365 58.7278 55.4904 65.1064 54.9159C78.9828 53.7463 92.9491 55.1877 106.286 59.166C113.13 60.8032 119.93 62.6094 126.832 63.9994C133.027 65.6096 139.493 65.8909 145.809 64.825C151.282 63.7508 155.936 60.1546 158.372 55.1187C160.847 50.5065 160.248 44.8492 156.865 40.8738C154.436 38.549 151.353 37.0287 148.032 36.5176C145.094 35.7984 142.004 36.0138 139.19 37.1339C136.636 38.6171 134.782 41.0672 134.045 43.9328C133.307 46.7983 133.749 49.8385 135.27 52.3688C138.767 57.7076 143.924 61.7362 149.941 63.8303C155.446 66.2352 161.287 67.78 167.262 68.4111C179.168 69.7451 191.209 67.5049 201.861 61.9738C204.409 60.6085 206.858 59.0643 209.189 57.3528C209.658 57.0755 209.923 56.549 209.866 56.0065C209.809 55.4639 209.442 55.0053 208.926 54.8337L190.904 50.0422C190.098 49.8321 189.27 50.3016 189.033 51.1032C188.795 51.9049 189.234 52.7496 190.024 53.0122L208.147 57.4634L207.602 55.1501C197.856 62.1489 186.175 65.9082 174.203 65.8986C168.229 65.9638 162.282 65.104 156.574 63.3495C150.621 61.7654 145.112 58.835 140.467 54.7824C138.145 52.7319 136.733 49.8362 136.545 46.7347C136.315 43.891 137.779 41.1754 140.278 39.8082C143.111 38.7654 146.221 38.7797 149.04 39.8485C151.998 40.5103 154.549 42.3718 156.087 44.991C157.747 49.5223 156.528 54.6172 152.996 57.9083C148.39 61.8082 142.332 63.52 136.384 62.6018C129.667 61.9114 123.019 60.6629 116.51 58.8692C109.6 57.2165 102.719 55.4179 95.7552 54.0029C82.4527 50.5012 68.4574 50.5816 55.1798 54.2361C49.1739 56.0024 44.0144 59.9106 40.6735 65.224C37.5344 70.3401 37.3462 76.7409 40.1797 82.0205C42.9661 86.2994 47.9518 88.5938 53.0085 87.9243C58.2549 87.2061 62.1151 82.6182 61.9393 77.3098C61.6594 71.1414 57.8119 65.7145 52.0992 63.4304C46.0146 61.0298 39.4172 60.2265 32.9301 61.0963C21.124 61.6111 10.1862 67.5058 3.22746 77.1038C1.81126 79.4362 0.822754 82.0035 0.308863 84.684C0.20885 85.0684 0.430392 85.4624 0.809673 85.5748C1.18895 85.6871 1.58938 85.4773 1.71485 85.1005L1.71509 85.0997Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M207.412 56.3633C204.302 60.7286 201.761 65.4912 199.855 70.5304C199.192 72.1986 201.883 72.9764 202.513 71.2809C204.377 66.4906 206.637 61.8718 209.268 57.4746C209.538 56.9525 210.665 55.075 208.165 55.075C203.469 53.6433 204.963 60.075 207.412 56.3633Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <VR />
          <div className="lg:pl-12 flex-1 h-full">
            <div className="flex relative gap-y-4 flex-col h-full justify-center">
              <div className="relative w-full xl:w-fit">
                <div className="absolute -right-16 top-4">
                  <svg
                    width="112"
                    height="82"
                    viewBox="0 0 112 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.3302 26.4747C15.0376 20.91 18.9699 16.3059 24.1886 13.761C28.9263 11.7267 34.4133 12.683 38.19 16.201C40.2907 17.9131 40.9933 20.8222 39.9069 23.3095C39.1275 24.0801 38.0541 24.4751 36.963 24.3927C35.8718 24.3102 34.8695 23.7585 34.2138 22.8795C32.5718 20.2733 32.5476 16.9575 34.1514 14.3275C35.3429 11.7042 37.0064 9.324 39.0584 7.30637C42.896 3.16054 48.5768 1.26695 54.1237 2.28465C59.2464 3.33706 63.2115 7.41812 64.13 12.5837C64.5764 15.3407 63.3986 18.1089 61.1054 19.6921C59.1572 20.8018 56.6816 20.1237 55.5654 18.1746C55.1604 16.6549 55.3404 15.038 56.0695 13.6454C56.5548 12.4472 57.1809 11.3114 57.9344 10.2621C59.5093 8.10441 61.5153 6.29998 63.8243 4.96404C68.412 2.18197 73.8404 1.13927 79.1276 2.02454C84.073 2.70879 88.3951 5.72252 90.759 10.1348C92.44 15.2599 90.0898 20.8432 85.2564 23.207C84.0959 23.9365 82.8357 24.4925 81.5154 24.8576C80.4287 25.3115 79.1815 25.1325 78.2651 24.3912C77.7239 22.9808 78.0834 21.3822 79.1757 20.3417C79.9392 19.2927 80.8195 18.3344 81.7996 17.4856C85.8301 13.9614 91.1676 12.3304 96.4714 13.0022C101.677 13.7991 106.158 17.1141 108.457 21.8678C110.875 26.4084 110.81 31.8746 108.285 36.356C105.655 40.5599 101.184 43.2533 96.2504 43.6072C95.0809 43.6864 93.9061 43.6069 92.7578 43.3708C91.4602 43.2429 90.2371 42.703 89.2663 41.8295C88.7783 40.968 88.7922 39.909 89.3027 39.0607C89.8098 37.9857 90.6277 37.0889 91.6499 36.487C95.8943 34.3741 100.982 34.9767 104.619 38.0232C108.605 41.0882 110.549 46.1325 109.655 51.0913C108.594 56.6016 105.301 61.4226 100.562 64.403C96.0987 67.2789 90.6634 68.2144 85.4999 66.9956C83.0071 66.3926 80.7309 65.105 78.9263 63.2771C77.3121 61.7083 76.5373 59.4628 76.839 57.2283C77.1621 56.1742 78.0063 55.3633 79.0699 55.0854C80.1334 54.8076 81.2645 55.1025 82.0588 55.8646C84.0581 57.9071 84.9175 60.8118 84.3527 63.6182C83.7498 68.9291 80.8743 73.7142 76.4748 76.7278C72.361 79.7877 67.0112 80.6228 62.1656 78.9615C57.7717 77.1524 54.3324 73.581 52.6809 69.1124C51.8396 66.9699 51.4718 64.6697 51.603 62.3706C51.6851 61.1896 51.9266 60.0253 52.3209 58.9095C52.5016 57.6868 53.283 56.6372 54.4002 56.1165C55.5691 56.0956 56.604 56.8714 56.9156 58.0022C57.263 59.5372 57.1639 61.1399 56.6301 62.62C55.9002 65.2884 54.7075 67.8069 53.1068 70.06C50.0983 74.4953 45.4121 77.5022 40.1377 78.3814C35.0812 79.0288 30.0006 77.3776 26.2825 73.8783C22.7997 70.55 21.4692 65.5439 22.8379 60.9172C23.4514 58.6824 24.622 56.6412 26.2393 54.986C27.0164 54.2012 27.9045 53.5355 28.8749 53.0103C29.3494 52.7545 29.8448 52.5396 30.3556 52.3679C30.9046 52.0656 31.5433 51.9706 32.156 52.1001C32.6376 52.9686 32.6041 54.0326 32.0687 54.8689C31.5292 56.1233 30.8508 57.3129 30.0462 58.4151C28.4189 60.65 26.3151 62.4924 23.8883 63.808C21.507 65.1261 18.828 65.8078 16.1085 65.7877C13.496 65.718 10.9539 64.9221 8.76545 63.4885C4.23647 60.7952 1.71058 55.6801 2.31833 50.4326C3.34739 45.3127 7.40427 41.3526 12.5329 40.4616C15.1301 39.8583 17.8344 40.8787 19.392 43.0497C20.881 45.8358 16.5267 46.6971 14.6798 46.6782C9.4748 46.8018 4.93876 43.1428 3.94034 38.0152C2.94193 32.8876 5.77184 27.7844 10.6404 25.9329C13.0861 24.7766 15.9619 25.0244 18.1753 26.5823C19.0326 27.2643 19.5508 28.2876 19.5945 29.3846C19.6383 30.4815 19.2032 31.5431 18.403 32.2917C17.4407 32.7233 16.3437 32.7379 15.3704 32.332C14.3971 31.9261 13.6335 31.1355 13.2596 30.1466C12.4829 27.2447 13.3139 24.1475 15.4376 22.0291C16.1438 21.2094 14.9571 20.0084 14.246 20.8332C11.524 23.2836 10.3767 27.0444 11.2652 30.604C12.312 33.4357 15.262 35.0765 18.2098 34.4665C19.5067 33.9572 20.5451 32.946 21.0913 31.6604C21.6375 30.3749 21.6458 28.923 21.1142 27.6312C19.7817 24.6408 16.662 22.8715 13.4217 23.2685C7.17452 23.9013 2.25608 28.898 1.70254 35.1742C1.36464 41.4806 5.64791 47.097 11.8025 48.4175C14.7582 49.2982 17.955 48.7171 20.4151 46.852C21.5997 45.6922 21.9282 43.9096 21.2352 42.4014C20.5261 40.9652 19.332 39.8281 17.8657 39.1925C13.4163 37.8764 8.60587 38.8695 5.03563 41.8414C1.46539 44.8133 -0.396059 49.3738 0.0708637 54.005C0.496481 57.0765 1.8395 59.9466 3.92295 62.2369C8.22133 67.1124 14.9406 69.0555 21.1654 67.2232C24.1983 66.2946 26.9688 64.658 29.2498 62.4475C30.4451 61.2971 31.4992 60.0076 32.3898 58.6063C33.2647 57.338 33.9224 55.9319 34.3356 54.4461C34.798 53.0968 34.48 51.6014 33.5088 50.5591C32.0386 49.7567 30.2504 49.8168 28.8369 50.7162C26.3241 51.8137 24.1949 53.6389 22.722 55.9581C19.5041 60.7975 19.2315 67.0299 22.0144 72.1337C25.258 77.2981 30.8447 80.5102 36.925 80.7064C43.2167 80.8582 49.2303 78.1066 53.2418 73.2404C55.3499 70.7867 56.9886 67.9637 58.0755 64.9131C59.7913 61.8577 59.5842 58.0808 57.5449 55.2326C56.3729 54.0425 54.603 53.6757 53.0571 54.3026C51.6556 55.1692 50.6449 56.5488 50.2387 58.1497C49.293 60.8267 49.0685 63.7068 49.5879 66.4988C50.6071 72.112 54.0181 76.9987 58.9269 79.8779C64.2336 82.8038 70.6861 82.6978 75.8945 79.5992C81.3872 76.5119 85.1876 71.091 86.2277 64.8604C86.9234 61.5557 86.2401 58.1092 84.3368 55.3234C83.4008 54.0462 81.9823 53.2117 80.4145 53.0161C78.8467 52.8205 77.2678 53.281 76.0487 54.2893C74.2345 56.5373 73.9873 59.6743 75.4268 62.1805C76.8023 64.8025 79.0372 66.8681 81.7542 68.0286C87.5738 70.5246 94.2031 70.2641 99.8104 67.3191C105.629 64.3563 109.852 58.9715 111.353 52.5995C112.047 49.6012 111.889 46.4675 110.894 43.5555C109.899 40.9081 108.195 38.588 105.969 36.8509C101.746 33.1218 95.7058 32.2981 90.6441 34.761C87.9366 36.0938 86.4709 39.0962 87.0809 42.0598C87.7692 43.5082 89.0857 44.5563 90.6478 44.8995C92.0495 45.3668 93.5144 45.6155 94.9912 45.6367C100.842 45.6487 106.31 42.7234 109.561 37.8427C112.681 32.7033 112.817 26.2799 109.915 21.0129C107.155 15.5394 101.814 11.8462 95.7344 11.2062C89.5175 10.6829 83.4 13.0195 79.1032 17.5583C77.2052 19.591 74.3706 23.6191 77.3272 26.0227C80.2301 27.3413 83.631 26.8568 86.0534 24.7793C88.8178 23.1776 91.0004 20.7319 92.2832 17.7987C93.3676 15.1263 93.3441 12.13 92.2177 9.47511C89.5019 4.28306 84.3729 0.803202 78.5596 0.208555C72.3944 -0.60273 66.1526 0.971226 61.102 4.61074C58.5705 6.39998 56.4918 8.75924 55.0324 11.4996C53.0051 14.1685 53.0218 17.8724 55.0733 20.5228C57.3005 22.3731 60.5129 22.4116 62.7835 20.6152C65.1539 18.4677 66.2443 15.2399 65.6638 12.0887C64.4596 6.08025 59.6497 1.46254 53.6146 0.521114C47.1894 -0.258684 40.812 2.30624 36.7022 7.32314C34.3349 9.87144 32.5927 12.9388 31.6142 16.2814C30.4857 19.4191 31.4852 22.9294 34.0955 24.995C35.1629 25.839 36.5219 26.2207 37.8709 26.0554C39.2199 25.8901 40.4474 25.1915 41.2812 24.1145C42.6432 21.258 42.0469 17.8488 39.797 15.6283C35.6799 11.2601 29.2958 9.91013 23.7721 12.2397C18.0332 14.9189 13.7686 20.0074 12.1222 26.1403C12.0419 26.4711 12.2381 26.806 12.5651 26.8964C12.8922 26.9868 13.2316 26.8 13.3315 26.4747H13.3302Z"
                      fill="#6A6C8E"
                    />
                  </svg>
                </div>
                <AboutCard
                  title="Art Direction"
                  desc="Art direction is the process of bringing together all of the creative elements of a project to create a cohesive and visually stunning end product. I work with clients to develop a concept and bring it to life through art direction. I believe that attention to detail and a clear vision are key to creating truly memorable designs."
                  tags={['concept design', 'brand identity']}
                />
              </div>
              <div className="place-self-end relative w-full xl:w-fit">
                <div className="absolute -bottom-10 -left-16">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 148 146"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M74.8915 110.547L74 108.793L73.1085 110.547L57.3472 141.563L57.8052 106.775L57.8311 104.807L56.2264 105.946L27.8564 126.085L44.4289 95.4947L45.3662 93.7645L43.416 94.0274L8.93666 98.6753L37.827 79.2902L39.4611 78.1938L37.612 77.5202L4.92211 65.6124L39.5119 61.8738L41.4683 61.6624L40.1441 60.2067L16.7325 34.4711L49.0976 47.2354L50.9282 47.9573L50.4322 46.053L41.6621 12.3853L64.3881 38.7284L65.6736 40.2184L66.1193 38.3017L74 4.41474L81.8807 38.3017L82.3264 40.2184L83.6119 38.7284L106.338 12.3853L97.5678 46.053L97.0718 47.9573L98.9024 47.2354L131.268 34.4711L107.856 60.2067L106.532 61.6624L108.488 61.8738L143.078 65.6124L110.388 77.5202L108.539 78.1938L110.173 79.2902L139.063 98.6753L104.584 94.0274L102.634 93.7645L103.571 95.4947L120.144 126.085L91.7736 105.946L90.1689 104.807L90.1948 106.775L90.6528 141.563L74.8915 110.547Z"
                      stroke="#6A6C8E"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <AboutCard
                  title="Art Direction"
                  desc="Art direction is the process of bringing together all of the creative elements of a project to create a cohesive and visually stunning end product. I work with clients to develop a concept and bring it to life through art direction. I believe that attention to detail and a clear vision are key to creating truly memorable designs."
                  tags={['concept design', 'brand identity']}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HR classes="" />
    </div>
  );
};

export default About;

const VR = () => {
  return <div className="h-[70vh] max-lg:hidden border mx-10 border-white" />;
};
