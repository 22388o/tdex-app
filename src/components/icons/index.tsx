import React, { CSSProperties } from 'react';

interface IconInterface {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  className?: string;
  style?: CSSProperties;
}

export const IconWallet = (props: IconInterface): any => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="wallet"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 10.5C12.17 10.5 11.5 9.83 11.5 9C11.5 8.17 12.17 7.5 13 7.5C13.83 7.5 14.5 8.17 14.5 9C14.5 9.83 13.83 10.5 13 10.5ZM10 5C9.45 5 9 5.45 9 6V12C9 12.55 9.45 13 10 13H19V5H10ZM7 13V5C7 3.9 7.89 3 9 3H18V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V15H9C7.89 15 7 14.1 7 13Z"
    />
  </svg>
);

export const IconExchange = (props: IconInterface): any => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.29153 8C4.29153 4.69 6.98153 2 10.2915 2C11.0815 2 11.8515 2.15 12.5415 2.44C12.9015 2.59 13.3115 2.48 13.5815 2.21C14.0915 1.7 13.9115 0.84 13.2415 0.57C12.3315 0.2 11.3315 0 10.2915 0C5.87153 0 2.29153 3.58 2.29153 8H0.501534C0.0515344 8 -0.168466 8.54 0.151534 8.85L2.94153 11.64C3.14153 11.84 3.45153 11.84 3.65153 11.64L6.44153 8.85C6.75153 8.54 6.53153 8 6.08153 8H4.29153ZM16.9415 4.35L14.1515 7.14C13.8315 7.46 14.0515 8 14.5015 8H16.2915C16.2915 11.31 13.6015 14 10.2915 14C9.50153 14 8.73153 13.85 8.04153 13.56C7.68153 13.41 7.27153 13.52 7.00153 13.79C6.49153 14.3 6.67153 15.16 7.34153 15.43C8.25153 15.8 9.25153 16 10.2915 16C14.7115 16 18.2915 12.42 18.2915 8H20.0815C20.5315 8 20.7515 7.46 20.4315 7.15L17.6415 4.36C17.4515 4.16 17.1315 4.16 16.9415 4.35Z"
    />
  </svg>
);

export const IconSettings = (props: IconInterface): any => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.72933 13.5C7.79933 13.5 6.22933 11.93 6.22933 10C6.22933 8.07 7.79933 6.5 9.72933 6.5C11.6593 6.5 13.2293 8.07 13.2293 10C13.2293 11.93 11.6593 13.5 9.72933 13.5ZM17.1593 10.98C17.1993 10.66 17.2293 10.34 17.2293 10C17.2293 9.66 17.1993 9.34 17.1593 9.02L19.2693 7.37C19.4593 7.22 19.5093 6.95 19.3893 6.73L17.3893 3.27C17.2693 3.05 16.9993 2.97 16.7793 3.05L14.2893 4.05C13.7693 3.65 13.2093 3.32 12.5993 3.07L12.2193 0.42C12.1893 0.18 11.9793 0 11.7293 0H7.72933C7.47933 0 7.26933 0.18 7.23933 0.42L6.85933 3.07C6.24933 3.32 5.68933 3.66 5.16933 4.05L2.67933 3.05C2.44933 2.96 2.18933 3.05 2.06933 3.27L0.0693316 6.73C-0.0606684 6.95 -0.000668394 7.22 0.189332 7.37L2.29933 9.02C2.25933 9.34 2.22933 9.67 2.22933 10C2.22933 10.33 2.25933 10.66 2.29933 10.98L0.189332 12.63C-0.000668394 12.78 -0.0506684 13.05 0.0693316 13.27L2.06933 16.729C2.18933 16.95 2.45933 17.03 2.67933 16.95L5.16933 15.95C5.68933 16.35 6.24933 16.68 6.85933 16.93L7.23933 19.58C7.26933 19.819 7.47933 20 7.72933 20H11.7293C11.9793 20 12.1893 19.819 12.2193 19.58L12.5993 16.93C13.2093 16.68 13.7693 16.34 14.2893 15.95L16.7793 16.95C17.0093 17.04 17.2693 16.95 17.3893 16.729L19.3893 13.27C19.5093 13.05 19.4593 12.78 19.2693 12.63L17.1593 10.98Z"
    />
  </svg>
);

export const IconBack = (props: IconInterface): any => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.2925 9.4625L2.4125 5.5825L6.2925 1.7025C6.6825 1.3125 6.6825 0.6825 6.2925 0.2925C5.9025 -0.0975 5.2725 -0.0975 4.8825 0.2925L0.2925 4.8825C-0.0975 5.2725 -0.0975 5.9025 0.2925 6.2925L4.8825 10.8825C5.2725 11.2725 5.9025 11.2725 6.2925 10.8825C6.6725 10.4925 6.6825 9.8525 6.2925 9.4625Z"
    />
  </svg>
);

export const IconCheck = (props: IconInterface): any => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.89679 6.60094C1.46287 6.1913 0.759353 6.1913 0.325437 6.60094C-0.108479 7.01058 -0.108479 7.67474 0.325437 8.08438L5.88099 13.3291C6.31491 13.7388 7.01842 13.7388 7.45234 13.3291L19.6746 1.79067C20.1085 1.38103 20.1085 0.716872 19.6746 0.307231C19.2406 -0.10241 18.5371 -0.10241 18.1032 0.307231L6.66667 11.104L1.89679 6.60094Z" />
  </svg>
);

export const IconWarning = (props: IconInterface) => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM10 7V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7ZM11.7071 13.2929C12.0976 13.6834 12.0976 14.3166 11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071C9.90237 14.3166 9.90237 13.6834 10.2929 13.2929C10.6834 12.9024 11.3166 12.9024 11.7071 13.2929Z"
    />
  </svg>
);

export const IconWithdrawal = (props: IconInterface) => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 1.00021C0 1.55321 0.447001 2.00021 1 2.00021L17 2.00021C17.553 2.00021 18 1.55321 18 1.00021C18 0.447214 17.553 0.000213623 17 0.000213623L1 0.000213623C0.447001 0.000213623 0 0.447214 0 1.00021ZM3 12.0002C3 8.68721 5.687 6.00021 9 6.00021C12.313 6.00021 15 8.68721 15 12.0002C15 15.3132 12.313 18.0002 9 18.0002C5.687 18.0002 3 15.3132 3 12.0002Z"
    />
  </svg>
);

export const IconDeposit = (props: IconInterface) => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 17.0002C18 16.4472 17.553 16.0002 17 16.0002H1C0.447 16.0002 0 16.4472 0 17.0002C0 17.5532 0.447 18.0002 1 18.0002H17C17.553 18.0002 18 17.5532 18 17.0002ZM15 6.00021C15 9.31321 12.313 12.0002 9 12.0002C5.687 12.0002 3 9.31321 3 6.00021C3 2.68721 5.687 0.000213623 9 0.000213623C12.313 0.000213623 15 2.68721 15 6.00021Z"
    />
  </svg>
);

export const IconSwap = (props: IconInterface) => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.70331 12.7074L3.58331 14.5874L3.58331 1.00041C3.58331 0.450408 4.03331 0.000408447 4.58331 0.000408447C5.13331 0.000408447 5.58331 0.450408 5.58331 1.00041L5.58331 14.5874L7.47331 12.7074C7.86331 12.3174 8.49331 12.3174 8.88331 12.7074C9.27331 13.0984 9.27331 13.7284 8.88331 14.1174L5.29331 17.7074C4.90231 18.0984 4.27231 18.0984 3.88331 17.7074L0.293312 14.1174C-0.0976887 13.7284 -0.0976887 13.0984 0.293312 12.7074C0.673311 12.3274 1.31231 12.3174 1.70331 12.7074ZM16.2981 5.29241L14.4181 3.41241L14.4181 17.0004C14.4181 17.5504 13.9681 18.0004 13.4181 18.0004C12.8681 18.0004 12.4181 17.5504 12.4181 17.0004L12.4181 3.41241L10.5281 5.29241C10.1381 5.68341 9.50811 5.68341 9.11811 5.29241C8.72811 4.90241 8.72811 4.27241 9.11811 3.88241L12.7081 0.292408C13.0981 -0.0975915 13.7281 -0.0975915 14.1181 0.292408L17.7081 3.88241C18.0981 4.27241 18.0981 4.90241 17.7081 5.29241C17.3281 5.67241 16.6881 5.68341 16.2981 5.29241Z"
    />
  </svg>
);

export const IconSearch = (props: IconInterface) => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006ZM12.5006 11.0006H11.7106L11.4306 10.7296C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4396 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006Z"
    />
  </svg>
);

export const IconClose = (props: IconInterface) => (
  <svg
    width="20"
    height="20"
    {...props}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.8925 0.3025C12.5025 -0.0875 11.8725 -0.0875 11.4825 0.3025L6.5925 5.1825L1.7025 0.2925C1.3125 -0.0975 0.6825 -0.0975 0.2925 0.2925C-0.0975 0.6825 -0.0975 1.3125 0.2925 1.7025L5.1825 6.5925L0.2925 11.4825C-0.0975 11.8725 -0.0975 12.5025 0.2925 12.8925C0.6825 13.2815 1.3125 13.2815 1.7025 12.8925L6.5925 8.0025L11.4825 12.8925C11.8725 13.2815 12.5025 13.2815 12.8925 12.8925C13.2835 12.5025 13.2835 11.8725 12.8925 11.4825L8.0025 6.5925L12.8925 1.7025C13.2725 1.3225 13.2725 0.6825 12.8925 0.3025Z"
    />
  </svg>
);

export const IconSetup = (props: IconInterface) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M51.6241 27.0426V37.1236C51.6241 43.3856 46.5481 48.4626 40.2861 48.4626H11.3381C5.07612 48.4626 0.00012207 43.3856 0.00012207 37.1236V27.0426C0.00012207 20.7806 5.07612 15.7046 11.3381 15.7046H14.0911V20.3636H11.3381C7.65512 20.3636 4.66012 23.3596 4.66012 27.0426V37.1236C4.66012 40.8066 7.65512 43.8026 11.3381 43.8026H40.2861C43.9691 43.8026 46.9641 40.8066 46.9641 37.1236V27.0426C46.9641 23.3596 43.9691 20.3636 40.2861 20.3636H23.4071V15.7046H40.2861C46.5481 15.7046 51.6241 20.7806 51.6241 27.0426ZM16.4941 10.4806V25.8226H14.9131V25.8606L18.7171 29.4976C18.7361 29.5166 18.7671 29.5166 18.7851 29.4976L22.5891 25.8606V25.8226H21.0081V10.1086V10.1076V10.1086C21.0081 8.0366 22.1401 6.2246 23.8161 5.2576C23.9841 5.1606 24.1571 5.0726 24.3361 4.9936C25.0481 4.6766 25.8381 4.5036 26.6691 4.5136C26.8761 4.5156 27.0871 4.5296 27.2991 4.5556C27.5161 4.5816 27.7261 4.6246 27.9331 4.6756C28.2351 4.7506 28.5291 4.8486 28.8081 4.9726C28.9651 5.0416 29.1171 5.1186 29.2661 5.2026C29.5621 5.3696 29.8411 5.5646 30.1001 5.7826C30.2911 5.9436 30.4681 6.1216 30.6371 6.3076C31.6111 7.3766 32.1981 8.8176 32.1981 10.3456V13.2786C32.1981 13.2926 32.2141 13.2946 32.2231 13.3036C32.2321 13.3136 32.2341 13.3296 32.2481 13.3296H36.6611C36.6881 13.3296 36.7111 13.3066 36.7111 13.2786V10.1086C36.7111 9.2456 36.5971 8.4096 36.3931 7.6096C36.0261 6.1766 35.3541 4.8646 34.4471 3.7496C34.1621 3.3986 33.8551 3.0646 33.5261 2.7546C33.5241 2.7536 33.5221 2.7516 33.5211 2.7506C33.4991 2.7296 33.4741 2.7096 33.4511 2.6886C32.5741 1.8796 31.5571 1.2216 30.4371 0.760597C30.4301 0.757597 30.4221 0.755597 30.4141 0.755597C30.2221 0.756597 30.0391 0.763597 29.8541 0.768597C29.9571 0.765597 30.0541 0.759597 30.1581 0.757597C30.2131 0.757597 30.2341 0.679597 30.1831 0.660597C28.6951 0.0935975 27.0441 -0.137403 25.3151 0.0815975C20.1991 0.729597 16.4941 5.3226 16.4941 10.4806Z"
    />
  </svg>
);

export const IconCopy = (props: IconInterface) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 16H7C6.45 16 6 15.55 6 15V3C6 2.45 6.45 2 7 2H19C19.55 2 20 2.45 20 3V15C20 15.55 19.55 16 19 16ZM20 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM1 4C0.45 4 0 4.45 0 5V20C0 21.1 0.9 22 2 22H17C17.55 22 18 21.55 18 21C18 20.45 17.55 20 17 20H3C2.45 20 2 19.55 2 19V5C2 4.45 1.55 4 1 4Z"
    />
  </svg>
);

export const IconQR = (props: IconInterface) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 6H6V2H2V6ZM2 8H6C7.1 8 8 7.1 8 6V2C8 0.9 7.1 0 6 0H2C0.9 0 0 0.9 0 2V6C0 7.1 0.9 8 2 8Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 16H6V12H2V16ZM2 18H6C7.1 18 8 17.1 8 16V12C8 10.9 7.1 10 6 10H2C0.9 10 0 10.9 0 12V16C0 17.1 0.9 18 2 18Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 6H16V2H12V6ZM10 2V6C10 7.1 10.9 8 12 8H16C17.1 8 18 7.1 18 6V2C18 0.9 17.1 0 16 0H12C10.9 0 10 0.9 10 2Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 17.5002V16.5002C18 16.2202 17.78 16.0002 17.5 16.0002H16.5C16.22 16.0002 16 16.2202 16 16.5002V17.5002C16 17.7802 16.22 18.0002 16.5 18.0002H17.5C17.78 18.0002 18 17.7802 18 17.5002Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 10.5002V11.5002C10 11.7802 10.22 12.0002 10.5 12.0002H11.5C11.78 12.0002 12 11.7802 12 11.5002V10.5002C12 10.2202 11.78 10.0002 11.5 10.0002H10.5C10.22 10.0002 10 10.2202 10 10.5002Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.5 12.0002H12.5C12.22 12.0002 12 12.2202 12 12.5002V13.5002C12 13.7802 12.22 14.0002 12.5 14.0002H13.5C13.78 14.0002 14 13.7802 14 13.5002V12.5002C14 12.2202 13.78 12.0002 13.5 12.0002Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 14.5002V15.5002C10 15.7802 10.22 16.0002 10.5 16.0002H11.5C11.78 16.0002 12 15.7802 12 15.5002V14.5002C12 14.2202 11.78 14.0002 11.5 14.0002H10.5C10.22 14.0002 10 14.2202 10 14.5002Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5 18.0002H13.5C13.78 18.0002 14 17.7802 14 17.5002V16.5002C14 16.2202 13.78 16.0002 13.5 16.0002H12.5C12.22 16.0002 12 16.2202 12 16.5002V17.5002C12 17.7802 12.22 18.0002 12.5 18.0002Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.5 16.0002H15.5C15.78 16.0002 16 15.7802 16 15.5002V14.5002C16 14.2202 15.78 14.0002 15.5 14.0002H14.5C14.22 14.0002 14 14.2202 14 14.5002V15.5002C14 15.7802 14.22 16.0002 14.5 16.0002Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.5 10.0002H14.5C14.22 10.0002 14 10.2202 14 10.5002V11.5002C14 11.7802 14.22 12.0002 14.5 12.0002H15.5C15.78 12.0002 16 11.7802 16 11.5002V10.5002C16 10.2202 15.78 10.0002 15.5 10.0002Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.5 14.0002H17.5C17.78 14.0002 18 13.7802 18 13.5002V12.5002C18 12.2202 17.78 12.0002 17.5 12.0002H16.5C16.22 12.0002 16 12.2202 16 12.5002V13.5002C16 13.7802 16.22 14.0002 16.5 14.0002Z"
    />
  </svg>
);

export const IconRightArrow = (props: IconInterface) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.292461 1.71255L4.17246 5.59255L0.292461 9.47255C-0.0975389 9.86255 -0.0975389 10.4925 0.292461 10.8825C0.682461 11.2725 1.31246 11.2725 1.70246 10.8825L6.29246 6.29255C6.68246 5.90255 6.68246 5.27255 6.29246 4.88255L1.70246 0.292549C1.31246 -0.0974512 0.682461 -0.0974512 0.292461 0.292549C-0.0875392 0.682549 -0.0975389 1.32255 0.292461 1.71255Z"
    />
  </svg>
);